CREATE TYPE "TipoDocumento" AS ENUM ('DNI', 'CE', 'PASAPORTE', 'RUC');

ALTER TABLE "clientes" ADD COLUMN "tipo_documento" "TipoDocumento" NOT NULL DEFAULT 'DNI';
ALTER TABLE "clientes" ADD COLUMN "numero_documento" VARCHAR(20);

UPDATE "clientes" SET "numero_documento" = "dni" WHERE "numero_documento" IS NULL;

ALTER TABLE "clientes" ALTER COLUMN "numero_documento" SET NOT NULL;

ALTER TABLE "clientes" DROP COLUMN "dni";

CREATE UNIQUE INDEX "clientes_doc_unico_key" ON "clientes"("tipo_documento", "numero_documento");