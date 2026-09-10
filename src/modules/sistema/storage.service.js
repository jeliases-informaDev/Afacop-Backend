import crypto from 'node:crypto';
import { HeadObjectCommand, PutObjectCommand, S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { env } from '#core/config/env.js';

const TYPES = {
  foto: { contentTypes: { 'image/jpeg': 'jpg' }, maxBytes: 4 * 1024 * 1024 },
};
let client;
function configured() { return Boolean(env.B2_ENDPOINT && env.B2_REGION && env.B2_BUCKET && env.B2_KEY_ID && env.B2_APPLICATION_KEY); }
function getClient() {
  if (!configured()) throw Object.assign(new Error('El almacenamiento de evidencias no está configurado.'), { statusCode: 503, code: 'EVIDENCE_STORAGE_NOT_CONFIGURED' });
  if (!client) client = new S3Client({ endpoint: env.B2_ENDPOINT, region: env.B2_REGION, credentials: { accessKeyId: env.B2_KEY_ID, secretAccessKey: env.B2_APPLICATION_KEY }, forcePathStyle: true });
  return client;
}
function expectedPrefix() { return 'evidencias/'; }
function datePath(date = new Date()) {
  return [
    String(date.getUTCFullYear()),
    String(date.getUTCMonth() + 1).padStart(2, '0'),
    String(date.getUTCDate()).padStart(2, '0'),
  ].join('/');
}
function safeClientName(value) {
  const normalized = String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
  if (!normalized) {
    throw Object.assign(new Error('El cliente no tiene un nombre válido para almacenar la evidencia.'), { statusCode: 400, code: 'INVALID_CLIENT_NAME' });
  }
  return normalized;
}
function ownershipSignature({ advisorId, clientId, type, slot, timestamp, id }) {
  return crypto
    .createHmac('sha256', env.JWT_SECRET)
    .update([Number(advisorId), Number(clientId), type, Number(slot), timestamp, id].join(':'))
    .digest('hex')
    .slice(0, 24);
}
function validateOwnedKey(key, advisorId, clientId, type) {
  const config = TYPES[type];
  const validExtension = config && Object.values(config.contentTypes).some(extension => key?.endsWith(`.${extension}`));
  const filename = typeof key === 'string' ? key.split('/').at(-1) : '';
  const match = filename.match(/^([a-z]+)-(1|2)-(\d+)-([0-9a-f-]{36})-([0-9a-f]{24})\.([a-z0-9]+)$/i);
  const [, keyType, slot, timestamp, id, suppliedSignature] = match || [];
  const expectedSignature = match
    ? ownershipSignature({ advisorId, clientId, type: keyType, slot, timestamp, id })
    : '';
  const validSignature = suppliedSignature && expectedSignature
    && crypto.timingSafeEqual(Buffer.from(suppliedSignature), Buffer.from(expectedSignature));
  if (!config || typeof key !== 'string' || !key.startsWith(expectedPrefix()) || keyType !== type || !validExtension || !validSignature || key.length > 255) {
    throw Object.assign(new Error(`La evidencia de ${type} no es válida para este asesor y cliente.`), { statusCode: 400, code: 'INVALID_EVIDENCE_KEY' });
  }
  return key;
}
async function createUpload({ advisorId, clientId, clientName, routeId, evidenceNumber, type, contentType, size }) {
  const config = TYPES[type];
  const bytes = Number(size);
  const extension = config?.contentTypes?.[contentType];
  if (!config || !extension || !Number.isInteger(bytes) || bytes < 1 || bytes > config.maxBytes) {
    throw Object.assign(new Error('La foto debe ser JPEG y pesar como máximo 4 MB.'), { statusCode: 400, code: 'INVALID_EVIDENCE_FILE' });
  }
  const numericRouteId = Number(routeId);
  const slot = Number(evidenceNumber);
  if (!Number.isInteger(numericRouteId) || numericRouteId < 1 || ![1, 2].includes(slot)) {
    throw Object.assign(new Error('La ruta y el número de evidencia no son válidos.'), { statusCode: 400, code: 'INVALID_EVIDENCE_CONTEXT' });
  }
  const timestamp = Date.now();
  const id = crypto.randomUUID();
  const signature = ownershipSignature({ advisorId, clientId, type, slot, timestamp, id });
  const key = `${expectedPrefix()}${datePath()}/${safeClientName(clientName)}/${type}-${slot}-${timestamp}-${id}-${signature}.${extension}`;
  const uploadUrl = await getSignedUrl(getClient(), new PutObjectCommand({ Bucket: env.B2_BUCKET, Key: key, ContentType: contentType, ContentLength: bytes }), { expiresIn: 300 });
  return { key, uploadUrl, contentType, maxBytes: config.maxBytes, expiresIn: 300 };
}
async function verifyObject(key, advisorId, clientId, type) {
  const ownedKey = validateOwnedKey(key, advisorId, clientId, type);
  try {
    const object = await getClient().send(new HeadObjectCommand({ Bucket: env.B2_BUCKET, Key: ownedKey }));
    const config = TYPES[type];
    if (!config.contentTypes[object.ContentType] || !object.ContentLength || object.ContentLength > config.maxBytes) throw new Error('metadata');
  } catch {
    throw Object.assign(new Error(`No se encontró la evidencia de ${type} cargada correctamente.`), { statusCode: 400, code: 'EVIDENCE_UPLOAD_INCOMPLETE' });
  }
  return ownedKey;
}
async function createDownloadUrl(key) {
  if (!key) return null;
  return getSignedUrl(getClient(), new GetObjectCommand({ Bucket: env.B2_BUCKET, Key: key }), { expiresIn: 600 });
}

export default { createUpload, verifyObject, createDownloadUrl };