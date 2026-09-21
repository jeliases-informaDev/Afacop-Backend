import prisma from '#core/config/prisma.js';
import { logger } from '#core/config/logger.js';

const DEFAULT_BATCH_SIZE = 5;
const DELAY_MS = 1200;

const sleep = ms =>
  new Promise(resolve => setTimeout(resolve, ms));

function normalizarNumero(valor) {
  return String(valor || '')
    .trim()
    .toUpperCase()
    .replace(/\s+/g, '');
}

function obtenerNumeroDireccion(address) {
  const match = String(address || '').match(/\b(\d{1,6}[A-Z]?)\b/i);

  return match
    ? normalizarNumero(match[1])
    : null;
}

function getPrecision(result, numeroSolicitado = null) {
  const numeroEncontrado = normalizarNumero(
    result.address?.house_number
  );

  if (
    numeroSolicitado &&
    numeroEncontrado &&
    numeroEncontrado === numeroSolicitado
  ) {
    return 'EXACTA';
  }

  const type = String(
    result.addresstype || result.type || ''
  ).toLowerCase();

  if (
    [
      'house',
      'building',
    ].includes(type)
  ) {
    return numeroSolicitado
      ? 'APROXIMADA'
      : 'EXACTA';
  }

  if (
    [
      'road',
      'street',
      'pedestrian',
      'residential',
    ].includes(type)
  ) {
    return 'APROXIMADA';
  }

  if (
    [
      'suburb',
      'neighbourhood',
      'quarter',
      'city_district',
    ].includes(type)
  ) {
    return 'DISTRITO';
  }

  if (
    [
      'city',
      'town',
      'municipality',
      'province',
    ].includes(type)
  ) {
    return 'PROVINCIA';
  }

  return 'APROXIMADA';
}

async function geocodeAddress(address) {
  const url = new URL(
    'https://nominatim.openstreetmap.org/search'
  );

  const numeroSolicitado =
    obtenerNumeroDireccion(address);

  url.searchParams.set('format', 'jsonv2');
  url.searchParams.set('q', address);
  url.searchParams.set('countrycodes', 'pe');

  // Antes era 1.
  // Pedimos varios resultados para intentar encontrar
  // el número exacto.
  url.searchParams.set('limit', '5');

  url.searchParams.set('addressdetails', '1');

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'Accept-Language': 'es',
      'User-Agent':
        process.env.GEOCODING_USER_AGENT ||
        'Radar360/1.0',
    },
  });

  if (!response.ok) {
    throw new Error(
      `Servicio de geocodificación respondió ${response.status}`
    );
  }

  const results = await response.json();

  if (
    !Array.isArray(results) ||
    results.length === 0
  ) {
    return null;
  }

  // --------------------------------------------------
  // DIRECCIÓN CON NÚMERO
  // --------------------------------------------------
  //
  // Ejemplo:
  // Av. Petit Thouars 1113
  //
  // No aceptamos automáticamente el centro de la calle.
  // Primero buscamos un resultado cuyo house_number
  // coincida realmente con 1113.
  // --------------------------------------------------

  let result = null;

  if (numeroSolicitado) {
    result = results.find(item => {

      const numeroEncontrado =
        normalizarNumero(
          item.address?.house_number
        );

      return (
        numeroEncontrado &&
        numeroEncontrado === numeroSolicitado
      );
    });

    /*
     * Si pedimos una dirección con número y Nominatim
     * solamente encontró la calle/distrito, NO guardamos
     * esa ubicación como si fuera el domicilio.
     */
    if (!result) {
      logger.warn(
        {
          direccion: address,
          numeroSolicitado,
          resultados: results.map(item => ({
            display_name: item.display_name,
            house_number:
              item.address?.house_number || null,
            addresstype:
              item.addresstype || null,
            type: item.type || null,
          })),
        },
        'client_geocoding_house_number_not_found'
      );

      return null;
    }

  } else {

    // Si la dirección no tiene número,
    // usamos el mejor resultado de Nominatim.
    result = results[0];
  }

  const latitud = Number(result.lat);
  const longitud = Number(result.lon);

  if (
    !Number.isFinite(latitud) ||
    !Number.isFinite(longitud)
  ) {
    return null;
  }

  return {
    latitud,
    longitud,

    precision: getPrecision(
      result,
      numeroSolicitado
    ),

    direccionEncontrada:
      result.display_name || null,
  };
}

export async function geocodePendingClients({
  limit = DEFAULT_BATCH_SIZE,
} = {}) {
  const safeLimit = Math.min(
    Math.max(Number(limit) || DEFAULT_BATCH_SIZE, 1),
    20
  );

  const clients = await prisma.cliente.findMany({
    where: {
      estado_geocodificacion: 'PENDIENTE',
      direccion_normalizada: {
        not: null,
      },
      latitud: null,
      longitud: null,
    },
    select: {
      id_cliente: true,
      numero_documento: true,
      direccion_normalizada: true,
    },
    orderBy: {
      id_cliente: 'asc',
    },
    take: safeLimit,
  });

  let localizados = 0;
  let noEncontrados = 0;
  let errores = 0;

  for (const client of clients) {
    try {
      const result = await geocodeAddress(
        client.direccion_normalizada
      );

      if (!result) {
        await prisma.cliente.update({
          where: {
            id_cliente: client.id_cliente,
          },
          data: {
            estado_geocodificacion:
              'NO_ENCONTRADO',
            precision_geocodificacion: null,
            fecha_geocodificacion: new Date(),
          },
        });

        noEncontrados++;
      } else {
        await prisma.cliente.update({
          where: {
            id_cliente: client.id_cliente,
          },
          data: {
            latitud: result.latitud,
            longitud: result.longitud,
            estado_geocodificacion:
              'LOCALIZADO',
            precision_geocodificacion:
              result.precision,
            fecha_geocodificacion: new Date(),
          },
        });

        localizados++;
      }
    } catch (error) {
      errores++;

      await prisma.cliente.update({
        where: {
          id_cliente: client.id_cliente,
        },
        data: {
          estado_geocodificacion: 'ERROR',
          precision_geocodificacion: null,
          fecha_geocodificacion: new Date(),
        },
      }).catch(() => {});

      logger.error(
        {
          err: error,
          clientId: client.id_cliente,
          documento: client.numero_documento,
        },
        'client_geocoding_failed'
      );
    }

    // Por ahora procesamos despacio para la prueba local.
    await sleep(DELAY_MS);
  }

  return {
    procesados: clients.length,
    localizados,
    no_encontrados: noEncontrados,
    errores,
  };
}