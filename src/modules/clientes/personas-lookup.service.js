import { logger } from '#core/config/logger.js';

/**
 * Consulta en lote a la API de RRCC / Buscador para obtener datos de personas
 * (PRENOMBRES, APE_PAT, APE_MAT) desde la tabla Operador.Personas.
 *
 * @param {string[]} documentos - Lista de números de documento (DNI, etc.)
 * @returns {Promise<Map<string, { nombres: string, apellido_paterno: string, apellido_materno: string }>>}
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

  try {
    const response = await fetch(`${baseUrl}/v1/personas/buscar-lote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        Accept: 'application/json',
      },
      body: JSON.stringify({
        documentos: docsUnicos,
      }),
      signal: AbortSignal.timeout(25000), // 25s timeout de seguridad
    });

    if (!response.ok) {
      logger.warn(
        { status: response.status, statusText: response.statusText, count: docsUnicos.length },
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

    for (const item of personas) {
      const doc = String(item.DNI ?? item.dni ?? item.documento ?? '').trim().toUpperCase();
      if (!doc) continue;

      map.set(doc, {
        nombres: String(item.PRENOMBRES ?? item.prenombres ?? item.nombres ?? '').trim(),
        apellido_paterno: String(item.APE_PAT ?? item.ape_pat ?? item.apellido_paterno ?? '').trim(),
        apellido_materno: String(item.APE_MAT ?? item.ape_mat ?? item.apellido_materno ?? '').trim(),
      });
    }

    return map;
  } catch (error) {
    // Si la conexión falla, se cae el túnel o da timeout, registramos la advertencia pero NO interrumpimos la importación
    logger.warn(
      { err: error.message, count: docsUnicos.length },
      'personas_lookup_batch_failed_silently'
    );
    return map;
  }
}
