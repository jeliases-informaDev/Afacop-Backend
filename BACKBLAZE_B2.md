# Configuración de evidencias en Backblaze B2

El sistema usa un bucket privado mediante la API compatible con S3. La app móvil
sube cada archivo (dos fotografías y la firma del cliente) directamente con una
URL firmada de cinco minutos y PostgreSQL guarda únicamente su clave privada.
Ninguna evidencia se guarda ni se expone jamás como archivo público o URL
permanente.

## 1. Backblaze

1. Cree un bucket B2 privado dedicado, por ejemplo `afacop-evidencias`.
2. Cree una Application Key restringida únicamente a ese bucket. **Verifique**
   que no sea la Master Application Key: una Master Key comprometida expone
   todos los buckets de la cuenta, no solo el de evidencias.
3. Concédale lectura y escritura de archivos. No use la Master Application Key.
4. Guarde el `keyID`, la Application Key, la región y el endpoint S3 del bucket.
5. Si el plan de Backblaze lo permite, active **Object Lock** o versionado en
   el bucket. Así, aunque una Application Key se filtre, no podrá borrar
   evidencia de forma permanente (protege contra disputas de cobranza donde la
   evidencia deja de existir justo cuando se la necesita).

## 2. Variables del backend

Configure las cinco variables juntas en `BackEnd/.env` para desarrollo y en
**Render > afacop-backend > Environment** para producción:

```env
B2_ENDPOINT=https://s3.<region>.backblazeb2.com
B2_REGION=<region>
B2_BUCKET=afacop-evidencias
B2_KEY_ID=<keyID>
B2_APPLICATION_KEY=<applicationKey>
```

No agregue valores reales al repositorio. Reinicie el backend después de
configurarlas.

## 3. Base de datos

En local:

```powershell
cd BackEnd
npm run db:deploy
```

Render ejecuta la migración automáticamente mediante `preDeployCommand`.

## Límites aplicados

- Dos fotografías obligatorias: JPEG, máximo 4 MB cada una.
- Firma obligatoria: PNG, máximo 700 KB. Sube por el mismo flujo de URL
  prefirmada y clave verificada que las fotografías (`firma_url`); ya no viaja
  ni se guarda como texto base64 en la base de datos. Las visitas creadas
  antes de este cambio conservan su firma heredada en `firma_evidencia`
  (texto base64) únicamente para lectura histórica.
- Lectura web (panel administrativo): URL privada firmada durante 10 minutos,
  generada de nuevo en cada visualización, con `Cache-Control: no-store` para
  que el navegador no la conserve en caché. Solo el rol `ADMINISTRADOR` puede
  solicitarla, y cada visualización queda registrada en `auditoria_seguridad`.
- Cada clave de objeto incluye una firma HMAC-SHA256 (con `JWT_SECRET`) que
  ata el archivo al asesor y cliente exactos. El backend rechaza cualquier
  clave alterada, adivinada o perteneciente a otro asesor/cliente
  (`INVALID_EVIDENCE_KEY`) y, antes de aceptar una visita, verifica contra B2
  que el archivo subido existe con el tipo y tamaño correctos
  (`EVIDENCE_UPLOAD_INCOMPLETE` si no).

## Retención y borrado

Hoy las evidencias no se borran automáticamente: se acumulan en B2 y en
Postgres mientras el registro de la visita exista. `storage.service.js`
expone `deleteObject(key)` como bloque de construcción para automatizar el
borrado, pero **falta definir con gerencia/legal** cuánto tiempo debe
conservarse la evidencia de cobranza tras cerrarse un caso antes de poder
programar su eliminación. No borre evidencia manualmente sin esa política
confirmada.

## Rotación de credenciales

- `JWT_SECRET` no solo firma sesiones: también es la clave HMAC que valida la
  propiedad de cada evidencia. Rotarlo invalida las claves de objetos que
  estén en tránsito (subidas iniciadas pero no confirmadas); no afecta a las
  evidencias ya guardadas, cuya clave no se vuelve a validar con HMAC después
  de creada la visita.
- Para rotar la Application Key de B2: cree una nueva key restringida al
  mismo bucket, actualice `B2_KEY_ID`/`B2_APPLICATION_KEY` en Render,
  reinicie el backend y solo entonces revoque la key anterior desde el panel
  de Backblaze.
