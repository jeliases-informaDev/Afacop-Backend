import test from 'node:test';
import assert from 'node:assert/strict';

// El módulo de almacenamiento importa la configuración de entorno al cargarse,
// que exige estas variables. Se definen antes del import dinámico para no
// depender de que exista un .env real (igual que el resto de la suite).
process.env.DATABASE_URL ||= 'postgresql://test:test@localhost:5432/test';
process.env.JWT_SECRET ||= 'test-jwt-secret-with-at-least-thirty-two-characters';
process.env.MFA_ENCRYPTION_KEY ||= 'independent-test-mfa-key-with-at-least-32-characters';

const { default: storageService, ownershipSignature, validateOwnedKey } = await import(
  '../src/modules/sistema/storage.service.js'
);

function buildKey({ advisorId = 10, clientId = 20, type = 'foto', slot = 1, timestamp = 1_700_000_000_000, id = '11111111-1111-4111-8111-111111111111', extension = 'jpg' } = {}) {
  const signature = ownershipSignature({ advisorId, clientId, type, slot, timestamp, id });
  return {
    key: `evidencias/2026/01/01/juan-perez/${type}-${slot}-${timestamp}-${id}-${signature}.${extension}`,
    advisorId, clientId, type,
  };
}

test('ownershipSignature es determinística para los mismos datos', () => {
  const input = { advisorId: 10, clientId: 20, type: 'foto', slot: 1, timestamp: 1_700_000_000_000, id: 'abc' };
  assert.equal(ownershipSignature(input), ownershipSignature({ ...input }));
});

test('ownershipSignature cambia si cambia cualquier campo de propiedad', () => {
  const base = { advisorId: 10, clientId: 20, type: 'foto', slot: 1, timestamp: 1_700_000_000_000, id: 'abc' };
  const baseline = ownershipSignature(base);
  assert.notEqual(ownershipSignature({ ...base, advisorId: 11 }), baseline);
  assert.notEqual(ownershipSignature({ ...base, clientId: 21 }), baseline);
  assert.notEqual(ownershipSignature({ ...base, type: 'firma' }), baseline);
  assert.notEqual(ownershipSignature({ ...base, slot: 2 }), baseline);
});

test('validateOwnedKey acepta una clave de foto bien formada para su dueño', () => {
  const { key, advisorId, clientId, type } = buildKey();
  assert.equal(validateOwnedKey(key, advisorId, clientId, type), key);
});

test('validateOwnedKey acepta una clave de firma bien formada (slot fijo 1)', () => {
  const { key, advisorId, clientId, type } = buildKey({ type: 'firma', extension: 'png' });
  assert.equal(validateOwnedKey(key, advisorId, clientId, type), key);
});

test('validateOwnedKey rechaza una clave con la firma HMAC alterada', () => {
  const { key, advisorId, clientId, type } = buildKey();
  const tampered = key.replace(/-([0-9a-f]{24})\.jpg$/, (_match, signature) => {
    const flipped = (signature[0] === '0' ? '1' : '0') + signature.slice(1);
    return `-${flipped}.jpg`;
  });
  assert.throws(() => validateOwnedKey(tampered, advisorId, clientId, type), /INVALID_EVIDENCE_KEY|no es válida/);
});

test('validateOwnedKey rechaza una clave válida de otro asesor', () => {
  const { key, clientId, type } = buildKey({ advisorId: 10 });
  assert.throws(() => validateOwnedKey(key, 99, clientId, type), (error) => error.code === 'INVALID_EVIDENCE_KEY');
});

test('validateOwnedKey rechaza una clave válida de otro cliente', () => {
  const { key, advisorId, type } = buildKey({ clientId: 20 });
  assert.throws(() => validateOwnedKey(key, advisorId, 99, type), (error) => error.code === 'INVALID_EVIDENCE_KEY');
});

test('validateOwnedKey rechaza cuando se reutiliza la clave de una foto como firma', () => {
  const { key, advisorId, clientId } = buildKey({ type: 'foto', extension: 'jpg' });
  assert.throws(() => validateOwnedKey(key, advisorId, clientId, 'firma'), (error) => error.code === 'INVALID_EVIDENCE_KEY');
});

test('validateOwnedKey rechaza una extensión que no corresponde al tipo', () => {
  const { advisorId, clientId } = buildKey();
  const wrongExtension = buildKey({ extension: 'png' }).key;
  assert.throws(() => validateOwnedKey(wrongExtension, advisorId, clientId, 'foto'), (error) => error.code === 'INVALID_EVIDENCE_KEY');
});

test('validateOwnedKey rechaza claves fuera del prefijo evidencias/', () => {
  const { key, advisorId, clientId, type } = buildKey();
  assert.throws(() => validateOwnedKey(key.replace('evidencias/', 'otra-carpeta/'), advisorId, clientId, type), (error) => error.code === 'INVALID_EVIDENCE_KEY');
});

test('validateOwnedKey rechaza tipos no soportados', () => {
  const { key, advisorId, clientId } = buildKey();
  assert.throws(() => validateOwnedKey(key, advisorId, clientId, 'video'), (error) => error.code === 'INVALID_EVIDENCE_KEY');
});

test('verifyObject rechaza una clave inválida antes de necesitar credenciales de almacenamiento', async () => {
  const { advisorId, clientId, type } = buildKey();
  await assert.rejects(
    () => storageService.verifyObject('evidencias/no-valida.jpg', advisorId, clientId, type),
    (error) => error.code === 'INVALID_EVIDENCE_KEY',
  );
});
