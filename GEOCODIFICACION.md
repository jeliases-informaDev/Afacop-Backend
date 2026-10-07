# Geocodificación de clientes

Al importar clientes, cada dirección se ubica en el mapa en segundo plano. El resultado
nunca se da por exacto solo porque exista: cada ubicación recibe un nivel de confianza.

Las cargas son de miles de clientes, así que **la revisión manual no es el camino normal**.
Lo aproximado se usa tal cual, y la corrección ocurre solo donde hace falta (al visitar).

| Estado | Significado | ¿Hay que revisarla? |
|---|---|---|
| `LOCALIZADO`, confianza alta | Punto exacto (número de casa y distrito coinciden). | No. Pestaña "Precisas". |
| `LOCALIZADO`, confianza media o baja | **Aproximada**: a nivel de calle o zona. Sirve para ver la zona en el mapa. | No. Pestaña "Aproximadas": se afina solo si hace falta. |
| `REVISAR` | Sospechosa: el punto cae fuera del distrito declarado. | Sí, si se va a visitar pronto. |
| `NO_ENCONTRADO` / `ERROR` | Sin punto. | Solo al visitar: el asesor navega por la dirección escrita y confirma al llegar. |
| `VERIFICADO` | Lo confirmó una persona en el panel o el asesor en campo. No se vuelve a mover solo. | No. |

## Cómo se evita la revisión masiva

- **El celular navega por la dirección escrita** cuando el punto no es confiable
  (aproximado, por revisar o sin punto). Google entiende las direcciones de Lima mucho mejor
  que el mapa abierto, así que el asesor no depende de un pin dudoso.
- **El asesor confirma al llegar** ("Estoy en el domicilio"). Eso verifica el punto y lo
  aplica a todos los clientes con exactamente la misma dirección.
- **Lo verificado se conserva** en las cargas mensuales siguientes: solo se reinicia si
  cambia la dirección. Cada mes quedan menos clientes por resolver.
- Un resultado a nivel de ciudad o provincia no se guarda como ubicación.

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
