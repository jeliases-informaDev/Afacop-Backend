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
  { header: 'tipo_documento', key: 'tipo_documento', width: 20, required: true, description: 'Índice del tipo: 1 DNI, 2 CE, 3 PASAPORTE, 4 RUC.' },
  { header: 'numero_documento', key: 'numero_documento', width: 22, required: true, description: 'Número del documento del cliente (obligatorio).' },
  { header: 'deuda_cliente', key: 'deuda_cliente', width: 18, required: true, description: 'Deuda del cliente. Obligatoria y numérica.' },
  { header: 'direccion', key: 'direccion', width: 35, required: false, description: 'Dirección del cliente.' },
  { header: 'telefono', key: 'telefono', width: 18, required: false, description: 'Teléfono del cliente.' },
  { header: 'opcional_1', key: 'opcional_1', width: 20, required: false, description: 'Campo libre opcional.' },
  { header: 'opcional_2', key: 'opcional_2', width: 20, required: false, description: 'Campo libre opcional.' },
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
  sheet.dataValidations.add(`A${dataStartRow}:A200001`, {
    type: 'custom', allowBlank: false, formulae: [`AND(LEN(A${dataStartRow})>0,OR(A${dataStartRow}="1",A${dataStartRow}="2",A${dataStartRow}="3",A${dataStartRow}="4"))`],
    errorStyle: 'stop', showErrorMessage: true,
    errorTitle: 'Tipo de documento no válido', error: 'Ingrese 1, 2, 3 o 4 según la leyenda.',
  });
  sheet.dataValidations.add(`B${dataStartRow}:B200001`, {
    type: 'custom', allowBlank: false, formulae: [`LEN(B${dataStartRow})>0`],
    errorStyle: 'stop', showErrorMessage: true,
    errorTitle: 'Número de documento obligatorio', error: 'Ingrese el número de documento.',
  });
  sheet.dataValidations.add(`C${dataStartRow}:C200001`, {
    type: 'custom', allowBlank: false, formulae: [`AND(LEN(C${dataStartRow})>0,ISNUMBER(C${dataStartRow}),C${dataStartRow}>=0)`],
    errorStyle: 'stop', showErrorMessage: true,
    errorTitle: 'Deuda inválida', error: 'Ingrese una deuda numérica mayor o igual a cero.',
  });
  sheet.dataValidations.add(`E${dataStartRow}:E200001`, {
    type: 'custom', allowBlank: true, formulae: [`OR(E${dataStartRow}="",AND(ISNUMBER(E${dataStartRow}),LEN(E${dataStartRow})=9))`],
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
    ['deuda_cliente', 'Sí', 'Importe numérico mayor o igual a cero. Se guarda en la columna deuda_cliente.'],
    ['direccion', 'No', 'Dirección del cliente.'],
    ['telefono', 'No', 'Si se informa, debe contener exactamente 9 dígitos.'],
    ['opcional_1', 'No', 'Campo libre opcional.'],
    ['opcional_2', 'No', 'Campo libre opcional.'],
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
  instructions.autoFilter = { from: 'A1', to: 'C8' };

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

async function clientRecord(row) {
  const tipoDocumento = text(pick(row, ['tipo_documento', 'tipo_doc', 'tipo_docuemento', 'tipo_document']), 20).toUpperCase();
  const numeroDocumento = text(pick(row, ['numero_documento', 'numero', 'documento', 'doc_identidad', 'num_doc']), 20);
  const deudaCliente = text(pick(row, ['deuda_cliente']), 30);
  if (!tipoDocumento || !numeroDocumento || !deudaCliente) return null;

  const normalizedTipo = DOCUMENT_TYPE_BY_INDEX[tipoDocumento] || null;
  if (!normalizedTipo) {
    throw Object.assign(new Error(`Tipo de documento no válido: ${tipoDocumento}. Valores permitidos: 1, 2, 3 o 4.`), {
      statusCode: 400,
      code: 'INVALID_DOCUMENT_TYPE',
    });
  }

  const validNumeroDocumento = validateDocumentNumber(normalizedTipo, numeroDocumento);
  const parsedDebt = Number(deudaCliente.replace(',', '.'));
  if (!Number.isFinite(parsedDebt) || parsedDebt < 0) {
    throw Object.assign(new Error('deuda_cliente debe ser un número mayor o igual a cero.'), {
      statusCode: 400,
      code: 'INVALID_CLIENT_DEBT',
    });
  }
  const telefono = text(pick(row, ['telefono']), 20);
  if (telefono && !/^\d{9}$/.test(telefono)) {
    throw Object.assign(new Error('El teléfono debe tener exactamente 9 dígitos.'), {
      statusCode: 400,
      code: 'INVALID_PHONE_NUMBER',
    });
  }

  return {
    tipo_documento: normalizedTipo,
    numero_documento: validNumeroDocumento,
    nombres: '',
    apellido_paterno: '',
    apellido_materno: '',
    telefono: telefono || null,
    direccion: text(pick(row, ['direccion']), 255) || null,
    distrito: null,
    estado: 'ACTIVO',
    deuda_castigada: 0,
    deuda_cliente: parsedDebt,
    deuda_vigente: 0,
    otras_deudas: 0,
    ultima_gestion: null,
    latitud: null,
    longitud: null,
    _admision: { producto: 'IMPORTACION', linea_credito: 0, estado: 'PENDIENTE', fecha: null },
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

export async function createJob({ type, file, actorId }) {
  await validateSignature(file.path);
  if (type === 'CLIENTES') {
    const now = new Date();
    const monthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
    const nextMonthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1));
    const monthlyImport = await prisma.importacionMasiva.findFirst({
      where: {
        tipo: 'CLIENTES',
        fecha_creacion: { gte: monthStart, lt: nextMonthStart },
        estado: { in: ['PENDIENTE', 'PROCESANDO', 'COMPLETADA'] },
      },
      select: { id_importacion: true, estado: true, fecha_creacion: true },
      orderBy: { fecha_creacion: 'desc' },
    });
    if (monthlyImport) {
      const error = new Error('La importación de clientes solo puede realizarse una vez por mes.');
      error.statusCode = 409;
      error.code = 'CLIENT_IMPORT_MONTHLY_LIMIT';
      throw error;
    }
  }
  const job = await prisma.importacionMasiva.create({ data: {
    tipo: type, archivo: file.originalname.slice(0, 255), ruta_temporal: file.path, actor_id: actorId,
  } });
  enqueue(job.id_importacion);
  return job;
}

export async function getJob(id) {
  return prisma.importacionMasiva.findUnique({ where: { id_importacion: id }, select: {
    id_importacion: true, tipo: true, estado: true, archivo: true, total_filas: true,
    procesadas: true, insertadas: true, actualizadas: true, omitidas: true, errores: true, detalle_error: true,
    fecha_creacion: true, fecha_inicio: true, fecha_fin: true,
  } });
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
        batch = [...new Map(batch.map(item => [item.tipo_documento + item.numero_documento, item])).values()];
        omitted += originalSize - batch.length;
        const existing = await prisma.cliente.count({
          where: {
            OR: batch.map(item => ({
              tipo_documento: item.tipo_documento,
              numero_documento: item.numero_documento,
            })),
          },
        });
        const affected = await prisma.$executeRaw`
             INSERT INTO "clientes" ("tipo_documento", "numero_documento", "nombres", "apellido_paterno", "apellido_materno", "telefono", "direccion", "distrito", "estado", "deuda_castigada", "deuda_cliente", "deuda_vigente", "otras_deudas", "ultima_gestion", "latitud", "longitud")
          SELECT x.tipo_documento::"TipoDocumento", x.numero_documento, x.nombres, x.apellido_paterno, x.apellido_materno, x.telefono, x.direccion, x.distrito, x.estado,
               x.deuda_castigada, x.deuda_cliente, x.deuda_vigente, x.otras_deudas, x.ultima_gestion, x.latitud, x.longitud
          FROM jsonb_to_recordset(${JSON.stringify(batch)}::jsonb) AS x(
            tipo_documento text, numero_documento text, nombres text, apellido_paterno text, apellido_materno text, telefono text, direccion text,
               distrito text, estado text, deuda_castigada numeric, deuda_cliente numeric, deuda_vigente numeric, otras_deudas numeric,
            ultima_gestion timestamp, latitud numeric, longitud numeric
          )
          ON CONFLICT ("tipo_documento", "numero_documento") DO UPDATE SET
            "nombres" = EXCLUDED."nombres", "apellido_paterno" = EXCLUDED."apellido_paterno",
            "apellido_materno" = EXCLUDED."apellido_materno", "telefono" = EXCLUDED."telefono",
            "direccion" = EXCLUDED."direccion", "distrito" = EXCLUDED."distrito", "estado" = EXCLUDED."estado",
            "deuda_castigada" = EXCLUDED."deuda_castigada", "deuda_cliente" = EXCLUDED."deuda_cliente",
            "otras_deudas" = EXCLUDED."otras_deudas", "ultima_gestion" = EXCLUDED."ultima_gestion",
            "latitud" = EXCLUDED."latitud", "longitud" = EXCLUDED."longitud"
        `;
        updated += existing;
        inserted += Number(affected) - existing;
        const admissions = batch.map(item => ({ tipo_documento: item.tipo_documento, numero_documento: item.numero_documento, ...item._admision }));
        await prisma.$executeRaw`
          INSERT INTO "admisiones" ("id_cliente", "producto", "linea_credito", "estado", "fecha")
          SELECT c."id_cliente", x.producto, x.linea_credito, x.estado, x.fecha
          FROM jsonb_to_recordset(${JSON.stringify(admissions)}::jsonb) AS x(
            tipo_documento text, numero_documento text, producto text, linea_credito numeric, estado text, fecha timestamp
          )
          INNER JOIN "clientes" c ON c."tipo_documento" = x.tipo_documento::"TipoDocumento" AND c."numero_documento" = x.numero_documento
          ON CONFLICT ("id_cliente") DO UPDATE SET
            "producto" = EXCLUDED."producto", "linea_credito" = EXCLUDED."linea_credito",
            "estado" = EXCLUDED."estado", "fecha" = EXCLUDED."fecha"
        `;
      } else {
        const originalSize = batch.length;
        batch = [...new Map(batch.map(item => [item.numero_documento, item])).values()];
        omitted += originalSize - batch.length;
        const existing = await prisma.asesor.count({ where: { dni: { in: batch.map(item => item.numero_documento) } } });
        const affected = await prisma.$executeRaw`
          INSERT INTO "asesores" ("dni", "nombres", "apellido_paterno", "apellido_materno", "telefono", "correo", "distrito", "estado", "latitud", "longitud", "fecha_actualizar")
          SELECT x.numero_documento, x.nombres, x.apellido_paterno, x.apellido_materno, x.telefono, x.correo,
                 x.distrito, x.estado, x.latitud, x.longitud, CURRENT_TIMESTAMP
          FROM jsonb_to_recordset(${JSON.stringify(batch)}::jsonb) AS x(
            dni text, nombres text, apellido_paterno text, apellido_materno text, telefono text,
            correo text, distrito text, estado text, latitud numeric, longitud numeric
          )
          ON CONFLICT ("dni") DO UPDATE SET
            "nombres" = EXCLUDED."nombres", "apellido_paterno" = EXCLUDED."apellido_paterno",
            "apellido_materno" = EXCLUDED."apellido_materno", "telefono" = EXCLUDED."telefono",
            "correo" = EXCLUDED."correo", "distrito" = COALESCE(EXCLUDED."distrito", "asesores"."distrito"),
            "estado" = EXCLUDED."estado", "latitud" = EXCLUDED."latitud",
            "longitud" = EXCLUDED."longitud", "fecha_actualizar" = CURRENT_TIMESTAMP
        `;
        updated += existing;
        inserted += Number(affected) - existing;
      }
      batch = [];
      await prisma.importacionMasiva.update({ where: { id_importacion: id }, data: { procesadas: processed, insertadas: inserted, actualizadas: updated, omitidas: omitted, errores: errors } });
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
          if (details.length < MAX_ERRORS) details.push({ fila: excelRow.number, error: `Ubicación no válida: ${rowError.message}` });
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