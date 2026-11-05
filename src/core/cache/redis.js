import Redis from 'ioredis';
import { logger } from '#core/config/logger.js';

/**
 * Capa de caché sobre Redis con tolerancia total a fallos.
 *
 * Reglas de diseño:
 *  - Redis es SIEMPRE opcional: sin REDIS_URL, o si el servidor no responde,
 *    todas las funciones se comportan como "no hay caché" y el flujo original
 *    (base de datos / RRCC-API) continúa sin errores.
 *  - Ninguna función de este módulo lanza excepciones por fallos de Redis.
 *  - Los valores se guardan como JSON.
 */

const KEY_PREFIX = 'radar360:';
const COMMAND_TIMEOUT_MS = 500;
const ERROR_LOG_INTERVAL_MS = 30_000;

let client;
let injected = false;
let lastErrorLogAt = 0;
const inFlight = new Map();

function logRedisProblem(message, err) {
  const now = Date.now();
  if (now - lastErrorLogAt < ERROR_LOG_INTERVAL_MS) return;
  lastErrorLogAt = now;
  logger.warn({ err: err?.message }, message);
}

function createClient(url) {
  const instance = new Redis(url, {
    keyPrefix: KEY_PREFIX,
    connectTimeout: 2000,
    commandTimeout: COMMAND_TIMEOUT_MS,
    // Si Redis cae, los comandos fallan de inmediato en lugar de acumularse en memoria.
    enableOfflineQueue: false,
    maxRetriesPerRequest: 1,
    retryStrategy: attempt => Math.min(attempt * 500, 10_000),
  });
  instance.on('error', err => logRedisProblem('redis_connection_error', err));
  instance.on('ready', () => logger.info('redis_connection_ready'));
  return instance;
}

function getClient() {
  if (injected) return client || null;
  if (client) return client;
  const url = String(process.env.REDIS_URL || '').trim();
  if (!url) return null;
  try {
    client = createClient(url);
  } catch (err) {
    logRedisProblem('redis_client_creation_failed', err);
    client = null;
  }
  return client || null;
}

function isUsable(redis) {
  // Los dobles de prueba no exponen "status"; ioredis sí.
  return Boolean(redis) && (redis.status === undefined || redis.status === 'ready');
}

/**
 * Abre la conexión al arrancar el servidor para que la primera petición ya
 * encuentre Redis listo. Sin REDIS_URL no hace nada y el sistema opera sin caché.
 *
 * @returns {boolean} true si hay un Redis configurado.
 */
export function initCache() {
  const enabled = Boolean(getClient());
  logger.info({ enabled }, enabled ? 'redis_cache_enabled' : 'redis_cache_disabled_no_url');
  return enabled;
}

/**
 * Indica si hay un Redis configurado (no garantiza que esté disponible en este instante).
 */
export function cacheEnabled() {
  return Boolean(getClient());
}

/**
 * Lee un valor JSON. Devuelve null si no existe, si Redis no está disponible o si falla.
 *
 * @param {string} key
 * @returns {Promise<any|null>}
 */
export async function cacheGetJson(key) {
  const redis = getClient();
  if (!isUsable(redis)) return null;
  try {
    const raw = await redis.get(key);
    return raw === null || raw === undefined ? null : JSON.parse(raw);
  } catch (err) {
    logRedisProblem('redis_get_failed', err);
    return null;
  }
}

/**
 * Guarda un valor JSON con vencimiento. Nunca lanza excepción.
 *
 * @param {string} key
 * @param {any} value
 * @param {number} ttlSeconds
 * @returns {Promise<boolean>} true si se guardó.
 */
export async function cacheSetJson(key, value, ttlSeconds) {
  const redis = getClient();
  if (!isUsable(redis) || value === undefined) return false;
  try {
    await redis.set(key, JSON.stringify(value), 'EX', Math.max(1, Math.floor(ttlSeconds)));
    return true;
  } catch (err) {
    logRedisProblem('redis_set_failed', err);
    return false;
  }
}

/**
 * Lee varias claves en una sola ida a Redis.
 *
 * @param {string[]} keys
 * @returns {Promise<Map<string, any>>} Solo contiene las claves encontradas.
 */
export async function cacheGetManyJson(keys = []) {
  const found = new Map();
  const redis = getClient();
  if (!isUsable(redis) || keys.length === 0) return found;
  try {
    const values = await redis.mget(...keys);
    values.forEach((raw, index) => {
      if (raw !== null && raw !== undefined) found.set(keys[index], JSON.parse(raw));
    });
  } catch (err) {
    logRedisProblem('redis_mget_failed', err);
    return new Map();
  }
  return found;
}

/**
 * Guarda varias claves en una sola ida a Redis.
 *
 * @param {Array<[string, any]>} entries
 * @param {number} ttlSeconds
 * @returns {Promise<boolean>}
 */
export async function cacheSetManyJson(entries = [], ttlSeconds) {
  const redis = getClient();
  if (!isUsable(redis) || entries.length === 0) return false;
  try {
    const pipeline = redis.pipeline();
    const ttl = Math.max(1, Math.floor(ttlSeconds));
    for (const [key, value] of entries) {
      pipeline.set(key, JSON.stringify(value), 'EX', ttl);
    }
    await pipeline.exec();
    return true;
  } catch (err) {
    logRedisProblem('redis_pipeline_failed', err);
    return false;
  }
}

/**
 * Patrón "caché con carga": devuelve el valor en caché o ejecuta `loader`,
 * guarda su resultado y lo devuelve.
 *
 * Además evita la "estampida": si varias peticiones simultáneas piden la misma
 * clave sin caché, solo una ejecuta `loader` y las demás esperan su resultado.
 * Esto protege a la base de datos aun cuando Redis esté apagado.
 *
 * Si `loader` lanza, el error se propaga tal cual y no se guarda nada.
 *
 * @param {string} key
 * @param {number} ttlSeconds
 * @param {() => Promise<any>} loader
 * @returns {Promise<any>}
 */
export async function cached(key, ttlSeconds, loader) {
  const hit = await cacheGetJson(key);
  if (hit !== null) return hit;

  if (inFlight.has(key)) return inFlight.get(key);

  const promise = (async () => {
    try {
      const value = await loader();
      await cacheSetJson(key, value, ttlSeconds);
      return value;
    } finally {
      inFlight.delete(key);
    }
  })();
  inFlight.set(key, promise);
  return promise;
}

/**
 * Lee un entero positivo de una variable de entorno o devuelve el valor por defecto.
 */
export function ttlFromEnv(name, defaultSeconds) {
  const value = Number(process.env[name]);
  return Number.isFinite(value) && value > 0 ? Math.floor(value) : defaultSeconds;
}

/**
 * Solo para pruebas: reemplaza el cliente por un doble.
 * Pasar `null` desactiva la caché por completo.
 */
export function setCacheClient(fake) {
  client = fake;
  injected = true;
  inFlight.clear();
}

/**
 * Solo para pruebas: vuelve a decidir el cliente según REDIS_URL.
 */
export function resetCacheClient() {
  client = undefined;
  injected = false;
  inFlight.clear();
}

/**
 * Cierra la conexión (apagado ordenado del servidor).
 */
export async function closeCache() {
  const redis = client;
  client = undefined;
  injected = false;
  if (!redis || typeof redis.quit !== 'function') return;
  try {
    await redis.quit();
  } catch {
    redis.disconnect?.();
  }
}
