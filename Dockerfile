# Radar 360 (MiRadar) - backend. Imagen para el servidor de Oracle (arm64) y para probar en x64.
# El arranque (npm start) aplica las migraciones y crea el administrador inicial si la base esta vacia.
FROM node:24-slim

ENV NODE_ENV=production
WORKDIR /app

# Prisma (migraciones) necesita openssl; ca-certificates para HTTPS hacia mapas/geocodificacion.
# Chromium y fuentes: los PDF (calificacion crediticia) se generan con Puppeteer. Puppeteer no ofrece
# descarga de Chrome para Linux arm64 (el servidor de Oracle), asi que se usa el Chromium de Debian,
# que existe para arm64 y x64, y se le indica la ruta con PUPPETEER_EXECUTABLE_PATH.
RUN apt-get update  && apt-get install -y --no-install-recommends openssl ca-certificates chromium fonts-liberation fonts-dejavu-core  && rm -rf /var/lib/apt/lists/*

# No descargar el Chrome de Puppeteer en npm ci (no sirve en arm64 y pesa 170 MB); usar el del sistema.
# Chromium escribe su configuracion en XDG_*: en produccion el contenedor es de solo lectura salvo /tmp.
ENV PUPPETEER_SKIP_DOWNLOAD=1     PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium     XDG_CONFIG_HOME=/tmp/.chromium     XDG_CACHE_HOME=/tmp/.chromium-cache

# Dependencias primero para aprovechar la cache. El postinstall corre "prisma generate".
COPY package.json package-lock.json prisma.config.ts ./
COPY prisma ./prisma
RUN npm ci --omit=dev

COPY src ./src
COPY scripts ./scripts

USER node
EXPOSE 4000

HEALTHCHECK --interval=30s --timeout=5s --start-period=60s --retries=3   CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||4000)+'/health/live').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["npm", "start"]
