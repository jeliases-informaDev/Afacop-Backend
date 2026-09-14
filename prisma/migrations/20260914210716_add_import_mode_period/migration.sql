-- AlterTable
ALTER TABLE "importaciones_masivas" ADD COLUMN     "modo" VARCHAR(30),
ADD COLUMN     "periodo" VARCHAR(6);

-- CreateIndex
CREATE INDEX "importaciones_masivas_tipo_modo_periodo_idx" ON "importaciones_masivas"("tipo", "modo", "periodo");
