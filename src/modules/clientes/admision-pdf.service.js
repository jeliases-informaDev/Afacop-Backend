import puppeteer from "puppeteer";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

/* =========================================================
   FUENTE INTER
========================================================= */

const interPackagePath = require.resolve(
  "@fontsource/inter/package.json"
);

const interDirectory = dirname(interPackagePath);

const inter400 = readFileSync(
  join(
    interDirectory,
    "files",
    "inter-latin-400-normal.woff2"
  )
).toString("base64");

const inter600 = readFileSync(
  join(
    interDirectory,
    "files",
    "inter-latin-600-normal.woff2"
  )
).toString("base64");

const inter700 = readFileSync(
  join(
    interDirectory,
    "files",
    "inter-latin-700-normal.woff2"
  )
).toString("base64");

/* =========================================================
   LOGO
========================================================= */

const logoBase64 = readFileSync(
  new URL(
    "../../assets/logo-informaPeru.png",
    import.meta.url
  )
).toString("base64");

const logoDataUri =
  `data:image/png;base64,${logoBase64}`;

/* =========================================================
   UTILIDADES
========================================================= */

function escapeHtml(valor) {
  return String(valor ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function numero(valor) {
  const value = Number(valor);

  return Number.isFinite(value)
    ? value
    : 0;
}

function formatMoneda(valor) {
  return numero(valor).toLocaleString(
    "es-PE",
    {
      style: "currency",
      currency: "PEN",
    }
  );
}

function formatPeriodo(periodo) {
  const value = String(periodo ?? "");

  if (!/^\d{6}$/.test(value)) {
    return value || "—";
  }

  const year = value.slice(0, 4);
  const month = Number(value.slice(4, 6));

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  if (month < 1 || month > 12) {
    return value;
  }

  return `${meses[month - 1]} ${year}`;
}

function formatFecha(fecha) {
  if (!fecha) {
    return "—";
  }

  const date = new Date(fecha);

  if (Number.isNaN(date.getTime())) {
    return String(fecha);
  }

  return date.toLocaleString(
    "es-PE",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Lima",
    }
  );
}

function formatNombre(texto) {
  if (!texto) {
    return "—";
  }

  return String(texto)
    .trim()
    .toUpperCase();
}

function formatEntidad(texto) {
  if (!texto) {
    return "—";
  }

  const conectores = new Set([
    "de",
    "del",
    "la",
    "las",
    "los",
    "y",
    "e",
    "en",
  ]);

  const siglas = new Set([
    "s",
    "a",
    "sac",
    "saa",
    "srl",
    "eirl",
    "crac",
    "cmac",
    "bcp",
    "bbva",
    "oh",
  ]);

  return String(texto)
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((palabra, index) => {
      if (siglas.has(palabra)) {
        return palabra.toUpperCase();
      }

      if (
        index > 0 &&
        conectores.has(palabra)
      ) {
        return palabra;
      }

      return (
        palabra.charAt(0).toUpperCase() +
        palabra.slice(1)
      );
    })
    .join(" ");
}

function colorCalificacion(calificacion) {
  const colores = {
    NOR: "#10B981",
    CPP: "#84CC16",
    DEF: "#EAB308",
    DUD: "#F97316",
    PER: "#DC2626",
  };

  return (
    colores[
      String(calificacion ?? "")
        .trim()
        .toUpperCase()
    ] || "#94A3B8"
  );
}

/* =========================================================
   CREACIÓN DEL HTML
========================================================= */

function crearHtml(evaluacion) {
  const rating =
    evaluacion.rating ?? {};

  const deudas =
    Array.isArray(evaluacion.deudas)
      ? evaluacion.deudas
      : [];

  const lineas =
    Array.isArray(evaluacion.lineas)
      ? evaluacion.lineas
      : [];

  /* =======================================================
     CALIFICACIÓN
  ======================================================= */

  const ratingCols = [
    {
      label: "Normal",
      value: numero(rating.normal),
      color: "#10B981",
      porcentaje: true,
    },
    {
      label: "Prob. Potenciales",
      value: numero(rating.problemas),
      color: "#84CC16",
      porcentaje: true,
    },
    {
      label: "Deficiente",
      value: numero(rating.deficiente),
      color: "#EAB308",
      porcentaje: true,
    },
    {
      label: "Dudoso",
      value: numero(rating.dudoso),
      color: "#F97316",
      porcentaje: true,
    },
    {
      label: "Pérdida",
      value: numero(rating.perdida),
      color: "#DC2626",
      porcentaje: true,
    },
    {
      label: "Reportan",
      value: numero(rating.reportan),
      color: "#2678DC",
      porcentaje: false,
    },
  ];

  const ratingHtml =
    ratingCols
      .map(
        (item) => `
          <div class="rating-item">

            <div class="rating-label">
              ${escapeHtml(item.label)}
            </div>

            <div
              class="rating-value"
              style="color:${item.color}"
            >
              ${escapeHtml(item.value)}
              ${item.porcentaje ? "%" : ""}
            </div>

          </div>
        `
      )
      .join("");

  const ratingBar =
    ratingCols
      .map((item) => {
        const flex =
          item.value > 0
            ? item.value
            : 0.5;

        return `
          <div
            style="
              flex:${flex};
              background:${item.color};
              min-width:3px;
            "
          ></div>
        `;
      })
      .join("");

  /* =======================================================
     DEUDAS
  ======================================================= */

  const deudasHtml =
    deudas.length > 0
      ? deudas
          .map(
            (d) => `
              <tr>

                <td class="entity">
                  ${escapeHtml(
                    formatEntidad(d.entidad)
                  )}
                </td>

                <td>
                  ${escapeHtml(
                    d.tipoDeuda || "—"
                  )}
                </td>

                <td>
                  <div class="calificacion">

                    <strong>
                      ${escapeHtml(
                        d.calificacion || "—"
                      )}
                    </strong>

                    <span
                      class="status-dot"
                      style="
                        background:
                        ${colorCalificacion(
                          d.calificacion
                        )};
                      "
                    ></span>

                  </div>
                </td>

                <td class="number">
                  ${escapeHtml(
                    d.dias ?? 0
                  )}
                </td>

                <td class="money">
                  ${escapeHtml(
                    formatMoneda(
                      d.capital
                    )
                  )}
                </td>

              </tr>
            `
          )
          .join("")
      : `
          <tr>
            <td
              colspan="5"
              class="empty"
            >
              No se encontraron deudas.
            </td>
          </tr>
        `;

  /* =======================================================
     LÍNEAS DE CRÉDITO
  ======================================================= */

  const lineasHtml =
    lineas.length > 0
      ? lineas
          .map(
            (l) => `
              <tr>

                <td class="entity">
                  ${escapeHtml(
                    formatEntidad(l.entidad)
                  )}
                </td>

                <td>
                  ${escapeHtml(
                    l.tipo || "—"
                  )}
                </td>

                <td class="number">
                  ${escapeHtml(
                    numero(
                      l.porcentajeUtilizado
                    ).toFixed(2)
                  )}%
                </td>

                <td class="number">
                  ${escapeHtml(
                    numero(
                      l.porcentajeNoUtilizado
                    ).toFixed(2)
                  )}%
                </td>

                <td class="money">
                  ${escapeHtml(
                    formatMoneda(
                      l.lineaCredito
                    )
                  )}
                </td>

              </tr>
            `
          )
          .join("")
      : `
          <tr>
            <td
              colspan="5"
              class="empty"
            >
              No se encontraron líneas de crédito.
            </td>
          </tr>
        `;

  /* =======================================================
     HTML COMPLETO
  ======================================================= */

  return `
<!DOCTYPE html>

<html lang="es">

<head>

  <meta charset="UTF-8" />

  <style>

    /* =====================================================
       FUENTE
    ===================================================== */

    @font-face {
      font-family: "Inter";
      src:
        url(data:font/woff2;base64,${inter400})
        format("woff2");

      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: "Inter";
      src:
        url(data:font/woff2;base64,${inter600})
        format("woff2");

      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: "Inter";
      src:
        url(data:font/woff2;base64,${inter700})
        format("woff2");

      font-weight: 700;
      font-style: normal;
    }


    /* =====================================================
       PÁGINA
    ===================================================== */

    @page {
      size: A4 landscape;
      margin: 10mm;
    }

    * {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      padding: 0;

      background: #ffffff;
      color: #292d32;

      font-family:
        "Inter",
        Arial,
        sans-serif;

      font-size: 11px;

      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    body {
      width: 100%;
    }

    .document {
      width: 100%;
    }


    /* =====================================================
       CABECERA
    ===================================================== */

    .document-header {
      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;

      min-height: 50px;

      margin-bottom: 14px;
      padding-bottom: 10px;

      border-bottom: 1px solid #e1e5ea;

      break-inside: avoid;
      page-break-inside: avoid;
    }

    .document-brand {
      position: relative;

      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .company-logo {
      position: absolute;
      left: 0;

      width: 115px;
      max-height: 45px;

      object-fit: contain;
      object-position: left center;
    }

    .document-brand > div {
      text-align: center;
    }

    .document-title {
      margin: 0;

      color: #18212f;

      font-size: 20px;
      line-height: 1.2;
      font-weight: 700;

      letter-spacing: -0.03em;
    }


    /* =====================================================
       METADATOS
    ===================================================== */

    .metadata-grid {
      display: grid;

      grid-template-columns:
        0.8fr
        1.8fr
        1.3fr;

      gap: 6px;

      margin-bottom: 14px;

      break-inside: avoid;
      page-break-inside: avoid;
    }

    .metadata-card {
      min-width: 0;

      padding: 7px 9px;

      background: #f7f9fb;

      border: 1px solid #dfe4ea;
      border-radius: 7px;
    }

    .metadata-label {
      color: #727c86;

      font-size: 8px;
      font-weight: 600;

      line-height: 1;

      letter-spacing: 0.05em;

      text-transform: uppercase;
    }

    .metadata-value {
      margin-top: 4px;

      color: #292d32;

      font-size: 11px;
      font-weight: 600;

      line-height: 1.2;

      overflow-wrap: break-word;
    }


    /* =====================================================
       SECCIONES
    ===================================================== */

    .section {
      margin-bottom: 14px;

      border: 1px solid #dfe4ea;
      border-radius: 8px;

      overflow: hidden;
    }

    .section-title {
      padding: 8px 14px;

      background: #f7f9fb;

      border-bottom: 1px solid #dfe4ea;

      color: #727c86;

      font-size: 11px;
      font-weight: 700;

      letter-spacing: -0.01em;

      break-after: avoid;
      page-break-after: avoid;
    }


    /* =====================================================
       CALIFICACIÓN CREDITICIA
    ===================================================== */

    .rating-section {
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .rating-bar {
      display: flex;
      height: 6px;
    }

    .rating-grid {
      display: grid;

      grid-template-columns:
        repeat(6, 1fr);
    }

    .rating-item {
      min-width: 0;

      padding: 9px 10px;

      border-right: 1px solid #dfe4ea;
    }

    .rating-item:last-child {
      border-right: none;
    }

    .rating-label {
      color: #727c86;

      font-size: 10px;
      font-weight: 600;
    }

    .rating-value {
      margin-top: 3px;

      font-size: 16px;
      font-weight: 700;

      letter-spacing: -0.02em;
    }


    /* =====================================================
       TABLAS
    ===================================================== */

    .table-section {
      overflow: visible;

      break-inside: auto;
      page-break-inside: auto;
    }

    table {
      width: 100%;

      border-collapse: collapse;

      table-layout: fixed;
    }

    thead {
      display: table-row-group;

      break-after: avoid;
      page-break-after: avoid;
    }

    tr {
      break-inside: avoid;
      page-break-inside: avoid;
    }

    tbody tr:nth-last-child(2) {
      break-after: avoid;
      page-break-after: avoid;
    }

    th,
    td {
      border-bottom: 1px solid #dfe4ea;

      vertical-align: middle;
    }

    th {
      padding: 9px 10px;

      background: #f7f9fb;

      color: #727c86;

      font-size: 10.5px;
      font-weight: 600;

      text-align: left;

      letter-spacing: -0.01em;
    }

    td {
      padding: 9px 10px;

      color: #292d32;

      font-size: 11px;
      font-weight: 400;

      letter-spacing: -0.005em;
    }

    tbody tr:nth-child(even) {
      background: #fafbfc;
    }

    .entity {
      font-weight: 600;

      overflow-wrap: break-word;
    }

    .money {
      text-align: right;

      font-weight: 600;

      font-variant-numeric:
        tabular-nums;

      white-space: nowrap;
    }

    .number {
      text-align: left;

      font-variant-numeric:
        tabular-nums;

      white-space: nowrap;
    }

    .calificacion {
      display: flex;

      align-items: center;

      gap: 7px;
    }

    .status-dot {
      width: 10px;
      height: 10px;

      display: inline-block;

      flex-shrink: 0;

      border-radius: 50%;
    }


    /* =====================================================
       TOTAL
    ===================================================== */

    .total-row {
      background: #f7f9fb !important;
      border-top: 2px solid #dfe4ea;
      break-before: avoid;
      page-break-before: avoid;
    }

    .total-row td {
      font-weight: 700;
    }

    .total-label {
      text-align: left;
      font-weight: 700;
      white-space: nowrap;
    }

    .empty {
      padding: 18px;

      text-align: center;

      color: #7a838d;
    }


    /* =====================================================
       ANCHOS DE COLUMNAS
       IGUALES EN AMBAS TABLAS
    ===================================================== */

    .debt-col-entity,
    .credit-col-entity {
      width: 28%;
    }

    .debt-col-type,
    .credit-col-type {
      width: 24%;
    }

    .debt-col-rating,
    .credit-col-used {
      width: 20%;
      text-align: left;
    }

    .debt-col-days,
    .credit-col-unused {
      width: 13%;
      text-align: left;
    }

    .debt-col-money,
    .credit-col-line {
      width: 15%;
      text-align: right;
    }


    /* =====================================================
       REPORTE ACTUALIZADO
    ===================================================== */

    .report-updated {
      margin-top: 2px;

      color: #727c86;

      font-size: 11px;
      font-weight: 600;

      break-inside: avoid;
      page-break-inside: avoid;
    }

  </style>

</head>


<body>

  <main class="document">


    <!-- ===================================================
         CABECERA
    ==================================================== -->

    <header class="document-header">

      <div class="document-brand">

        <img
          src="${logoDataUri}"
          class="company-logo"
          alt="Logo Informa Perú"
        />

        <div>

          <h1 class="document-title">
            Reporte de información crediticia
          </h1>

        </div>

      </div>

    </header>


    <!-- ===================================================
         DATOS DEL CLIENTE
    ==================================================== -->

    <section class="metadata-grid">

      <div class="metadata-card">

        <div class="metadata-label">
          Documento
        </div>

        <div class="metadata-value">
          ${escapeHtml(
            evaluacion.documento || "—"
          )}
        </div>

      </div>


      <div class="metadata-card">

        <div class="metadata-label">
          Nombre
        </div>

        <div class="metadata-value">
          ${escapeHtml(
            formatNombre(
              evaluacion.nombre
            )
          )}
        </div>

      </div>


      <div class="metadata-card">

        <div class="metadata-label">
          Consulta
        </div>

        <div class="metadata-value">
          ${escapeHtml(
            formatFecha(
              evaluacion.fechaConsulta
            )
          )}
        </div>

      </div>

    </section>


    <!-- ===================================================
         CALIFICACIÓN CREDITICIA
    ==================================================== -->

    <section
      class="section rating-section"
    >

      <div class="section-title">
        Calificación crediticia
      </div>

      <div class="rating-bar">
        ${ratingBar}
      </div>

      <div class="rating-grid">
        ${ratingHtml}
      </div>

    </section>


    <!-- ===================================================
         DETALLE DE DEUDA
    ==================================================== -->

    <section
      class="section table-section"
    >

      <div class="section-title">
        Detalle de deuda
      </div>

      <table>

        <colgroup>
          <col style="width:28%">
          <col style="width:24%">
          <col style="width:20%">
          <col style="width:13%">
          <col style="width:15%">
        </colgroup>

        <thead>

          <tr>

            <th class="debt-col-entity">
              Entidad
            </th>

            <th class="debt-col-type">
              Tipo de deuda
            </th>

            <th class="debt-col-rating">
              Calificación
            </th>

            <th class="debt-col-days">
              Días
            </th>

            <th class="debt-col-money">
              Capital
            </th>

          </tr>

        </thead>


        <tbody>

          ${deudasHtml}

          ${
            deudas.length > 0
              ? `
                <tr class="total-row">

                  <td></td>
                  <td></td>
                  <td></td>

                  <td class="total-label">
                    TOTAL
                  </td>

                  <td class="money">
                    ${escapeHtml(
                      formatMoneda(
                        evaluacion.totalCapital
                      )
                    )}
                  </td>

                </tr>
              `
              : ""
          }

        </tbody>

      </table>

    </section>


    <!-- ===================================================
         LÍNEAS DE CRÉDITO
    ==================================================== -->

    <section
      class="section table-section"
    >

      <div class="section-title">
        Líneas de crédito
      </div>

      <table>

        <colgroup>
          <col style="width:28%">
          <col style="width:24%">
          <col style="width:20%">
          <col style="width:13%">
          <col style="width:15%">
        </colgroup>

        <thead>

          <tr>

            <th class="credit-col-entity">
              Entidad reportante
            </th>

            <th class="credit-col-type">
              Tipo de línea
            </th>

            <th class="credit-col-used">
              % utilizado
            </th>

            <th class="credit-col-unused">
              % No utilizado
            </th>

            <th class="credit-col-line">
              Línea de crédito
            </th>

          </tr>

        </thead>


        <tbody>

          ${lineasHtml}

          ${
            lineas.length > 0
              ? `
                <tr class="total-row">

                  <td></td>
                  <td></td>
                  <td></td>

                  <td class="total-label">
                    TOTAL
                  </td>

                  <td class="money">
                    ${escapeHtml(
                      formatMoneda(
                        evaluacion.totalLineaCredito
                      )
                    )}
                  </td>

                </tr>
              `
              : ""
          }

        </tbody>

      </table>

    </section>


    <!-- ===================================================
         PERÍODO
    ==================================================== -->

    <div class="report-updated">
      Reporte actualizado con el periodo ${escapeHtml(
        formatPeriodo(
          evaluacion.periodo
        )
      )}
    </div>


  </main>

</body>

</html>
  `;
}


/* =========================================================
   GENERACIÓN DEL PDF
========================================================= */

export async function generarPdfEvaluacion(
  evaluacion
) {
  let browser;

  try {

    browser = await puppeteer.launch({
      headless: true,

      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
      ],
    });


    const page =
      await browser.newPage();


    const html =
      crearHtml(evaluacion);


    await page.setContent(
      html,
      {
        waitUntil: "networkidle0",
      }
    );


    await page.evaluate(
      async () => {
        await document.fonts.ready;
      }
    );


    const pdf =
      await page.pdf({
        format: "A4",

        landscape: true,

        printBackground: true,

        preferCSSPageSize: true,

        margin: {
          top: "10mm",
          right: "10mm",
          bottom: "10mm",
          left: "10mm",
        },
      });


    return pdf;

  } finally {

    if (browser) {
      await browser.close();
    }

  }
}