import prisma from '../config/prisma.js';
import storageService from './storage.service.js';

function todayBounds() {
  const day = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Lima' }).format(new Date());
  return { day, start: new Date(`${day}T00:00:00.000Z`), end: new Date(`${day}T23:59:59.999Z`) };
}
function requireAdvisor(id) {
  if (!id) throw Object.assign(new Error('Tu usuario no está vinculado a un asesor activo.'), { statusCode: 403, code: 'ADVISOR_NOT_LINKED' });
  return Number(id);
}
const clientSelect = { id_cliente: true, dni: true, nombres: true, apellido_paterno: true, apellido_materno: true, telefono: true, direccion: true, distrito: true, deuda_castigada: true, deuda_vigente: true, otras_deudas: true, ultima_gestion: true, latitud: true, longitud: true };
function serialize(value) { return JSON.parse(JSON.stringify(value, (_key, item) => typeof item === 'object' && item?.constructor?.name === 'Decimal' ? Number(item) : item)); }
function validateEvidence(value, type, maxLength) {
  if (typeof value !== 'string' || !new RegExp(`^data:image/${type};base64,[A-Za-z0-9+/=]+$`).test(value) || value.length > maxLength) {
    throw Object.assign(new Error(type === 'png' ? 'La firma es obligatoria o no tiene un formato válido.' : 'La fotografía es obligatoria o supera el tamaño permitido.'), { statusCode: 400 });
  }
  return value;
}

async function routeForToday(id_asesor) {
  const advisorId = requireAdvisor(id_asesor); const { start, end } = todayBounds();
  const route = await prisma.ruta.findFirst({
    where: { id_asesor: advisorId, fecha_programada: { gte: start, lte: end }, estado: { not: 'CANCELADA' } },
    orderBy: [{ estado: 'asc' }, { fecha_creacion: 'desc' }],
    include: { asesor: { select: { id_asesor: true, nombres: true, apellido_paterno: true, apellido_materno: true } }, rutas_clientes: { orderBy: { secuencia: 'asc' }, include: { cliente: { select: clientSelect } } } },
  });
  return serialize(route);
}
async function summary(id_asesor) {
  const advisorId = requireAdvisor(id_asesor); const route = await routeForToday(advisorId);
  const assignments = await prisma.asignacionCliente.count({ where: { id_asesor: advisorId, estado: 'ACTIVA' } });
  const clients = route?.rutas_clientes || [];
  return { fecha: todayBounds().day, ruta: route ? { id_ruta: route.id_ruta, estado: route.estado, fecha_programada: route.fecha_programada } : null, clientes_asignados: assignments, clientes_ruta: clients.length, pendientes: clients.filter(item => item.estado_visita === 'PENDIENTE').length, gestionados: clients.filter(item => item.estado_visita !== 'PENDIENTE').length };
}
async function assignedClients(id_asesor) {
  const advisorId = requireAdvisor(id_asesor);
  const { start: todayStart, end: todayEnd } = todayBounds();
  const clientWithLatestStatus = {
    ...clientSelect,
    rutas_clientes: {
      orderBy: [{ fecha_actualizar: 'desc' }, { id_ruta_cliente: 'desc' }],
      take: 1,
      select: { estado_visita: true, fecha_actualizar: true },
    },
  };
  const routeClientInclude = {
    ruta: { select: { id_ruta: true, fecha_programada: true, fecha_creacion: true } },
    cliente: { select: clientWithLatestStatus },
  };
  const [items, activeRouteLinks, todayRouteLinks] = await Promise.all([
    prisma.asignacionCliente.findMany({
      where: { id_asesor: advisorId, estado: 'ACTIVA' },
      orderBy: { fecha_asignacion: 'desc' },
      include: { cliente: { select: clientWithLatestStatus } },
    }),
    prisma.rutaCliente.findMany({
      where: { ruta: { id_asesor: advisorId, estado: { in: ['PROGRAMADA', 'EN_PROCESO'] } } },
      orderBy: { fecha_actualizar: 'desc' },
      include: routeClientInclude,
    }),
    prisma.rutaCliente.findMany({
      where: {
        ruta: {
          id_asesor: advisorId,
          fecha_programada: { gte: todayStart, lte: todayEnd },
          estado: { not: 'CANCELADA' },
        },
      },
      orderBy: { fecha_actualizar: 'desc' },
      include: routeClientInclude,
    }),
  ]);
  const routeLinks = [...new Map(
    [...activeRouteLinks, ...todayRouteLinks].map(item => [item.id_ruta_cliente, item]),
  ).values()];
  const routeClientIds = [...new Set(routeLinks.map(item => item.id_cliente))];
  const foreignAssignments = routeClientIds.length
    ? await prisma.asignacionCliente.findMany({
      where: { id_cliente: { in: routeClientIds }, estado: 'ACTIVA', id_asesor: { not: advisorId } },
      select: { id_cliente: true },
    })
    : [];
  const foreignClientIds = new Set(foreignAssignments.map(item => item.id_cliente));
  const todayLinks = new Map(
    todayRouteLinks.map(item => [item.id_cliente, item]),
  );
  const uniqueClients = new Map();
  for (const item of items) {
    if (uniqueClients.has(item.id_cliente)) continue;
    const { rutas_clientes, ...cliente } = item.cliente;
    const latest = rutas_clientes[0];
    const todayLink = todayLinks.get(item.id_cliente);
    const estadoGestion = latest?.estado_visita === 'VISITADO' ? 'GESTIONADO' : latest?.estado_visita === 'PENDIENTE' ? 'ASIGNADO' : latest?.estado_visita || 'ASIGNADO';
    uniqueClients.set(item.id_cliente, {
      ...cliente,
      id_asignacion: item.id_asignacion,
      fecha_asignacion: item.fecha_asignacion,
      estado_asignacion: item.estado,
      fuente_asignacion: 'ASIGNACION',
      estado_gestion: estadoGestion,
      programado_hoy: Boolean(todayLink),
      estado_hoy: todayLink?.estado_visita || null,
      id_ruta_hoy: todayLink?.id_ruta || null,
      ultima_gestion: latest?.fecha_actualizar || cliente.ultima_gestion,
    });
  }
  for (const item of routeLinks) {
    if (uniqueClients.has(item.id_cliente) || foreignClientIds.has(item.id_cliente)) continue;
    const { rutas_clientes, ...cliente } = item.cliente;
    const latest = rutas_clientes[0];
    const todayLink = todayLinks.get(item.id_cliente);
    const estadoGestion = latest?.estado_visita === 'VISITADO' ? 'GESTIONADO' : latest?.estado_visita === 'PENDIENTE' ? 'ASIGNADO' : latest?.estado_visita || 'ASIGNADO';
    uniqueClients.set(item.id_cliente, {
      ...cliente,
      id_asignacion: null,
      fecha_asignacion: item.ruta.fecha_creacion || item.ruta.fecha_programada,
      estado_asignacion: 'ACTIVA',
      fuente_asignacion: 'RUTA',
      id_ruta: item.id_ruta,
      estado_gestion: estadoGestion,
      programado_hoy: Boolean(todayLink),
      estado_hoy: todayLink?.estado_visita || null,
      id_ruta_hoy: todayLink?.id_ruta || null,
      ultima_gestion: latest?.fecha_actualizar || cliente.ultima_gestion,
    });
  }
  return serialize([...uniqueClients.values()]);
}
async function updateLocation(id_asesor, payload) {
  const advisorId = requireAdvisor(id_asesor);
  const latitud = Number(payload.latitud); const longitud = Number(payload.longitud);
  const precision = payload.precision == null ? null : Number(payload.precision);
  if (!Number.isFinite(latitud) || !Number.isFinite(longitud) || Math.abs(latitud) > 90 || Math.abs(longitud) > 180) throw Object.assign(new Error('Las coordenadas recibidas no son válidas.'), { statusCode: 400 });
  const advisor = await prisma.asesor.update({ where: { id_asesor: advisorId }, data: { latitud, longitud }, select: { id_asesor: true, nombres: true, apellido_paterno: true, apellido_materno: true, latitud: true, longitud: true } });
  return serialize({ ...advisor, precision, fecha: new Date() });
}
async function setRouteStatus(id_asesor, routeId, status) {
  const advisorId = requireAdvisor(id_asesor); const id = Number(routeId);
  const route = await prisma.ruta.findFirst({ where: { id_ruta: id, id_asesor: advisorId }, include: { rutas_clientes: true } });
  if (!route) return null;
  const transitions = { PROGRAMADA: ['EN_PROCESO'], EN_PROCESO: ['FINALIZADA'], FINALIZADA: [], CANCELADA: [] };
  if (!(transitions[route.estado] || []).includes(status)) throw Object.assign(new Error(`No se puede cambiar la ruta de ${route.estado} a ${status}.`), { statusCode: 409 });
  if (status === 'FINALIZADA' && route.rutas_clientes.some(item => item.estado_visita === 'PENDIENTE')) throw Object.assign(new Error('Registra el resultado de todos los clientes antes de finalizar.'), { statusCode: 409 });
  return prisma.ruta.update({ where: { id_ruta: id }, data: { estado: status, ...(status === 'EN_PROCESO' ? { fecha_inicio_real: new Date() } : {}), ...(status === 'FINALIZADA' ? { fecha_fin_real: new Date() } : {}) } });
}
  async function createEvidenceUpload(id_asesor, payload) {
    const advisorId = requireAdvisor(id_asesor);
    const clientId = Number(payload.id_cliente);
    const routeId = Number(payload.id_ruta);
    const evidenceNumber = Number(payload.evidencia);
    if (!clientId || !routeId || ![1, 2].includes(evidenceNumber)) {
      throw Object.assign(new Error('Cliente, ruta y número de evidencia son obligatorios.'), { statusCode: 400 });
    }
  const link = await prisma.rutaCliente.findFirst({
    where: {
        id_cliente: clientId,
        id_ruta: routeId,
      estado_visita: 'PENDIENTE',
      ruta: { id_asesor: advisorId, estado: 'EN_PROCESO' },
    },
    select: {
      id_ruta_cliente: true,
      cliente: {
        select: {
          nombres: true,
          apellido_paterno: true,
          apellido_materno: true,
        },
      },
    },
  });
  if (!link) throw Object.assign(new Error('El cliente no pertenece a tu ruta activa.'), { statusCode: 403 });
  return storageService.createUpload({
      advisorId,
      clientId,
      clientName: [link.cliente.nombres, link.cliente.apellido_paterno, link.cliente.apellido_materno]
        .filter(Boolean)
        .join(' '),
      routeId,
      evidenceNumber,
    type: payload.tipo,
    contentType: payload.content_type,
    size: payload.size,
  });
}
async function registerVisit(id_asesor, payload) {
  const advisorId = requireAdvisor(id_asesor); const routeId = Number(payload.id_ruta); const clientId = Number(payload.id_cliente);
  if (!routeId || !clientId || !['GESTIONADO', 'NO_ENCONTRADO', 'REPROGRAMADO'].includes(payload.resultado)) throw Object.assign(new Error('Ruta, cliente y resultado de gestión son obligatorios.'), { statusCode: 400 });
  const clientSyncId = typeof payload.client_sync_id === 'string' ? payload.client_sync_id.trim() : '';
  if (clientSyncId && !/^[A-Za-z0-9._:-]{16,100}$/.test(clientSyncId)) throw Object.assign(new Error('El identificador de sincronización no es válido.'), { statusCode: 400 });
  if (clientSyncId) {
    const existing = await prisma.visita.findUnique({ where: { client_sync_id: clientSyncId }, include: { cliente: { select: { nombres: true, apellido_paterno: true } } } });
    if (existing) {
      if (existing.id_asesor !== advisorId) throw Object.assign(new Error('El identificador de sincronización ya está en uso.'), { statusCode: 409 });
      return serialize({ ...existing, _already_synced: true, foto_url: undefined, foto_adicional_url: undefined, video_url: undefined, firma_evidencia: undefined, cliente_nombre: `${existing.cliente.nombres} ${existing.cliente.apellido_paterno}` });
    }
  }
  const lat = Number(payload.latitud); const lng = Number(payload.longitud);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) throw Object.assign(new Error('Activa la ubicación para registrar la visita.'), { statusCode: 400 });
  const observaciones = payload.observaciones?.trim();
  if (!observaciones || observaciones.length < 5 || observaciones.length > 2000) throw Object.assign(new Error('Ingresa una descripción de al menos 5 caracteres.'), { statusCode: 400 });
  const firmaEvidencia = validateEvidence(payload.firma_evidencia, 'png', 700000);
  if (!payload.foto_evidencia_key || payload.foto_evidencia_key === payload.foto_adicional_evidencia_key) {
    throw Object.assign(new Error('Debes registrar dos fotografías diferentes.'), { statusCode: 400 });
  }
  const [fotoKey, fotoAdicionalKey] = await Promise.all([
    storageService.verifyObject(payload.foto_evidencia_key, advisorId, clientId, 'foto'),
    storageService.verifyObject(payload.foto_adicional_evidencia_key, advisorId, clientId, 'foto'),
  ]);
  return prisma.$transaction(async tx => {
    const link = await tx.rutaCliente.findFirst({ where: { id_ruta: routeId, id_cliente: clientId, ruta: { id_asesor: advisorId, estado: 'EN_PROCESO' } }, include: { cliente: { select: { nombres: true, apellido_paterno: true, deuda_castigada: true, deuda_vigente: true, otras_deudas: true } } } });
    if (!link) throw Object.assign(new Error('El cliente no pertenece a tu ruta activa.'), { statusCode: 403 });
    const deudaTotal = Number(link.cliente.deuda_castigada || 0) + Number(link.cliente.deuda_vigente || 0) + Number(link.cliente.otras_deudas || 0);
    const montoRecuperado = payload.resultado === 'GESTIONADO' ? deudaTotal : null;
    const visit = await tx.visita.create({ data: { client_sync_id: clientSyncId || null, id_ruta_cliente: link.id_ruta_cliente, id_cliente: clientId, id_asesor: advisorId, tipo_visita: 'PROGRAMADA', fecha_hora_checkin: new Date(), fecha_hora_checkout: new Date(), latitud: lat, longitud: lng, resultado: payload.resultado, es_efectiva: payload.resultado === 'GESTIONADO', monto_recaudado: montoRecuperado, fecha_promesa: payload.fecha_promesa ? new Date(payload.fecha_promesa) : null, observaciones, foto_url: fotoKey, foto_adicional_url: fotoAdicionalKey, firma_evidencia: firmaEvidencia } });
    await tx.rutaCliente.update({ where: { id_ruta_cliente: link.id_ruta_cliente }, data: { estado_visita: payload.resultado === 'GESTIONADO' ? 'VISITADO' : payload.resultado } });
    await tx.cliente.update({ where: { id_cliente: clientId }, data: { ultima_gestion: new Date() } });
    return serialize({ ...visit, foto_url: undefined, foto_adicional_url: undefined, video_url: undefined, firma_evidencia: undefined, cliente_nombre: `${link.cliente.nombres} ${link.cliente.apellido_paterno}` });
  });
}
export default { summary, routeForToday, assignedClients, updateLocation, setRouteStatus, createEvidenceUpload, registerVisit };
