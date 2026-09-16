import prisma from "#core/config/prisma.js";
import {  getRrccPool, sql, } from "#core/config/sqlserver.js";
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

async function evaluarCliente({
  dni,
  actorId,
}) {
  // --------------------------------------------------
  // VALIDACIÓN DNI
  // --------------------------------------------------

  if (!dni) {
    throw Object.assign(
      new Error("DNI requerido."),
      {
        statusCode: 400,
        code: "DNI_REQUIRED",
      }
    );
  }

  if (!/^\d{8}$/.test(dni)) {
    throw Object.assign(
      new Error(
        "El DNI debe contener exactamente 8 dígitos."
      ),
      {
        statusCode: 400,
        code: "INVALID_DNI",
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
  // CONEXIÓN SQL SERVER
  // --------------------------------------------------

  const pool =
    await getRrccPool();

  // --------------------------------------------------
  // 1. CALIFICACIÓN MÁS RECIENTE
  // --------------------------------------------------

  const calificacionResult =
    await pool
      .request()
      .input(
        "dni",
        sql.VarChar(20),
        dni
      )
      .query(`
        SELECT TOP 1
          PERIODO,
          CODIGOSBS,
          DOCUMENTO,

          NOR,
          CPP,
          DEF,
          DUD,
          PER,
          REPORTAN,

          APE_PAT,
          APE_MAT,
          PRI_NOMBRE,
          SEG_NOMBRE,

          FECHA_CARGA

        FROM [RRCC].[Calificacion]

        WHERE DOCUMENTO = @dni

        ORDER BY
          PERIODO DESC,
          FECHA_CARGA DESC
      `);

  const calificacion =
    calificacionResult.recordset[0];

  // --------------------------------------------------
  // CLIENTE NO ENCONTRADO
  // --------------------------------------------------

  if (!calificacion) {
    throw Object.assign(
      new Error(
        "No se encontró información crediticia para el DNI consultado."
      ),
      {
        statusCode: 404,
        code: "RRCC_CLIENT_NOT_FOUND",
      }
    );
  }

  // --------------------------------------------------
  // DATOS PRINCIPALES
  // --------------------------------------------------

  const periodo =
    String(
      calificacion.PERIODO ?? ""
    ).trim();

  const codigoSbs =
    String(
      calificacion.CODIGOSBS ?? ""
    ).trim();

  // --------------------------------------------------
  // 2. DEUDAS
  // --------------------------------------------------

  const deudaResult =
    await pool
      .request()
      .input(
        "dni",
        sql.VarChar(20),
        dni
      )
      .input(
        "periodo",
        sql.VarChar(6),
        periodo
      )
      .input(
        "codigoSbs",
        sql.VarChar(20),
        codigoSbs
      )
      .query(`
        SELECT
          PERIODO,
          CODIGOSBS,
          DOCUMENTO,
          RAZONSOCIAL,

          CODIGOEMPRESA,
          ENTIDAD,

          TIPO_DEUDA,
          DIAS,
          CALIFICACION,

          SALDO,

          FECHA_CARGA

        FROM [RRCC].[Deuda]

        WHERE DOCUMENTO = @dni
          AND CODIGOSBS = @codigoSbs
          AND PERIODO = @periodo

        ORDER BY
          ENTIDAD,
          TIPO_DEUDA
      `);

  // --------------------------------------------------
  // 3. LÍNEAS DE CRÉDITO
  // --------------------------------------------------

  const lineasResult =
    await pool
      .request()
      .input(
        "dni",
        sql.VarChar(20),
        dni
      )
      .input(
        "periodo",
        sql.VarChar(6),
        periodo
      )
      .input(
        "codigoSbs",
        sql.VarChar(20),
        codigoSbs
      )
      .query(`
        SELECT
          PERIODO,
          CODIGOSBS,
          DOCUMENTO,
          RAZONSOCIAL,

          CODIGOEMPRESA,
          ENTIDAD,

          TIPO,

          LINEA_CREDITO,
          LINEA_NO_UTILIZADA,
          LINEA_UTILIZADA,

          FECHA_CARGA

        FROM [RRCC].[LineasCredito]

        WHERE DOCUMENTO = @dni
          AND CODIGOSBS = @codigoSbs
          AND PERIODO = @periodo

        ORDER BY ENTIDAD
      `);

  // --------------------------------------------------
  // 4. NOMBRE COMPLETO
  // --------------------------------------------------

  const nombre = [
    calificacion.PRI_NOMBRE,
    calificacion.SEG_NOMBRE,
    calificacion.APE_PAT,
    calificacion.APE_MAT,
  ]
    .filter(Boolean)
    .map(value =>
      String(value).trim()
    )
    .filter(Boolean)
    .join(" ");

  // --------------------------------------------------
  // 5. CALIFICACIÓN CREDITICIA
  // --------------------------------------------------

  const rating = {
    normal:
      Number(
        calificacion.NOR ?? 0
      ),

    problemas:
      Number(
        calificacion.CPP ?? 0
      ),

    deficiente:
      Number(
        calificacion.DEF ?? 0
      ),

    dudoso:
      Number(
        calificacion.DUD ?? 0
      ),

    perdida:
      Number(
        calificacion.PER ?? 0
      ),

    reportan:
      Number(
        calificacion.REPORTAN ?? 0
      ),
  };

  // --------------------------------------------------
  // 6. DETALLE DE DEUDA
  // --------------------------------------------------

  const deudas =
    deudaResult.recordset.map(
      deuda => ({
        entidad:
          deuda.ENTIDAD || "",

        tipoDeuda:
          deuda.TIPO_DEUDA || "",

        calificacion:
          deuda.CALIFICACION || "",

        capital:
          Number(
            deuda.SALDO ?? 0
          ),

        dias:
          Number(
            deuda.DIAS ?? 0
          ),

        codigoEmpresa:
          deuda.CODIGOEMPRESA || "",
      })
    );

  // --------------------------------------------------
  // 7. LÍNEAS DE CRÉDITO
  // --------------------------------------------------

  const lineas =
    lineasResult.recordset.map(
      linea => {
        const lineaCredito =
          Number(
            linea.LINEA_CREDITO ?? 0
          );

        const lineaNoUtilizada =
          Number(
            linea.LINEA_NO_UTILIZADA ?? 0
          );

        const lineaUtilizada =
          Number(
            linea.LINEA_UTILIZADA ?? 0
          );

        // --------------------------------------------
        // PORCENTAJE UTILIZADO
        // --------------------------------------------

        const porcentajeUtilizado =
          lineaCredito > 0
            ? (
                lineaUtilizada /
                lineaCredito
              ) * 100
            : 0;

        // --------------------------------------------
        // PORCENTAJE NO UTILIZADO
        // --------------------------------------------

        const porcentajeNoUtilizado =
          lineaCredito > 0
            ? (
                lineaNoUtilizada /
                lineaCredito
              ) * 100
            : 0;

        // --------------------------------------------
        // CONSISTENCIA DE LA LÍNEA
        // --------------------------------------------

        const sumaComponentes =
          lineaUtilizada +
          lineaNoUtilizada;

        const diferencia =
          lineaCredito -
          sumaComponentes;

        const consistente =
          Math.abs(
            diferencia
          ) <= 0.01;

        return {
          entidad:
            linea.ENTIDAD || "",

          tipo:
            linea.TIPO || "",

          lineaCredito,

          lineaUtilizada,

          lineaNoUtilizada,

          porcentajeUtilizado:
            Number(
              porcentajeUtilizado.toFixed(2)
            ),

          porcentajeNoUtilizado:
            Number(
              porcentajeNoUtilizado.toFixed(2)
            ),

          diferencia:
            Number(
              diferencia.toFixed(2)
            ),

          consistente,

          codigoEmpresa:
            linea.CODIGOEMPRESA || "",
        };
      }
    );

  // --------------------------------------------------
  // 8. TOTALES
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
  // 9. GENERAR TOKEN DE CONSULTA
  // --------------------------------------------------

  const tokenConsulta =
    crypto.randomUUID();

  const fechaConsulta =
    new Date();

  // --------------------------------------------------
  // 10. REGISTRAR CONSULTA EN POSTGRESQL
  // --------------------------------------------------

  await prisma.consultaCrediticia.create({
    data: {
      token_consulta:
        tokenConsulta,

      documento:
        dni,

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
  // 11. RESPUESTA FINAL
  // --------------------------------------------------

  return {
    tokenConsulta,

    dni,

    codigoSbs,

    nombre,

    periodo,

    fechaConsulta:
      fechaConsulta.toISOString(),

    fechaCarga:
      calificacion.FECHA_CARGA ??
      null,

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