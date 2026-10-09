import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { Router } from 'express';

const POLITICA_RADAR360 = path.join(
  path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'assets', 'legal', 'politica-privacidad-radar360.html',
);

// El HTML marca con <mark> los datos que faltan por completar. Mientras quede alguno no se
// publica: así nunca se muestra (ni a Google Play) una política con marcadores a medio llenar.
export const tieneMarcadoresPendientes = html => html.includes('<mark>');

// Google Play exige una URL pública para la política de privacidad de la app móvil.
export function createLegalRouter({ archivoPolitica = POLITICA_RADAR360 } = {}) {
  const router = Router();
  router.get('/radar360', async (_req, res, next) => {
    try {
      const html = await readFile(archivoPolitica, 'utf8');
      if (tieneMarcadoresPendientes(html)) {
        return res.status(503).type('text/plain; charset=utf-8').send('Política de privacidad en preparación.');
      }
      // La CSP global (default-src 'none') bloquearía los estilos de la página; esta ruta solo
      // sirve un documento de texto, sin scripts ni recursos externos.
      res.setHeader(
        'Content-Security-Policy',
        "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
      );
      res.setHeader('Cache-Control', 'public, max-age=3600');
      return res.type('html').send(html);
    } catch (error) {
      return next(error);
    }
  });
  return router;
}

export default createLegalRouter();
