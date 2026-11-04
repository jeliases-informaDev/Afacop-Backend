import 'dotenv/config';
import { buscarPersonasPorLote } from '#modules/clientes/personas-lookup.service.js';

async function main() {
  console.log('====================================================');
  console.log('   PRUEBA DE CONEXIÓN CON API DE PERSONAS (RRCC)    ');
  console.log('====================================================');

  const url = process.env.RRCC_API_URL;
  const key = process.env.RRCC_API_KEY;

  console.log('1. Verificación de Variables de Entorno:');
  console.log('   - RRCC_API_URL:', url ? url : '❌ NO DEFINIDA en .env');
  console.log('   - RRCC_API_KEY:', key ? '✅ Configurada (' + key.slice(0, 4) + '...)' : '❌ NO DEFINIDA en .env');

  if (!url || !key) {
    console.log('\n⚠️ Para probar con la API real, debes configurar RRCC_API_URL y RRCC_API_KEY en tu archivo .env');
    return;
  }

  // Tomar DNIs enviados por argumento o usar unos de prueba
  const dnis = process.argv.slice(2);
  const documentos = dnis.length > 0 ? dnis : ['12345678', '87654321'];

  console.log(`\n2. Consultando endpoint ${url}/v1/personas/buscar-lote...`);
  console.log(`   - Documentos enviados: ${documentos.join(', ')}`);

  const inicio = Date.now();
  try {
    const mapa = await buscarPersonasPorLote(documentos);
    const duracion = Date.now() - inicio;

    console.log(`\n3. Respuesta recibida en ${duracion} ms:`);
    console.log(`   - Total encontrados en Operador.Personas: ${mapa.size}`);

    if (mapa.size > 0) {
      console.log('\n--- DATOS OBTENIDOS ---');
      for (const [dni, persona] of mapa.entries()) {
        console.log(`[DNI: ${dni}] -> ${persona.nombres} ${persona.apellido_paterno} ${persona.apellido_materno}`);
      }
      console.log('-----------------------');
      console.log('✅ La integración funciona correctamente.');
    } else {
      console.log('\n⚠️ La API respondió pero no devolvió personas para esos documentos de prueba.');
      console.log('   (Verifica que los DNIs consultados existan en la tabla Operador.Personas).');
      console.log('   Puedes pasar DNIs reales ejecutando: node scripts/probar-personas-api.js <DNI_1> <DNI_2>');
    }
  } catch (error) {
    console.error('\n❌ Error al comunicarse con la API:', error.message);
  }
}

main();
