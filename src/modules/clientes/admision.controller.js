import admisionService from "./admision.service.js";
import { generarPdfEvaluacion, } from "./admision-pdf.service.js";

/**
 * Controlador para obtener el listado de admisiones.
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
async function obtenerAdmisiones(req, res) {
  try {
    const { page, limit, search, estado } = req.query;

    // Validar y normalizar parámetros de paginación
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

    const searchStr = search ? String(search).trim() : "";
    const estadoStr = estado ? String(estado).trim() : "";

    const resultado = await admisionService.obtenerAdmisiones({
      page: parsedPage,
      limit: parsedLimit,
      search: searchStr,
      estado: estadoStr,
    });

    return res.status(200).json(resultado);
  } catch (error) {
    console.error("Error en obtenerAdmisiones:", error);

    return res.status(500).json({
      mensaje: "Error al obtener las admisiones",
      error: error.message,
    });
  }
}

async function evaluarCliente(req, res, next) {
  try {
    const dni = String(
      req.params.dni ?? ""
    ).trim();

    if (!/^\d{8}$/.test(dni)) {
      return res.status(400).json({
        mensaje:
          "El DNI debe contener exactamente 8 dígitos.",
        code: "INVALID_DNI",
      });
    }

    const actorId =
      req.user?.id_usuario ??
      req.user?.id;

    if (!actorId) {
      return res.status(401).json({
        mensaje:
          "No se pudo identificar al usuario autenticado.",
        code: "AUTH_USER_NOT_FOUND",
      });
    }

    const resultado =
      await admisionService.evaluarCliente({
        dni,
        actorId,
      });

    return res.status(200).json({
      data: resultado,
    });
  } catch (error) {
    next(error);
  }
}

async function exportarPdf(
  req,
  res,
  next
) {
  try {

    const evaluacion =
      req.body?.evaluacion;

    if (
      !evaluacion ||
      typeof evaluacion !== "object"
    ) {
      return res.status(400).json({
        mensaje:
          "Debe enviar la evaluación para generar el PDF.",
        code: "PDF_DATA_REQUIRED",
      });
    }

    const dni = String(
      evaluacion.dni ?? ""
    ).trim();

    if (!/^\d{8}$/.test(dni)) {
      return res.status(400).json({
        mensaje:
          "El DNI de la evaluación no es válido.",
        code: "INVALID_DNI",
      });
    }

    const pdf =
      await generarPdfEvaluacion({
        ...evaluacion,
        dni,
      });

    const pdfBuffer =
      Buffer.from(pdf);

    res.setHeader(
      "Content-Type",
      "application/pdf"
    );

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="calificacion_crediticia_${dni}.pdf"`
    );

    res.setHeader(
      "Content-Length",
      pdfBuffer.length
    );

    return res
      .status(200)
      .send(pdfBuffer);

  } catch (error) {

    console.error(
      "Error generando PDF de admisión:",
      error
    );

    next(error);

  }
}

export default {
  obtenerAdmisiones,
  evaluarCliente,
  exportarPdf,
};
