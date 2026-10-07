ALTER TABLE "clientes"
ADD COLUMN "confianza_geocodificacion" VARCHAR(10),
ADD COLUMN "direccion_geocodificada" VARCHAR(400),
ADD COLUMN "ubicacion_verificada_en" TIMESTAMPTZ,
ADD COLUMN "ubicacion_verificada_origen" VARCHAR(10),
ADD COLUMN "ubicacion_verificada_por" UUID;

CREATE INDEX "clientes_direccion_normalizada_idx" ON "clientes"("direccion_normalizada");
