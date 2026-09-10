import prisma from '#core/config/prisma.js';
import { env } from '#core/config/env.js';
import * as xlsx from 'xlsx';

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
      { dni: { contains: trimmedSearch, mode: "insensitive" } }, // <-- Corregido a 'dni'
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
      dni: dni, // <-- Corregido a 'dni'
    },
  });
}

async function crearAsesor(datos) {
  const nuevoAsesor = await prisma.asesor.create({
    data: {
      dni: datos.dni, // <-- Corregido a 'dni' directo
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
  if (datos.dni !== undefined) updateData.dni = datos.dni; // <-- Corregido a 'dni'
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

function normalizarHeaderKey(header) {
  if (!header || typeof header !== "string") return "";
  return header
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9,\s_]/g, "")
    .replace(/\s+/g, " ");
}

function separarNombreCompleto(nombreCadena) {
  if (!nombreCadena || typeof nombreCadena !== "string") {
    return { apellido_paterno: "", apellido_materno: "", nombres: "" };
  }

  const str = nombreCadena.trim();
  if (!str) {
    return { apellido_paterno: "", apellido_materno: "", nombres: "" };
  }

  if (str.includes(",")) {
    const partes = str.split(",");
    const rawApellidos = partes[0] ? partes[0].trim() : "";
    const rawNombres = partes.slice(1).join(",").trim();

    const palabrasApellidos = rawApellidos ? rawApellidos.split(/\s+/).filter(Boolean) : [];

    let apellido_paterno = "";
    let apellido_materno = "";

    if (palabrasApellidos.length >= 2) {
      apellido_paterno = palabrasApellidos[0];
      apellido_materno = palabrasApellidos.slice(1).join(" ");
    } else if (palabrasApellidos.length === 1) {
      apellido_paterno = palabrasApellidos[0];
      apellido_materno = "";
    }

    const nombresFinal = rawNombres || rawApellidos;

    return {
      apellido_paterno,
      apellido_materno,
      nombres: nombresFinal
    };
  }

  const palabras = str.split(/\s+/).filter(Boolean);

  if (palabras.length >= 3) {
    return {
      apellido_paterno: palabras[0],
      apellido_materno: palabras[1],
      nombres: palabras.slice(2).join(" ")
    };
  } else if (palabras.length === 2) {
    return {
      apellido_paterno: palabras[0],
      apellido_materno: palabras[1],
      nombres: str
    };
  } else if (palabras.length === 1) {
    return {
      apellido_paterno: palabras[0],
      apellido_materno: "",
      nombres: palabras[0]
    };
  }

  return { apellido_paterno: "", apellido_materno: "", nombres: str };
}

function extraerCoordenadas(rowObj) {
  let valCombinado = null;
  for (const key of Object.keys(rowObj)) {
    if (key.includes("latitud") && key.includes("longitud")) {
      valCombinado = rowObj[key];
      break;
    }
  }

  if (valCombinado !== null && valCombinado !== undefined && String(valCombinado).trim() !== "") {
    const str = String(valCombinado).trim();
    const partes = str.split(/[,;\s]+/).filter(Boolean);
    if (partes.length >= 2) {
      const lat = parseFloat(partes[0]);
      const lng = parseFloat(partes[1]);
      return {
        latitud: isNaN(lat) ? null : lat,
        longitud: isNaN(lng) ? null : lng
      };
    }
  }

  let latVal = null;
  let lngVal = null;

  for (const key of Object.keys(rowObj)) {
    if (key === "latitud" || key === "lat") latVal = rowObj[key];
    if (key === "longitud" || key === "lng" || key === "long") lngVal = rowObj[key];
  }

  const lat = latVal !== null && latVal !== undefined && latVal !== "" ? parseFloat(latVal) : null;
  const lng = lngVal !== null && lngVal !== undefined && lngVal !== "" ? parseFloat(lngVal) : null;

  return {
    latitud: lat !== null && !isNaN(lat) ? lat : null,
    longitud: lng !== null && !isNaN(lng) ? lng : null
  };
}

async function importarAsesores(fileBuffer) {
  const workbook = xlsx.read(fileBuffer, { type: "buffer", cellDates: true });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const rows = xlsx.utils.sheet_to_json(sheet);

  let insertados = 0;
  let errores = 0;
  const detalleErrores = [];

  for (let i = 0; i < rows.length; i++) {
    const rawRow = rows[i];
    
    const rowObj = {};
    for (const key of Object.keys(rawRow)) {
      const normKey = normalizarHeaderKey(key);
      if (normKey) {
        rowObj[normKey] = rawRow[key];
      }
    }

    const rawDni = rowObj.dni ?? rowObj.numero_documento ?? rowObj.documento ?? rowObj.doc_identidad ?? rowObj.num_doc ?? rowObj.codigo;
    const rawNombres = rowObj.nombres ?? rowObj.nombre ?? rowObj.colaborador ?? rowObj.asesor ?? rowObj.nombre_completo;
    const rawApPaterno = rowObj.apellido_paterno ?? rowObj.paterno ?? rowObj.ap_paterno;
    const rawApMaterno = rowObj.apellido_materno ?? rowObj.materno ?? rowObj.ap_materno;
    const rawTelefono = rowObj.telefono ?? rowObj.telef ?? rowObj.celular;
    const rawCorreo = rowObj.correo ?? rowObj.email ?? rowObj.mail;
    const rawDistrito = rowObj.distrito ?? rowObj["distrito base"] ?? rowObj.distrito_base ?? rowObj.distritobase ?? rowObj.dist;
    const rawEstado = rowObj.estado;

    const dni = rawDni !== null && rawDni !== undefined ? String(rawDni).trim() : null;

    let nombres = rawNombres !== null && rawNombres !== undefined ? String(rawNombres).trim() : "";
    let apellido_paterno = rawApPaterno !== null && rawApPaterno !== undefined ? String(rawApPaterno).trim() : "";
    let apellido_materno = rawApMaterno !== null && rawApMaterno !== undefined ? String(rawApMaterno).trim() : "";

    if (nombres && (!apellido_paterno || apellido_paterno === "")) {
      const parsed = separarNombreCompleto(nombres);
      nombres = parsed.nombres;
      apellido_paterno = parsed.apellido_paterno;
      apellido_materno = parsed.apellido_materno;
    }

    if (!dni || !nombres) {
      errores++;
      detalleErrores.push({
        fila: i + 2,
        dni: dni || "",
        errores: ["El DNI y los Nombres son campos obligatorios"]
      });
      continue;
    }

    const telefono = rawTelefono !== null && rawTelefono !== undefined && String(rawTelefono).trim() !== ""
      ? String(rawTelefono).trim()
      : null;
    const correo = rawCorreo !== null && rawCorreo !== undefined && String(rawCorreo).trim() !== ""
      ? String(rawCorreo).trim()
      : null;
    const distrito = rawDistrito !== null && rawDistrito !== undefined && String(rawDistrito).trim() !== ""
      ? String(rawDistrito).trim()
      : null;
    const estado = rawEstado !== null && rawEstado !== undefined && String(rawEstado).trim() !== ""
      ? String(rawEstado).trim().toUpperCase()
      : "ACTIVO";

    const { latitud, longitud } = extraerCoordenadas(rowObj);

    try {
      const existente = await prisma.asesor.findUnique({
        where: { dni: dni } // <-- Corregido a 'dni'
      });

      if (existente) {
        errores++;
        detalleErrores.push({
          fila: i + 2,
          dni,
          errores: [`El DNI ${dni} ya se encuentra registrado en el sistema`]
        });
        continue;
      }

      await prisma.asesor.create({
        data: {
          dni: dni, // <-- Corregido a 'dni'
          nombres,
          apellido_paterno: apellido_paterno || "",
          apellido_materno: apellido_materno || "",
          telefono,
          correo,
          distrito,
          estado,
          latitud,
          longitud
        }
      });
      insertados++;
    } catch (err) {
      errores++;
      detalleErrores.push({
        fila: i + 2,
        dni,
        errores: [err.message]
      });
    }
  }

  return {
    insertados,
    actualizados: 0,
    errores,
    detalleErrores
  };
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
  importarAsesores,
};