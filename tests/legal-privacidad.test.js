import test from 'node:test';
import assert from 'node:assert/strict';
import { access, mkdtemp, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import express from 'express';
import { createLegalRouter, tieneMarcadoresPendientes } from '../src/modules/sistema/legal.routes.js';

async function conPolitica(contenido, prueba) {
  const carpeta = await mkdtemp(path.join(os.tmpdir(), 'politica-'));
  const archivo = path.join(carpeta, 'politica.html');
  if (contenido !== null) await writeFile(archivo, contenido, 'utf8');
  const app = express();
  app.use('/privacidad', createLegalRouter({ archivoPolitica: archivo }));
  const servidor = await new Promise(resolve => { const s = app.listen(0, '127.0.0.1', () => resolve(s)); });
  try {
    await prueba(`http://127.0.0.1:${servidor.address().port}`);
  } finally {
    await new Promise(resolve => servidor.close(resolve));
    await rm(carpeta, { recursive: true, force: true });
  }
}

test('sirve la política completa como HTML público con una CSP que permite sus estilos', async () => {
  await conPolitica('<!doctype html><html><body><h1>Política de Privacidad de Radar 360°</h1></body></html>', async base => {
    const respuesta = await fetch(`${base}/privacidad/radar360`);
    assert.equal(respuesta.status, 200);
    assert.match(respuesta.headers.get('content-type'), /^text\/html/);
    const csp = respuesta.headers.get('content-security-policy');
    assert.match(csp, /default-src 'none'/);
    assert.match(csp, /style-src 'unsafe-inline'/);
    assert.doesNotMatch(csp, /script-src/);
    assert.match(respuesta.headers.get('cache-control'), /public/);
    assert.match(await respuesta.text(), /Política de Privacidad de Radar 360°/);
  });
});

test('no publica una política con datos por completar', async () => {
  await conPolitica('<html><body><p>Operada por <mark>[RAZÓN SOCIAL]</mark></p></body></html>', async base => {
    const respuesta = await fetch(`${base}/privacidad/radar360`);
    assert.equal(respuesta.status, 503);
    const cuerpo = await respuesta.text();
    assert.doesNotMatch(cuerpo, /RAZÓN SOCIAL/);
    assert.match(cuerpo, /en preparación/);
  });
});

test('si falta el archivo responde con error y no con contenido', async () => {
  await conPolitica(null, async base => {
    const respuesta = await fetch(`${base}/privacidad/radar360`);
    assert.equal(respuesta.status, 500);
  });
});

test('solo existe la ruta de la política de Radar 360°', async () => {
  await conPolitica('<html><body>ok</body></html>', async base => {
    assert.equal((await fetch(`${base}/privacidad/otra`)).status, 404);
  });
});

test('detecta los marcadores pendientes', () => {
  assert.equal(tieneMarcadoresPendientes('<p><mark>[RUC]</mark></p>'), true);
  assert.equal(tieneMarcadoresPendientes('<p>RUC 20123456789</p>'), false);
});

test('el HTML de la política viene incluido en el repositorio', async () => {
  const archivo = new URL('../src/assets/legal/politica-privacidad-radar360.html', import.meta.url);
  await access(archivo);
});
