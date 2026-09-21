import fs from 'node:fs/promises';
import ExcelJS from 'exceljs';
import prisma from '#core/config/prisma.js';
import { logger } from '#core/config/logger.js';
import { resolveMapCoordinates } from '#modules/usuarios/asesores.service.js';
const activeJobs = new Set();
const pendingQueue = [];
let workerRunning = false;
const MAX_ROWS = 200_000;
const BATCH_SIZE = 1_000;
const MAX_ERRORS = 100;

const DOCUMENT_TYPE_BY_INDEX = Object.freeze({ 1: 'DNI', 2: 'CE', 3: 'PASAPORTE', 4: 'RUC' });
const VALID_TIPO_DOCUMENTO = Object.values(DOCUMENT_TYPE_BY_INDEX);
const DOCUMENT_VALIDATION_RULES = {
  DNI: { regex: /^\d{8}$/, description: '8 dígitos numéricos' },
  CE: { regex: /^\d{9,12}$/, description: '9 a 12 dígitos numéricos' },
  PASAPORTE: { regex: /^[A-Z0-9]{8,12}$/, description: '8 a 12 caracteres alfanuméricos' },
  RUC: { regex: /^\d{11}$/, description: '11 dígitos numéricos' },
};

export function validateDocumentNumber(tipoDocumento, numeroDocumento) {
  const rawTipo = String(tipoDocumento ?? '').trim().toUpperCase();
  const normalizedTipo = DOCUMENT_TYPE_BY_INDEX[rawTipo] || rawTipo;
  const normalizedNumero = String(numeroDocumento ?? '').trim();
  const rule = DOCUMENT_VALIDATION_RULES[normalizedTipo];

  if (!normalizedTipo || !rule) {
    throw Object.assign(new Error(`Tipo de documento no válido: ${tipoDocumento}. Valores permitidos: ${VALID_TIPO_DOCUMENTO.join(', ')}`), {
      statusCode: 400,
      code: 'INVALID_DOCUMENT_TYPE',
    });
  }

  if (!normalizedNumero || !rule.regex.test(normalizedNumero)) {
    throw Object.assign(new Error(`El número para ${normalizedTipo} debe tener ${rule.description}.`), {
      statusCode: 400,
      code: 'INVALID_DOCUMENT_NUMBER',
    });
  }

  return normalizedNumero;
}

const CLIENT_TEMPLATE_COLUMNS = [
  {
    header: 'tipo_documento', key: 'tipo_documento', width: 20, required: true,
    description: 'Índice del tipo: 1 DNI, 2 CE, 3 PASAPORTE, 4 RUC.',
  },
  {
    header: 'numero_documento', key: 'numero_documento', width: 22, required: true,
    description: 'Número del documento del cliente.',
  },
  {
    header: 'deuda_cliente', key: 'deuda_cliente', width: 18, required: true,
    description: 'Deuda del cliente. Obligatoria y numérica.',
  },
  {
    header: 'direccion', key: 'direccion', width: 40, required: false,
    description: 'Dirección del cliente. Ejemplo: Av. Arequipa 1450.',
  },
  {
    header: 'departamento', key: 'departamento', width: 25, required: false,
    description: 'Departamento de la dirección. Ejemplo: Lima.',
  },
  {
    header: 'provincia', key: 'provincia', width: 25, required: false, 
    description: 'Provincia de la dirección. Ejemplo: Lima.',
  },
  {
    header: 'distrito', key: 'distrito', width: 25, required: false,
    description: 'Distrito de la dirección. Ejemplo: Lince.',
  },
  {
    header: 'ubigeo', key: 'ubigeo', width: 15, required: false, 
    description: 'Código UBIGEO de 6 dígitos. No es código postal.',
  },
  {
    header: 'telefono', key: 'telefono', width: 18, required: false,
    description: 'Teléfono del cliente. Si se informa, debe tener 9 dígitos.',
  },
  {
    header: 'opcional_1', key: 'opcional_1', width: 22, required: false,
    description: 'Campo adicional libre. Se almacenará en datos_adicionales.',
  },
  {
    header: 'opcional_2', key: 'opcional_2', width: 22, required: false,
    description: 'Campo adicional libre. Se almacenará en datos_adicionales.',
  },
];

export async function createClientTemplate() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Mi Radar 360° - Informa Perú';
  workbook.created = new Date();

  const dataStartRow = 2;
  const sheet = workbook.addWorksheet('Clientes', { views: [{ state: 'frozen', ySplit: 1 }] });
  sheet.columns = CLIENT_TEMPLATE_COLUMNS.map(({ header, key, width }) => ({ header, key, width }));
  sheet.autoFilter = { from: 'A1', to: `${sheet.getColumn(CLIENT_TEMPLATE_COLUMNS.length).letter}1` };
  sheet.getRow(1).height = 26;
  sheet.getRow(1).eachCell((cell, columnNumber) => {
    const required = CLIENT_TEMPLATE_COLUMNS[columnNumber - 1].required;
    cell.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: required ? 'FFF5333F' : 'FF102DB6' } };
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
    cell.border = { bottom: { style: 'thin', color: { argb: 'FFDCE3EF' } } };
  });
  sheet.getColumn('tipo_documento').numFmt = '@';
  sheet.getColumn('numero_documento').numFmt = '@';
  sheet.getColumn('ubigeo').numFmt = '@';
  sheet.getColumn('telefono').numFmt = '@';
  sheet.dataValidations.add(`A${dataStartRow}:A200001`, {
    type: 'custom', allowBlank: false, formulae: [`AND(LEN(A${dataStartRow})>0,OR(A${dataStartRow}="1",A${dataStartRow}="2",A${dataStartRow}="3",A${dataStartRow}="4"))`],
    errorStyle: 'stop', showErrorMessage: true,
    errorTitle: 'Tipo de documento no válido', error: 'Ingrese 1, 2, 3 o 4 según la leyenda.',
  });
  sheet.dataValidations.add(`B${dataStartRow}:B200001`, {
    type: 'custom', allowBlank: false, formulae: [`OR(AND(A${dataStartRow}="1",LEN(B${dataStartRow})=8,ISNUMBER(--B${dataStartRow})),AND(A${dataStartRow}="2",LEN(B${dataStartRow})>=9,LEN(B${dataStartRow})<=12,ISNUMBER(--B${dataStartRow})),AND(A${dataStartRow}="3",LEN(B${dataStartRow})>=8,LEN(B${dataStartRow})<=12),AND(A${dataStartRow}="4",LEN(B${dataStartRow})=11,ISNUMBER(--B${dataStartRow})))`],
    errorStyle: 'stop', showErrorMessage: true,
    errorTitle: 'Número de documento inválido', error: 'La cantidad de dígitos o caracteres no coincide con el tipo de documento.',
  });
  sheet.dataValidations.add(`C${dataStartRow}:C200001`, {
    type: 'custom', allowBlank: false, formulae: [`AND(LEN(C${dataStartRow})>0,ISNUMBER(C${dataStartRow}),C${dataStartRow}>=0)`],
    errorStyle: 'stop', showErrorMessage: true,
    errorTitle: 'Deuda inválida', error: 'Ingrese una deuda numérica mayor o igual a cero.',
  });
  sheet.dataValidations.add(`H${dataStartRow}:H200001`, {
    type: 'custom', allowBlank: true, formulae: [`OR(H${dataStartRow}="",AND(LEN(H${dataStartRow})=6,ISNUMBER(--H${dataStartRow})))`],
    errorStyle: 'stop',showErrorMessage: true, errorTitle: 'UBIGEO inválido',
    error: 'El UBIGEO debe contener exactamente 6 dígitos.',
  });
  sheet.dataValidations.add(`I${dataStartRow}:I200001`, {
    type: 'custom', allowBlank: true, formulae: [`OR(I${dataStartRow}="",AND(LEN(I${dataStartRow})=9,ISNUMBER(--I${dataStartRow})))`],
    errorStyle: 'stop', showErrorMessage: true,
    errorTitle: 'Teléfono inválido', error: 'El teléfono debe tener exactamente 9 dígitos.',
  });

  const instructions = workbook.addWorksheet('Instrucciones', { views: [{ state: 'frozen', ySplit: 1 }] });
  instructions.columns = [
    { header: 'Campo', key: 'field', width: 24 },
    { header: 'Obligatorio', key: 'required', width: 16 },
    { header: 'Descripción y validación', key: 'description', width: 72 },
  ];
  instructions.addRows([
    ['tipo_documento', 'Sí', 'Use 1 para DNI, 2 para CE, 3 para PASAPORTE o 4 para RUC.'],
    ['numero_documento', 'Sí', 'DNI: 8 dígitos; CE: 9 a 12 dígitos; PASAPORTE: 8 a 12 caracteres; RUC: 11 dígitos.'],
    ['deuda_cliente', 'Sí', 'Importe numérico mayor o igual a cero.'],
    ['direccion', 'No', 'Dirección del cliente. Ejemplo: Av. Arequipa 1450.'],
    ['departamento', 'No', 'Departamento correspondiente a la dirección.'],
    ['provincia', 'No', 'Provincia correspondiente a la dirección.'],
    ['distrito', 'No', 'Distrito correspondiente a la dirección.'],
    ['ubigeo', 'No', 'Código UBIGEO de 6 dígitos. No corresponde al código postal.'],
    ['telefono', 'No', 'Si se informa, debe contener exactamente 9 dígitos.'],
    ['opcional_1', 'No', 'Campo adicional libre. Se almacenará internamente como dato adicional.'],
    ['opcional_2', 'No', 'Campo adicional libre. Se almacenará internamente como dato adicional.'],
  ]);
  instructions.getRow(1).height = 28;
  instructions.getRow(1).eachCell(cell => {
    cell.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF102DB6' } };
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
  });
  instructions.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      row.alignment = { vertical: 'top', wrapText: true };
      row.height = 32;
      if (rowNumber <= 4) row.getCell(2).font = { bold: true, color: { argb: 'FFF5333F' } };
    }
  });
  instructions.autoFilter = {
    from: 'A1',
    to: `C${CLIENT_TEMPLATE_COLUMNS.length + 1}`,
  };

  return workbook.xlsx.writeBuffer();
}

const normalizeHeader = value => String(value ?? '').trim().toLowerCase().normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');

function plainValue(value) {
  if (value == null) return '';
  if (value instanceof Date) return value;
  if (typeof value === 'object') {
    if ('result' in value) return plainValue(value.result);
    if (Array.isArray(value.richText)) return value.richText.map(item => item.text).join('');
    if ('text' in value) return value.text;
  }
  return value;
}

const text = (value, max = 255) => String(plainValue(value) ?? '').trim().slice(0, max);
const money = value => {
  const parsed = Number(String(plainValue(value) ?? 0).replace(/[^0-9.-]/g, ''));
  return Number.isFinite(parsed) ? parsed : 0;
};
const numberOrNull = value => {
  const normalized = String(plainValue(value) ?? '').trim().replace(',', '.');
  if (!normalized) return null;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
};

async function coordinates(row) {
  let latitud = numberOrNull(pick(row, ['latitud', 'lat', 'latitude']));
  let longitud = numberOrNull(pick(row, ['longitud', 'lng', 'long', 'lon', 'longitude']));
  if (latitud === null || longitud === null) {
    const combined = text(pick(row, ['ubicacion', 'location', 'latitud_longitud', 'coordenadas', 'coordenada']), 2048);
    const match = combined.match(/(-?\d+(?:[.,]\d+)?)\s*[,;\s]\s*(-?\d+(?:[.,]\d+)?)/);
    if (match) {
      latitud = Number(match[1].replace(',', '.'));
      longitud = Number(match[2].replace(',', '.'));
    } else if (/^https:\/\//i.test(combined)) {
      const resolved = await resolveMapCoordinates(combined);
      latitud = resolved.latitud;
      longitud = resolved.longitud;
    }
  }
  if (latitud !== null && longitud !== null && Math.abs(latitud) > 90 && Math.abs(longitud) <= 90) [latitud, longitud] = [longitud, latitud];
  if (latitud === null || longitud === null || Math.abs(latitud) > 90 || Math.abs(longitud) > 180) return { latitud: null, longitud: null };
  return { latitud, longitud };
}

function dateOrNull(value) {
  const raw = plainValue(value);
  if (!raw) return null;
  const date = raw instanceof Date ? raw : new Date(raw);
  return Number.isNaN(date.getTime()) ? null : date;
}

function admissionRecord(row) {
  const importedProduct = text(pick(row, [
    'producto', 'tipo_producto', 'producto_crediticio', 'tipo_credito', 'tipo_de_credito', 'credito',
  ]), 150) || null;
  const dni = text(pick(row, ['dni', 'documento', 'doc_identidad', 'num_doc']), 20);
  const sampleProducts = ['Pr\u00e9stamo Vehicular', 'Pr\u00e9stamo MYPE', 'Pr\u00e9stamo Personal'];
  const sampleIndex = [...numero_documento].reduce((total, char) => total + char.charCodeAt(0), 0) % sampleProducts.length;
  const producto = importedProduct || sampleProducts[sampleIndex];
  const rawLine = pick(row, [
    'linea_credito', 'linea_de_credito', 'linea', 'monto_linea', 'monto_aprobado', 'linea_aprobada',
  ]);
  const importedState = text(pick(row, [
    'estado_admision', 'estado_evaluacion', 'resultado', 'condicion', 'condicion_crediticia', 'calificacion',
  ]), 30).toUpperCase();
  const hasRealEvaluation = Boolean(importedProduct || (rawLine !== '' && rawLine != null) || importedState);
  const sampleApproved = sampleIndex % 2 === 0;
  const lineaCredito = hasRealEvaluation
    ? (rawLine === '' || rawLine == null ? null : money(rawLine))
    : (sampleApproved ? 2500 : 0);
  const estado = hasRealEvaluation ? (importedState || 'PENDIENTE') : (sampleApproved ? 'APTO' : 'NO APTO');
  const fecha = dateOrNull(pick(row, [
    'fecha_admision', 'fecha_evaluacion', 'fecha_consulta', 'fecha', 'fecha_gestion', 'ultima_gestion',
  ]));
  return { producto, linea_credito: lineaCredito, estado, fecha };
}

function pick(row, aliases) {
  for (const alias of aliases) if (row[alias] !== undefined && row[alias] !== '') return row[alias];
  return '';
}

function pickMatching(row, aliases, patterns = []) {
  const exact = pick(row, aliases);
  if (exact !== '') return exact;
  const matchedKey = Object.keys(row).find(key => patterns.some(pattern => pattern.test(key)));
  return matchedKey ? row[matchedKey] : '';
}

const CLIENT_IMPORT_FIELDS = new Set([
  'tipo_documento',
  'tipo_doc',
  'tipo_docuemento',
  'tipo_document',

  'numero_documento',
  'numero',
  'documento',
  'doc_identidad',
  'num_doc',

  'deuda_cliente',

  'direccion',
  'distrito',
  'provincia',
  'departamento',
  'ubigeo',
  'telefono',

  'latitud',
  'lat',
  'latitude',

  'longitud',
  'lng',
  'long',
  'lon',
  'longitude',
]);

function buildNormalizedAddress({
  direccion, distrito, provincia, departamento,
}) {
  if (!direccion && !distrito && !provincia && !departamento) {
      return null;
    }

  const parts = [direccion, distrito, provincia, departamento, 'Perú',
  ]
    .map(value => String(value ?? '').trim())
    .filter(Boolean);

  const seen = new Set();

  const uniqueParts = parts.filter(part => {
    const normalized = part.toUpperCase();

    if (seen.has(normalized)) return false;

    seen.add(normalized);
    return true;
  });

  return uniqueParts.join(', ').slice(0, 300) || null;
}

function buildAdditionalData(row) {
  const additional = {};

  for (const [key, value] of Object.entries(row)) {
    // Los campos oficiales tienen sus propias columnas en clientes
    if (CLIENT_IMPORT_FIELDS.has(key)) continue;

    const raw = plainValue(value);

    if (raw === null || raw === undefined || raw === '') continue;

    if (raw instanceof Date) {
      additional[key] = raw.toISOString();
      continue;
    }

    if (typeof raw === 'string') {
      const trimmed = raw.trim();

      if (!trimmed) continue;

      additional[key] = trimmed;
      continue;
    }

    additional[key] = raw;
  }

  return Object.keys(additional).length
    ? additional
    : null;
}

async function clientRecord(row) {
  // --------------------------------------------------
  // TIPO Y NÚMERO DE DOCUMENTO
  // --------------------------------------------------

  const tipoDocumento = text(
    pick(row, [
      'tipo_documento',
      'tipo_doc',
      'tipo_docuemento',
      'tipo_document',
    ]),
    20
  ).toUpperCase();

  const numeroDocumento = text(
    pick(row, [
      'numero_documento',
      'numero',
      'documento',
      'doc_identidad',
      'num_doc',
    ]),
    20
  );

  const deudaCliente = text(
    pick(row, ['deuda_cliente']),
    30
  );

  // Campos mínimos obligatorios
  if (
    !tipoDocumento ||
    !numeroDocumento ||
    !deudaCliente
  ) {
    return null;
  }

  // 1 = DNI
  // 2 = CE
  // 3 = PASAPORTE
  // 4 = RUC
  const normalizedTipo =
    DOCUMENT_TYPE_BY_INDEX[tipoDocumento] || null;

  if (!normalizedTipo) {
    throw Object.assign(
      new Error(
        `Tipo de documento no válido: ${tipoDocumento}. Valores permitidos: 1, 2, 3 o 4.`
      ),
      {
        statusCode: 400,
        code: 'INVALID_DOCUMENT_TYPE',
      }
    );
  }

  const validNumeroDocumento =
    validateDocumentNumber(
      normalizedTipo,
      numeroDocumento
    );

  // --------------------------------------------------
  // DEUDA
  // --------------------------------------------------

  const parsedDebt = Number(
    deudaCliente.replace(',', '.')
  );

  if (
    !Number.isFinite(parsedDebt) ||
    parsedDebt < 0
  ) {
    throw Object.assign(
      new Error(
        'deuda_cliente debe ser un número mayor o igual a cero.'
      ),
      {
        statusCode: 400,
        code: 'INVALID_CLIENT_DEBT',
      }
    );
  }

  // --------------------------------------------------
  // TELÉFONO
  // --------------------------------------------------

  const telefono = text(
    pick(row, ['telefono']),
    20
  );

  if (
    telefono &&
    !/^\d{9}$/.test(telefono)
  ) {
    throw Object.assign(
      new Error(
        'El teléfono debe tener exactamente 9 dígitos.'
      ),
      {
        statusCode: 400,
        code: 'INVALID_PHONE_NUMBER',
      }
    );
  }

  // --------------------------------------------------
  // DIRECCIÓN
  // --------------------------------------------------

  const direccion =
    text(
      pick(row, ['direccion']),
      255
    ) || null;

  // Orden administrativo solicitado:
  // Departamento -> Provincia -> Distrito

  const departamento =
    text(
      pick(row, ['departamento']),
      100
    ) || null;

  const provincia =
    text(
      pick(row, ['provincia']),
      100
    ) || null;

  const distrito =
    text(
      pick(row, ['distrito']),
      100
    ) || null;

  // --------------------------------------------------
  // UBIGEO
  // --------------------------------------------------

  const ubigeoRaw = text(
    pick(row, ['ubigeo']),
    20
  );

  if (
    ubigeoRaw &&
    !/^\d{6}$/.test(ubigeoRaw)
  ) {
    throw Object.assign(
      new Error(
        'El UBIGEO debe contener exactamente 6 dígitos.'
      ),
      {
        statusCode: 400,
        code: 'INVALID_UBIGEO',
      }
    );
  }

  const ubigeo =
    ubigeoRaw || null;

  // --------------------------------------------------
  // DIRECCIÓN NORMALIZADA
  // --------------------------------------------------

  const direccionNormalizada =
    buildNormalizedAddress({
      direccion,
      distrito,
      provincia,
      departamento,
    });

  // --------------------------------------------------
  // COORDENADAS
  // --------------------------------------------------
  //
  // IMPORTANTE:
  // La latitud y longitud YA NO vienen desde el Excel.
  //
  // Se inicializan en NULL y posteriormente el worker
  // de geocodificación las obtiene utilizando:
  //
  // direccion_normalizada
  //
  // Ejemplo:
  // Av. Brasil 1200, Breña, Lima, Lima, Perú
  // --------------------------------------------------

  const latitud = null;
  const longitud = null;

  // --------------------------------------------------
  // ESTADO DE GEOLOCALIZACIÓN
  // --------------------------------------------------

  let estadoGeocodificacion;

  /*
   * Si tenemos información suficiente para intentar
   * ubicar al cliente, lo dejamos pendiente para que
   * el worker lo procese.
   */
  if (
    direccionNormalizada ||
    ubigeo
  ) {
    estadoGeocodificacion =
      'PENDIENTE';
  } else {
    /*
     * No existe dirección, departamento,
     * provincia, distrito ni UBIGEO.
     */
    estadoGeocodificacion =
      'SIN_DIRECCION';
  }

  /*
   * Estos valores los completará posteriormente
   * el worker de geocodificación.
   */
  const precisionGeocodificacion = null;
  const fechaGeocodificacion = null;

  // --------------------------------------------------
  // CAMPOS ADICIONALES
  // --------------------------------------------------

  const datosAdicionales =
    buildAdditionalData(row);

  // --------------------------------------------------
  // REGISTRO FINAL
  // --------------------------------------------------

  return {
    tipo_documento:
      normalizedTipo,

    numero_documento:
      validNumeroDocumento,

    nombres: '',
    apellido_paterno: '',
    apellido_materno: '',

    telefono,

    direccion,

    direccion_normalizada:
      direccionNormalizada,

    // Orden administrativo
    departamento,
    provincia,
    distrito,

    ubigeo,

    estado: 'ACTIVO',

    deuda_castigada: 0,
    deuda_cliente: parsedDebt,
    deuda_vigente: 0,
    otras_deudas: 0,

    ultima_gestion: null,

    // Se calculan posteriormente
    latitud,
    longitud,

    estado_geocodificacion:
      estadoGeocodificacion,

    precision_geocodificacion:
      precisionGeocodificacion,

    fecha_geocodificacion:
      fechaGeocodificacion,

    datos_adicionales:
      datosAdicionales,

    _admision: {
      producto: 'IMPORTACION',
      linea_credito: 0,
      estado: 'PENDIENTE',
      fecha: null,
    },
  };
}

async function advisorRecord(row) {
  const dni = text(pick(row, ['dni', 'documento', 'doc_identidad', 'num_doc', 'numero_documento']), 20);
  const nombres = text(pick(row, ['nombres', 'nombre', 'nombre_completo', 'asesor', 'colaborador']), 150);
  if (!dni || !nombres) return null;
  const coords = await coordinates(row);
  return {
    dni, nombres,
    apellido_paterno: text(pick(row, ['apellido_paterno', 'ape_paterno', 'paterno']), 100),
    apellido_materno: text(pick(row, ['apellido_materno', 'ape_materno', 'materno']), 100),
    telefono: text(pick(row, ['telefono', 'celular']), 20) || null,
    correo: text(pick(row, ['correo', 'email']), 150) || null,
    distrito: text(pickMatching(row, [
      'distrito', 'distrito_base', 'distritobase', 'dist', 'dist_base',
      'distrito_de_base', 'distrito_domicilio', 'distrito_domiciliario', 'dist_domi',
    ], [/distrito/, /^dist(?:_|$)/]), 100) || null,
    estado: text(pick(row, ['estado']), 20) || 'ACTIVO',
    latitud: coords.latitud,
    longitud: coords.longitud,
  };
}

async function validateSignature(filePath) {
  const handle = await fs.open(filePath, 'r');
  try {
    const bytes = Buffer.alloc(4); await handle.read(bytes, 0, 4, 0);
    if (!bytes.equals(Buffer.from([0x50, 0x4b, 0x03, 0x04]))) {
      throw Object.assign(new Error('El archivo no es un XLSX válido'), { statusCode: 400, code: 'INVALID_XLSX_SIGNATURE' });
    }
  } finally { await handle.close(); }
}

export async function createJob({
  type,
  file,
  actorId,
  modo,
  periodo,
}) {
  await validateSignature(file.path);

  let normalizedModo = null;
  let normalizedPeriodo = null;

  if (type === 'CLIENTES') {
    // --------------------------------
    // NORMALIZAR MODO Y PERIODO
    // --------------------------------
    normalizedModo = String(modo ?? '')
      .trim()
      .toUpperCase();

    normalizedPeriodo = String(periodo ?? '')
      .trim();

    // --------------------------------
    // VALIDAR MODO
    // --------------------------------
    const validModes = [
      'CARGA_MENSUAL',
      'ACTUALIZACION',
    ];

    if (!validModes.includes(normalizedModo)) {
      throw Object.assign(
        new Error(
          'modo debe ser CARGA_MENSUAL o ACTUALIZACION.'
        ),
        {
          statusCode: 400,
          code: 'INVALID_IMPORT_MODE',
        }
      );
    }

    // --------------------------------
    // VALIDAR PERIODO YYYYMM
    // --------------------------------
    if (!/^\d{6}$/.test(normalizedPeriodo)) {
      throw Object.assign(
        new Error(
          'periodo debe tener formato YYYYMM. Ejemplo: 202609.'
        ),
        {
          statusCode: 400,
          code: 'INVALID_IMPORT_PERIOD',
        }
      );
    }

    const year = Number(
      normalizedPeriodo.slice(0, 4)
    );

    const month = Number(
      normalizedPeriodo.slice(4, 6)
    );

    if (
      year < 2000 ||
      year > 2100 ||
      month < 1 ||
      month > 12
    ) {
      throw Object.assign(
        new Error(
          'periodo no contiene un año/mes válido.'
        ),
        {
          statusCode: 400,
          code: 'INVALID_IMPORT_PERIOD',
        }
      );
    }

    // --------------------------------
    // REGLA PARA CARGA MENSUAL
    // --------------------------------
    if (normalizedModo === 'CARGA_MENSUAL') {
      const existingMonthlyImport =
        await prisma.importacionMasiva.findFirst({
          where: {
            tipo: 'CLIENTES',
            modo: 'CARGA_MENSUAL',
            periodo: normalizedPeriodo,
            estado: {
              in: [
                'PENDIENTE',
                'PROCESANDO',
                'COMPLETADA',
              ],
            },
          },
          select: {
            id_importacion: true,
            estado: true,
            periodo: true,
          },
          orderBy: {
            fecha_creacion: 'desc',
          },
        });

      if (existingMonthlyImport) {
        throw Object.assign(
          new Error(
            `Ya existe una carga mensual de clientes para el periodo ${normalizedPeriodo}.`
          ),
          {
            statusCode: 409,
            code: 'CLIENT_MONTHLY_IMPORT_ALREADY_EXISTS',
          }
        );
      }
    }
  }

  // --------------------------------
  // CREAR JOB
  // --------------------------------
  const job = await prisma.importacionMasiva.create({
    data: {
      tipo: type,

      modo:
        type === 'CLIENTES'
          ? normalizedModo
          : null,

      periodo:
        type === 'CLIENTES'
          ? normalizedPeriodo
          : null,

      archivo: file.originalname.slice(0, 255),
      ruta_temporal: file.path,
      actor_id: actorId,
    },
  });

  enqueue(job.id_importacion);

  return job;
}

export async function getJob(id) {
  return prisma.importacionMasiva.findUnique({
    where: {
      id_importacion: id,
    },
    select: {
      id_importacion: true,
      tipo: true,
      modo: true,
      periodo: true,
      estado: true,
      archivo: true,
      total_filas: true,
      procesadas: true,
      insertadas: true,
      actualizadas: true,
      omitidas: true,
      errores: true,
      detalle_error: true,
      fecha_creacion: true,
      fecha_inicio: true,
      fecha_fin: true,
    },
  });
}

export function enqueue(id) {
  if (activeJobs.has(id)) return;
  activeJobs.add(id);
  pendingQueue.push(id);
  setImmediate(drainQueue);
}

async function drainQueue() {
  if (workerRunning) return;
  workerRunning = true;
  try {
    while (pendingQueue.length) {
      const id = pendingQueue.shift();
      await processJob(id).catch(error => logger.error({ err: error, importId: id }, 'bulk_import_failed'));
    }
  } finally { workerRunning = false; }
}

async function processJob(id) {
  let job;
  try {
    job = await prisma.importacionMasiva.update({ where: { id_importacion: id }, data: { estado: 'PROCESANDO', fecha_inicio: new Date() } });
    const workbook = new ExcelJS.stream.xlsx.WorkbookReader(job.ruta_temporal, {
      sharedStrings: 'cache', hyperlinks: 'ignore', styles: 'ignore', worksheets: 'emit',
    });
    let headers = null; let processed = 0; let inserted = 0; let updated = 0; let omitted = 0; let errors = 0; const details = []; let batch = [];
    const flush = async () => {
      if (!batch.length) return;

      if (job.tipo === 'CLIENTES') {
        const originalSize = batch.length;

        // Eliminar duplicados dentro del mismo lote
        // usando tipo_documento + numero_documento
        batch = [
          ...new Map(
            batch.map(item => [
              `${item.tipo_documento}-${item.numero_documento}`,
              item
            ])
          ).values()
        ];

        omitted += originalSize - batch.length;

        // --------------------------------------------------
// IDENTIFICAR CLIENTES QUE YA EXISTEN
// --------------------------------------------------

const existingClients = await prisma.cliente.findMany({
  where: {
    OR: batch.map(item => ({
      tipo_documento: item.tipo_documento,
      numero_documento: item.numero_documento,
    })),
  },
  select: {
    tipo_documento: true,
    numero_documento: true,
  },
});

const existingKeys = new Set(
  existingClients.map(
    item => `${item.tipo_documento}-${item.numero_documento}`
  )
);

    // --------------------------------------------------
    // MODO ACTUALIZACION
    // Solo permite modificar clientes existentes.
    // Los documentos inexistentes se omiten.
    // --------------------------------------------------

    if (job.modo === 'ACTUALIZACION') {
      const validBatch = [];
      const missingClients = [];

      for (const item of batch) {
        const key =
          `${item.tipo_documento}-${item.numero_documento}`;

        if (existingKeys.has(key)) {
          validBatch.push(item);
        } else {
          missingClients.push(item);
        }
      }

      omitted += missingClients.length;

      for (const item of missingClients) {
        if (details.length >= MAX_ERRORS) break;

        details.push({
          tipo: 'OMITIDO',
          documento: item.numero_documento,
          mensaje:
            'El cliente no existe y no puede ser creado mediante una ACTUALIZACION.',
        });
      }

      batch = validBatch;
    }

    const existing = batch.filter(item =>
      existingKeys.has(
        `${item.tipo_documento}-${item.numero_documento}`
      )
    ).length;

    // Si ACTUALIZACION no tiene ningún cliente existente,
    // no hay nada que insertar ni actualizar.
    if (!batch.length) {
      await prisma.importacionMasiva.update({
        where: {
          id_importacion: id,
        },
        data: {
          procesadas: processed,
          insertadas: inserted,
          actualizadas: updated,
          omitidas: omitted,
          errores: errors,
        },
      });

      return;
    }
        const affected = await prisma.$executeRaw`
        INSERT INTO "clientes" (
          "tipo_documento",
          "numero_documento",
          "nombres",
          "apellido_paterno",
          "apellido_materno",
          "telefono",

          "direccion",
          "direccion_normalizada",
          "distrito",
          "provincia",
          "departamento",
          "ubigeo",

          "estado",

          "deuda_castigada",
          "deuda_cliente",
          "deuda_vigente",
          "otras_deudas",

          "ultima_gestion",

          "latitud",
          "longitud",

          "estado_geocodificacion",
          "precision_geocodificacion",
          "fecha_geocodificacion",

          "datos_adicionales"
        )

        SELECT
          x.tipo_documento::"TipoDocumento",
          x.numero_documento,
          x.nombres,
          x.apellido_paterno,
          x.apellido_materno,
          x.telefono,

          x.direccion,
          x.direccion_normalizada,
          x.distrito,
          x.provincia,
          x.departamento,
          x.ubigeo,

          x.estado,

          x.deuda_castigada,
          x.deuda_cliente,
          x.deuda_vigente,
          x.otras_deudas,

          x.ultima_gestion,

          x.latitud,
          x.longitud,

          x.estado_geocodificacion,
          x.precision_geocodificacion,
          x.fecha_geocodificacion,

          x.datos_adicionales

        FROM jsonb_to_recordset(
          ${JSON.stringify(batch)}::jsonb
        ) AS x(
          tipo_documento text,
          numero_documento text,
          nombres text,
          apellido_paterno text,
          apellido_materno text,
          telefono text,

          direccion text,
          direccion_normalizada text,
          distrito text,
          provincia text,
          departamento text,
          ubigeo text,

          estado text,

          deuda_castigada numeric,
          deuda_cliente numeric,
          deuda_vigente numeric,
          otras_deudas numeric,

          ultima_gestion timestamp,

          latitud numeric,
          longitud numeric,

          estado_geocodificacion text,
          precision_geocodificacion text,
          fecha_geocodificacion timestamptz,

          datos_adicionales jsonb
        )

        ON CONFLICT ("tipo_documento", "numero_documento")
        DO UPDATE SET

          -- La deuda de la nueva asignación siempre se actualiza
          "deuda_cliente" = EXCLUDED."deuda_cliente",

          -- Solo reemplazar teléfono cuando el Excel trae uno
          "telefono" = COALESCE(
            NULLIF(BTRIM(EXCLUDED."telefono"), ''),
            "clientes"."telefono"
          ),

          -- Datos territoriales:
          -- si vienen vacíos, conservamos los existentes.
          "direccion" = COALESCE(
            NULLIF(BTRIM(EXCLUDED."direccion"), ''),
            "clientes"."direccion"
          ),

          "distrito" = COALESCE(
            NULLIF(BTRIM(EXCLUDED."distrito"), ''),
            "clientes"."distrito"
          ),

          "provincia" = COALESCE(
            NULLIF(BTRIM(EXCLUDED."provincia"), ''),
            "clientes"."provincia"
          ),

          "departamento" = COALESCE(
            NULLIF(BTRIM(EXCLUDED."departamento"), ''),
            "clientes"."departamento"
          ),

          "ubigeo" = COALESCE(
            NULLIF(BTRIM(EXCLUDED."ubigeo"), ''),
            "clientes"."ubigeo"
          ),

          /*
          * DIRECCIÓN NORMALIZADA
          *
          * Si el Excel está cambiando algún dato territorial,
          * reconstruimos la dirección utilizando también la
          * información que ya tenía el cliente.
          *
          * Si no cambió la ubicación, conservamos la existente.
          */
          "direccion_normalizada" =
            CASE
              WHEN
                (
                  NULLIF(BTRIM(EXCLUDED."direccion"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."direccion"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."direccion"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."distrito"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."distrito"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."distrito"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."provincia"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."provincia"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."provincia"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."departamento"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."departamento"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."departamento"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."ubigeo"), '') IS NOT NULL
                  AND NULLIF(BTRIM(EXCLUDED."ubigeo"), '')
                      IS DISTINCT FROM
                      NULLIF(BTRIM("clientes"."ubigeo"), '')
                )
              THEN
                LEFT(
                  CONCAT_WS(
                    ', ',
                    COALESCE(
                      NULLIF(BTRIM(EXCLUDED."direccion"), ''),
                      NULLIF(BTRIM("clientes"."direccion"), '')
                    ),
                    COALESCE(
                      NULLIF(BTRIM(EXCLUDED."distrito"), ''),
                      NULLIF(BTRIM("clientes"."distrito"), '')
                    ),
                    COALESCE(
                      NULLIF(BTRIM(EXCLUDED."provincia"), ''),
                      NULLIF(BTRIM("clientes"."provincia"), '')
                    ),
                    COALESCE(
                      NULLIF(BTRIM(EXCLUDED."departamento"), ''),
                      NULLIF(BTRIM("clientes"."departamento"), '')
                    ),
                    'Perú'
                  ),
                  300
                )
              ELSE
                "clientes"."direccion_normalizada"
            END,

          /*
          * COORDENADAS
          *
          * 1. Si el Excel trae coordenadas -> utilizarlas.
          * 2. Si cambió la ubicación pero no trae coordenadas ->
          *    eliminar coordenadas antiguas para no mostrar al
          *    cliente en una dirección que ya no corresponde.
          * 3. Si no cambió nada -> conservarlas.
          */
          "latitud" =
            CASE
              WHEN EXCLUDED."latitud" IS NOT NULL
              AND EXCLUDED."longitud" IS NOT NULL
                THEN EXCLUDED."latitud"

              WHEN
                (
                  NULLIF(BTRIM(EXCLUDED."direccion"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."direccion"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."direccion"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."distrito"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."distrito"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."distrito"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."provincia"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."provincia"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."provincia"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."departamento"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."departamento"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."departamento"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."ubigeo"), '') IS NOT NULL
                  AND NULLIF(BTRIM(EXCLUDED."ubigeo"), '')
                      IS DISTINCT FROM
                      NULLIF(BTRIM("clientes"."ubigeo"), '')
                )
                THEN NULL

              ELSE "clientes"."latitud"
            END,

          "longitud" =
            CASE
              WHEN EXCLUDED."latitud" IS NOT NULL
              AND EXCLUDED."longitud" IS NOT NULL
                THEN EXCLUDED."longitud"

              WHEN
                (
                  NULLIF(BTRIM(EXCLUDED."direccion"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."direccion"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."direccion"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."distrito"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."distrito"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."distrito"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."provincia"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."provincia"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."provincia"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."departamento"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."departamento"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."departamento"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."ubigeo"), '') IS NOT NULL
                  AND NULLIF(BTRIM(EXCLUDED."ubigeo"), '')
                      IS DISTINCT FROM
                      NULLIF(BTRIM("clientes"."ubigeo"), '')
                )
                THEN NULL

              ELSE "clientes"."longitud"
            END,

          "estado_geocodificacion" =
            CASE
              -- El Excel trae coordenadas válidas
              WHEN EXCLUDED."latitud" IS NOT NULL
              AND EXCLUDED."longitud" IS NOT NULL
                THEN 'LOCALIZADO'

              -- La dirección/localización cambió
              WHEN
                (
                  NULLIF(BTRIM(EXCLUDED."direccion"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."direccion"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."direccion"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."distrito"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."distrito"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."distrito"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."provincia"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."provincia"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."provincia"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."departamento"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."departamento"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."departamento"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."ubigeo"), '') IS NOT NULL
                  AND NULLIF(BTRIM(EXCLUDED."ubigeo"), '')
                      IS DISTINCT FROM
                      NULLIF(BTRIM("clientes"."ubigeo"), '')
                )
                THEN 'PENDIENTE'

              ELSE "clientes"."estado_geocodificacion"
            END,

          "precision_geocodificacion" =
            CASE
              WHEN EXCLUDED."latitud" IS NOT NULL
              AND EXCLUDED."longitud" IS NOT NULL
                THEN 'IMPORTADA'

              WHEN
                (
                  NULLIF(BTRIM(EXCLUDED."direccion"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."direccion"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."direccion"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."distrito"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."distrito"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."distrito"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."provincia"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."provincia"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."provincia"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."departamento"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."departamento"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."departamento"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."ubigeo"), '') IS NOT NULL
                  AND NULLIF(BTRIM(EXCLUDED."ubigeo"), '')
                      IS DISTINCT FROM
                      NULLIF(BTRIM("clientes"."ubigeo"), '')
                )
                THEN NULL

              ELSE "clientes"."precision_geocodificacion"
            END,

          "fecha_geocodificacion" =
            CASE
              WHEN EXCLUDED."latitud" IS NOT NULL
              AND EXCLUDED."longitud" IS NOT NULL
                THEN CURRENT_TIMESTAMP

              WHEN
                (
                  NULLIF(BTRIM(EXCLUDED."direccion"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."direccion"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."direccion"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."distrito"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."distrito"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."distrito"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."provincia"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."provincia"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."provincia"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."departamento"), '') IS NOT NULL
                  AND LOWER(NULLIF(BTRIM(EXCLUDED."departamento"), ''))
                      IS DISTINCT FROM
                      LOWER(NULLIF(BTRIM("clientes"."departamento"), ''))
                )
                OR
                (
                  NULLIF(BTRIM(EXCLUDED."ubigeo"), '') IS NOT NULL
                  AND NULLIF(BTRIM(EXCLUDED."ubigeo"), '')
                      IS DISTINCT FROM
                      NULLIF(BTRIM("clientes"."ubigeo"), '')
                )
                THEN NULL

              ELSE "clientes"."fecha_geocodificacion"
            END,

          /*
          * Los campos adicionales del nuevo Excel se fusionan
          * con los anteriores.
          *
          * Si una clave vuelve a llegar, gana el nuevo valor.
          */
          "datos_adicionales" =
            CASE
              WHEN EXCLUDED."datos_adicionales" IS NULL
                THEN "clientes"."datos_adicionales"

              WHEN "clientes"."datos_adicionales" IS NULL
                THEN EXCLUDED."datos_adicionales"

              ELSE
                "clientes"."datos_adicionales"
                || EXCLUDED."datos_adicionales"
            END
      `;

        updated += existing;
        inserted += Number(affected) - existing;

        // Mantener la lógica actual de admisión
        const admissions = batch.map(item => ({
          tipo_documento: item.tipo_documento,
          numero_documento: item.numero_documento,
          ...item._admision,
        }));

        await prisma.$executeRaw`
          INSERT INTO "admisiones" (
            "id_cliente",
            "producto",
            "linea_credito",
            "estado",
            "fecha"
          )

          SELECT
            c."id_cliente",
            x.producto,
            x.linea_credito,
            x.estado,
            x.fecha

          FROM jsonb_to_recordset(
            ${JSON.stringify(admissions)}::jsonb
          ) AS x(
            tipo_documento text,
            numero_documento text,
            producto text,
            linea_credito numeric,
            estado text,
            fecha timestamp
          )

          INNER JOIN "clientes" c
            ON c."tipo_documento" = x.tipo_documento::"TipoDocumento"
            AND c."numero_documento" = x.numero_documento

          ON CONFLICT ("id_cliente")
          DO UPDATE SET
            "producto" = EXCLUDED."producto",
            "linea_credito" = EXCLUDED."linea_credito",
            "estado" = EXCLUDED."estado",
            "fecha" = EXCLUDED."fecha"
        `;

      } else {
        // AQUÍ DEJAS TU CÓDIGO ACTUAL DE ASESORES
        const originalSize = batch.length;

        batch = [
          ...new Map(
            batch.map(item => [
              item.numero_documento,
              item
            ])
          ).values()
        ];

        omitted += originalSize - batch.length;

        const existing = await prisma.asesor.count({
          where: {
            dni: {
              in: batch.map(item => item.numero_documento)
            }
          }
        });

        const affected = await prisma.$executeRaw`
          INSERT INTO "asesores" (
            "dni",
            "nombres",
            "apellido_paterno",
            "apellido_materno",
            "telefono",
            "correo",
            "distrito",
            "estado",
            "latitud",
            "longitud",
            "fecha_actualizar"
          )

          SELECT
            x.numero_documento,
            x.nombres,
            x.apellido_paterno,
            x.apellido_materno,
            x.telefono,
            x.correo,
            x.distrito,
            x.estado,
            x.latitud,
            x.longitud,
            CURRENT_TIMESTAMP

          FROM jsonb_to_recordset(
            ${JSON.stringify(batch)}::jsonb
          ) AS x(
            dni text,
            nombres text,
            apellido_paterno text,
            apellido_materno text,
            telefono text,
            correo text,
            distrito text,
            estado text,
            latitud numeric,
            longitud numeric
          )

          ON CONFLICT ("dni")
          DO UPDATE SET
            "nombres" = EXCLUDED."nombres",
            "apellido_paterno" = EXCLUDED."apellido_paterno",
            "apellido_materno" = EXCLUDED."apellido_materno",
            "telefono" = EXCLUDED."telefono",
            "correo" = EXCLUDED."correo",
            "distrito" = COALESCE(
              EXCLUDED."distrito",
              "asesores"."distrito"
            ),
            "estado" = EXCLUDED."estado",
            "latitud" = EXCLUDED."latitud",
            "longitud" = EXCLUDED."longitud",
            "fecha_actualizar" = CURRENT_TIMESTAMP
        `;

        updated += existing;
        inserted += Number(affected) - existing;
      }

      batch = [];

      await prisma.importacionMasiva.update({
        where: {
          id_importacion: id
        },
        data: {
          procesadas: processed,
          insertadas: inserted,
          actualizadas: updated,
          omitidas: omitted,
          errores: errors
        }
      });
};
    for await (const worksheet of workbook) {
      for await (const excelRow of worksheet) {
        const values = Array.from({ length: excelRow.cellCount }, (_, index) => plainValue(excelRow.getCell(index + 1).value));
        if (!headers) {
          if (values.length > 100) throw Object.assign(new Error('El archivo supera el máximo de 100 columnas'), { code: 'COLUMN_LIMIT_EXCEEDED' });
          headers = values.map(normalizeHeader);
        
          const hasDocumentType = headers.some(header => ['tipo_documento', 'tipo_doc', 'tipo_docuemento', 'tipo_document'].includes(header));
          const hasDocumentNumber = headers.some(header => ['numero_documento', 'numero', 'documento', 'doc_identidad', 'num_doc'].includes(header));
          const hasClientDebt = headers.includes('deuda_cliente');
          if (job.tipo === 'CLIENTES' && (!hasDocumentType || !hasDocumentNumber || !hasClientDebt)) {
            throw Object.assign(new Error('La cabecera debe incluir tipo_documento, numero_documento y deuda_cliente'), { code: 'INVALID_HEADERS' });
          }
          if (job.tipo !== 'CLIENTES' && (!hasDocumentType || !hasDocumentNumber)) {
            throw Object.assign(new Error('La cabecera debe incluir numero_documento'), { code: 'INVALID_HEADERS' });
          }
          continue;
        }
        if (values.every(value => text(value) === '')) continue;
        processed++;
        if (processed > MAX_ROWS) throw Object.assign(new Error(`El archivo supera el máximo de ${MAX_ROWS} filas`), { code: 'ROW_LIMIT_EXCEEDED' });
        const row = Object.fromEntries(headers.map((header, index) => [header, values[index]]));
        let record;
        try {
          record = await (job.tipo === 'CLIENTES' ? clientRecord(row) : advisorRecord(row));
        } catch (rowError) {
          errors++;

          if (details.length < MAX_ERRORS) {
            details.push({
              fila: excelRow.number,
              error: rowError.message
            });
          }

          continue;
        }
        if (!record) {
          errors++;
          if (details.length < MAX_ERRORS) details.push({ fila: excelRow.number, error: 'tipo_documento, numero_documento y deuda_cliente son obligatorios' });
        }
        else batch.push(record);
        if (batch.length >= BATCH_SIZE) await flush();
      }
      break;
    }
    await flush();
    await prisma.importacionMasiva.update({ where: { id_importacion: id }, data: {
      estado: 'COMPLETADA', total_filas: processed, procesadas: processed, insertadas: inserted,
      actualizadas: updated, omitidas: omitted, errores: errors, detalle_error: details, fecha_fin: new Date(),
    } });
  } catch (error) {
    await prisma.importacionMasiva.update({ where: { id_importacion: id }, data: {
      estado: 'FALLIDA', detalle_error: [{ error: error.code || 'IMPORT_FAILED', mensaje: String(error.message).slice(0, 300) }], fecha_fin: new Date(),
    } }).catch(() => {});
    throw error;
  } finally {
    activeJobs.delete(id);
    if (job?.ruta_temporal) await fs.rm(job.ruta_temporal, { force: true }).catch(() => {});
  }
}

export async function resumePendingJobs() {
  const jobs = await prisma.importacionMasiva.findMany({ where: { estado: { in: ['PENDIENTE', 'PROCESANDO'] } }, select: { id_importacion: true } });
  jobs.forEach(job => enqueue(job.id_importacion));
}