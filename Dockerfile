# Radar 360 (MiRadar) - backend. Imagen para el servidor de Oracle (arm64) y para probar en x64.
# El arranque (npm start) aplica las migraciones y crea el administrador inicial si la base esta vacia.
FROM node:24-slim

ENV NODE_ENV=production
WORKDIR /app

# Prisma (migraciones) necesita openssl; ca-certificates para HTTPS hacia mapas/geocodificacion.
RUN apt-get update \
 && apt-get install -y --no-install-recommends openssl ca-certificates \
 && rm -rf /var/lib/apt/lists/*

# Dependencias primero para aprovechar la cache. El postinstall corre "prisma generate".
COPY package.json package-lock.json prisma.config.ts ./
COPY prisma ./prisma
RUN npm ci --omit=dev

COPY src ./src
COPY scripts ./scripts

USER node
EXPOSE 4000

HEALTHCHECK --interval=30s --timeout=5s --start-period=60s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||4000)+'/health/live').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["npm", "start"]
