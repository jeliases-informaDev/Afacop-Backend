-- AlterTable
ALTER TABLE "clientes" ADD COLUMN     "datos_adicionales" JSONB,
ADD COLUMN     "departamento" VARCHAR(100),
ADD COLUMN     "direccion_normalizada" VARCHAR(300),
ADD COLUMN     "estado_geocodificacion" VARCHAR(30),
ADD COLUMN     "fecha_geocodificacion" TIMESTAMPTZ,
ADD COLUMN     "precision_geocodificacion" VARCHAR(30),
ADD COLUMN     "provincia" VARCHAR(100),
ADD COLUMN     "ubigeo" VARCHAR(6);

-- CreateIndex
CREATE INDEX "clientes_estado_geocodificacion_idx" ON "clientes"("estado_geocodificacion");

-- CreateIndex
CREATE INDEX "clientes_ubigeo_idx" ON "clientes"("ubigeo");
