import prisma from '#core/config/prisma.js';
import { env } from '#core/config/env.js';
import { logger } from '#core/config/logger.js';
import {
  coincideDistrito,
  estadoSegunConfianza,
  evaluarResultado,
  limpiarDireccion,
  normalizarNumero,
} from './geocodificacion-direcciones.js';

const DEFAULT_BATCH_SIZE = 5;
const DELAY_MS = 1200;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function consultarProveedor(params) {
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

  if (!response.ok) {
    throw new Error(`Servicio de geocodificación respondió ${response.status}`);
  }

  const results = await response.json();
  return Array.isArray(results) ? results : [];
}

async function geocodeAddress({
  direccion,
  direccion_normalizada: direccionNormalizada,
  distrito,
  provincia,
}) {
  const limpia = limpiarDireccion(direccion);
  const numeroSolicitado = limpia.numero
    ? normalizarNumero(limpia.numero)
    : null;
  const ciudad = distrito || provincia || null;

  // La búsqueda estructurada (calle + número + distrito) encuentra muchas
  // direcciones que la búsqueda de texto libre no resuelve.
  let results = [];
  if (limpia.calle && ciudad) {
    results = await consultarProveedor({
      street: [limpia.numero, limpia.calle].filter(Boolean).join(' '),
      city: ciudad,
    });
    if (!results.length) await sleep(DELAY_MS);
  }
  if (!results.length) {
    results = await consultarProveedor({ q: direccionNormalizada });
  }
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

  return {
    latitud,
    longitud,
    precision: evaluacion.precision,
    confianza: evaluacion.confianza,
    direccionEncontrada: item.display_name?.slice(0, 400) || null,
  };
}

// Muchos clientes comparten el mismo domicilio: se reutiliza una ubicación ya
// confiable en vez de volver a consultar al proveedor externo.
function buscarUbicacionExistente(client) {
  if (!client.direccion_normalizada) return null;

  return prisma.cliente.findFirst({
    where: {
      direccion_normalizada: client.direccion_normalizada,
      id_cliente: { not: client.id_cliente },
      latitud: { not: null },
      longitud: { not: null },
      estado_geocodificacion: { in: ['LOCALIZADO', 'VERIFICADO'] },
    },
    orderBy: [{ ubicacion_verificada_en: { sort: 'desc', nulls: 'last' } }],
    select: {
      latitud: true,
      longitud: true,
      precision_geocodificacion: true,
      direccion_geocodificada: true,
    },
  });
}

const SIN_VERIFICACION = {
  ubicacion_verificada_en: null,
  ubicacion_verificada_origen: null,
  ubicacion_verificada_por: null,
};

export async function geocodePendingClients({
  limit = DEFAULT_BATCH_SIZE,
} = {}) {
  const safeLimit = Math.min(
    Math.max(Number(limit) || DEFAULT_BATCH_SIZE, 1),
    20,
  );

  const clients = await prisma.cliente.findMany({
    where: {
      estado_geocodificacion: 'PENDIENTE',
      direccion_normalizada: { not: null },
      latitud: null,
      longitud: null,
    },
    select: {
      id_cliente: true,
      numero_documento: true,
      direccion: true,
      distrito: true,
      provincia: true,
      direccion_normalizada: true,
    },
    orderBy: { id_cliente: 'asc' },
    take: safeLimit,
  });

  let localizados = 0;
  let revisar = 0;
  let noEncontrados = 0;
  let reutilizados = 0;
  let errores = 0;

  for (const client of clients) {
    let consultoProveedor = false;

    try {
      const existente = await buscarUbicacionExistente(client);

      if (existente) {
        await prisma.cliente.update({
          where: { id_cliente: client.id_cliente },
          data: {
            latitud: existente.latitud,
            longitud: existente.longitud,
            estado_geocodificacion: 'LOCALIZADO',
            precision_geocodificacion: existente.precision_geocodificacion,
            confianza_geocodificacion: 'ALTA',
            direccion_geocodificada: existente.direccion_geocodificada,
            fecha_geocodificacion: new Date(),
            ...SIN_VERIFICACION,
          },
        });
        reutilizados++;
        continue;
      }

      consultoProveedor = true;
      const result = await geocodeAddress(client);

      if (!result) {
        await prisma.cliente.update({
          where: { id_cliente: client.id_cliente },
          data: {
            estado_geocodificacion: 'NO_ENCONTRADO',
            precision_geocodificacion: null,
            confianza_geocodificacion: null,
            direccion_geocodificada: null,
            fecha_geocodificacion: new Date(),
            ...SIN_VERIFICACION,
          },
        });
        noEncontrados++;
      } else {
        const estado = estadoSegunConfianza(result.confianza);

        await prisma.cliente.update({
          where: { id_cliente: client.id_cliente },
          data: {
            latitud: result.latitud,
            longitud: result.longitud,
            estado_geocodificacion: estado,
            precision_geocodificacion: result.precision,
            confianza_geocodificacion: result.confianza,
            direccion_geocodificada: result.direccionEncontrada,
            fecha_geocodificacion: new Date(),
            ...SIN_VERIFICACION,
          },
        });

        if (estado === 'LOCALIZADO') localizados++;
        else revisar++;
      }
    } catch (error) {
      errores++;

      await prisma.cliente.update({
        where: { id_cliente: client.id_cliente },
        data: {
          estado_geocodificacion: 'ERROR',
          precision_geocodificacion: null,
          confianza_geocodificacion: null,
          fecha_geocodificacion: new Date(),
        },
      }).catch(() => {});

      logger.error(
        {
          err: error,
          clientId: client.id_cliente,
          documento: client.numero_documento,
        },
        'client_geocoding_failed',
      );
      consultoProveedor = true;
    }

    // Solo se espera cuando se consultó al proveedor externo.
    if (consultoProveedor) await sleep(DELAY_MS);
  }

  return {
    procesados: clients.length,
    localizados,
    revisar,
    no_encontrados: noEncontrados,
    reutilizados,
    errores,
  };
}
