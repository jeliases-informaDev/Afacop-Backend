import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { loginBody, routeBody, routeStatusBody, routeClientStatusBody, userCreateBody } from '../src/validation/schemas.js';
import { normalizeRole, ROLES } from '../src/core/security/roles.js';
import { validateDocumentNumber } from '../src/modules/sistema/importaciones.service.js';

test('normaliza roles heredados sin confiar en el frontend', () => {
  assert.equal(normalizeRole('ADMIN'), ROLES.ADMINISTRADOR);
  assert.equal(normalizeRole('WORKER'), ROLES.ASESOR);
});

test('rechaza campos inesperados y credenciales vacías', () => {
  assert.equal(loginBody.safeParse({ username: '', password: '' }).success, false);
  assert.equal(loginBody.safeParse({ username: 'admin', password: 'secret', injected: true }).success, false);
});

test('valida la longitud del documento según el tipo', () => {
  assert.equal(validateDocumentNumber('DNI', '12345678'), '12345678');
  assert.equal(validateDocumentNumber('RUC', '20123456789'), '20123456789');
  assert.equal(validateDocumentNumber('CE', '123456789'), '123456789');
  assert.equal(validateDocumentNumber('PASAPORTE', 'AB1234567'), 'AB1234567');

  assert.throws(() => validateDocumentNumber('DNI', '1234567'), /DNI/);
  assert.throws(() => validateDocumentNumber('RUC', '1234567890'), /RUC/);
  assert.throws(() => validateDocumentNumber('CE', '12345678'), /CE/);
  assert.throws(() => validateDocumentNumber('PASAPORTE', 'ABC123'), /PASAPORTE/);
});

test('exige contraseñas robustas al crear usuarios', () => {
  assert.equal(userCreateBody.safeParse({ username: 'demo', password: '123456', rol: 'ASESOR' }).success, false);
  assert.equal(userCreateBody.safeParse({ username: 'demo', password: 'UnaClaveSegura2026!', rol: 'ASESOR' }).success, true);
});

test('valida estructura y límites de rutas', () => {
  assert.equal(routeBody.safeParse({ id_asesor: 1, fecha_programada: '2026-08-06', cliente_ids: [1, 2] }).success, true);
  assert.equal(routeBody.safeParse({ id_asesor: -1, fecha_programada: 'x', cliente_ids: [] }).success, false);
});

test('restringe los estados operativos de rutas y visitas', () => {
  assert.equal(routeStatusBody.safeParse({ estado: 'EN_PROCESO' }).success, true);
  assert.equal(routeStatusBody.safeParse({ estado: 'FINALIZADA' }).success, true);
  assert.equal(routeStatusBody.safeParse({ estado: 'ACTIVA' }).success, false);
  assert.equal(routeClientStatusBody.safeParse({ estado_visita: 'VISITADO' }).success, true);
  assert.equal(routeClientStatusBody.safeParse({ estado_visita: 'INVENTADO' }).success, false);
});

test('todas las familias de rutas privadas declaran authMiddleware', () => {
  const privateRoutes = [
    'src/modules/clientes/clientes.routes.js',
    'src/modules/clientes/admision.routes.js',
    'src/modules/usuarios/asesores.routes.js',
    'src/modules/operaciones/asignaciones.routes.js',
    'src/modules/sistema/dashboard.routes.js',
    'src/modules/operaciones/rutas.routes.js',
    'src/modules/usuarios/usuarios.routes.js',
    'src/modules/operaciones/visitas.routes.js',
  ];
  for (const file of privateRoutes) {
    const source = fs.readFileSync(path.resolve(file), 'utf8');
    assert.match(source, /authMiddleware/, `${file} debe exigir autenticación`);
  }
});

test('el SGC ISO 9001 mantiene tipos controlados e historial en base de datos', () => {
  const schema = fs.readFileSync(path.resolve('prisma/schema.prisma'), 'utf8');
  assert.match(schema, /model HistorialCalidad/);
  assert.match(schema, /model RegistroCalidad/);
  assert.match(schema, /version\s+Int/);
});

test('no se aceptan tokens mediante query string', () => {
  const source = fs.readFileSync(path.resolve('src/modules/auth/auth.middleware.js'), 'utf8');
  assert.doesNotMatch(source, /req\.query\.token/);
});

test('la carga Excel usa streaming con ExcelJS para alto volumen', () => {
  const packageJson = JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf8'));
  assert.ok(packageJson.dependencies.exceljs);
  const source = fs.readFileSync(path.resolve('src/modules/sistema/importaciones.service.js'), 'utf8');
  assert.match(source, /WorkbookReader/);
  assert.match(source, /BATCH_SIZE = 1_000/);
  assert.match(source, /MAX_ROWS = 200_000/);
  assert.match(source, /pendingQueue/);
  assert.match(source, /INSERT INTO "admisiones"/);
  assert.match(source, /ON CONFLICT \("id_cliente"\)/);
});

test('el mapa representa la cartera mediante cálculo de distancias y filtros', () => {
  const source = fs.readFileSync(path.resolve('src/modules/clientes/clientes.service.js'), 'utf8');
  assert.match(source, /calcularDistanciaHaversine/);
});

test('los tokens de acceso incluyen control de tipo y versión revocable', () => {
  const auth = fs.readFileSync(path.resolve('src/modules/auth/auth.middleware.js'), 'utf8');
  const service = fs.readFileSync(path.resolve('src/modules/auth/auth.service.js'), 'utf8');
  assert.match(auth, /decoded\.type !== 'access'/);
  assert.match(auth, /decoded\.ver !== usuario\.token_version/);
  assert.match(service, /mfaRequired/);
});

test('la vigencia del token distingue asesores del resto de roles', () => {
  const envSource = fs.readFileSync(path.resolve('src/core/config/env.js'), 'utf8');
  const service = fs.readFileSync(path.resolve('src/modules/auth/auth.service.js'), 'utf8');
  assert.match(envSource, /JWT_EXPIRES_IN: z\.string\(\)\.default\('8h'\)/);
  assert.match(envSource, /JWT_ADVISOR_EXPIRES_IN: z\.string\(\)\.default\('15m'\)/);
  assert.match(service, /normalizeRole\(role\) === ROLES\.ASESOR \? env\.JWT_ADVISOR_EXPIRES_IN : env\.JWT_EXPIRES_IN/);
});

test('la cartera del asesor se filtra por asignación activa', () => {
  const source = fs.readFileSync(path.resolve('src/modules/clientes/clientes.service.js'), 'utf8');
  assert.match(source, /asesorId/);
  assert.match(source, /estado:\s*"ACTIVA"/);
});

test('la excepción MFA de Afacop es nominativa y no desactiva MFA por rol', () => {
  const auth = fs.readFileSync(path.resolve('src/modules/auth/auth.service.js'), 'utf8');
  assert.match(auth, /mfaExemptUsernames\.includes\(usuario\.username/);
  assert.doesNotMatch(auth, /rol.*mfaExempt/i);
  assert.match(auth, /if \(usuario\.mfa_habilitado\)/);
  assert.match(auth, /usuario\.mfa_requerido/);
  const envSource = fs.readFileSync(path.resolve('src/core/config/env.js'), 'utf8');
  assert.match(envSource, /INITIAL_ADMIN_USERNAME/);
});

test('el cifrado autenticado de secretos MFA permite recuperar el valor íntegro', async () => {
  process.env.DATABASE_URL ||= 'postgresql://test:test@localhost:5432/test';
  process.env.JWT_SECRET = 'test-jwt-secret-with-at-least-thirty-two-characters';
  process.env.MFA_ENCRYPTION_KEY = 'independent-test-mfa-key-with-at-least-32-characters';
  const { encryptSecret, decryptSecret } = await import('../src/core/security/crypto.js');
  const encrypted = encryptSecret('BASE32SECRETVALUE');
  assert.notEqual(encrypted, 'BASE32SECRETVALUE');
  assert.equal(decryptSecret(encrypted), 'BASE32SECRETVALUE');
});

test('la configuracion de produccion y las cuentas tienen endurecimiento verificable', () => {
  const envSource = fs.readFileSync(path.resolve('src/core/config/env.js'), 'utf8');
  const server = fs.readFileSync(path.resolve('src/server.js'), 'utf8');
  const auth = fs.readFileSync(path.resolve('src/modules/auth/auth.service.js'), 'utf8');
  const securityRoutes = fs.readFileSync(path.resolve('src/modules/sistema/seguridad.routes.js'), 'utf8');
  assert.match(envSource, /CORS_ALLOW_ALL no puede habilitarse en producci/);
  assert.match(envSource, /MAX_LOGIN_FAILURES/);
  assert.match(server, /strictTransportSecurity/);
  assert.match(server, /Cache-Control', 'no-store/);
  assert.match(auth, /bloqueado_hasta/);
  assert.match(auth, /intentos_fallidos/);
  assert.match(securityRoutes, /AUDIT_READERS/);
});
