import test from 'node:test';
import assert from 'node:assert/strict';
import { setCacheClient, resetCacheClient } from '#core/cache/redis.js';
import { consultarRrccApi } from '#modules/clientes/admision.service.js';

function crearRedisFalso() {
  const datos = new Map();
  const ttls = new Map();
  return {
    datos,
    ttls,
    async get(key) { return datos.has(key) ? datos.get(key) : null; },
    async set(key, value, modo, ttl) { datos.set(key, value); ttls.set(key, { modo, ttl }); return 'OK'; },
  };
}

const EVALUACION = {
  codigoSbs: '123',
  nombre: 'JUAN PEREZ',
  periodo: '202610',
  rating: { normal: 100 },
  deudas: [{ entidad: 'BANCO', capital: 500 }],
  lineas: [],
};

function prepararEntorno() {
  const originalFetch = globalThis.fetch;
  process.env.RRCC_API_URL = 'https://mock-rrcc.test';
  process.env.RRCC_API_KEY = 'test-key-123';
  return () => {
    globalThis.fetch = originalFetch;
    delete process.env.RRCC_API_URL;
    delete process.env.RRCC_API_KEY;
    resetCacheClient();
  };
}

test('consultarRrccApi guarda la evaluación exitosa y la siguiente consulta no llama a RRCC-API', async () => {
  const restaurar = prepararEntorno();
  const redis = crearRedisFalso();
  setCacheClient(redis);
  let llamadas = 0;
  globalThis.fetch = async url => {
    llamadas++;
    assert.equal(url, 'https://mock-rrcc.test/v1/rrcc/evaluar/72345678');
    return { ok: true, status: 200, json: async () => ({ data: EVALUACION }) };
  };

  try {
    assert.deepEqual(await consultarRrccApi('72345678'), EVALUACION);
    assert.deepEqual(await consultarRrccApi('72345678'), EVALUACION);

    assert.equal(llamadas, 1);
    assert.deepEqual(redis.ttls.get('rrcc:evaluacion:72345678'), { modo: 'EX', ttl: 4 * 60 * 60 });
  } finally {
    restaurar();
  }
});

test('consultarRrccApi no guarda en caché los "no encontrado" ni los errores del servicio', async () => {
  const restaurar = prepararEntorno();
  const redis = crearRedisFalso();
  setCacheClient(redis);
  let respuesta = { ok: false, status: 404, json: async () => ({ error: 'No existe', code: 'RRCC_CLIENT_NOT_FOUND' }) };
  globalThis.fetch = async () => respuesta;

  try {
    await assert.rejects(() => consultarRrccApi('11111111'), { statusCode: 404, code: 'RRCC_CLIENT_NOT_FOUND' });

    respuesta = { ok: false, status: 500, json: async () => ({}) };
    await assert.rejects(() => consultarRrccApi('11111111'), { statusCode: 502, code: 'RRCC_SERVICE_ERROR' });

    assert.equal(redis.datos.size, 0);

    // Cuando el documento sí aparece, se consulta de nuevo y recién entonces se guarda.
    respuesta = { ok: true, status: 200, json: async () => ({ data: EVALUACION }) };
    assert.deepEqual(await consultarRrccApi('11111111'), EVALUACION);
    assert.equal(redis.datos.size, 1);
  } finally {
    restaurar();
  }
});

test('consultarRrccApi responde desde la caché aunque RRCC-API esté caída', async () => {
  const restaurar = prepararEntorno();
  setCacheClient(crearRedisFalso());
  let caida = false;
  globalThis.fetch = async () => {
    if (caida) throw new Error('Túnel caído');
    return { ok: true, status: 200, json: async () => ({ data: EVALUACION }) };
  };

  try {
    await consultarRrccApi('72345678');
    caida = true;
    assert.deepEqual(await consultarRrccApi('72345678'), EVALUACION);
    // Un documento nunca consultado sí falla como antes: error 502 controlado.
    await assert.rejects(() => consultarRrccApi('99999999'), { statusCode: 502, code: 'RRCC_SERVICE_UNAVAILABLE' });
  } finally {
    restaurar();
  }
});

test('consultarRrccApi sigue funcionando sin Redis (caché desactivada)', async () => {
  const restaurar = prepararEntorno();
  setCacheClient(null);
  let llamadas = 0;
  globalThis.fetch = async () => {
    llamadas++;
    return { ok: true, status: 200, json: async () => ({ data: EVALUACION }) };
  };

  try {
    await consultarRrccApi('72345678');
    await consultarRrccApi('72345678');
    assert.equal(llamadas, 2);
  } finally {
    restaurar();
  }
});
