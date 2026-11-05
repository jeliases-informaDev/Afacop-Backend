import { logger } from '#core/config/logger.js';
import { cacheGetManyJson, cacheSetManyJson, ttlFromEnv } from '#core/cache/redis.js';

// Nombres, apellidos y ubigeo RENIEC casi no cambian: se guardan una semana por defecto.
const PERSONA_CACHE_PREFIX = 'persona:';
const PERSONA_CACHE_TTL_SECONDS = () => ttlFromEnv('CACHE_TTL_PERSONAS_SECONDS', 7 * 24 * 60 * 60);

/**
 * Consulta en lote a la API de RRCC / Buscador para obtener datos de personas
 * (PRENOMBRES, APE_PAT, APE_MAT, UBIGEO_RENIEC) desde la tabla Operador.Personas.
 *
 * @param {string[]} documentos - Lista de números de documento (DNI, etc.)
 * @returns {Promise<Map<string, { nombres: string, apellido_paterno: string, apellido_materno: string, ubigeo: string|null }>>}
 */
export async function buscarPersonasPorLote(documentos = []) {
  const map = new Map();

  if (!Array.isArray(documentos) || documentos.length === 0) {
    return map;
  }

  // Filtrar documentos únicos y no vacíos
  const docsUnicos = [
    ...new Set(
      documentos
        .map(doc => String(doc ?? '').trim().toUpperCase())
        .filter(Boolean)
    ),
  ];

  if (docsUnicos.length === 0) {
    return map;
  }

  const baseUrl = String(process.env.RRCC_API_URL || '').trim().replace(/\/$/, '');
  const apiKey = String(process.env.RRCC_API_KEY || '').trim();

  // Si no está configurada la URL o API Key (ej. en desarrollo local sin túnel), retornamos vacío sin romper el flujo
  if (!baseUrl || !apiKey) {
    logger.debug('RRCC_API_URL o RRCC_API_KEY no configurada; se omite enriquecimiento de personas');
    return map;
  }

  // Documentos ya consultados antes: se resuelven desde Redis sin tocar la red ni SQL Server.
  const cachedPersonas = await cacheGetManyJson(docsUnicos.map(doc => PERSONA_CACHE_PREFIX + doc));
  const docsPendientes = [];
  for (const doc of docsUnicos) {
    const hit = cachedPersonas.get(PERSONA_CACHE_PREFIX + doc);
    if (hit) map.set(doc, hit);
    else docsPendientes.push(doc);
  }

  if (docsPendientes.length === 0) {
    return map;
  }

  try {
    const response = await fetch(`${baseUrl}/v1/personas/buscar-lote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        Accept: 'application/json',
      },
      body: JSON.stringify({
        documentos: docsPendientes,
      }),
      signal: AbortSignal.timeout(25000), // 25s timeout de seguridad
    });

    if (!response.ok) {
      logger.warn(
        { status: response.status, statusText: response.statusText, count: docsPendientes.length },
        'personas_lookup_batch_http_error'
      );
      return map;
    }

    const payload = await response.json();
    const personas = Array.isArray(payload)
      ? payload
      : Array.isArray(payload?.data)
        ? payload.data
        : [];

    const nuevos = [];
    for (const item of personas) {
      const doc = String(item.DNI ?? item.dni ?? item.documento ?? '').trim().toUpperCase();
      if (!doc) continue;

      const persona = {
        nombres: String(item.PRENOMBRES ?? item.prenombres ?? item.nombres ?? '').trim(),
        apellido_paterno: String(item.APE_PAT ?? item.ape_pat ?? item.apellido_paterno ?? '').trim(),
        apellido_materno: String(item.APE_MAT ?? item.ape_mat ?? item.apellido_materno ?? '').trim(),
        ubigeo: String(item.UBIGEO_RENIEC ?? item.ubigeo_reniec ?? item.ubigeo ?? '').trim() || null,
      };
      map.set(doc, persona);
      nuevos.push([PERSONA_CACHE_PREFIX + doc, persona]);
    }

    // Solo se guardan las personas encontradas; las no encontradas se vuelven a consultar.
    await cacheSetManyJson(nuevos, PERSONA_CACHE_TTL_SECONDS());

    return map;
  } catch (error) {
    // Si la conexión falla, se cae el túnel o da timeout, registramos la advertencia pero NO interrumpimos la importación
    logger.warn(
      { err: error.message, count: docsPendientes.length },
      'personas_lookup_batch_failed_silently'
    );
    return map;
  }
}
