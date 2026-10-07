# Geocodificación de clientes

Al importar clientes, cada dirección se ubica en el mapa en segundo plano. El resultado
nunca se da por bueno solo porque exista: cada ubicación recibe un nivel de confianza.

| Estado | Significado |
|---|---|
| `LOCALIZADO` | Confianza alta (número de casa y distrito coinciden con un punto exacto). |
| `REVISAR` | Se encontró un punto, pero es dudoso. Se corrige en **Clientes → Revisar ubicaciones**. |
| `NO_ENCONTRADO` / `ERROR` | Sin punto. Se coloca a mano en la misma pantalla. |
| `VERIFICADO` | Lo confirmó una persona en el panel o el asesor en campo. No se vuelve a mover solo. |

## Proveedor

`GEOCODING_PROVIDER` elige quién ubica las direcciones:

- `nominatim` (por defecto): OpenStreetMap gratuito. Su política no admite cargas masivas
  (máximo 1 consulta por segundo y 4 por minuto en procesos recurrentes), así que el sistema
  va lento a propósito. Sirve para unos pocos miles de clientes como mucho.
- `mapbox`: para cargas de 2,000 a 20,000 clientes. Resuelve la velocidad y devuelve un nivel
  de precisión por dirección (techo, parcela, interpolada…), que se traduce a la misma
  confianza. Para **guardar** las coordenadas se usa el modo permanente de Mapbox, que exige
  tarjeta registrada y cuesta US$5 por cada 1,000 direcciones, sin cuota gratis (precio de la
  página de Mapbox al 2026-10-07; confirmarlo antes de activar). Es de uso propio del negocio:
  no se puede redistribuir.

Para activar Mapbox: crear la cuenta y un token secreto, y cargar en Render
`GEOCODING_PROVIDER=mapbox` y `MAPBOX_ACCESS_TOKEN=<token>`. Nunca en el repositorio. Para
volver atrás basta con poner `GEOCODING_PROVIDER=nominatim`.

Con mapbox el worker procesa lotes de hasta 500 clientes y continúa de inmediato mientras haya
cola. Si el proveedor rechaza la clave o responde que se excedió el límite, el lote se detiene y
los clientes siguen `PENDIENTE` para reintentarse; no se marcan como error.

## Prueba corta antes de decidir

Ninguna fuente publica cuál proveedor es más exacto en Lima, así que se mide con direcciones
reales. Con un CSV de 30 a 50 direcciones (ver `scripts/muestra-direcciones.example.csv`;
`lat_real` y `lon_real` son opcionales, pero con ellas se mide el error de verdad):

```
node scripts/benchmark-geocodificacion.js mis-direcciones.csv
```

Compara OpenStreetMap contra Mapbox (si hay `MAPBOX_ACCESS_TOKEN`) e imprime, por proveedor,
cuántas encontró, la confianza y el error contra el punto real. Por defecto usa el modo
temporal de Mapbox (gratis, sin tarjeta) y no guarda coordenadas en ningún lado.

## Privacidad

Al proveedor solo se le envía el texto de la dirección (con distrito y provincia), sin nombre
ni documento del cliente.
