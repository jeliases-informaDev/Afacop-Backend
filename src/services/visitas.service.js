import prisma from "../config/prisma.js";
import storageService from "./storage.service.js";

async function obtenerVisitas() {
  return prisma.visita.findMany({
    orderBy: { fecha_hora_checkin: "desc" },
    take: 100,
    include: {
      cliente: { select: { nombres: true, apellido_paterno: true } },
      asesor: { select: { nombres: true, apellido_paterno: true } },
    },
  });
}

async function crearVisita(data) {
  return prisma.visita.create({
    data: {
      id_cliente: Number(data.id_cliente),
      id_asesor: Number(data.id_asesor),
      tipo_visita: data.tipo_visita || "EXTRAORDINARIA",
      fecha_hora_checkin: data.fecha_hora_checkin ? new Date(data.fecha_hora_checkin) : new Date(),
      latitud: Number(data.latitud || 0),
      longitud: Number(data.longitud || 0),
      resultado: data.resultado,
      es_efectiva: ["GESTIONADO", "PROMESA DE PAGO"].includes(data.resultado),
      monto_recaudado: data.monto_recaudado === "" || data.monto_recaudado == null ? null : Number(data.monto_recaudado),
      observaciones: data.observaciones || null,
    },
    include: { cliente: true, asesor: true },
  });
}

async function obtenerResumen() {
  const [visitas, efectivas, recaudacion] = await Promise.all([
    prisma.visita.count(),
    prisma.visita.count({ where: { es_efectiva: true } }),
    prisma.visita.aggregate({ _sum: { monto_recaudado: true } }),
  ]);
  return {
    visitas,
    efectivas,
    recaudacion: Number(recaudacion._sum.monto_recaudado || 0),
    efectividad: visitas ? Math.round((efectivas / visitas) * 100) : 0,
  };
}

function evidenceWhere({ buscar = "", resultado = "", desde = "", hasta = "" } = {}) {
  const where = { OR: [{ foto_url: { not: null } }, { foto_adicional_url: { not: null } }, { foto_evidencia: { not: null } }, { firma_evidencia: { not: null } }] };
  const and = [];
  const term = String(buscar).trim();
  if (term) and.push({ OR: [
    { cliente: { dni: { contains: term, mode: "insensitive" } } },
    { cliente: { nombres: { contains: term, mode: "insensitive" } } },
    { cliente: { apellido_paterno: { contains: term, mode: "insensitive" } } },
    { cliente: { apellido_materno: { contains: term, mode: "insensitive" } } },
    { asesor: { nombres: { contains: term, mode: "insensitive" } } },
    { asesor: { apellido_paterno: { contains: term, mode: "insensitive" } } },
  ] });
  if (resultado) and.push({ resultado });
  const date = {};
  if (desde) date.gte = new Date(`${desde}T00:00:00-05:00`);
  if (hasta) date.lte = new Date(`${hasta}T23:59:59.999-05:00`);
  if (Object.keys(date).length) and.push({ fecha_hora_checkin: date });
  if (and.length) where.AND = and;
  return where;
}

async function obtenerEvidencias(filters = {}) {
  const page = Math.max(1, Number(filters.page) || 1);
  const limit = Math.min(30, Math.max(6, Number(filters.limit) || 12));
  const where = evidenceWhere(filters);
  const [items, total] = await Promise.all([
    prisma.visita.findMany({
      where,
      orderBy: { fecha_hora_checkin: "desc" },
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id_visita: true, resultado: true, es_efectiva: true, monto_recaudado: true,
        observaciones: true, fecha_hora_checkin: true, latitud: true, longitud: true,
        cliente: { select: { id_cliente: true, dni: true, nombres: true, apellido_paterno: true, apellido_materno: true, distrito: true } },
        asesor: { select: { id_asesor: true, nombres: true, apellido_paterno: true, apellido_materno: true } },
      },
    }),
    prisma.visita.count({ where }),
  ]);
  const ids = items.map(item => item.id_visita);
  const [withPhoto, withSecondPhoto, withSignature] = ids.length ? await Promise.all([
    prisma.visita.findMany({ where: { id_visita: { in: ids }, OR: [{ foto_url: { not: null } }, { foto_evidencia: { not: null } }] }, select: { id_visita: true } }),
    prisma.visita.findMany({ where: { id_visita: { in: ids }, foto_adicional_url: { not: null } }, select: { id_visita: true } }),
    prisma.visita.findMany({ where: { id_visita: { in: ids }, firma_evidencia: { not: null } }, select: { id_visita: true } }),
  ]) : [[], [], []];
  const photoIds = new Set(withPhoto.map(item => item.id_visita));
  const secondPhotoIds = new Set(withSecondPhoto.map(item => item.id_visita));
  const signatureIds = new Set(withSignature.map(item => item.id_visita));
  return {
    items: items.map(item => ({ ...item, tiene_foto: photoIds.has(item.id_visita), tiene_foto_adicional: secondPhotoIds.has(item.id_visita), tiene_firma: signatureIds.has(item.id_visita) })),
    pagination: { page, limit, total, pages: Math.max(1, Math.ceil(total / limit)) },
  };
}

async function obtenerEvidencia(id) {
  const item = await prisma.visita.findFirst({
    where: { id_visita: Number(id), OR: [{ foto_url: { not: null } }, { foto_adicional_url: { not: null } }, { foto_evidencia: { not: null } }, { firma_evidencia: { not: null } }] },
    include: {
      cliente: { select: { id_cliente: true, dni: true, nombres: true, apellido_paterno: true, apellido_materno: true, telefono: true, direccion: true, distrito: true } },
      asesor: { select: { id_asesor: true, dni: true, nombres: true, apellido_paterno: true, apellido_materno: true } },
      ruta_cliente: { select: { id_ruta: true, secuencia: true } },
    },
  });
  if (!item) return null;
  const [signedPhoto, signedSecondPhoto] = await Promise.all([
    item.foto_url ? storageService.createDownloadUrl(item.foto_url) : null,
    item.foto_adicional_url ? storageService.createDownloadUrl(item.foto_adicional_url) : null,
  ]);
  return {
    ...item,
    foto_url: undefined,
    foto_adicional_url: undefined,
    video_url: undefined,
    foto_evidencia: signedPhoto || item.foto_evidencia,
    foto_adicional_evidencia: signedSecondPhoto,
  };
}

async function obtenerSugerenciasEvidencias(buscar = "") {
  const term = String(buscar).trim();
  if (!term) return { clientes: [], asesores: [] };

  const evidenceFilter = {
    OR: [
      { foto_url: { not: null } },
      { foto_adicional_url: { not: null } },
      { foto_evidencia: { not: null } },
      { firma_evidencia: { not: null } },
    ],
  };
  const personFilter = {
    OR: [
      { dni: { contains: term, mode: "insensitive" } },
      { nombres: { contains: term, mode: "insensitive" } },
      { apellido_paterno: { contains: term, mode: "insensitive" } },
      { apellido_materno: { contains: term, mode: "insensitive" } },
    ],
  };

  const [clientes, asesores] = await Promise.all([
    prisma.cliente.findMany({
      where: { AND: [personFilter, { visitas: { some: evidenceFilter } }] },
      orderBy: [{ apellido_paterno: "asc" }, { nombres: "asc" }],
      take: 6,
      select: { id_cliente: true, dni: true, nombres: true, apellido_paterno: true, apellido_materno: true, distrito: true },
    }),
    prisma.asesor.findMany({
      where: { AND: [personFilter, { visitas: { some: evidenceFilter } }] },
      orderBy: [{ apellido_paterno: "asc" }, { nombres: "asc" }],
      take: 6,
      select: { id_asesor: true, dni: true, nombres: true, apellido_paterno: true, apellido_materno: true, estado: true },
    }),
  ]);

  return { clientes, asesores };
}

export default { obtenerVisitas, crearVisita, obtenerResumen, obtenerEvidencias, obtenerSugerenciasEvidencias, obtenerEvidencia };
