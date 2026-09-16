import sql from "mssql";

const sqlServerConfig = {
  server: process.env.RRCC_SQL_HOST,

  port: Number(
    process.env.RRCC_SQL_PORT || 1433
  ),

  database:
    process.env.RRCC_SQL_DATABASE || "Buscador",

  user:
    process.env.RRCC_SQL_USER,

  password:
    process.env.RRCC_SQL_PASSWORD,

  options: {
    encrypt:
      String(
        process.env.RRCC_SQL_ENCRYPT ?? "false"
      ).toLowerCase() === "true",

    trustServerCertificate:
      String(
        process.env
          .RRCC_SQL_TRUST_SERVER_CERTIFICATE ??
          "true"
      ).toLowerCase() === "true",
  },

  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },

  connectionTimeout: 15000,
  requestTimeout: 30000,
};

let poolPromise = null;

export async function getRrccPool() {
  if (!poolPromise) {
    poolPromise = new sql.ConnectionPool(
      sqlServerConfig
    )
      .connect()
      .catch(error => {
        // Si falla, permitimos reintentar
        // en la siguiente solicitud.
        poolPromise = null;

        throw error;
      });
  }

  return poolPromise;
}

export async function closeRrccPool() {
  if (!poolPromise) {
    return;
  }

  try {
    const pool = await poolPromise;
    await pool.close();
  } finally {
    poolPromise = null;
  }
}

export { sql };