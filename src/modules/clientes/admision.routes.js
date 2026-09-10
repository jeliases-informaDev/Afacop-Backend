import { Router } from "express";
import admisionController from "./admision.controller.js";
import { authMiddleware } from "#modules/auth/auth.middleware.js";
import { roleMiddleware } from "#core/middlewares/role.middleware.js";
import { ADMISSION_READERS } from "#core/security/roles.js";
import { validate } from "#core/middlewares/validate.middleware.js";
import { listQuery } from "../../validation/schemas.js";

const router = Router();

router.use(authMiddleware);
router.get("/", roleMiddleware(ADMISSION_READERS), validate({ query: listQuery }), admisionController.obtenerAdmisiones);

export default router;
