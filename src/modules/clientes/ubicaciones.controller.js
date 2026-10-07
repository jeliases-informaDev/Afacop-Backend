import ubicacionesService from './ubicaciones.service.js';

async function listarRevision(req, res, next) {
  try {
    res.json({ data: await ubicacionesService.listarRevision(req.validated.query) });
  } catch (error) { next(error); }
}

async function actualizar(req, res, next) {
  try {
    const { latitud, longitud, aplicar_misma_direccion: aplicar } = req.body;
    const data = await ubicacionesService.actualizarUbicacion({
      idCliente: req.validated.params.id,
      latitud,
      longitud,
      actorId: req.user.id,
      aplicarMismaDireccion: aplicar !== false,
    });
    res.json({ data });
  } catch (error) { next(error); }
}

async function confirmar(req, res, next) {
  try {
    const data = await ubicacionesService.confirmarUbicacion({
      idCliente: req.validated.params.id,
      actorId: req.user.id,
    });
    res.json({ data });
  } catch (error) { next(error); }
}

export default { listarRevision, actualizar, confirmar };
