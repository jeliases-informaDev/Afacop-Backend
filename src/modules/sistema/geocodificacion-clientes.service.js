import prisma from '#core/config/prisma.js';
import { logger } from '#core/config/logger.js';
import { estadoSegunConfianza } from './geocodificacion-direcciones.js';
import {
  geocodificarDireccion,
  pausaEntreConsultasMs,
  proveedorActivo,
  sleep,
  tamanoMaximoLote,
} from './geocodificacion-proveedores.js';

const DEFAULT_BATCH_SIZE = 5;

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
  const proveedor = proveedorActivo();
  const safeLimit = Math.min(
    Math.max(Number(limit) || DEFAULT_BATCH_SIZE, 1),
    tamanoMaximoLote(proveedor),
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
  let detenido = null;

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
      const result = await geocodificarDireccion(client, { proveedor });

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
      if (error.detenerLote) {
        // Clave inválida, límite excedido o proveedor caído: los clientes
        // quedan PENDIENTE y se reintentan en el siguiente ciclo.
        detenido = error.message;
        logger.warn({ err: error, proveedor }, 'client_geocoding_batch_stopped');
        break;
      }

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
    if (consultoProveedor) await sleep(pausaEntreConsultasMs(proveedor));
  }

  return {
    proveedor,
    procesados: localizados + revisar + noEncontrados + reutilizados + errores,
    localizados,
    revisar,
    no_encontrados: noEncontrados,
    reutilizados,
    errores,
    detenido,
  };
}
