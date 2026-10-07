import { env } from '#core/config/env.js';
import { logger } from '#core/config/logger.js';
import {
  coincideDistrito,
  evaluarResultado,
  limpiarDireccion,
  mapearFeatureMapbox,
  normalizarNumero,
} from './geocodificacion-direcciones.js';

const PAUSA_NOMINATIM_MS = 1200;
const PAUSA_MAPBOX_MS = 100;

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const esNominatimPublico = () => /nominatim\.openstreetmap\.org/i.test(env.GEOCODING_BASE_URL);

export function proveedorActivo() {
  return String(process.env.GEOCODING_PROVIDER || 'nominatim').trim().toLowerCase() === 'mapbox'
    ? 'mapbox'
    : 'nominatim';
}

// El servidor público de OpenStreetMap exige como máximo 1 consulta por segundo.
export function pausaEntreConsultasMs(proveedor = proveedorActivo()) {
  const texto = process.env.GEOCODING_DELAY_MS;
  const configurada = texto === undefined || texto === '' ? NaN : Number(texto);
  if (Number.isFinite(configurada) && configurada >= 0) {
    return proveedor === 'nominatim' && esNominatimPublico()
      ? Math.max(configurada, 1000)
      : configurada;
  }
  return proveedor === 'mapbox' ? PAUSA_MAPBOX_MS : PAUSA_NOMINATIM_MS;
}

export function tamanoMaximoLote(proveedor = proveedorActivo()) {
  return proveedor === 'nominatim' && esNominatimPublico() ? 20 : 500;
}

function verificarRespuesta(response, nombre) {
  if (response.ok) return;
  const error = new Error(`Servicio de geocodificación (${nombre}) respondió ${response.status}`);
  error.status = response.status;
  // Credenciales inválidas, límite excedido o caída del servicio: no es culpa
  // de la dirección, así que el lote se detiene y los clientes siguen pendientes.
  if ([401, 403, 429].includes(response.status) || response.status >= 500) {
    error.detenerLote = true;
  }
  throw error;
}

async function consultarNominatim(params) {
  const url = new URL(`${env.GEOCODING_BASE_URL.replace(/\/$/, '')}/search`);
  url.searchParams.set('format', 'jsonv2');
  url.searchParams.set('countrycodes', 'pe');
  url.searchParams.set('limit', '5');
  url.searchParams.set('addressdetails', '1');
  for (const [clave, valor] of Object.entries(params)) {
    url.searchParams.set(clave, valor);
  }

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'Accept-Language': 'es',
      'User-Agent': process.env.GEOCODING_USER_AGENT || 'Radar360/1.0',
    },
    signal: AbortSignal.timeout(15000),
  });
  verificarRespuesta(response, 'Nominatim');

  const results = await response.json();
  return Array.isArray(results) ? results : [];
}

async function consultarMapbox({ consulta, permanente }) {
  const token = process.env.MAPBOX_ACCESS_TOKEN;
  if (!token) {
    throw Object.assign(
      new Error('MAPBOX_ACCESS_TOKEN no está configurado.'),
      { detenerLote: true },
    );
  }

  const url = new URL('https://api.mapbox.com/search/geocode/v6/forward');
  url.searchParams.set('q', consulta);
  url.searchParams.set('country', 'pe');
  url.searchParams.set('limit', '5');
  url.searchParams.set('language', 'es');
  url.searchParams.set('autocomplete', 'false');
  // permanent=true es lo que permite guardar las coordenadas en la base de datos.
  url.searchParams.set('permanent', permanente ? 'true' : 'false');
  url.searchParams.set('access_token', token);

  const response = await fetch(url, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(15000),
  });
  verificarRespuesta(response, 'Mapbox');

  const data = await response.json();
  return Array.isArray(data.features) ? data.features.map(mapearFeatureMapbox) : [];
}

function unirSinRepetir(partes) {
  const vistos = new Set();
  return partes
    .map(parte => String(parte ?? '').trim())
    .filter(parte => {
      const clave = parte.toUpperCase();
      if (!parte || vistos.has(clave)) return false;
      vistos.add(clave);
      return true;
    })
    .join(', ');
}

async function buscarCandidatos({ proveedor, limpia, direccionNormalizada, distrito, provincia, permanente }) {
  try {
    if (proveedor === 'mapbox') {
      return await consultarMapbox({
        consulta: unirSinRepetir([limpia.texto, distrito, provincia]),
        permanente,
      });
    }

    // La búsqueda estructurada (calle + número + distrito) encuentra muchas
    // direcciones que la de texto libre no resuelve.
    const ciudad = distrito || provincia || null;
    let results = [];
    if (limpia.calle && ciudad) {
      results = await consultarNominatim({
        street: [limpia.numero, limpia.calle].filter(Boolean).join(' '),
        city: ciudad,
      });
      if (!results.length) await sleep(pausaEntreConsultasMs('nominatim'));
    }
    if (!results.length) {
      results = await consultarNominatim({ q: direccionNormalizada });
    }
    return results;
  } catch (error) {
    // Un error sin código HTTP es de red, tiempo de espera o configuración.
    if (error.status === undefined) error.detenerLote = true;
    throw error;
  }
}

export async function geocodificarDireccion(
  { direccion, direccion_normalizada: direccionNormalizada, distrito, provincia },
  { proveedor = proveedorActivo(), permanente = true } = {},
) {
  const limpia = limpiarDireccion(direccion);
  const numeroSolicitado = limpia.numero ? normalizarNumero(limpia.numero) : null;

  const results = await buscarCandidatos({
    proveedor, limpia, direccionNormalizada, distrito, provincia, permanente,
  });
  if (!results.length) return null;

  let item;
  if (numeroSolicitado) {
    // Solo se acepta un resultado cuyo número coincida realmente.
    const conNumero = results.filter(
      candidato => normalizarNumero(candidato.address?.house_number) === numeroSolicitado,
    );
    item = conNumero.find(
      candidato => coincideDistrito(distrito, candidato.address) !== false,
    ) ?? conNumero[0];

    if (!item) {
      logger.warn(
        {
          direccion: direccionNormalizada,
          numeroSolicitado,
          resultados: results.map(candidato => ({
            display_name: candidato.display_name,
            house_number: candidato.address?.house_number || null,
            addresstype: candidato.addresstype || null,
          })),
        },
        'client_geocoding_house_number_not_found',
      );
      return null;
    }
  } else {
    item = results.find(
      candidato => coincideDistrito(distrito, candidato.address) !== false,
    ) ?? results[0];
  }

  const latitud = Number(item.lat);
  const longitud = Number(item.lon);
  if (!Number.isFinite(latitud) || !Number.isFinite(longitud)) return null;

  const evaluacion = evaluarResultado({
    item,
    numeroSolicitado,
    distritoEsperado: distrito,
    esManzanaLote: limpia.esManzanaLote,
  });

  // Un punto a nivel de ciudad o provincia no sirve ni como aproximación.
  if (evaluacion.precision === 'PROVINCIA') return null;

  return {
    latitud,
    longitud,
    precision: evaluacion.precision,
    confianza: evaluacion.confianza,
    distritoCoincide: evaluacion.distritoCoincide,
    direccionEncontrada: item.display_name?.slice(0, 400) || null,
  };
}
