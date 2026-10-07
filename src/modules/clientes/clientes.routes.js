import { Router } from "express";
import clientesController from "./clientes.controller.js";
import ubicacionesController from "./ubicaciones.controller.js";
import { authMiddleware } from "#modules/auth/auth.middleware.js";
import { roleMiddleware } from "#core/middlewares/role.middleware.js";
import { ALL_ROLES, OPERATIONAL_MANAGERS } from "#core/security/roles.js";
import { validate } from "#core/middlewares/validate.middleware.js";
import { requireAdvisorLink } from "#modules/usuarios/advisor.middleware.js";
import { clientLocationBody, idParams, listQuery, locationReviewQuery, mapQuery } from "../../validation/schemas.js";

const router = Router();




router.use(authMiddleware);
router.use(requireAdvisorLink);
router.get("/", roleMiddleware(ALL_ROLES), validate({ query: listQuery }), clientesController.obtenerClientes);
router.get("/mapa/puntos", roleMiddleware(ALL_ROLES), validate({ query: mapQuery }), clientesController.obtenerPuntosMapa);
router.get("/ubicaciones/revision", roleMiddleware(OPERATIONAL_MANAGERS), validate({ query: locationReviewQuery }), ubicacionesController.listarRevision);
router.patch("/:id/ubicacion", roleMiddleware(OPERATIONAL_MANAGERS), validate({ params: idParams, body: clientLocationBody }), ubicacionesController.actualizar);
router.post("/:id/ubicacion/confirmar", roleMiddleware(OPERATIONAL_MANAGERS), validate({ params: idParams }), ubicacionesController.confirmar);
router.get("/:id", roleMiddleware(ALL_ROLES), validate({ params: idParams }), clientesController.obtenerClientePorId);

export default router;
