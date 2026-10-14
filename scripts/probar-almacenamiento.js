// Prueba de punta a punta el almacenamiento de evidencias con la configuracion B2_* vigente:
// URL firmada de subida -> subida -> verificacion -> URL firmada de descarga -> borrado.
// Sirve para comprobar un servidor S3 nuevo (por ejemplo Oracle Object Storage) antes de usarlo.
//   docker exec <contenedor-del-backend> node scripts/probar-almacenamiento.js
// Sube un archivo de 2 KB y lo borra al terminar. No toca datos reales.
import 'dotenv/config';
import crypto from 'node:crypto';
import { env } from '#core/config/env.js';
import storageService from '../src/modules/sistema/storage.service.js';

let fallos = 0;
const paso = (nombre, ok, detalle = '') => {
  if (!ok) fallos += 1;
  console.log(`${ok ? 'OK   ' : 'FALLA'} ${nombre}${detalle ? ` - ${detalle}` : ''}`);
};

if (!(env.B2_ENDPOINT && env.B2_REGION && env.B2_BUCKET && env.B2_KEY_ID && env.B2_APPLICATION_KEY)) {
  console.error('Faltan variables B2_ENDPOINT, B2_REGION, B2_BUCKET, B2_KEY_ID o B2_APPLICATION_KEY.');
  process.exit(2);
}
console.log(`Servidor: ${new URL(env.B2_ENDPOINT).host}  bucket: ${env.B2_BUCKET}  region: ${env.B2_REGION}\n`);

const asesor = 1;
const cliente = 1;
const contenido = Buffer.concat([Buffer.from([0xff, 0xd8, 0xff, 0xe0]), crypto.randomBytes(2044)]); // 2 KB con forma de JPEG
let key;

try {
  const subida = await storageService.createUpload({
    advisorId: asesor, clientId: cliente, clientName: 'Prueba de almacenamiento', routeId: 1,
    evidenceNumber: 1, type: 'foto', contentType: 'image/jpeg', size: contenido.length,
  });
  key = subida.key;
  paso('1. URL firmada de subida', Boolean(subida.uploadUrl), `vence en ${subida.expiresIn} s`);

  const put = await fetch(subida.uploadUrl, { method: 'PUT', headers: { 'Content-Type': 'image/jpeg' }, body: contenido });
  paso('2. Subir la foto con la URL firmada', put.ok, `HTTP ${put.status}${put.ok ? '' : ' ' + (await put.text()).slice(0, 200)}`);

  if (put.ok) {
    await storageService.verifyObject(key, asesor, cliente, 'foto');
    paso('3. Verificar el archivo (tipo y tamano)', true);

    const url = await storageService.createDownloadUrl(key);
    const get = await fetch(url);
    const bajado = Buffer.from(await get.arrayBuffer());
    paso('4. Descargar con URL firmada y comparar bytes', get.ok && bajado.equals(contenido), `HTTP ${get.status}, ${bajado.length} bytes`);

    const sinFirma = await fetch(`${env.B2_ENDPOINT.replace(/\/$/, '')}/${env.B2_BUCKET}/${key}`);
    paso('5. El bucket NO es publico (lectura anonima rechazada)', sinFirma.status === 403 || sinFirma.status === 401 || sinFirma.status === 404, `HTTP ${sinFirma.status}`);
  }
} catch (error) {
  paso('Error inesperado', false, `${error.name}: ${error.message}`);
} finally {
  if (key) {
    try { await storageService.deleteObject(key); paso('6. Borrar el archivo de prueba', true); }
    catch (error) { paso('6. Borrar el archivo de prueba', false, error.message); }
  }
}

console.log(fallos === 0 ? '\nTODO BIEN: el almacenamiento sirve para MiRadar.' : `\n${fallos} paso(s) fallaron.`);
process.exit(fallos === 0 ? 0 : 1);
