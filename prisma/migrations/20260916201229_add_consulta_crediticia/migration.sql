-- CreateTable
CREATE TABLE "consultas_crediticias" (
    "id_consulta" UUID NOT NULL DEFAULT gen_random_uuid(),
    "token_consulta" UUID NOT NULL,
    "documento" VARCHAR(20) NOT NULL,
    "codigo_sbs" VARCHAR(20),
    "periodo" VARCHAR(6),
    "actor_id" UUID NOT NULL,
    "estado" VARCHAR(20) NOT NULL DEFAULT 'EXITOSA',
    "fecha_consulta" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "consultas_crediticias_pkey" PRIMARY KEY ("id_consulta")
);

-- CreateIndex
CREATE UNIQUE INDEX "consultas_crediticias_token_consulta_key" ON "consultas_crediticias"("token_consulta");

-- CreateIndex
CREATE INDEX "consultas_crediticias_documento_fecha_consulta_idx" ON "consultas_crediticias"("documento", "fecha_consulta");

-- CreateIndex
CREATE INDEX "consultas_crediticias_actor_id_fecha_consulta_idx" ON "consultas_crediticias"("actor_id", "fecha_consulta");

-- AddForeignKey
ALTER TABLE "consultas_crediticias" ADD CONSTRAINT "consultas_crediticias_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
