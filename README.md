# MiRadar 360 - Backend (API)

API de MiRadar 360 (antes AFACOP): Node 24, Express, Socket.IO, Prisma y PostgreSQL.
Producción corre en el servidor de Sulotec (`api-miradar360.sulotec.com`); este repositorio es solo el código.

## Levantar en tu PC

La guía completa, con la base de datos, el backend, la web y la app móvil y todos los comandos listos, está en
**https://github.com/Sulotec/Sulotec-infra/blob/main/apps/miradar/DESARROLLO-LOCAL.md**

Resumen (necesitas Git, Node.js 24 y Docker Desktop):

1. Base de datos local:
   ```bash
   docker run -d --name miradar-postgres -e POSTGRES_USER=miradar -e POSTGRES_PASSWORD=miradar -e POSTGRES_DB=miradar -p 5432:5432 postgres:16
   ```
2. Archivo `.env` (lo escribe completo, con llaves al azar y la clave del usuario `admin`, que muestra una sola vez):
   ```bash
   node -e "const c=require('crypto');const f=require('fs');if(f.existsSync('.env')){console.log('.env ya existe, no lo toco');process.exit(0)}const p='Dev.'+c.randomBytes(6).toString('hex')+'!A1';f.writeFileSync('.env',['NODE_ENV=development','PORT=4001','DATABASE_URL=postgresql://miradar:miradar@localhost:5432/miradar','JWT_SECRET='+c.randomBytes(32).toString('hex'),'MFA_ENCRYPTION_KEY='+c.randomBytes(32).toString('hex'),'INITIAL_ADMIN_USERNAME=admin','INITIAL_ADMIN_PASSWORD='+p,'RESET_INITIAL_ADMIN=false','REQUIRE_MFA=false','MFA_EXEMPT_USERNAMES=admin','FRONTEND_URL=http://localhost:5173','CORS_ALLOW_ALL=false','TRUST_PROXY=false','LOG_LEVEL=info','GEOCODING_PROVIDER=nominatim','GEOCODING_WORKER_ENABLED=false','GEOCODING_BATCH_SIZE=5',''].join('\n'));console.log('Listo: .env creado. Usuario admin, clave: '+p)"
   ```
3. Instalar y arrancar:
   ```bash
   npm ci
   npm start
   ```
   Comprobar: http://localhost:4001/health/ready responde `{"status":"ready"}`.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm start` | Aplica migraciones, crea el administrador inicial si no existe y arranca |
| `npm run dev` | Arranca sin migrar (uso diario) |
| `npm test` | Pruebas |
| `npx prisma migrate dev --name lo_que_cambias` | Crea una migración nueva en `prisma/migrations` (súbela en el PR) |
| `npm run check` | Comprueba la sintaxis de `src/server.js` |

## Cómo entregar cambios

- Una rama por tarea y un Pull Request a `main`; nadie empuja directo a `main`.
- Nunca subas `.env`, claves ni datos reales (clientes, DNI, fotos).
- Cuando el PR se une, Sulotec publica en producción desde el kit del servidor; no hace falta tocar nada más.

## Otros documentos de este repositorio

- `SECURITY.md`: política de seguridad.
- `ISO27001-TECHNICAL-CONTROLS.md`: controles técnicos.
- `GEOCODIFICACION.md`: cómo se ubican las direcciones de los clientes en el mapa.
- `BACKBLAZE_B2.md`: almacenamiento de evidencias (hoy las fotos y firmas están en un bucket de Oracle; la configuración sigue siendo compatible con S3).
