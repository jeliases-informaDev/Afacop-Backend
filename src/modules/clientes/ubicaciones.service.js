import prisma from '#core/config/prisma.js';
import { logger } from '#core/config/logger.js';

const ESTADOS_REVISION = ['REVISAR', 'NO_ENCONTRADO', 'ERROR'];
const MAX_PRECISION_GPS_METROS = 50;

const aNumero = valor => (valor === null || valor === undefined ? null : Number(valor));

function errorOperativo(message, statusCode, code) {
  return Object.assign(new Error(message), { statusCode, code });
}

function mapearCliente(cliente, centros) {
  const centro = !cliente.latitud && cliente.distrito
    ? centros.get(cliente.distrito.trim().toLowerCase())
    : null;

  return {
    id: cliente.id_cliente,
    tipo_documento: cliente.tipo_documento,
    numero_documento: cliente.numero_documento,
    dni: cliente.numero_documento,
    nombres: cliente.nombres,
    apellidos: `${cliente.apellido_paterno ?? ''} ${cliente.apellido_materno ?? ''}`.trim(),
    direccion: cliente.direccion,
    distrito: cliente.distrito,
    direccion_normalizada: cliente.direccion_normalizada,
    direccion_geocodificada: cliente.direccion_geocodificada,
    latitud: aNumero(cliente.latitud),
    longitud: aNumero(cliente.longitud),
    estado_geocodificacion: cliente.estado_geocodificacion,
    precision_geocodificacion: cliente.precision_geocodificacion,
    confianza_geocodificacion: cliente.confianza_geocodificacion,
    ubicacion_verificada_en: cliente.ubicacion_verificada_en,
    ubicacion_verificada_origen: cliente.ubicacion_verificada_origen,
    centro_sugerido: centro,
  };
}

// "Precisas" = ubicadas con confianza alta (o con coordenadas que trajo el Excel).
// "Aproximadas" = ubicadas, pero solo a nivel de calle o zona: sirven para ver la
// zona en el mapa y no necesitan revisión; la navegación usa la dirección escrita.
const ES_PRECISA = {
  OR: [{ confianza_geocodificacion: 'ALTA' }, { precision_geocodificacion: 'IMPORTADA' }],
};

function filtroEstado(estado) {
  if (estado === 'PRECISAS') {
    return { AND: [{ estado_geocodificacion: 'LOCALIZADO' }, ES_PRECISA] };
  }
  if (estado === 'APROXIMADAS') {
    return {
      AND: [
        { estado_geocodificacion: 'LOCALIZADO' },
        {
          OR: [
            { confianza_geocodificacion: { in: ['MEDIA', 'BAJA'] } },
            {
              AND: [
                { confianza_geocodificacion: null },
                { OR: [{ precision_geocodificacion: null }, { precision_geocodificacion: { not: 'IMPORTADA' } }] },
              ],
            },
          ],
        },
      ],
    };
  }
  return { estado_geocodificacion: estado ? estado : { in: ESTADOS_REVISION } };
}

async function listarRevision({ estado, buscar, page, limit }) {
  const condiciones = [filtroEstado(estado)];
  const termino = String(buscar ?? '').trim();
  if (termino) {
    condiciones.push({
      OR: [
        { numero_documento: { contains: termino, mode: 'insensitive' } },
        { nombres: { contains: termino, mode: 'insensitive' } },
        { apellido_paterno: { contains: termino, mode: 'insensitive' } },
        { apellido_materno: { contains: termino, mode: 'insensitive' } },
        { direccion: { contains: termino, mode: 'insensitive' } },
      ],
    });
  }
  const where = { AND: condiciones };

  const [total, clientes, resumenBruto, precisas, aproximadas] = await Promise.all([
    prisma.cliente.count({ where }),
    prisma.cliente.findMany({
      where,
      orderBy: { id_cliente: 'asc' },
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id_cliente: true,
        tipo_documento: true,
        numero_documento: true,
        nombres: true,
        apellido_paterno: true,
        apellido_materno: true,
        direccion: true,
        distrito: true,
        direccion_normalizada: true,
        direccion_geocodificada: true,
        latitud: true,
        longitud: true,
        estado_geocodificacion: true,
        precision_geocodificacion: true,
        confianza_geocodificacion: true,
        ubicacion_verificada_en: true,
        ubicacion_verificada_origen: true,
      },
    }),
    prisma.cliente.groupBy({
      by: ['estado_geocodificacion'],
      _count: { _all: true },
    }),
    prisma.cliente.count({ where: filtroEstado('PRECISAS') }),
    prisma.cliente.count({ where: filtroEstado('APROXIMADAS') }),
  ]);

  // Centro aproximado de cada distrito (promedio de clientes ya ubicados),
  // para abrir el mapa cerca cuando el cliente aún no tiene ubicación.
  const distritos = [...new Set(
    clientes.filter(c => c.latitud === null && c.distrito).map(c => c.distrito),
  )];
  const centros = new Map();
  if (distritos.length) {
    const promedios = await prisma.cliente.groupBy({
      by: ['distrito'],
      where: {
        distrito: { in: distritos },
        latitud: { not: null },
        longitud: { not: null },
        estado_geocodificacion: { in: ['LOCALIZADO', 'VERIFICADO'] },
      },
      _avg: { latitud: true, longitud: true },
    });
    for (const fila of promedios) {
      if (fila.distrito && fila._avg.latitud !== null) {
        centros.set(fila.distrito.trim().toLowerCase(), {
          latitud: Number(fila._avg.latitud),
          longitud: Number(fila._avg.longitud),
        });
      }
    }
  }

  const resumen = {};
  for (const fila of resumenBruto) {
    resumen[fila.estado_geocodificacion ?? 'SIN_ESTADO'] = fila._count._all;
  }
  resumen.PRECISAS = precisas;
  resumen.APROXIMADAS = aproximadas;

  return {
    items: clientes.map(cliente => mapearCliente(cliente, centros)),
    resumen,
    pagination: { page, limit, total, pages: Math.max(1, Math.ceil(total / limit)) },
  };
}

async function guardarUbicacion({
  idCliente, latitud, longitud, actorId, origen, aplicarMismaDireccion,
}) {
  const cliente = await prisma.cliente.findUnique({
    where: { id_cliente: idCliente },
    select: {
      id_cliente: true,
      latitud: true,
      longitud: true,
      direccion_normalizada: true,
      estado_geocodificacion: true,
    },
  });
  if (!cliente) throw errorOperativo('Cliente no encontrado.', 404, 'CLIENT_NOT_FOUND');

  const ahora = new Date();
  const datos = {
    latitud,
    longitud,
    estado_geocodificacion: 'VERIFICADO',
    precision_geocodificacion: 'MANUAL',
    confianza_geocodificacion: 'ALTA',
    fecha_geocodificacion: ahora,
    ubicacion_verificada_en: ahora,
    ubicacion_verificada_origen: origen,
    ubicacion_verificada_por: actorId,
  };

  await prisma.cliente.update({ where: { id_cliente: idCliente }, data: datos });

  // Los clientes con exactamente la misma dirección comparten el domicilio:
  // se corrigen juntos para ahorrar trabajo en cargas masivas.
  let copiados = 0;
  if (aplicarMismaDireccion && cliente.direccion_normalizada) {
    const resultado = await prisma.cliente.updateMany({
      where: {
        direccion_normalizada: cliente.direccion_normalizada,
        id_cliente: { not: idCliente },
        estado_geocodificacion: { not: 'VERIFICADO' },
      },
      data: { ...datos, ubicacion_verificada_origen: 'COPIA' },
    });
    copiados = resultado.count;
  }

  logger.info(
    {
      event: 'client_location_verified',
      clientId: idCliente,
      actorId,
      origen,
      antes: {
        latitud: aNumero(cliente.latitud),
        longitud: aNumero(cliente.longitud),
        estado: cliente.estado_geocodificacion,
      },
      despues: { latitud, longitud },
      copiados,
    },
    'client_location_verified',
  );

  return {
    id: idCliente,
    latitud,
    longitud,
    estado_geocodificacion: 'VERIFICADO',
    copiados,
  };
}

function actualizarUbicacion({ idCliente, latitud, longitud, actorId, aplicarMismaDireccion = true }) {
  return guardarUbicacion({
    idCliente, latitud, longitud, actorId, origen: 'WEB', aplicarMismaDireccion,
  });
}

async function confirmarUbicacion({ idCliente, actorId }) {
  const cliente = await prisma.cliente.findUnique({
    where: { id_cliente: idCliente },
    select: { latitud: true, longitud: true },
  });
  if (!cliente) throw errorOperativo('Cliente no encontrado.', 404, 'CLIENT_NOT_FOUND');
  if (cliente.latitud === null || cliente.longitud === null) {
    throw errorOperativo('El cliente aún no tiene una ubicación que confirmar.', 409, 'LOCATION_MISSING');
  }

  return guardarUbicacion({
    idCliente,
    latitud: Number(cliente.latitud),
    longitud: Number(cliente.longitud),
    actorId,
    origen: 'WEB',
    aplicarMismaDireccion: true,
  });
}

async function confirmarUbicacionCampo({ idAsesor, idCliente, latitud, longitud, precision, actorId }) {
  if (!idAsesor) {
    throw errorOperativo('Tu usuario no está vinculado a un asesor activo.', 403, 'ADVISOR_NOT_LINKED');
  }
  if (precision !== undefined && precision > MAX_PRECISION_GPS_METROS) {
    throw errorOperativo(
      `La precisión del GPS es insuficiente (${Math.round(precision)} m). Espera una mejor señal e inténtalo de nuevo.`,
      422,
      'GPS_ACCURACY_LOW',
    );
  }

  const [asignado, enRuta] = await Promise.all([
    prisma.asignacionCliente.findFirst({
      where: { id_cliente: idCliente, id_asesor: idAsesor, estado: 'ACTIVA' },
      select: { id_asignacion: true },
    }),
    prisma.rutaCliente.findFirst({
      where: {
        id_cliente: idCliente,
        ruta: { id_asesor: idAsesor, estado: { in: ['PROGRAMADA', 'EN_PROCESO'] } },
      },
      select: { id_ruta_cliente: true },
    }),
  ]);
  if (!asignado && !enRuta) {
    throw errorOperativo('El cliente no está asignado a tu cartera ni a tu ruta.', 403, 'CLIENT_NOT_ASSIGNED');
  }

  // Los clientes con exactamente la misma dirección comparten domicilio: lo que
  // el asesor confirma en la puerta les sirve a todos.
  return guardarUbicacion({
    idCliente, latitud, longitud, actorId, origen: 'CAMPO', aplicarMismaDireccion: true,
  });
}

export default {
  listarRevision,
  actualizarUbicacion,
  confirmarUbicacion,
  confirmarUbicacionCampo,
};
