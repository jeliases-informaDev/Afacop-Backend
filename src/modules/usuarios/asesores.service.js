import prisma from '#core/config/prisma.js';
import { env } from '#core/config/env.js';

const geocodeCache = new Map();
let lastGeocodeRequest = 0;
const MAP_LINK_HOSTS = new Set([
  'maps.app.goo.gl', 'goo.gl', 'www.google.com', 'google.com', 'maps.google.com',
  'waze.com', 'www.waze.com', 'ul.waze.com', 'maps.apple.com',
  'openstreetmap.org', 'www.openstreetmap.org',
]);
const mapLinkCache = new Map();

function extractMapCoordinates(value) {
  const decoded = decodeURIComponent(String(value));
  const patterns = [
    /!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/,
    /[?&](?:q|ll|query|destination|daddr)=(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/,
    /[?&]to=ll\.(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/,
    /@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/,
  ];
  for (const pattern of patterns) {
    const match = decoded.match(pattern);
    if (match) return { latitud: Number(match[1]), longitud: Number(match[2]) };
  }
  const osm = decoded.match(/[?&]mlat=(-?\d+(?:\.\d+)?).*?[?&]mlon=(-?\d+(?:\.\d+)?)/);
  if (osm) return { latitud: Number(osm[1]), longitud: Number(osm[2]) };
  return null;
}

export async function resolveMapCoordinates(sharedUrl) {
  const cacheKey = String(sharedUrl).trim();
  const cached = mapLinkCache.get(cacheKey);
  if (cached) return cached;
  let current = new URL(sharedUrl);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);
  try {
    for (let redirects = 0; redirects <= 5; redirects++) {
      if (current.protocol !== 'https:' || !MAP_LINK_HOSTS.has(current.hostname.toLowerCase())) {
        throw Object.assign(new Error('El enlace debe pertenecer a Google Maps, Waze, Apple Maps u OpenStreetMap'), { statusCode: 400 });
      }
      const direct = extractMapCoordinates(current.href);
      if (direct) { mapLinkCache.set(cacheKey, direct); return direct; }
      const response = await fetch(current, {
        method: 'GET', redirect: 'manual', signal: controller.signal,
        headers: { 'User-Agent': 'Radar360-AFACOP/1.0 (maps-link-resolver)' },
      });
      if (response.status < 300 || response.status >= 400) break;
      const location = response.headers.get('location');
      if (!location) break;
      current = new URL(location, current);
    }
    const resolved = extractMapCoordinates(current.href);
    if (!resolved) throw Object.assign(new Error('El enlace compartido no contiene una ubicación reconocible'), { statusCode: 400 });
    mapLinkCache.set(cacheKey, resolved);
    return resolved;
  } finally {
    clearTimeout(timeout);
  }
}

async function geocodificarUbicacion(latitud, longitud) {
  const cacheKey = `${Number(latitud).toFixed(5)},${Number(longitud).toFixed(5)}`;
  const cached = geocodeCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) return cached.value;

  const waitMs = Math.max(0, 1000 - (Date.now() - lastGeocodeRequest));
  if (waitMs) await new Promise(resolve => setTimeout(resolve, waitMs));
  lastGeocodeRequest = Date.now();

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);
  try {
    const baseUrl = env.GEOCODING_BASE_URL;
    const url = new URL('/reverse', baseUrl);
    url.search = new URLSearchParams({
      format: 'geocodejson', lat: String(latitud), lon: String(longitud),
      zoom: '18', addressdetails: '1', layer: 'address', 'accept-language': 'es',
    }).toString();
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: 'application/json', 'User-Agent': 'Radar360-AFACOP/1.0 (reverse-geocoding)' },
    });
    if (!response.ok) throw Object.assign(new Error('No se pudo consultar el distrito de la ubicación'), { statusCode: 502 });
    const data = await response.json();
    const geocoding = data.features?.[0]?.properties?.geocoding || {};
    const countryCode = String(geocoding.country_code || '').toLowerCase();
    const districtCandidates = [geocoding.district, geocoding.city_district, geocoding.borough];
    if (countryCode === 'pe') districtCandidates.push(geocoding.city, geocoding.municipality, geocoding.county);
    else districtCandidates.push(geocoding.municipality, geocoding.city, geocoding.county);
    const distrito = districtCandidates.find(value => value && !/^provincia\s+de\s+/i.test(value)) || null;
    const value = {
      distrito,
      provincia: geocoding.county || geocoding.city || null,
      departamento: geocoding.state || geocoding.region || null,
      pais: geocoding.country || null,
      direccion: geocoding.label || null,
      latitud: Number(latitud),
      longitud: Number(longitud),
    };
    geocodeCache.set(cacheKey, { value, expiresAt: Date.now() + 24 * 60 * 60 * 1000 });
    return value;
  } catch (error) {
    if (error.name === 'AbortError') throw Object.assign(new Error('La consulta de ubicación excedió el tiempo permitido'), { statusCode: 504 });
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

async function geocodificarEnlace(sharedUrl) {
  const coords = await resolveMapCoordinates(sharedUrl);
  return geocodificarUbicacion(coords.latitud, coords.longitud);
}

function mapearAsesor(asesor) {
  if (!asesor) return null;
  
  const apellidos = `${asesor.apellido_paterno ?? ""} ${asesor.apellido_materno ?? ""}`.trim();
  
  const rutaActiva = Number(asesor._count?.rutas || 0) > 0;

  return {
    id_asesor: asesor.id_asesor,
    id: asesor.id_asesor,
    dni: asesor.dni,
    numero_documento: asesor.dni, // Compatibilidad extra por si algún módulo lo espera
    nombres: asesor.nombres,
    apellidos,
    apellido_paterno: asesor.apellido_paterno,
    apellido_materno: asesor.apellido_materno,
    telefono: asesor.telefono,
    correo: asesor.correo,
    email: asesor.correo,
    distrito: asesor.distrito,
    estado: asesor.estado,
    ruta_activa: rutaActiva,
    estado_jornada: rutaActiva ? "EN_RUTA" : "INACTIVO",
    latitud: asesor.latitud !== null && asesor.latitud !== undefined ? Number(asesor.latitud) : null,
    longitud: asesor.longitud !== null && asesor.longitud !== undefined ? Number(asesor.longitud) : null,
  };
}

async function obtenerAsesores({ page = 1, limit = 12, search = "", estado } = {}) {
  const where = {};

  if (search && search.trim() !== "") {
    const trimmedSearch = search.trim();
    where.OR = [
      { dni: { contains: trimmedSearch, mode: "insensitive" } },
      { nombres: { contains: trimmedSearch, mode: "insensitive" } },
      { apellido_paterno: { contains: trimmedSearch, mode: "insensitive" } },
      { apellido_materno: { contains: trimmedSearch, mode: "insensitive" } },
      { telefono: { contains: trimmedSearch, mode: "insensitive" } },
    ];
  }

  if (estado && estado.trim() !== "") {
    where.estado = estado.trim().toUpperCase();
  }

  const skip = (page - 1) * limit;
  const take = limit;

  const [total, asesores] = await Promise.all([
    prisma.asesor.count({ where }),
    prisma.asesor.findMany({
      where,
      skip,
      take,
      include: {
        _count: {
          select: { rutas: { where: { estado: "EN_PROCESO" } } },
        },
      },
      orderBy: [
        { apellido_paterno: "asc" },
        { apellido_materno: "asc" },
        { nombres: "asc" },
      ],
    }),
  ]);

  const data = asesores.map(mapearAsesor);
  const totalPages = Math.ceil(total / limit);

  return {
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
  };
}

async function obtenerAsesorPorId(id) {
  const asesor = await prisma.asesor.findUnique({
    where: {
      id_asesor: id,
    },
  });

  if (!asesor) {
    return null;
  }

  return {
    data: mapearAsesor(asesor),
  };
}

async function obtenerAsesorPorDni(dni) {
  return prisma.asesor.findUnique({
    where: {
      dni: dni,
    },
  });
}

async function crearAsesor(datos) {
  const dniValor = datos.dni || datos.numero_documento;
  
  const nuevoAsesor = await prisma.asesor.create({
    data: {
      dni: dniValor ? String(dniValor).trim() : null,
      nombres: datos.nombres,
      apellido_paterno: datos.apellido_paterno,
      apellido_materno: datos.apellido_materno,
      telefono: datos.telefono || null,
      correo: datos.correo || null,
      distrito: datos.distrito || null,
      estado: "ACTIVO",
      latitud: datos.latitud !== undefined && datos.latitud !== null && datos.latitud !== "" ? Number(datos.latitud) : null,
      longitud: datos.longitud !== undefined && datos.longitud !== null && datos.longitud !== "" ? Number(datos.longitud) : null,
    },
  });

  return {
    data: mapearAsesor(nuevoAsesor),
  };
}


async function actualizarAsesor(id, datos) {
  const updateData = {};
  if (datos.dni !== undefined) updateData.dni = datos.dni;
  if (datos.nombres !== undefined) updateData.nombres = datos.nombres;
  if (datos.apellido_paterno !== undefined) updateData.apellido_paterno = datos.apellido_paterno;
  if (datos.apellido_materno !== undefined) updateData.apellido_materno = datos.apellido_materno;
  if (datos.telefono !== undefined) updateData.telefono = datos.telefono;
  if (datos.correo !== undefined) updateData.correo = datos.correo;
  if (datos.distrito !== undefined) updateData.distrito = datos.distrito;
  if (datos.estado !== undefined) updateData.estado = datos.estado;
  
  if (datos.latitud !== undefined) {
    updateData.latitud = (datos.latitud !== null && datos.latitud !== "") ? Number(datos.latitud) : null;
  }
  if (datos.longitud !== undefined) {
    updateData.longitud = (datos.longitud !== null && datos.longitud !== "") ? Number(datos.longitud) : null;
  }

  const asesorActualizado = await prisma.$transaction(async tx => {
    const advisor = await tx.asesor.update({
      where: { id_asesor: id },
      data: updateData,
    });
    if (updateData.estado) {
      await tx.usuario.updateMany({
        where: { id_asesor: id },
        data: { estado: updateData.estado, token_version: { increment: 1 } },
      });
    }
    return advisor;
  });

  return {
    data: mapearAsesor(asesorActualizado),
  };
}

async function actualizarEstado(id, estado) {
  const asesorActualizado = await prisma.$transaction(async tx => {
    const advisor = await tx.asesor.update({
      where: { id_asesor: id },
      data: { estado },
    });
    await tx.usuario.updateMany({
      where: { id_asesor: id },
      data: { estado, token_version: { increment: 1 } },
    });
    return advisor;
  });

  return {
    data: mapearAsesor(asesorActualizado),
  };
}

async function eliminarAsesor(id) {
  return actualizarEstado(id, 'INACTIVO');
}

export default {
  geocodificarUbicacion,
  geocodificarEnlace,
  obtenerAsesores,
  obtenerAsesorPorId,
  obtenerAsesorPorDni,
  crearAsesor,
  actualizarAsesor,
  actualizarEstado,
  eliminarAsesor,
};