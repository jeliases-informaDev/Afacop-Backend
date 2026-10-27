import prisma from "#core/config/prisma.js";

/**
 * Calcula la distancia en kilómetros entre dos puntos...

/**
 * Calcula la distancia en kilómetros entre dos puntos geográficos usando la fórmula de Haversine.
 */
function calcularDistanciaHaversine(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radio de la Tierra en km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

/**
 * Obtiene la lista de clientes con paginación, filtros y formato exacto.
 * Adicionalmente soporta filtro de proximidad por latitud, longitud y radio.
 * 
 * @param {Object} params
 * @param {number} params.page
 * @param {number} params.limit
 * @param {string} [params.search]
 * @param {string} [params.distrito]
 * @param {string} [params.estado]
 * @param {string} [params.estado_gestion]
 * @param {string} [params.fecha_pago]
 * @param {number} [params.lat]
 * @param {number} [params.lng]
 * @param {number} [params.radio]
 * @returns {Promise<Object>} Resultado con data paginada y objeto pagination.
 */
async function obtenerClientes({
  page = 1,
  limit = 12,
  search = "",
  departamento,
  distrito,
  estado,
  estado_gestion,
  fecha_pago,
  lat,
  lng,
  radio,
  asesorId,
} = {}) {

  const where = {};

  if (asesorId) {
    where.asignaciones = {
      some: {
        id_asesor: Number(asesorId),
        estado: "ACTIVA",
      },
    };
  }

  if (departamento) {
    where.departamento = {
      equals: departamento.trim(),
      mode: "insensitive",
    };
  }

  if (distrito) {
    where.distrito = {
      equals: distrito.trim(),
      mode: "insensitive",
    };
  }

  // Estado propio del cliente
  if (estado) {
    where.estado = estado;
  }

  if (search && search.trim() !== "") {
    const trimmedSearch = search.trim();

    where.OR = [
      {
        numero_documento: {
          contains: trimmedSearch,
          mode: "insensitive",
        },
      },
      {
        nombres: {
          contains: trimmedSearch,
          mode: "insensitive",
        },
      },
      {
        apellido_paterno: {
          contains: trimmedSearch,
          mode: "insensitive",
        },
      },
      {
        apellido_materno: {
          contains: trimmedSearch,
          mode: "insensitive",
        },
      },
    ];
  }

  let latNum = null;
  let lngNum = null;
  let radioKm = null;
  let filtrarPorDistancia = false;

  // Bounding Box
  if (
    lat !== undefined &&
    lat !== null &&
    lng !== undefined &&
    lng !== null
  ) {
    latNum = Number(lat);
    lngNum = Number(lng);
    radioKm = Number(radio || 5);

    if (
      !isNaN(latNum) &&
      !isNaN(lngNum) &&
      !isNaN(radioKm)
    ) {
      filtrarPorDistancia = true;

      const deltaLat = radioKm / 111.1;

      const deltaLng =
        radioKm /
        (111.1 * Math.cos((latNum * Math.PI) / 180));

      where.latitud = {
        gte: latNum - deltaLat,
        lte: latNum + deltaLat,
      };

      where.longitud = {
        gte: lngNum - deltaLng,
        lte: lngNum + deltaLng,
      };
    }
  }

  const skip = (page - 1) * limit;
  const take = limit;

  /*
   * estado_gestion se calcula después de consultar Prisma.
   * Por eso, cuando existe ese filtro, primero debemos obtener
   * los clientes, calcular el estado y recién después paginar.
   */
  const requiereFiltroPosterior =
    Boolean(estado_gestion || fecha_pago || filtrarPorDistancia);

  const includeGestion = {
    rutas_clientes: {
      orderBy: {
        fecha_actualizar: "desc",
      },
      take: 1,
      select: {
        estado_visita: true,
        fecha_actualizar: true,
        ruta: {
          select: {
            estado: true,
          },
        },
      },
    },
  };

  let clientes;
  let total;

  if (requiereFiltroPosterior) {
    clientes = await prisma.cliente.findMany({
      where,
      orderBy: {
        id_cliente: "desc",
      },
      include: includeGestion,
    });
  } else {
    [total, clientes] = await Promise.all([
      prisma.cliente.count({
        where,
      }),

      prisma.cliente.findMany({
        where,
        skip,
        take,
        orderBy: {
          id_cliente: "desc",
        },
        include: includeGestion,
      }),
    ]);
  }

  const getEstadoGestion = (cliente) => {
    const enlace = cliente.rutas_clientes?.[0];

    if (enlace) {
      if (enlace.estado_visita === "REPROGRAMADO") {
        return {
          estado_gestion: "REPROGRAMADO",
          fecha_gestion: enlace.fecha_actualizar,
        };
      }

      if (enlace.estado_visita === "NO_ENCONTRADO") {
        return {
          estado_gestion: "NO_ENCONTRADO",
          fecha_gestion: enlace.fecha_actualizar,
        };
      }

      if (enlace.estado_visita === "VISITADO") {
        return {
          estado_gestion: "GESTIONADO",
          fecha_gestion: enlace.fecha_actualizar,
        };
      }

      if (enlace.ruta?.estado === "EN_PROCESO") {
        return {
          estado_gestion: "EN_VISITA",
          fecha_gestion: enlace.fecha_actualizar,
        };
      }
    }

    return {
      estado_gestion: "LIBRE",
      fecha_gestion: cliente.ultima_gestion,
    };
  };

  let data = clientes.map((cliente) => {
    const deuda_castigada =
      Number(cliente.deuda_castigada ?? 0);

    const deuda_cliente =
      Number(cliente.deuda_cliente ?? 0);

    const deuda_vigente =
      Number(cliente.deuda_vigente ?? 0);

    const otras_deudas =
      Number(cliente.otras_deudas ?? 0);

    const deuda_total =
      deuda_castigada +
      deuda_cliente +
      deuda_vigente +
      otras_deudas;

    const apellidos =
      `${cliente.apellido_paterno ?? ""} ${cliente.apellido_materno ?? ""}`.trim();

    const gestion = getEstadoGestion(cliente);

    return {
      id: cliente.id_cliente,
      id_cliente: cliente.id_cliente,

      tipo_documento: cliente.tipo_documento,
      numero_documento: cliente.numero_documento,

      nombres: cliente.nombres,
      apellidos,

      telefono: cliente.telefono,
      direccion: cliente.direccion,
      distrito: cliente.distrito,
      departamento: cliente.departamento,

      deuda_cliente,
      deuda_total,

      dias_retraso: 0,

      // Estado propio del cliente
      estado: cliente.estado,

      // Estado operativo
      estado_gestion: gestion.estado_gestion,

      fecha_gestion: gestion.fecha_gestion,

      latitud:
        cliente.latitud !== null &&
        cliente.latitud !== undefined
          ? Number(cliente.latitud)
          : null,

      longitud:
        cliente.longitud !== null &&
        cliente.longitud !== undefined
          ? Number(cliente.longitud)
          : null,
    };
  });

  // FILTRO ESTADO GESTIÓN
  if (estado_gestion) {
    data = data.filter(
      cliente =>
        cliente.estado_gestion === estado_gestion
    );
  }

  // FILTRO FECHA DE GESTIÓN
  if (fecha_pago) {
    const dateFormatter =
      new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Lima",
      });

    data = data.filter(cliente => {
      if (!cliente.fecha_gestion) {
        return false;
      }

      return (
        dateFormatter.format(
          new Date(cliente.fecha_gestion)
        ) === fecha_pago
      );
    });
  }

  // FILTRO CIRCULAR HAVERSINE
  if (filtrarPorDistancia) {
    data = data
      .map((cliente) => {
        if (
          cliente.latitud === null ||
          cliente.longitud === null
        ) {
          return {
            ...cliente,
            distancia_km: null,
          };
        }

        const distancia =
          calcularDistanciaHaversine(
            latNum,
            lngNum,
            cliente.latitud,
            cliente.longitud
          );

        return {
          ...cliente,
          distancia_km: parseFloat(
            distancia.toFixed(2)
          ),
        };
      })
      .filter(
        cliente =>
          cliente.distancia_km !== null &&
          cliente.distancia_km <= radioKm
      )
      .sort(
        (a, b) =>
          a.distancia_km -
          b.distancia_km
      );
  }

  if (requiereFiltroPosterior) {
    total = data.length;

    // La paginación ocurre después del filtro
    data = data.slice(skip, skip + take);
  }

  const totalPages =
    Math.ceil(total / limit);

  return {
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
  };
}

async function obtenerPuntosMapa({ estado, fecha_pago, zoom = 6, west, east, south, north, asesorId } = {}) {
  const where = { latitud: { not: null }, longitud: { not: null } };
  if (asesorId) where.asignaciones = { some: { id_asesor: Number(asesorId), estado: "ACTIVA" } };
  const clientes = await prisma.cliente.findMany({ where, select: {
    id_cliente: true, tipo_documento: true, numero_documento: true, nombres: true, apellido_paterno: true, apellido_materno: true,
    direccion: true, distrito: true, ultima_gestion: true, deuda_castigada: true, deuda_cliente: true, deuda_vigente: true,
    otras_deudas: true, latitud: true, longitud: true,
    asignaciones: {
      where: { estado: 'ACTIVA' }, take: 1,
      select: { id_asignacion: true },
    },
    rutas_clientes: {
      orderBy: { fecha_actualizar: 'desc' }, take: 1,
      select: { estado_visita: true, fecha_actualizar: true, ruta: { select: { estado: true } } },
    },
  } });
  const getOperationalState = cliente => {
    const enlace = cliente.rutas_clientes[0];
    if (enlace) {
      if (enlace.estado_visita === 'REPROGRAMADO') return { estado: 'REPROGRAMADO', fecha: enlace.fecha_actualizar };
      if (enlace.estado_visita === 'NO_ENCONTRADO') return { estado: 'NO_ENCONTRADO', fecha: enlace.fecha_actualizar };
      if (enlace.estado_visita === 'VISITADO') return { estado: 'GESTIONADO', fecha: enlace.fecha_actualizar };
      if (enlace.ruta.estado === 'EN_PROCESO') return { estado: 'EN_VISITA', fecha: enlace.fecha_actualizar };
    }
    return { estado: 'LIBRE', fecha: cliente.ultima_gestion };
  };
  const clientesConEstado = clientes.map(cliente => ({ ...cliente, ...getOperationalState(cliente) }))
    .filter(cliente => {
      if (!fecha_pago) return true;
      if (!cliente.fecha) return false;
      return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Lima' }).format(new Date(cliente.fecha)) === fecha_pago;
    });
  const conteoEstados = { LIBRE: 0, EN_VISITA: 0, GESTIONADO: 0, REPROGRAMADO: 0, NO_ENCONTRADO: 0 };
  for (const cliente of clientesConEstado) {
    if (Object.hasOwn(conteoEstados, cliente.estado)) conteoEstados[cliente.estado]++;
  }
  const clientesOperativos = clientesConEstado.filter(cliente => !estado || cliente.estado === estado);
  const total = clientesConEstado.length;
  // En el mapa, "Asignado" es la etiqueta visual del estado operativo EN_VISITA
  // (azul): cliente incluido en una ruta que está EN_PROCESO.
  const totalAsignados = conteoEstados.EN_VISITA;
  // El viewport limita los marcadores enviados, pero no los contadores globales.
  const clientesVisibles = [west, east, south, north].every(value => Number.isFinite(value))
    ? clientesOperativos.filter(cliente => (
      Number(cliente.latitud) >= south && Number(cliente.latitud) <= north
      && Number(cliente.longitud) >= west && Number(cliente.longitud) <= east
    ))
    : clientesOperativos;
    const individualPoint = c => {
  const deudaTotal =
    Number(c.deuda_castigada || 0) +
    Number(c.deuda_cliente || 0) +
    Number(c.deuda_vigente || 0) +
    Number(c.otras_deudas || 0);

  return {
    cluster: false,

    id: c.id_cliente,
    dni: c.numero_documento,

    nombres: c.nombres,

    apellidos:
      `${c.apellido_paterno || ''} ${c.apellido_materno || ''}`.trim(),

    direccion: c.direccion,
    distrito: c.distrito,

    estado: c.estado,

    deuda_cliente:
      Number(c.deuda_cliente || 0),

    deuda_total:
      Number(deudaTotal.toFixed(2)),

    latitud: Number(c.latitud),
    longitud: Number(c.longitud),
  };
};
  if (Number(zoom) >= 10) {
    // El mapa operativo necesita conservar el conjunto completo de clientes.
    // Leaflet se encarga de dibujar solamente los que estén dentro del viewport.
    return { data: clientesOperativos.map(individualPoint), total, totalAsignados, conteoEstados, visibles: clientesOperativos.length, clusters: 0 };
  }
  const gridSize = Math.max(0.0003, 20 / (2 ** Math.max(1, Math.min(18, zoom))));
  const groups = new Map();
  for (const cliente of clientesVisibles) {
    const latitud = Number(cliente.latitud); const longitud = Number(cliente.longitud);
    if (!Number.isFinite(latitud) || !Number.isFinite(longitud) || Math.abs(latitud) > 90 || Math.abs(longitud) > 180) continue;
    const key = `${Math.floor(latitud / gridSize)}:${Math.floor(longitud / gridSize)}`;
    const group = groups.get(key) || { count: 0, lat: 0, lng: 0, sample: cliente, estados: {} };
    group.count++; group.lat += latitud; group.lng += longitud;
    group.estados[cliente.estado] = (group.estados[cliente.estado] || 0) + 1;
    groups.set(key, group);
  }
  const points = [...groups.values()].map(group => {
    if (group.count > 1) {
      const dominantState = Object.entries(group.estados).sort((a, b) => b[1] - a[1])[0]?.[0] || 'LIBRE';
      return { cluster: true, count: group.count, estado: Object.keys(group.estados).length === 1 ? dominantState : 'MIXTO', estados: group.estados, latitud: group.lat / group.count, longitud: group.lng / group.count };
    }
    const c = group.sample;
    return individualPoint(c);
  });
  return { data: points, total, totalAsignados, conteoEstados, visibles: clientesVisibles.length, clusters: points.filter(point => point.cluster).length };
}

/**
 * Obtiene un cliente por su id_cliente y lo devuelve con el formato y transformaciones requeridos.
 * 
 * @param {number} id - El ID del cliente a buscar (id_cliente).
 * @returns {Promise<Object|null>} Objeto con la propiedad data conteniendo el cliente transformado, o null si no se encuentra.
 */
async function obtenerClientePorId(id, asesorId) {
  const cliente = await prisma.cliente.findFirst({
    where: {
      id_cliente: id,
      ...(asesorId ? { asignaciones: { some: { id_asesor: Number(asesorId), estado: "ACTIVA" } } } : {}),
    },
    include: {
      visitas: {
        orderBy: { fecha_creacion: 'desc' },
        include: { asesor: true },
      },
    },
  });

  if (!cliente) {
    return null;
  }

  const deuda_castigada = Number(cliente.deuda_castigada ?? 0);
  const deuda_cliente = Number(cliente.deuda_cliente ?? 0);
  const deuda_vigente = Number(cliente.deuda_vigente ?? 0);
  const otras_deudas = Number(cliente.otras_deudas ?? 0);
  const deuda_total = deuda_castigada + deuda_cliente + deuda_vigente + otras_deudas;

  const apellidos = `${cliente.apellido_paterno ?? ""} ${cliente.apellido_materno ?? ""}`.trim();

  return {
    data: {
      id: cliente.id_cliente,
      tipo_documento: cliente.tipo_documento,
      numero_documento: cliente.numero_documento,
      nombres: cliente.nombres,
      apellidos,
      apellido_paterno: cliente.apellido_paterno,
      apellido_materno: cliente.apellido_materno,
      telefono: cliente.telefono,
      direccion: cliente.direccion,
      distrito: cliente.distrito,
      deuda_castigada,
      deuda_cliente,
      deuda_vigente,
      otras_deudas,
      deuda_total,
      estado: cliente.estado,
      fecha_gestion: cliente.ultima_gestion,
      latitud: cliente.latitud !== null && cliente.latitud !== undefined ? Number(cliente.latitud) : null,
      longitud: cliente.longitud !== null && cliente.longitud !== undefined ? Number(cliente.longitud) : null,
      gestiones: cliente.visitas.map(visita => ({
        id: visita.id_visita,
        tipificacion: visita.resultado || 'GESTIONADO',
        resultado: visita.resultado,
        observacion: visita.observaciones,
        created_at: visita.fecha_creacion,
        fecha_hora_checkin: visita.fecha_hora_checkin,
        fecha_hora_checkout: visita.fecha_hora_checkout,
        monto_recaudado: visita.monto_recaudado !== null ? Number(visita.monto_recaudado) : null,
        fecha_promesa: visita.fecha_promesa,
        worker_nombre: `${visita.asesor.nombres} ${visita.asesor.apellido_paterno || ''}`.trim(),
        evidencias: visita.foto_url ? [visita.foto_url] : [],
        es_offline: false,
      })),
    },
  };
}

export default {
  obtenerClientes,
  obtenerPuntosMapa,
  obtenerClientePorId,
};
