import { Router } from "express";
import visitasController from "./visitas.controller.js";
import { authMiddleware } from "#modules/auth/auth.middleware.js";
import { roleMiddleware } from "#core/middlewares/role.middleware.js";
import { ADMIN_ROLES, OPERATIONAL_MANAGERS } from "#core/security/roles.js";

const router = Router();
router.use(authMiddleware);
router.get("/evidencias", roleMiddleware(ADMIN_ROLES), visitasController.obtenerEvidencias);
router.get("/evidencias/sugerencias", roleMiddleware(ADMIN_ROLES), visitasController.obtenerSugerenciasEvidencias);
router.get("/evidencias/:id", roleMiddleware(ADMIN_ROLES), visitasController.obtenerEvidencia);
router.use(roleMiddleware(OPERATIONAL_MANAGERS));
router.get("/", visitasController.obtenerVisitas);
router.post("/", visitasController.crearVisita);
router.get("/resumen", visitasController.obtenerResumen);

export default router;