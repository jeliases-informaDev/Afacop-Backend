import test from 'node:test';
import assert from 'node:assert/strict';
import { buscarPersonasPorLote } from '#modules/clientes/personas-lookup.service.js';

test('buscarPersonasPorLote retorna mapa vacío si recibe arreglo vacío o nulo', async () => {
  const r1 = await buscarPersonasPorLote([]);
  assert.equal(r1.size, 0);

  const r2 = await buscarPersonasPorLote(null);
  assert.equal(r2.size, 0);
});

test('buscarPersonasPorLote maneja ausencia de variables de entorno de forma tolerante', async () => {
  const origUrl = process.env.RRCC_API_URL;
  const origKey = process.env.RRCC_API_KEY;

  delete process.env.RRCC_API_URL;
  delete process.env.RRCC_API_KEY;

  try {
    const res = await buscarPersonasPorLote(['12345678', '87654321']);
    assert.equal(res.size, 0);
  } finally {
    if (origUrl) process.env.RRCC_API_URL = origUrl;
    if (origKey) process.env.RRCC_API_KEY = origKey;
  }
});

test('buscarPersonasPorLote procesa correctamente la respuesta de la API simulada', async () => {
  const originalFetch = globalThis.fetch;
  process.env.RRCC_API_URL = 'https://mock-rrcc.test';
  process.env.RRCC_API_KEY = 'test-key-123';

  globalThis.fetch = async (url, options) => {
    assert.equal(url, 'https://mock-rrcc.test/v1/personas/buscar-lote');
    assert.equal(options.headers['x-api-key'], 'test-key-123');
    const body = JSON.parse(options.body);
    assert.deepEqual(body.documentos, ['72345678', '10293847']);

    return {
      ok: true,
      json: async () => ({
        data: [
          {
            DNI: '72345678',
            PRENOMBRES: 'JUAN CARLOS',
            APE_PAT: 'PEREZ',
            APE_MAT: 'GOMEZ',
          },
          {
            DNI: '10293847',
            PRENOMBRES: 'MARIA ELENA',
            APE_PAT: 'QUISPE',
            APE_MAT: 'FLORES',
          },
        ],
      }),
    };
  };

  try {
    const mapa = await buscarPersonasPorLote(['72345678', '10293847']);
    assert.equal(mapa.size, 2);

    const p1 = mapa.get('72345678');
    assert.equal(p1.nombres, 'JUAN CARLOS');
    assert.equal(p1.apellido_paterno, 'PEREZ');
    assert.equal(p1.apellido_materno, 'GOMEZ');

    const p2 = mapa.get('10293847');
    assert.equal(p2.nombres, 'MARIA ELENA');
    assert.equal(p2.apellido_paterno, 'QUISPE');
    assert.equal(p2.apellido_materno, 'FLORES');
  } finally {
    globalThis.fetch = originalFetch;
    delete process.env.RRCC_API_URL;
    delete process.env.RRCC_API_KEY;
  }
});

test('buscarPersonasPorLote tolera fallos HTTP o caídas de conexión sin lanzar excepción', async () => {
  const originalFetch = globalThis.fetch;
  process.env.RRCC_API_URL = 'https://mock-rrcc.test';
  process.env.RRCC_API_KEY = 'test-key-123';

  globalThis.fetch = async () => {
    throw new Error('Conexión rehusada / Gateway timeout');
  };

  try {
    const mapa = await buscarPersonasPorLote(['72345678']);
    assert.equal(mapa.size, 0); // No lanza excepción, retorna mapa vacío
  } finally {
    globalThis.fetch = originalFetch;
    delete process.env.RRCC_API_URL;
    delete process.env.RRCC_API_KEY;
  }
});
