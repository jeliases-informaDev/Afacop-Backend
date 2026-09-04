# Configuración de evidencias en Backblaze B2

El sistema usa un bucket privado mediante la API compatible con S3. La app móvil
sube cada archivo directamente con una URL firmada de cinco minutos y PostgreSQL
guarda únicamente su clave privada.

## 1. Backblaze

1. Cree un bucket B2 privado dedicado, por ejemplo `afacop-evidencias`.
2. Cree una Application Key restringida únicamente a ese bucket.
3. Concédale lectura y escritura de archivos. No use la Master Application Key.
4. Guarde el `keyID`, la Application Key, la región y el endpoint S3 del bucket.

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
- Firma obligatoria: PNG validado por el backend.
- Lectura web: URL privada firmada durante 10 minutos.
