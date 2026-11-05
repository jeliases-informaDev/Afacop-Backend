import test from 'node:test';
import assert from 'node:assert/strict';
import {
  cached,
  cacheGetJson,
  cacheSetJson,
  cacheGetManyJson,
  cacheSetManyJson,
  cacheEnabled,
  ttlFromEnv,
  setCacheClient,
  resetCacheClient,
} from '#core/cache/redis.js';
import { buscarPersonasPorLote } from '#modules/clientes/personas-lookup.service.js';

/** Doble en memoria con la misma interfaz mínima de ioredis que usa la caché. */
function crearRedisFalso({ falla = false } = {}) {
  const datos = new Map();
  const ttls = new Map();
  const comprobar = () => { if (falla) throw new Error('Redis caído'); };
  return {
    datos,
    ttls,
    async get(key) { comprobar(); return datos.has(key) ? datos.get(key) : null; },
    async set(key, value, modo, ttl) { comprobar(); datos.set(key, value); ttls.set(key, { modo, ttl }); return 'OK'; },
    async mget(...keys) { comprobar(); return keys.map(key => (datos.has(key) ? datos.get(key) : null)); },
    pipeline() {
      const operaciones = [];
      const api = {
        set: (key, value, modo, ttl) => { operaciones.push([key, value, modo, ttl]); return api; },
        exec: async () => {
          comprobar();
          for (const [key, value, modo, ttl] of operaciones) { datos.set(key, value); ttls.set(key, { modo, ttl }); }
          return operaciones.map(() => [null, 'OK']);
        },
      };
      return api;
    },
  };
}

test.afterEach(() => resetCacheClient());

test('cached: la primera vez ejecuta el loader y guarda con vigencia; la segunda responde desde Redis', async () => {
  const redis = crearRedisFalso();
  setCacheClient(redis);
  let llamadas = 0;
  const loader = async () => { llamadas++; return { total: 42 }; };

  assert.deepEqual(await cached('clave', 60, loader), { total: 42 });
  assert.deepEqual(await cached('clave', 60, loader), { total: 42 });

  assert.equal(llamadas, 1);
  assert.deepEqual(redis.ttls.get('clave'), { modo: 'EX', ttl: 60 });
});

test('cached: peticiones simultáneas sin caché ejecutan el loader una sola vez', async () => {
  setCacheClient(crearRedisFalso());
  let llamadas = 0;
  const loader = async () => {
    llamadas++;
    await new Promise(resolve => setTimeout(resolve, 20));
    return 'resultado';
  };

  const respuestas = await Promise.all(Array.from({ length: 10 }, () => cached('estampida', 60, loader)));

  assert.equal(llamadas, 1);
  assert.ok(respuestas.every(valor => valor === 'resultado'));
});

test('cached: si el loader falla propaga el error, no guarda nada y permite reintentar', async () => {
  const redis = crearRedisFalso();
  setCacheClient(redis);

  await assert.rejects(() => cached('falla', 60, async () => { throw new Error('BD caída'); }), /BD caída/);
  assert.equal(redis.datos.size, 0);

  assert.equal(await cached('falla', 60, async () => 'ok'), 'ok');
});

test('si Redis falla, la caché se ignora y el flujo original continúa sin errores', async () => {
  setCacheClient(crearRedisFalso({ falla: true }));

  assert.equal(await cacheGetJson('x'), null);
  assert.equal(await cacheSetJson('x', 1, 60), false);
  assert.equal((await cacheGetManyJson(['a', 'b'])).size, 0);
  assert.equal(await cacheSetManyJson([['a', 1]], 60), false);
  assert.equal(await cached('x', 60, async () => 'desde-bd'), 'desde-bd');
});

test('sin cliente (sin REDIS_URL) la caché queda desactivada y cached siempre ejecuta el loader', async () => {
  setCacheClient(null);
  let llamadas = 0;

  assert.equal(cacheEnabled(), false);
  await cached('k', 60, async () => ++llamadas);
  await cached('k', 60, async () => ++llamadas);

  assert.equal(llamadas, 2);
});

test('una instancia de Redis que aún no está lista se trata como caché no disponible', async () => {
  const redis = crearRedisFalso();
  redis.status = 'connecting';
  setCacheClient(redis);

  assert.equal(await cacheSetJson('k', 1, 60), false);
  assert.equal(redis.datos.size, 0);
  assert.equal(await cached('k', 60, async () => 'bd'), 'bd');
});

test('cacheGetManyJson y cacheSetManyJson trabajan por lote y devuelven solo lo encontrado', async () => {
  const redis = crearRedisFalso();
  setCacheClient(redis);

  assert.equal(await cacheSetManyJson([['a', { n: 1 }], ['b', { n: 2 }]], 30), true);
  const encontrados = await cacheGetManyJson(['a', 'b', 'c']);

  assert.equal(encontrados.size, 2);
  assert.deepEqual(encontrados.get('a'), { n: 1 });
  assert.equal(encontrados.has('c'), false);
  assert.deepEqual(redis.ttls.get('b'), { modo: 'EX', ttl: 30 });
});

test('ttlFromEnv usa el valor de la variable si es válido y el por defecto si no', () => {
  process.env.CACHE_TTL_TEST = '120';
  assert.equal(ttlFromEnv('CACHE_TTL_TEST', 60), 120);
  process.env.CACHE_TTL_TEST = 'abc';
  assert.equal(ttlFromEnv('CACHE_TTL_TEST', 60), 60);
  process.env.CACHE_TTL_TEST = '-5';
  assert.equal(ttlFromEnv('CACHE_TTL_TEST', 60), 60);
  delete process.env.CACHE_TTL_TEST;
  assert.equal(ttlFromEnv('CACHE_TTL_TEST', 60), 60);
});

test('buscarPersonasPorLote consulta la API solo por los DNI que no están en caché', async () => {
  const originalFetch = globalThis.fetch;
  process.env.RRCC_API_URL = 'https://mock-rrcc.test';
  process.env.RRCC_API_KEY = 'test-key-123';
  const redis = crearRedisFalso();
  setCacheClient(redis);

  const base = {
    '72345678': { DNI: '72345678', PRENOMBRES: 'JUAN CARLOS', APE_PAT: 'PEREZ', APE_MAT: 'GOMEZ', UBIGEO_RENIEC: '150101' },
    '10293847': { DNI: '10293847', PRENOMBRES: 'MARIA ELENA', APE_PAT: 'QUISPE', APE_MAT: 'FLORES' },
  };
  const consultas = [];
  globalThis.fetch = async (_url, options) => {
    const { documentos } = JSON.parse(options.body);
    consultas.push(documentos);
    return { ok: true, json: async () => ({ data: documentos.map(doc => base[doc]).filter(Boolean) }) };
  };

  try {
    const primera = await buscarPersonasPorLote(['72345678']);
    assert.equal(primera.get('72345678').nombres, 'JUAN CARLOS');

    // El DNI ya consultado sale de Redis; la API solo recibe el nuevo.
    const segunda = await buscarPersonasPorLote(['72345678', '10293847']);
    assert.deepEqual(consultas, [['72345678'], ['10293847']]);
    assert.equal(segunda.size, 2);
    assert.equal(segunda.get('72345678').ubigeo, '150101');
    assert.equal(segunda.get('10293847').ubigeo, null);

    // Todo en caché: no hay ninguna llamada nueva a la API.
    const tercera = await buscarPersonasPorLote(['72345678', '10293847']);
    assert.equal(consultas.length, 2);
    assert.equal(tercera.size, 2);

    assert.equal(redis.ttls.get('persona:72345678').ttl, 7 * 24 * 60 * 60);
  } finally {
    globalThis.fetch = originalFetch;
    delete process.env.RRCC_API_URL;
    delete process.env.RRCC_API_KEY;
  }
});

test('buscarPersonasPorLote no guarda en caché los DNI que la API no encontró', async () => {
  const originalFetch = globalThis.fetch;
  process.env.RRCC_API_URL = 'https://mock-rrcc.test';
  process.env.RRCC_API_KEY = 'test-key-123';
  const redis = crearRedisFalso();
  setCacheClient(redis);

  let consultas = 0;
  globalThis.fetch = async () => { consultas++; return { ok: true, json: async () => ({ data: [] }) }; };

  try {
    assert.equal((await buscarPersonasPorLote(['99999999'])).size, 0);
    assert.equal((await buscarPersonasPorLote(['99999999'])).size, 0);
    assert.equal(consultas, 2);
    assert.equal(redis.datos.size, 0);
  } finally {
    globalThis.fetch = originalFetch;
    delete process.env.RRCC_API_URL;
    delete process.env.RRCC_API_KEY;
  }
});

test('buscarPersonasPorLote devuelve lo que hay en caché aunque la API falle', async () => {
  const originalFetch = globalThis.fetch;
  process.env.RRCC_API_URL = 'https://mock-rrcc.test';
  process.env.RRCC_API_KEY = 'test-key-123';
  const redis = crearRedisFalso();
  setCacheClient(redis);
  await cacheSetJson('persona:72345678', { nombres: 'JUAN', apellido_paterno: 'PEREZ', apellido_materno: 'GOMEZ', ubigeo: '150101' }, 60);

  globalThis.fetch = async () => { throw new Error('Túnel caído'); };

  try {
    const mapa = await buscarPersonasPorLote(['72345678', '10293847']);
    assert.equal(mapa.size, 1);
    assert.equal(mapa.get('72345678').nombres, 'JUAN');
  } finally {
    globalThis.fetch = originalFetch;
    delete process.env.RRCC_API_URL;
    delete process.env.RRCC_API_KEY;
  }
});
