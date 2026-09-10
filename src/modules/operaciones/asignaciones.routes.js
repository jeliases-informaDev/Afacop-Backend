import { Router } from "express";
import asignacionesController from "./asignaciones.controller.js";
import { authMiddleware } from "#modules/auth/auth.middleware.js";
import { roleMiddleware } from "#core/middlewares/role.middleware.js";
import { OPERATIONAL_MANAGERS } from "#core/security/roles.js";

const router = Router();

// Endpoint principal para registrar/reasignar cartera
router.use(authMiddleware, roleMiddleware(OPERATIONAL_MANAGERS));
router.post("/", asignacionesController.crearAsignaciones);

// Endpoint general para listar todas las asignaciones
router.get("/", asignacionesController.obtenerAsignaciones);

export default router;