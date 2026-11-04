import rutasService from "./rutas.service.js";

function emitirCambioRuta(req, ruta, accion) {
  const io = req.app.get('io');
  if (!io || !ruta) return;
  const payload = { accion, id_ruta: ruta.id_ruta, id_asesor: ruta.id_asesor, fecha_programada: ruta.fecha_programada, estado: ruta.estado };
  if (ruta.id_asesor) io.to(`advisor:${ruta.id_asesor}`).emit('route_changed', payload);
  else io.emit('route_changed', payload);
  ['ADMINISTRADOR', 'GERENTE', 'SUPERVISOR'].forEach(rol => io.to(`role:${rol}`).emit('route_changed', payload));
}

/**
 * Controlador para crear una ruta.
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
async function crearRuta(req, res) {
  try {
    const { id_asesor, fecha_programada, cliente_ids } = req.body;

    if (!id_asesor || !fecha_programada || !cliente_ids || !Array.isArray(cliente_ids) || cliente_ids.length === 0) {
      return res.status(400).json({
        mensaje: "id_asesor, fecha_programada y cliente_ids (array) son obligatorios",
      });
    }

    const resultado = await rutasService.crearRuta({
      id_asesor,
      fecha_programada,
      cliente_ids
    });
    emitirCambioRuta(req, resultado, 'CREADA');

    return res.status(201).json({
      mensaje: "Ruta creada exitosamente",
      data: resultado
    });
  } catch (error) {
    console.error("Error en crearRuta:", error);
    return res.status(500).json({
      mensaje: "Error al crear la ruta",
      error: error.message,
    });
  }
}

/**
 * Controlador para obtener la ruta trazada por OSRM.
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
async function obtenerRutaOsrm(req, res) {
  try {
    const { coordinates } = req.body;
    
    if (!coordinates || !Array.isArray(coordinates)) {
      return res.status(400).json({
        mensaje: "El campo coordinates debe ser un arreglo",
      });
    }

    const resultado = await rutasService.obtenerRutaOsrm(coordinates);
    return res.status(200).json(resultado);
  } catch (error) {
    console.error("Error en obtenerRutaOsrm:", error);
    // Retornamos array vacío para usar fallback en el frontend
    return res.status(200).json({ coordinates: [] });
  }
}

/**
 * Controlador para obtener todas las rutas con paginación (10 por página por defecto).
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
async function obtenerRutas(req, res) {
  try {
    const { page, limit, search, estado, id_asesor, fecha_programada } = req.query;

    let parsedPage = parseInt(page, 10);
    if (isNaN(parsedPage) || parsedPage < 1) {
      parsedPage = 1;
    }

    let parsedLimit = parseInt(limit, 10);
    if (isNaN(parsedLimit) || parsedLimit < 1) {
      parsedLimit = 10;
    } else if (parsedLimit > 100) {
      parsedLimit = 100;
    }

    const resultado = await rutasService.obtenerRutas({
      page: parsedPage,
      limit: parsedLimit,
      search: search ? String(search).trim() : undefined,
      estado: estado ? String(estado).trim() : undefined,
      id_asesor: id_asesor ? Number(id_asesor) : undefined,
      fecha_programada: fecha_programada ? String(fecha_programada).trim() : undefined,
    });

    return res.status(200).json(resultado);
  } catch (error) {
    console.error("Error en obtenerRutas:", error);
    return res.status(500).json({
      mensaje: "Error al obtener las rutas",
      error: error.message,
    });
  }
}

/**
 * Controlador para eliminar una ruta.
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
async function eliminarRuta(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        mensaje: "El ID de la ruta es obligatorio",
      });
    }

    const resultado = await rutasService.eliminarRuta(id);
    emitirCambioRuta(req, resultado, 'ELIMINADA');

    return res.status(200).json({
      mensaje: "Ruta eliminada exitosamente",
      data: resultado
    });
  } catch (error) {
    console.error("Error en eliminarRuta:", error);
    return res.status(500).json({
      mensaje: "Error al eliminar la ruta",
      error: error.message,
    });
  }
}

async function eliminarClienteDeRuta(req, res, next) {
  try {
    const resultado = await rutasService.eliminarClienteDeRuta(req.params.id, req.params.clienteId);
    if (!resultado) return res.status(404).json({ mensaje: 'La asignación ya no existe' });
    emitirCambioRuta(req, { id_ruta: Number(req.params.id) }, 'CLIENTE_RETIRADO');
    return res.json({
      mensaje: resultado.routeDeleted ? 'Asignación y ruta vacía eliminadas' : 'Cliente retirado de la ruta',
      data: resultado,
    });
  } catch (error) {
    if (error.statusCode) return res.status(error.statusCode).json({ mensaje: error.message });
    next(error);
  }
}

async function actualizarEstadoRuta(req, res, next) {
  try {
    const data = await rutasService.actualizarEstadoRuta(req.params.id, req.body.estado);
    if (!data) return res.status(404).json({ mensaje: 'Ruta no encontrada' });
    emitirCambioRuta(req, data, 'ESTADO_ACTUALIZADO');
    return res.json({ mensaje: 'Estado de ruta actualizado', data });
  } catch (error) {
    if (error.statusCode) return res.status(error.statusCode).json({ mensaje: error.message });
    next(error);
  }
}

async function actualizarEstadoClienteRuta(req, res, next) {
  try {
    const data = await rutasService.actualizarEstadoClienteRuta(req.params.id, req.params.clienteId, req.body.estado_visita);
    if (!data) return res.status(404).json({ mensaje: 'Asignación no encontrada' });
    emitirCambioRuta(req, { id_ruta: Number(req.params.id) }, 'CLIENTE_ACTUALIZADO');
    return res.json({ mensaje: 'Resultado del cliente actualizado', data });
  } catch (error) {
    if (error.statusCode) return res.status(error.statusCode).json({ mensaje: error.message });
    next(error);
  }
}

/**
 * Controlador para actualizar una ruta.
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
async function actualizarRuta(req, res) {
  try {
    const { id } = req.params;
    const { id_asesor, fecha_programada, cliente_ids } = req.body;

    if (!id) {
      return res.status(400).json({
        mensaje: "El ID de la ruta es obligatorio",
      });
    }

    if (!id_asesor || !fecha_programada || !cliente_ids || !Array.isArray(cliente_ids) || cliente_ids.length === 0) {
      return res.status(400).json({
        mensaje: "id_asesor, fecha_programada y cliente_ids (array) son obligatorios",
      });
    }

    const resultado = await rutasService.actualizarRuta(id, {
      id_asesor,
      fecha_programada,
      cliente_ids
    });

    if (!resultado) {
      return res.status(404).json({
        mensaje: "La ruta que intentas actualizar no existe",
      });
    }
    emitirCambioRuta(req, resultado, 'ACTUALIZADA');

    return res.status(200).json({
      mensaje: "Ruta actualizada exitosamente",
      data: resultado
    });
  } catch (error) {
    console.error("Error en actualizarRuta:", error);
    return res.status(error.statusCode || 500).json({
      mensaje: "Error al actualizar la ruta",
      ...(process.env.NODE_ENV === 'development' ? { error: error.message } : {}),
    });
  }
}

export default {
  crearRuta,
  obtenerRutaOsrm,
  obtenerRutas,
  actualizarRuta,
  eliminarRuta,
  eliminarClienteDeRuta,
  actualizarEstadoRuta,
  actualizarEstadoClienteRuta,
};
