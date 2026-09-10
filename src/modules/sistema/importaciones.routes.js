import { Router } from 'express';
import upload from '#core/middlewares/upload.middleware.js';
import { authMiddleware } from '#modules/auth/auth.middleware.js';
import { roleMiddleware } from '#core/middlewares/role.middleware.js';
import { OPERATIONAL_MANAGERS } from '#core/security/roles.js';
import { validate } from '#core/middlewares/validate.middleware.js';
import { uuidParams } from '../../validation/schemas.js';
import { downloadClientTemplate, getJob, uploadType } from './importaciones.controller.js';

const router = Router();
router.use(authMiddleware, roleMiddleware(OPERATIONAL_MANAGERS));
router.get('/plantillas/clientes', downloadClientTemplate);
router.post('/clientes', upload.single('file'), uploadType('CLIENTES'));
router.post('/asesores', upload.single('file'), uploadType('ASESORES'));
router.get('/:id', validate({ params: uuidParams }), getJob);

export default router;