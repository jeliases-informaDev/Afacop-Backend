import test from 'node:test';
import assert from 'node:assert/strict';
import rutasController from '../src/modules/operaciones/rutas.controller.js';
import rutasService from '../src/modules/operaciones/rutas.service.js';

test('obtenerRutas aplica paginación por defecto de 10 elementos por página', async (t) => {
  const originalObtenerRutas = rutasService.obtenerRutas;

  let capturedParams = null;
  rutasService.obtenerRutas = async (params) => {
    capturedParams = params;
    return {
      data: [],
      pagination: {
        page: params.page,
        limit: params.limit,
        total: 0,
        totalPages: 0,
      },
    };
  };

  t.after(() => {
    rutasService.obtenerRutas = originalObtenerRutas;
  });

  const req = { query: {} };
  let statusCode = 200;
  let responseBody = null;
  const res = {
    status(code) {
      statusCode = code;
      return this;
    },
    json(body) {
      responseBody = body;
      return this;
    },
  };

  await rutasController.obtenerRutas(req, res);

  assert.equal(statusCode, 200);
  assert.equal(capturedParams.page, 1);
  assert.equal(capturedParams.limit, 10);
  assert.deepEqual(responseBody.pagination, {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });
});

test('obtenerRutas respeta query params de paginación personalizados y filtros', async (t) => {
  const originalObtenerRutas = rutasService.obtenerRutas;

  let capturedParams = null;
  rutasService.obtenerRutas = async (params) => {
    capturedParams = params;
    return {
      data: [{ id_ruta: 1 }],
      pagination: {
        page: params.page,
        limit: params.limit,
        total: 25,
        totalPages: 3,
      },
    };
  };

  t.after(() => {
    rutasService.obtenerRutas = originalObtenerRutas;
  });

  const req = {
    query: {
      page: '2',
      limit: '10',
      estado: 'PROGRAMADA',
      search: 'Juan',
      id_asesor: '5',
    },
  };

  let statusCode = 200;
  let responseBody = null;
  const res = {
    status(code) {
      statusCode = code;
      return this;
    },
    json(body) {
      responseBody = body;
      return this;
    },
  };

  await rutasController.obtenerRutas(req, res);

  assert.equal(statusCode, 200);
  assert.equal(capturedParams.page, 2);
  assert.equal(capturedParams.limit, 10);
  assert.equal(capturedParams.estado, 'PROGRAMADA');
  assert.equal(capturedParams.search, 'Juan');
  assert.equal(capturedParams.id_asesor, 5);
  assert.equal(responseBody.pagination.page, 2);
  assert.equal(responseBody.pagination.limit, 10);
  assert.equal(responseBody.pagination.total, 25);
  assert.equal(responseBody.pagination.totalPages, 3);
  assert.equal(responseBody.data.length, 1);
});
