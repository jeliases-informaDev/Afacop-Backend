ALTER TABLE "visitas"
ADD COLUMN "client_sync_id" VARCHAR(100);

CREATE UNIQUE INDEX "visitas_client_sync_id_key"
ON "visitas"("client_sync_id");
