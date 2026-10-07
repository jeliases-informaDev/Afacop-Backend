import { logger } from '#core/config/logger.js';

import {
  geocodePendingClients,
} from './geocodificacion-clientes.service.js';
import { tamanoMaximoLote } from './geocodificacion-proveedores.js';

const WORKER_ENABLED =
  String(
    process.env.GEOCODING_WORKER_ENABLED ?? 'false'
  ).toLowerCase() === 'true';

const BATCH_SIZE = Math.min(
  Math.max(
    Number(process.env.GEOCODING_BATCH_SIZE) || 5,
    1
  ),
  tamanoMaximoLote()
);

// Si el lote salió completo hay más clientes en cola: se continúa casi de
// inmediato en vez de esperar todo el intervalo.
const CONTINUAR_MS = 2000;

const INTERVAL_MS = Math.max(
  Number(process.env.GEOCODING_INTERVAL_MS) || 30000,
  5000
);

let started = false;
let processing = false;
let timer = null;

async function executeCycle() {
  timer = null;

  if (!started) {
    return;
  }

  if (processing) {
    scheduleNext();
    return;
  }

  processing = true;
  let siguienteMs = INTERVAL_MS;

  try {
    const result = await geocodePendingClients({
      limit: BATCH_SIZE,
    });

    // Con el servidor público de OpenStreetMap se mantiene siempre el ritmo
    // lento; solo un proveedor con clave (o servidor propio) avanza rápido.
    if (
      tamanoMaximoLote() > 20
      && !result.detenido
      && result.procesados >= BATCH_SIZE
    ) {
      siguienteMs = CONTINUAR_MS;
    }

    if (result.procesados > 0) {
      logger.info(
        {
          procesados: result.procesados,
          localizados: result.localizados,
          revisar: result.revisar,
          reutilizados: result.reutilizados,
          no_encontrados: result.no_encontrados,
          errores: result.errores,
        },
        'client_geocoding_batch_completed'
      );
    }
  } catch (error) {
    logger.error(
      {
        err: error,
      },
      'client_geocoding_worker_failed'
    );
  } finally {
    processing = false;

    scheduleNext(siguienteMs);
  }
}

function scheduleNext(delayMs = INTERVAL_MS) {
  if (!started) {
    return;
  }

  timer = setTimeout(
    executeCycle,
    delayMs
  );
}

export function startClientGeocodingWorker() {
  if (started) {
    return;
  }

  if (!WORKER_ENABLED) {
    logger.info(
      'client_geocoding_worker_disabled'
    );

    return;
  }

  started = true;

  logger.info(
    {
      batchSize: BATCH_SIZE,
      intervalMs: INTERVAL_MS,
    },
    'client_geocoding_worker_started'
  );

  // Esperar unos segundos después de iniciar el servidor
  timer = setTimeout(
    executeCycle,
    5000
  );
}

export function stopClientGeocodingWorker() {
  started = false;

  if (timer) {
    clearTimeout(timer);
    timer = null;
  }

  logger.info(
    'client_geocoding_worker_stopped'
  );
}