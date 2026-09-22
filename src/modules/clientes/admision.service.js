import prisma from "#core/config/prisma.js";
import crypto from "node:crypto";
/**
 * Obtiene la lista de admisiones con paginación...

 
 * @param {Object} params
 * @param {number} params.page
 * @param {number} params.limit
 * @param {string} [params.search]
 * @param {string} [params.estado]
 * @returns {Promise<Object>} Resultado con data paginada y objeto pagination.
 */
async function obtenerAdmisiones({ page = 1, limit = 12, search = "", estado } = {}) {
  const where = {};

  if (search && search.trim() !== "") {
    const trimmedSearch = search.trim();
    where.cliente = {
      is: {
        OR: [
          { numero_documento: { contains: trimmedSearch, mode: "insensitive" } },
          { nombres: { contains: trimmedSearch, mode: "insensitive" } },
          { apellido_paterno: { contains: trimmedSearch, mode: "insensitive" } },
          { apellido_materno: { contains: trimmedSearch, mode: "insensitive" } },
        ],
      },
    };
  }

  if (estado && estado.trim() !== "") {
    where.estado = estado.trim();
  }

  const skip = (page - 1) * limit;
  const take = limit;

  const [total, admisiones] = await Promise.all([
    prisma.admision.count({ where }),
    prisma.admision.findMany({
      where,
      skip,
      take,
      orderBy: {
        id_admision: "asc",
      },
      include: {
        cliente: true,
      },
    }),
  ]);

  const data = admisiones.map((admision) => {
    const cliente = admision.cliente || {};

    return {
      id: admision.id_admision,
      dni: cliente.numero_documento || "",
      ape_pat: cliente.apellido_paterno || "",
      ape_mat: cliente.apellido_materno || "",
      nombres: cliente.nombres || "",
      producto: admision.producto,
      linea: admision.linea_credito == null ? null : Number(admision.linea_credito),
      estado: admision.estado,
      fecha: admision.fecha,
    };
  });

  const totalPages = Math.ceil(total / limit);

  return {
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
  };
}

async function consultarRrccApi(documento) {
  const baseUrl = String(process.env.RRCC_API_URL || "").replace(/\/$/, "");
  const apiKey = process.env.RRCC_API_KEY;

  if (!baseUrl) {
    const error = new Error("RRCC_API_URL no está configurado.");
    error.statusCode = 500;
    error.code = "RRCC_API_NOT_CONFIGURED";
    throw error;
  }

  if (!apiKey) {
    const error = new Error("RRCC_API_KEY no está configurado.");
    error.statusCode = 500;
    error.code = "RRCC_API_NOT_CONFIGURED";
    throw error;
  }

  let response;

  try {
    response = await fetch(
      `${baseUrl}/v1/rrcc/evaluar/${encodeURIComponent(documento)}`,
      {
        method: "GET",
        headers: {
          "x-api-key": apiKey,
          Accept: "application/json",
        },
        signal: AbortSignal.timeout(15000),
      }
    );
  } catch (error) {
    console.error("Error conectando con RRCC-API:", error);

    const serviceError = new Error(
      "No se pudo establecer conexión con el servicio RRCC."
    );

    serviceError.statusCode = 502;
    serviceError.code = "RRCC_SERVICE_UNAVAILABLE";

    throw serviceError;
  }

  let payload = null;

  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    if (response.status === 404) {
      const error = new Error(
        payload?.error ||
          "No se encontró información crediticia para el documento consultado."
      );

      error.statusCode = 404;
      error.code = payload?.code || "RRCC_CLIENT_NOT_FOUND";

      throw error;
    }

    if (response.status === 400) {
      const error = new Error(
        payload?.error || "Solicitud inválida al servicio RRCC."
      );

      error.statusCode = 400;
      error.code = payload?.code || "RRCC_BAD_REQUEST";

      throw error;
    }

    if (response.status === 401 || response.status === 403) {
      const error = new Error(
        "No se pudo autenticar la comunicación con el servicio RRCC."
      );

      error.statusCode = 502;
      error.code = "RRCC_SERVICE_AUTH_ERROR";

      throw error;
    }

    const error = new Error(
      "El servicio RRCC respondió con un error."
    );

    error.statusCode = 502;
    error.code = "RRCC_SERVICE_ERROR";

    throw error;
  }

  if (!payload?.data) {
    const error = new Error(
      "El servicio RRCC devolvió una respuesta inválida."
    );

    error.statusCode = 502;
    error.code = "RRCC_INVALID_RESPONSE";

    throw error;
  }

  return payload.data;
}

async function evaluarCliente({
  documento,
  actorId,
}) {

  const documentoNormalizado =
    String(documento ?? "")
      .trim()
      .toUpperCase();

  if (!documentoNormalizado) {
    throw Object.assign(
      new Error("Documento requerido."),
      {
        statusCode: 400,
        code: "DOCUMENT_REQUIRED",
      }
    );
  }

  if (
    !/^[A-Z0-9]{3,20}$/.test(
      documentoNormalizado
    )
  ) {
    throw Object.assign(
      new Error(
        "El número de documento no tiene un formato válido."
      ),
      {
        statusCode: 400,
        code: "INVALID_DOCUMENT",
      }
    );
  }

  // --------------------------------------------------
  // VALIDACIÓN USUARIO AUTENTICADO
  // --------------------------------------------------

  if (!actorId) {
    throw Object.assign(
      new Error(
        "No se pudo identificar al usuario que realiza la consulta."
      ),
      {
        statusCode: 401,
        code: "AUTH_USER_NOT_FOUND",
      }
    );
  }

  // --------------------------------------------------
  // CONSULTAR MICROSERVICIO RRCC
  // --------------------------------------------------

  const rrcc =
  await consultarRrccApi(
    documentoNormalizado
  );

  // --------------------------------------------------
  // DATOS DEVUELTOS POR RRCC-API
  // --------------------------------------------------

  const {
    codigoSbs,
    nombre,
    periodo,
    fechaCarga,
    rating,
    deudas = [],
    lineas = [],
  } = rrcc;

  // --------------------------------------------------
  // TOTALES
  // --------------------------------------------------

  const totalCapital =
    deudas.reduce(
      (total, deuda) =>
        total +
        Number(
          deuda.capital || 0
        ),
      0
    );

  const totalLineaCredito =
    lineas.reduce(
      (total, linea) =>
        total +
        Number(
          linea.lineaCredito || 0
        ),
      0
    );

  // --------------------------------------------------
  // GENERAR TOKEN DE CONSULTA
  // --------------------------------------------------

  const tokenConsulta =
    crypto.randomUUID();

  const fechaConsulta =
    new Date();

  // --------------------------------------------------
  // REGISTRAR CONSULTA EN POSTGRESQL
  // --------------------------------------------------

  await prisma.consultaCrediticia.create({
    data: {
      token_consulta:
        tokenConsulta,

      documento:
        documentoNormalizado,

      codigo_sbs:
        codigoSbs || null,

      periodo:
        periodo || null,

      actor_id:
        actorId,

      estado:
        "EXITOSA",

      fecha_consulta:
        fechaConsulta,
    },
  });

  // --------------------------------------------------
  // RESPUESTA FINAL
  // --------------------------------------------------

  return {
    tokenConsulta,

    documento: documentoNormalizado,

    codigoSbs,

    nombre,

    periodo,

    fechaConsulta:
      fechaConsulta.toISOString(),

    fechaCarga:
      fechaCarga ?? null,

    rating,

    deudas,

    totalCapital:
      Number(
        totalCapital.toFixed(2)
      ),

    lineas,

    totalLineaCredito:
      Number(
        totalLineaCredito.toFixed(2)
      ),
  };
}

export default {
  obtenerAdmisiones,
  evaluarCliente,
};