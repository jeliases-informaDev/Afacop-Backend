import asesoresService from "./asesores.service.js";

// Expresión regular para validar exactamente 8 dígitos numéricos para el DNI
const DNI_REGEX = /^\d{8}$/;

// Expresión regular básica para validar el formato de correo electrónico
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Controlador para obtener el listado de asesores.
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
async function obtenerAsesores(req, res) {
  try {
    const { page, limit, search, estado } = req.query;

    let parsedPage = parseInt(page, 10);
    if (isNaN(parsedPage) || parsedPage < 1) {
      parsedPage = 1;
    }

    let parsedLimit = parseInt(limit, 10);
    if (isNaN(parsedLimit) || parsedLimit < 1) {
      parsedLimit = 12;
    } else if (parsedLimit > 100) {
      parsedLimit = 100;
    }

    const searchStr = search ? String(search) : "";

    let estadoNorm = undefined;
    if (estado && String(estado).trim() !== "") {
      estadoNorm = String(estado).trim().toUpperCase();
    }

    const resultado = await asesoresService.obtenerAsesores({
      page: parsedPage,
      limit: parsedLimit,
      search: searchStr,
      estado: estadoNorm,
    });

    return res.status(200).json(resultado);
  } catch (error) {
    console.error("Error en obtenerAsesores:", error);

    return res.status(500).json({
      mensaje: "Error al obtener los asesores",
      error: error.message,
    });
  }
}

/**
 * Controlador para obtener un asesor específico por su ID.
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
async function obtenerAsesorPorId(req, res) {
  try {
    const { id } = req.params;

    const parsedId = Number(id);
    if (isNaN(parsedId) || !Number.isInteger(parsedId) || parsedId <= 0) {
      return res.status(400).json({
        mensaje: "El id del asesor no es válido",
      });
    }

    const resultado = await asesoresService.obtenerAsesorPorId(parsedId);

    if (!resultado) {
      return res.status(404).json({
        mensaje: "Asesor no encontrado",
      });
    }

    return res.status(200).json(resultado);
  } catch (error) {
    console.error("Error en obtenerAsesorPorId:", error);

    return res.status(500).json({
      mensaje: "Error al obtener el asesor",
      error: error.message,
    });
  }
}

/**
 * Controlador para registrar un nuevo asesor.
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
async function crearAsesor(req, res) {
  try {
    const datos = { ...req.body };

    if (datos.email !== undefined && datos.correo === undefined) {
      datos.correo = datos.email;
    }

    if (!datos.numero_documento || !String(datos.numero_documento).trim()) {
      return res.status(400).json({ mensaje: "El DNI es obligatorio" });
    }
    const dniStr = String(datos.numero_documento).trim();
    if (!DNI_REGEX.test(dniStr)) {
      return res.status(400).json({ mensaje: "El DNI debe tener exactamente 8 dígitos numéricos" });
    }

    if (!datos.nombres || !String(datos.nombres).trim()) {
      return res.status(400).json({ mensaje: "Los nombres son obligatorios" });
    }
    if (!datos.apellido_paterno || !String(datos.apellido_paterno).trim()) {
      return res.status(400).json({ mensaje: "El apellido paterno es obligatorio" });
    }
    if (!datos.apellido_materno || !String(datos.apellido_materno).trim()) {
      return res.status(400).json({ mensaje: "El apellido materno es obligatorio" });
    }

    if (datos.correo && String(datos.correo).trim() !== "") {
      const correoStr = String(datos.correo).trim();
      if (!EMAIL_REGEX.test(correoStr)) {
        return res.status(400).json({ mensaje: "El formato del correo electrónico no es válido" });
      }
      datos.correo = correoStr;
    } else {
      datos.correo = null;
    }

    const dniDuplicado = await asesoresService.obtenerAsesorPorDni(dniStr);
    if (dniDuplicado) {
      return res.status(400).json({ mensaje: "El DNI ya se encuentra registrado" });
    }

    if (datos.latitud !== undefined && datos.latitud !== null && datos.latitud !== "") {
      const lat = Number(datos.latitud);
      if (isNaN(lat) || lat < -90 || lat > 90) {
        return res.status(400).json({ mensaje: "La latitud debe ser un número válido entre -90 y 90" });
      }
      datos.latitud = lat;
    } else {
      datos.latitud = null;
    }

    if (datos.longitud !== undefined && datos.longitud !== null && datos.longitud !== "") {
      const lng = Number(datos.longitud);
      if (isNaN(lng) || lng < -180 || lng > 180) {
        return res.status(400).json({ mensaje: "La longitud debe ser un número válido entre -180 y 180" });
      }
      datos.longitud = lng;
    } else {
      datos.longitud = null;
    }

    const resultado = await asesoresService.crearAsesor({
      numero_documento: dniStr,
      nombres: String(datos.nombres).trim(),
      apellido_paterno: String(datos.apellido_paterno).trim(),
      apellido_materno: String(datos.apellido_materno).trim(),
      telefono: datos.telefono ? String(datos.telefono).trim() : null,
      correo: datos.correo,
      distrito: datos.distrito ? String(datos.distrito).trim() : null,
      latitud: datos.latitud,
      longitud: datos.longitud,
    });

    return res.status(201).json(resultado);
  } catch (error) {
    console.error("Error en crearAsesor:", error);

    return res.status(500).json({
      mensaje: "Error al registrar el asesor",
      error: error.message,
    });
  }
}

/**
 * Controlador para actualizar parcialmente un asesor por su ID.
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
async function actualizarAsesor(req, res) {
  try {
    const { id } = req.params;
    
    const datos = { ...req.body };

    if (datos.email !== undefined && datos.correo === undefined) {
      datos.correo = datos.email;
    }

    const parsedId = Number(id);
    if (isNaN(parsedId) || !Number.isInteger(parsedId) || parsedId <= 0) {
      return res.status(400).json({
        mensaje: "El id del asesor no es válido",
      });
    }

    const asesorExistente = await asesoresService.obtenerAsesorPorId(parsedId);
    if (!asesorExistente) {
      return res.status(404).json({
        mensaje: "Asesor no encontrado",
      });
    }

    if (datos.numero_documento !== undefined) {
      const dniStr = String(datos.numero_documento).trim();
      if (!dniStr) {
        return res.status(400).json({ mensaje: "El DNI no puede ser vacío" });
      }
      if (!DNI_REGEX.test(dniStr)) {
        return res.status(400).json({ mensaje: "El DNI debe tener exactamente 8 dígitos numéricos" });
      }
      const dniDuplicado = await asesoresService.obtenerAsesorPorDni(dniStr);
      if (dniDuplicado && dniDuplicado.id_asesor !== parsedId) {
        return res.status(400).json({ mensaje: "El DNI ya pertenece a otro asesor" });
      }
      datos.numero_documento = dniStr;
    }

    if (datos.nombres !== undefined) {
      const nombresStr = String(datos.nombres).trim();
      if (!nombresStr) {
        return res.status(400).json({ mensaje: "Los nombres no pueden ser vacíos" });
      }
      datos.nombres = nombresStr;
    }

    if (datos.apellido_paterno !== undefined) {
      const paternoStr = String(datos.apellido_paterno).trim();
      if (!paternoStr) {
        return res.status(400).json({ mensaje: "El apellido paterno no puede ser vacío" });
      }
      datos.apellido_paterno = paternoStr;
    }

    if (datos.apellido_materno !== undefined) {
      const maternoStr = String(datos.apellido_materno).trim();
      if (!maternoStr) {
        return res.status(400).json({ mensaje: "El apellido materno no puede ser vacío" });
      }
      datos.apellido_materno = maternoStr;
    }

    if (datos.telefono !== undefined) {
      datos.telefono = datos.telefono ? String(datos.telefono).trim() : null;
    }

    if (datos.correo !== undefined) {
      if (datos.correo && String(datos.correo).trim() !== "") {
        const correoStr = String(datos.correo).trim();
        if (!EMAIL_REGEX.test(correoStr)) {
          return res.status(400).json({ mensaje: "El formato del correo electrónico no es válido" });
        }
        datos.correo = correoStr;
      } else {
        datos.correo = null;
      }
    }

    if (datos.distrito !== undefined) {
      datos.distrito = datos.distrito ? String(datos.distrito).trim() : null;
    }

    if (datos.latitud !== undefined) {
      if (datos.latitud !== null && datos.latitud !== "") {
        const lat = Number(datos.latitud);
        if (isNaN(lat) || lat < -90 || lat > 90) {
          return res.status(400).json({ mensaje: "La latitud debe ser un número válido entre -90 y 90" });
        }
        datos.latitud = lat;
      } else {
        datos.latitud = null;
      }
    }

    if (datos.longitud !== undefined) {
      if (datos.longitud !== null && datos.longitud !== "") {
        const lng = Number(datos.longitud);
        if (isNaN(lng) || lng < -180 || lng > 180) {
          return res.status(400).json({ mensaje: "La longitud debe ser un número válido entre -180 y 180" });
        }
        datos.longitud = lng;
      } else {
        datos.longitud = null;
      }
    }

    const resultado = await asesoresService.actualizarAsesor(parsedId, datos);

    return res.status(200).json(resultado);
  } catch (error) {
    console.error("Error en actualizarAsesor:", error);

    return res.status(500).json({
      mensaje: "Error al actualizar el asesor",
      error: error.message,
    });
  }
}

/**
 * Controlador para actualizar únicamente el estado de un asesor.
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
async function actualizarEstado(req, res) {
  try {
    const { id } = req.params;
    const { estado } = req.body;

    const parsedId = Number(id);
    if (isNaN(parsedId) || !Number.isInteger(parsedId) || parsedId <= 0) {
      return res.status(400).json({
        mensaje: "El id del asesor no es válido",
      });
    }

    if (!estado || String(estado).trim() === "") {
      return res.status(400).json({
        mensaje: "El estado es requerido",
      });
    }

    const estadoNorm = String(estado).trim().toUpperCase();
    if (!["ACTIVO", "INACTIVO"].includes(estadoNorm)) {
      return res.status(400).json({
        mensaje: "El estado proporcionado no es válido (Debe ser ACTIVO o INACTIVO)",
      });
    }

    const asesorExistente = await asesoresService.obtenerAsesorPorId(parsedId);
    if (!asesorExistente) {
      return res.status(404).json({
        mensaje: "Asesor no encontrado",
      });
    }

    const resultado = await asesoresService.actualizarEstado(parsedId, estadoNorm);

    return res.status(200).json(resultado);
  } catch (error) {
    console.error("Error en actualizarEstado:", error);

    return res.status(500).json({
      mensaje: "Error al actualizar el estado del asesor",
      error: error.message,
    });
  }
}

/**
 * Endpoint heredado: conserva el registro y lo inactiva.
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
async function eliminarAsesor(req, res) {
  try {
    const { id } = req.params;

    const parsedId = Number(id);
    if (isNaN(parsedId) || !Number.isInteger(parsedId) || parsedId <= 0) {
      return res.status(400).json({
        mensaje: "El id del asesor no es válido",
      });
    }

    const asesorExistente = await asesoresService.obtenerAsesorPorId(parsedId);
    if (!asesorExistente) {
      return res.status(404).json({
        mensaje: "Asesor no encontrado",
      });
    }

    const resultado = await asesoresService.eliminarAsesor(parsedId);

    return res.status(200).json({
      mensaje: "Asesor inactivado correctamente; su historial se mantiene disponible",
      ...resultado,
    });
  } catch (error) {
    console.error("Error en eliminarAsesor:", error);

    return res.status(500).json({
      mensaje: "Error al inactivar el asesor",
      error: error.message,
    });
  }
}

/**
 * Controlador para importar asesores desde un archivo Excel.
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
async function importarAsesores(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        mensaje: "No se ha proporcionado ningún archivo o formato no es válido",
      });
    }

    const resultado = await asesoresService.importarAsesores(req.file.buffer);

    return res.status(200).json(resultado);
  } catch (error) {
    console.error("Error en importarAsesores:", error);

    return res.status(500).json({
      mensaje: "Error al importar los asesores",
      error: error.message,
    });
  }
}

async function geocodificarUbicacion(req, res, next) {
  try {
    const data = req.body.url
      ? await asesoresService.geocodificarEnlace(req.body.url)
      : await asesoresService.geocodificarUbicacion(req.body.latitud, req.body.longitud);
    return res.json({ data });
  } catch (error) {
    next(error);
  }
}

export default {
  geocodificarUbicacion,
  obtenerAsesores,
  obtenerAsesorPorId,
  crearAsesor,
  actualizarAsesor,
  actualizarEstado,
  eliminarAsesor,
  importarAsesores,
};