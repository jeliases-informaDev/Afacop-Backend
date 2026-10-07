// Compara la geocodificación de OpenStreetMap contra Mapbox con direcciones reales.
//
//   node scripts/benchmark-geocodificacion.js muestra.csv [--permanente]
//
// El CSV lleva el encabezado: direccion,distrito,provincia,lat_real,lon_real
// (lat_real y lon_real son opcionales; sirven para medir el error de verdad).
// No usa la base de datos ni guarda coordenadas: solo imprime el resultado.
// Mapbox se prueba solo si MAPBOX_ACCESS_TOKEN está definido. Por defecto usa el
// modo temporal (gratis, sin tarjeta); --permanente usa el mismo modo que producción.
import fs from 'node:fs';
import 'dotenv/config';
import { estadoSegunResultado } from '../src/modules/sistema/geocodificacion-direcciones.js';
import {
  geocodificarDireccion,
  pausaEntreConsultasMs,
  sleep,
} from '../src/modules/sistema/geocodificacion-proveedores.js';

const archivo = process.argv[2];
const permanente = process.argv.includes('--permanente');
if (!archivo || !fs.existsSync(archivo)) {
  process.stderr.write('Uso: node scripts/benchmark-geocodificacion.js muestra.csv [--permanente]\n');
  process.exit(1);
}

function leerCsv(texto) {
  const filas = [];
  for (const linea of texto.split(/\r?\n/)) {
    if (!linea.trim()) continue;
    const celdas = [];
    let actual = '';
    let entreComillas = false;
    for (const caracter of linea) {
      if (caracter === '"') entreComillas = !entreComillas;
      else if (caracter === ',' && !entreComillas) { celdas.push(actual.trim()); actual = ''; }
      else actual += caracter;
    }
    celdas.push(actual.trim());
    filas.push(celdas);
  }
  const [encabezado, ...resto] = filas;
  const claves = encabezado.map(clave => clave.toLowerCase());
  return resto.map(fila => Object.fromEntries(claves.map((clave, i) => [clave, fila[i] ?? ''])));
}

function metros(a, b) {
  const rad = grados => (grados * Math.PI) / 180;
  const dLat = rad(b.latitud - a.latitud);
  const dLon = rad(b.longitud - a.longitud);
  const h = Math.sin(dLat / 2) ** 2
    + Math.cos(rad(a.latitud)) * Math.cos(rad(b.latitud)) * Math.sin(dLon / 2) ** 2;
  return Math.round(6371000 * 2 * Math.asin(Math.sqrt(h)));
}

const mediana = valores => {
  if (!valores.length) return null;
  const orden = [...valores].sort((x, y) => x - y);
  const medio = Math.floor(orden.length / 2);
  return orden.length % 2 ? orden[medio] : Math.round((orden[medio - 1] + orden[medio]) / 2);
};

const proveedores = ['nominatim'];
if (process.env.MAPBOX_ACCESS_TOKEN) proveedores.push('mapbox');
else process.stdout.write('Mapbox omitido: falta MAPBOX_ACCESS_TOKEN.\n');

const filas = leerCsv(fs.readFileSync(archivo, 'utf8'));
const resumen = Object.fromEntries(proveedores.map(proveedor => [proveedor, {
  total: 0, sinResultado: 0, errores: 0, ALTA: 0, MEDIA: 0, BAJA: 0, errores_m: [],
}]));
const entreProveedores = [];

process.stdout.write(`Probando ${filas.length} direcciones con: ${proveedores.join(' y ')}\n\n`);

let numero = 0;
for (const fila of filas) {
  numero++;
  const partes = [fila.direccion, fila.distrito, fila.provincia, 'Perú'].filter(Boolean);
  const cliente = {
    direccion: fila.direccion,
    distrito: fila.distrito || null,
    provincia: fila.provincia || null,
    direccion_normalizada: [...new Set(partes)].join(', '),
  };
  const real = fila.lat_real && fila.lon_real
    ? { latitud: Number(fila.lat_real), longitud: Number(fila.lon_real) }
    : null;

  process.stdout.write(`#${numero} ${fila.direccion} (${fila.distrito || 'sin distrito'})\n`);
  const encontrados = {};

  for (const proveedor of proveedores) {
    const cuenta = resumen[proveedor];
    cuenta.total++;
    let linea;
    try {
      const resultado = await geocodificarDireccion(cliente, { proveedor, permanente });
      if (!resultado) {
        cuenta.sinResultado++;
        linea = 'sin resultado';
      } else {
        encontrados[proveedor] = resultado;
        cuenta[resultado.confianza]++;
        linea = `${estadoSegunResultado(resultado)} / confianza ${resultado.confianza} / ${resultado.precision}`
          + `  (${resultado.latitud.toFixed(5)}, ${resultado.longitud.toFixed(5)})`;
        if (real) {
          const error = metros(resultado, real);
          cuenta.errores_m.push(error);
          linea += `  -> ${error} m del punto real`;
        }
      }
    } catch (error) {
      cuenta.errores++;
      linea = `ERROR: ${error.message}`;
    }
    process.stdout.write(`   ${proveedor.padEnd(9)}: ${linea}\n`);
    await sleep(pausaEntreConsultasMs(proveedor));
  }

  if (encontrados.nominatim && encontrados.mapbox) {
    const distancia = metros(encontrados.nominatim, encontrados.mapbox);
    entreProveedores.push(distancia);
    process.stdout.write(`   distancia entre ambos: ${distancia} m\n`);
  }
  process.stdout.write('\n');
}

process.stdout.write('===== RESUMEN =====\n');
for (const proveedor of proveedores) {
  const c = resumen[proveedor];
  const encontrados = c.total - c.sinResultado - c.errores;
  const porcentaje = valor => (c.total ? `${Math.round((valor / c.total) * 100)}%` : '0%');
  process.stdout.write(
    `${proveedor}: ${encontrados}/${c.total} con resultado (${porcentaje(encontrados)}); `
    + `confianza alta ${c.ALTA}, media ${c.MEDIA}, baja ${c.BAJA}; `
    + `sin resultado ${c.sinResultado}; errores ${c.errores}\n`,
  );
  if (c.errores_m.length) {
    const dentro = limite => `${Math.round((c.errores_m.filter(m => m <= limite).length / c.errores_m.length) * 100)}%`;
    process.stdout.write(
      `   error contra el punto real (${c.errores_m.length} direcciones): mediana ${mediana(c.errores_m)} m; `
      + `a 50 m o menos ${dentro(50)}; a 100 m o menos ${dentro(100)}; a 250 m o menos ${dentro(250)}\n`,
    );
  }
}
if (entreProveedores.length) {
  const coinciden = Math.round((entreProveedores.filter(m => m <= 100).length / entreProveedores.length) * 100);
  process.stdout.write(
    `Coincidencia entre proveedores (${entreProveedores.length} direcciones): ${coinciden}% a 100 m o menos; mediana ${mediana(entreProveedores)} m\n`,
  );
}
