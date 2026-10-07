import test from 'node:test';
import assert from 'node:assert/strict';
import {
  coincideDistrito,
  estadoSegunConfianza,
  evaluarResultado,
  limpiarDireccion,
  mapearFeatureMapbox,
} from '../src/modules/sistema/geocodificacion-direcciones.js';

test('limpiarDireccion separa calle y número y expande abreviaturas', () => {
  const r = limpiarDireccion('AV. PETIT THOUARS 1113');
  assert.equal(r.numero, '1113');
  assert.equal(r.calle, 'Avenida PETIT THOUARS');
  assert.equal(r.esManzanaLote, false);
});

test('limpiarDireccion ignora interior, marcador de número y referencias', () => {
  const r = limpiarDireccion('Jr. 28 de Julio Nro. 1113 Int. 301 Ref: frente al parque');
  assert.equal(r.numero, '1113');
  assert.match(r.calle, /28 de Julio/);
  assert.doesNotMatch(r.texto, /Int|parque/i);
});

test('limpiarDireccion no toma "9 de Octubre" como número de casa', () => {
  assert.equal(limpiarDireccion('Av. 9 de Octubre').numero, null);
});

test('limpiarDireccion no recorta calles cuyo nombre empieza como un marcador', () => {
  const r = limpiarDireccion('Av. Internacional 456');
  assert.equal(r.numero, '456');
  assert.match(r.calle, /Internacional/);
});

test('limpiarDireccion detecta manzana y lote y no los toma como número de calle', () => {
  const r = limpiarDireccion('Calle Los Pinos Mz B Lt 5');
  assert.equal(r.esManzanaLote, true);
  assert.equal(r.numero, null);
});

test('limpiarDireccion tolera valores vacíos', () => {
  assert.deepEqual(limpiarDireccion(null), { texto: '', calle: '', numero: null, esManzanaLote: false });
});

test('coincideDistrito compara sin tildes y entiende zonas y distritos', () => {
  const address = { suburb: 'Santa Beatriz', city: 'Lima' };
  assert.equal(coincideDistrito('Santa Beatriz', address), true);
  assert.equal(coincideDistrito('Cercado de Lima', address), true);
  assert.equal(coincideDistrito('Lince', address), false);
  assert.equal(coincideDistrito('', address), null);
  assert.equal(coincideDistrito('Lince', {}), null);
});

test('un edificio con el número exacto y el distrito correcto es de confianza ALTA', () => {
  const item = { addresstype: 'building', address: { house_number: '1113', suburb: 'Santa Beatriz', city: 'Lima' } };
  const r = evaluarResultado({ item, numeroSolicitado: '1113', distritoEsperado: 'Lima' });
  assert.equal(r.precision, 'EXACTA');
  assert.equal(r.confianza, 'ALTA');
  assert.equal(estadoSegunConfianza(r.confianza), 'LOCALIZADO');
});

test('mismo número pero dato dudoso (addresstype place, caso Petit Thouars) queda por revisar', () => {
  const item = { addresstype: 'place', address: { house_number: '1113', suburb: 'Santa Beatriz', city: 'Lima' } };
  const r = evaluarResultado({ item, numeroSolicitado: '1113', distritoEsperado: 'Lima' });
  assert.equal(r.precision, 'APROXIMADA');
  assert.equal(r.confianza, 'MEDIA');
  assert.equal(estadoSegunConfianza(r.confianza), 'REVISAR');
});

test('un resultado en otro distrito baja la confianza a BAJA', () => {
  const item = { addresstype: 'building', address: { house_number: '1113', suburb: 'Lince', city: 'Lima' } };
  const r = evaluarResultado({ item, numeroSolicitado: '1113', distritoEsperado: 'Miraflores' });
  assert.equal(r.confianza, 'BAJA');
});

test('direcciones con manzana y lote nunca se aceptan automáticamente', () => {
  const item = { addresstype: 'building', address: { house_number: '5', city: 'Lima' } };
  const r = evaluarResultado({ item, numeroSolicitado: '5', distritoEsperado: 'Lima', esManzanaLote: true });
  assert.equal(r.confianza, 'BAJA');
});

test('un resultado solo de zona o ciudad es de confianza BAJA', () => {
  assert.equal(evaluarResultado({ item: { addresstype: 'suburb', address: {} }, numeroSolicitado: '10' }).confianza, 'BAJA');
  assert.equal(evaluarResultado({ item: { addresstype: 'city', address: {} } }).confianza, 'BAJA');
});

const featureMapbox = propiedades => ({
  geometry: { coordinates: [-77.0345, -12.0756] },
  properties: propiedades,
});

test('Mapbox: punto de techo con número coincidente se trata como edificio y es de confianza ALTA', () => {
  const item = mapearFeatureMapbox(featureMapbox({
    feature_type: 'address',
    full_address: 'Avenida Petit Thouars 1113, Lima, Perú',
    coordinates: { accuracy: 'rooftop' },
    match_code: { address_number: 'matched', confidence: 'exact' },
    context: {
      address: { address_number: '1113', street_name: 'Avenida Petit Thouars' },
      neighborhood: { name: 'Santa Beatriz' },
      place: { name: 'Lima' },
    },
  }));
  assert.equal(item.addresstype, 'building');
  assert.equal(item.lat, '-12.0756');
  assert.equal(item.lon, '-77.0345');
  assert.equal(item.address.house_number, '1113');
  const r = evaluarResultado({ item, numeroSolicitado: '1113', distritoEsperado: 'Lima' });
  assert.equal(r.precision, 'EXACTA');
  assert.equal(r.confianza, 'ALTA');
});

test('Mapbox: una dirección interpolada o aproximada queda por revisar', () => {
  for (const accuracy of ['interpolated', 'approximate']) {
    const item = mapearFeatureMapbox(featureMapbox({
      feature_type: 'address',
      coordinates: { accuracy },
      match_code: { address_number: 'matched' },
      context: { address: { address_number: '1113' }, place: { name: 'Lima' } },
    }));
    assert.equal(item.addresstype, 'place');
    const r = evaluarResultado({ item, numeroSolicitado: '1113', distritoEsperado: 'Lima' });
    assert.equal(estadoSegunConfianza(r.confianza), 'REVISAR');
  }
});

test('Mapbox: el número solo cuenta si el proveedor confirma que coincide', () => {
  const item = mapearFeatureMapbox(featureMapbox({
    feature_type: 'address',
    coordinates: { accuracy: 'rooftop' },
    match_code: { address_number: 'plausible' },
    context: { address: { address_number: '1113' } },
  }));
  assert.equal(item.addresstype, 'place');
});

test('Mapbox: calle, barrio y localidad se traducen a tipos de baja precisión', () => {
  const tipoDe = feature_type => mapearFeatureMapbox(featureMapbox({ feature_type })).addresstype;
  assert.equal(tipoDe('street'), 'road');
  assert.equal(tipoDe('neighborhood'), 'neighbourhood');
  assert.equal(tipoDe('locality'), 'suburb');
  assert.equal(tipoDe('place'), 'city');
});
