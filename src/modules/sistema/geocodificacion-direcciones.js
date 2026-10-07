const TIPOS_EDIFICIO = ['house', 'building'];
const TIPOS_CALLE = ['road', 'street', 'pedestrian', 'residential'];
const TIPOS_ZONA = ['suburb', 'neighbourhood', 'quarter', 'city_district'];
const TIPOS_CIUDAD = ['city', 'town', 'municipality', 'province'];

const ABREVIATURAS = [
  [/\bAV(?:DA?)?\.?(?=\s|$)/gi, 'Avenida'],
  [/\bJR\.?(?=\s|$)/gi, 'Jirón'],
  [/\bCA(?:L)?\.?(?=\s|$)/gi, 'Calle'],
  [/\bPSJE?\.?(?=\s|$)/gi, 'Pasaje'],
  [/\bURB\.?(?=\s|$)/gi, 'Urbanización'],
  [/\bPROL\.?(?=\s|$)/gi, 'Prolongación'],
];
const REFERENCIAS = /\b(?:REF|REFERENCIA|FRENTE A|CERCA A|CERCA DE|ALTURA DE|ESQ|ESQUINA|CRUCE)\b\.?:?.*$/i;
const INTERIOR = /\b(?:DEPARTAMENTO|INTERIOR|DEPTO|DPTO|OFICINA|EDIFICIO|TIENDA|BLOCK|STAND|PUESTO|OFIC|PISO|EDIF|INT|DEP|BLQ|TDA|OF)\b/i;
const MARCADOR_NUMERO = /(?:\b(?:N[°º]|NRO|NUM|NÚM|NUMERO|NÚMERO)\.?|#)\s*(?=\d)/gi;
const MANZANA = /\b(?:MANZANA|MZA|MZ)\b\.?\s*[A-Z0-9]+/gi;
const LOTE = /\b(?:LOTE|LTE|LT)\b\.?\s*\d+[A-Z]?/gi;

const quitarTildes = value => String(value ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '');

export function normalizarNumero(valor) {
  return String(valor || '').trim().toUpperCase().replace(/\s+/g, '');
}

export function normalizarTexto(valor) {
  return quitarTildes(valor)
    .toLowerCase()
    .replace(/\b(?:distrito|provincia|departamento|cercado)\s+de\b/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

export function limpiarDireccion(direccion) {
  let texto = String(direccion ?? '').replace(/\s+/g, ' ').trim();
  if (!texto) return { texto: '', calle: '', numero: null, esManzanaLote: false };

  texto = texto.replace(REFERENCIAS, '');
  const esManzanaLote = new RegExp(MANZANA.source, 'i').test(texto) || new RegExp(LOTE.source, 'i').test(texto);
  const sinInterior = texto.split(INTERIOR)[0].trim();
  if (sinInterior) texto = sinInterior;
  texto = texto.replace(MARCADOR_NUMERO, '');
  if (esManzanaLote) texto = texto.replace(MANZANA, ' ').replace(LOTE, ' ');
  for (const [patron, reemplazo] of ABREVIATURAS) texto = texto.replace(patron, reemplazo);
  texto = texto.replace(/\s+/g, ' ').replace(/[,;\s]+$/, '').trim();

  let numero = null;
  let calle = texto;
  if (!esManzanaLote) {
    const coincidencias = [...texto.matchAll(/\b(\d{1,5}[A-Z]?)\b(?!\s+de\b)/gi)];
    const ultima = coincidencias.at(-1);
    if (ultima) {
      numero = ultima[1].toUpperCase();
      calle = `${texto.slice(0, ultima.index)}${texto.slice(ultima.index + ultima[0].length)}`
        .replace(/\s+/g, ' ').replace(/[,;\s]+$/, '').trim();
    }
  }
  return { texto, calle, numero, esManzanaLote };
}

export function coincideDistrito(distritoEsperado, address = {}) {
  const esperado = normalizarTexto(distritoEsperado);
  if (!esperado) return null;
  const candidatos = ['suburb', 'city_district', 'neighbourhood', 'quarter', 'city', 'town', 'village', 'municipality']
    .map(clave => normalizarTexto(address?.[clave]))
    .filter(Boolean);
  if (!candidatos.length) return null;
  return candidatos.some(candidato => candidato === esperado || candidato.includes(esperado) || esperado.includes(candidato));
}

export function evaluarResultado({ item, numeroSolicitado = null, distritoEsperado = null, esManzanaLote = false }) {
  const tipo = String(item.addresstype || item.type || '').toLowerCase();
  const coincideNumero = Boolean(
    numeroSolicitado
    && normalizarNumero(item.address?.house_number) === numeroSolicitado,
  );

  let precision;
  if (coincideNumero && TIPOS_EDIFICIO.includes(tipo)) precision = 'EXACTA';
  else if (coincideNumero) precision = 'APROXIMADA';
  else if (TIPOS_EDIFICIO.includes(tipo)) precision = numeroSolicitado ? 'APROXIMADA' : 'EXACTA';
  else if (TIPOS_CALLE.includes(tipo)) precision = 'APROXIMADA';
  else if (TIPOS_ZONA.includes(tipo)) precision = 'DISTRITO';
  else if (TIPOS_CIUDAD.includes(tipo)) precision = 'PROVINCIA';
  else precision = 'APROXIMADA';

  const distritoCoincide = coincideDistrito(distritoEsperado, item.address);

  let confianza;
  if (esManzanaLote) confianza = 'BAJA';
  else if (distritoCoincide === false) confianza = 'BAJA';
  else if (precision === 'EXACTA' && numeroSolicitado) confianza = 'ALTA';
  else if (precision === 'EXACTA' || precision === 'APROXIMADA') confianza = 'MEDIA';
  else confianza = 'BAJA';

  return { precision, confianza, distritoCoincide };
}

// Traduce un resultado de Mapbox (API v6) al formato interno, de modo que
// evaluarResultado() aplique las mismas reglas de confianza a cualquier proveedor.
// Solo un punto de techo/parcela/puerta con el número coincidente cuenta como
// edificio; una interpolación o aproximación queda como "place" (dato dudoso).
export function mapearFeatureMapbox(feature) {
  const props = feature?.properties ?? {};
  const contexto = props.context ?? {};
  const [longitud, latitud] = feature?.geometry?.coordinates
    ?? [props.coordinates?.longitude, props.coordinates?.latitude];
  const puntoExacto = ['rooftop', 'parcel', 'point'].includes(props.coordinates?.accuracy);

  let addresstype;
  switch (props.feature_type) {
    case 'address':
      addresstype = puntoExacto && props.match_code?.address_number === 'matched' ? 'building' : 'place';
      break;
    case 'street': addresstype = 'road'; break;
    case 'neighborhood': addresstype = 'neighbourhood'; break;
    case 'locality':
    case 'district': addresstype = 'suburb'; break;
    default: addresstype = 'city';
  }

  return {
    lat: String(latitud),
    lon: String(longitud),
    display_name: props.full_address
      || [props.name, props.place_formatted].filter(Boolean).join(', ')
      || null,
    addresstype,
    type: addresstype,
    address: {
      house_number: contexto.address?.address_number ?? null,
      road: contexto.street?.name ?? contexto.address?.street_name ?? null,
      suburb: contexto.neighborhood?.name ?? null,
      city_district: contexto.locality?.name ?? null,
      city: contexto.place?.name ?? null,
    },
  };
}

export function estadoSegunConfianza(confianza) {
  return confianza === 'ALTA' ? 'LOCALIZADO' : 'REVISAR';
}
