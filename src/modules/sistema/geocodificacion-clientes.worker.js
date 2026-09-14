import { logger } from '#core/config/logger.js';

import {
  geocodePendingClients,
} from './geocodificacion-clientes.service.js';

const WORKER_ENABLED =
  String(
    process.env.GEOCODING_WORKER_ENABLED ?? 'false'
  ).toLowerCase() === 'true';

const BATCH_SIZE = Math.min(
  Math.max(
    Number(process.env.GEOCODING_BATCH_SIZE) || 5,
    1
  ),
  20
);

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

  try {
    const result = await geocodePendingClients({
      limit: BATCH_SIZE,
    });

    if (result.procesados > 0) {
      logger.info(
        {
          procesados: result.procesados,
          localizados: result.localizados,
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

    scheduleNext();
  }
}

function scheduleNext() {
  if (!started) {
    return;
  }

  timer = setTimeout(
    executeCycle,
    INTERVAL_MS
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