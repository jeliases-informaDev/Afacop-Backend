import test from 'node:test';
import assert from 'node:assert/strict';

process.env.DATABASE_URL ||= 'postgresql://test:test@localhost:5432/test';
process.env.JWT_SECRET ||= 'test-jwt-secret-with-at-least-thirty-two-characters';
process.env.MFA_ENCRYPTION_KEY ||= 'independent-test-mfa-key-with-at-least-32-characters';
// Servidor propio simulado: así no aplica el mínimo de 1 s del servidor público.
process.env.GEOCODING_BASE_URL = 'http://nominatim.local';
process.env.GEOCODING_DELAY_MS = '0';
process.env.MAPBOX_ACCESS_TOKEN = 'tok_secreto_de_prueba';

const {
  geocodificarDireccion,
  pausaEntreConsultasMs,
  tamanoMaximoLote,
} = await import('../src/modules/sistema/geocodificacion-proveedores.js');

const fetchOriginal = globalThis.fetch;

function simularRed(respuestas) {
  const llamadas = [];
  globalThis.fetch = async url => {
    llamadas.push(new URL(String(url)));
    const respuesta = respuestas.shift() ?? { status: 200, body: [] };
    return { ok: respuesta.status < 400, status: respuesta.status, json: async () => respuesta.body };
  };
  return llamadas;
}

test.afterEach(() => { globalThis.fetch = fetchOriginal; });

const cliente = {
  direccion: 'AV. PETIT THOUARS 1113',
  direccion_normalizada: 'AV. PETIT THOUARS 1113, Lima, Perú',
  distrito: 'Lima',
  provincia: 'Lima',
};

const featureTecho = {
  geometry: { coordinates: [-77.0345, -12.0756] },
  properties: {
    feature_type: 'address',
    full_address: 'Avenida Petit Thouars 1113, Lima, Perú',
    coordinates: { accuracy: 'rooftop' },
    match_code: { address_number: 'matched' },
    context: { address: { address_number: '1113' }, place: { name: 'Lima' } },
  },
};

test('Mapbox consulta en modo permanente, solo en Perú, y devuelve confianza ALTA para un techo exacto', async () => {
  const llamadas = simularRed([{ status: 200, body: { features: [featureTecho] } }]);
  const resultado = await geocodificarDireccion(cliente, { proveedor: 'mapbox' });

  assert.equal(llamadas.length, 1);
  const { searchParams } = llamadas[0];
  assert.equal(llamadas[0].host, 'api.mapbox.com');
  assert.equal(searchParams.get('permanent'), 'true');
  assert.equal(searchParams.get('country'), 'pe');
  assert.match(searchParams.get('q'), /Avenida PETIT THOUARS 1113/);
  assert.equal(resultado.confianza, 'ALTA');
  assert.equal(resultado.latitud, -12.0756);
});

test('Mapbox en modo de prueba pide resultados temporales', async () => {
  const llamadas = simularRed([{ status: 200, body: { features: [] } }]);
  await geocodificarDireccion(cliente, { proveedor: 'mapbox', permanente: false });
  assert.equal(llamadas[0].searchParams.get('permanent'), 'false');
});

test('Mapbox con clave inválida o límite excedido detiene el lote en vez de marcar error al cliente', async () => {
  for (const status of [401, 403, 429, 503]) {
    simularRed([{ status, body: {} }]);
    await assert.rejects(
      () => geocodificarDireccion(cliente, { proveedor: 'mapbox' }),
      error => error.detenerLote === true && error.status === status,
    );
  }
});

test('Una petición inválida (400) es error de esa dirección y no detiene el lote', async () => {
  simularRed([{ status: 400, body: {} }]);
  await assert.rejects(
    () => geocodificarDireccion(cliente, { proveedor: 'mapbox' }),
    error => error.status === 400 && !error.detenerLote,
  );
});

test('Un fallo de red detiene el lote', async () => {
  globalThis.fetch = async () => { throw new TypeError('fetch failed'); };
  await assert.rejects(
    () => geocodificarDireccion(cliente, { proveedor: 'mapbox' }),
    error => error.detenerLote === true,
  );
});

test('Los mensajes de error nunca incluyen la URL ni el token', async () => {
  simularRed([{ status: 401, body: {} }]);
  const error = await geocodificarDireccion(cliente, { proveedor: 'mapbox' }).catch(e => e);
  assert.doesNotMatch(error.message, /tok_secreto_de_prueba|access_token|api\.mapbox\.com/);
});

test('Nominatim prueba primero la búsqueda estructurada y luego el texto libre', async () => {
  const llamadas = simularRed([
    { status: 200, body: [] },
    { status: 200, body: [{ lat: '-12.0756', lon: '-77.0345', display_name: 'Av. Petit Thouars 1113', addresstype: 'building', address: { house_number: '1113', city: 'Lima' } }] },
  ]);
  const resultado = await geocodificarDireccion(cliente, { proveedor: 'nominatim' });

  assert.equal(llamadas.length, 2);
  assert.equal(llamadas[0].searchParams.get('street'), '1113 Avenida PETIT THOUARS');
  assert.equal(llamadas[0].searchParams.get('city'), 'Lima');
  assert.equal(llamadas[1].searchParams.get('q'), cliente.direccion_normalizada);
  assert.equal(resultado.confianza, 'ALTA');
});

test('Si el número pedido no aparece en ningún resultado, no se inventa una ubicación', async () => {
  simularRed([{ status: 200, body: [{ lat: '-12.07', lon: '-77.03', addresstype: 'road', address: {} }] }]);
  assert.equal(await geocodificarDireccion(cliente, { proveedor: 'nominatim' }), null);
});

test('La pausa y el tamaño de lote dependen del proveedor y de la configuración', () => {
  assert.equal(pausaEntreConsultasMs('mapbox'), 0);
  assert.equal(tamanoMaximoLote('mapbox'), 500);
  assert.equal(tamanoMaximoLote('nominatim'), 500);
});

test('Un resultado a nivel de ciudad no se guarda como ubicación', async () => {
  simularRed([{ status: 200, body: [{ lat: '-12.04', lon: '-77.04', addresstype: 'city', display_name: 'Lima', address: { city: 'Lima' } }] }]);
  const resultado = await geocodificarDireccion(
    { direccion: 'Lima', direccion_normalizada: 'Lima, Perú', distrito: 'Lima', provincia: 'Lima' },
    { proveedor: 'nominatim' },
  );
  assert.equal(resultado, null);
});

test('El resultado indica si coincide con el distrito declarado', async () => {
  simularRed([{ status: 200, body: { features: [featureTecho] } }]);
  const resultado = await geocodificarDireccion(cliente, { proveedor: 'mapbox' });
  assert.equal(resultado.distritoCoincide, true);
});
