import type { Cta, Faq, Seo } from "./types";

export const homeSeo: Seo = {
  path: "/",
  title: "Consultoría tecnológica para empresas | VantriAI",
  description:
    "Consultoría de TI, gobierno de procesos, automatización, software a medida, datos e inteligencia artificial para empresas. Conversemos.",
};

export const home = {
  hero: {
    h1: "Consultoría tecnológica para empresas: ordenamos tu gestión y construimos la solución",
    intro: [
      "Somos una firma de consultoría y tecnología. Trabajamos con gerencias y equipos de tecnologías de la información (TI), operaciones y transformación que necesitan ordenar cómo se gestiona el trabajo y contar con herramientas que lo sostengan.",
      "Tenemos dos focos con el mismo peso: Gobernanza y Consultoría, para definir prioridades, responsables, controles e indicadores, y Tecnología, para diseñar e implementar soluciones para la operación. Puedes contratar cada uno por separado o combinarlos.",
    ],
    primary: { label: "Solicitar una reunión", href: "/contacto/" } as Cta,
    secondary: { label: "Conocer cómo trabajamos", href: "#como-trabajamos" } as Cta,
  },
  pillars: {
    title: "Los dos focos de VantriAI",
    items: [
      {
        key: "governance",
        title: "Gobernanza y Consultoría",
        text: "Define qué mejorar, quién decide y cómo medir el avance. Ayudamos a ordenar la gestión de TI y los procesos del negocio: establecemos prioridades, responsables, controles e indicadores.",
        list: [
          "Consultoría de TI y estrategia tecnológica",
          "Gobierno de TI y gestión de servicios",
          "Mejora de procesos y gobierno operativo",
          "Gobernanza y gestión documental",
        ],
        cta: { label: "Ver Gobernanza y Consultoría", href: "/gobernanza-y-consultoria/" } as Cta,
      },
      {
        key: "technology",
        title: "Tecnología",
        text: "Automatiza procesos, conecta tus sistemas y convierte tus datos en información que tu equipo pueda usar. Diseñamos e implementamos soluciones para la operación.",
        list: [
          "Automatización de procesos",
          "Desarrollo de software a medida e integración de sistemas",
          "Inteligencia artificial (IA) y agentes de IA",
          "Analítica e ingeniería de datos",
          "Comercio electrónico y CRM (gestión de relaciones con clientes)",
        ],
        cta: { label: "Ver Tecnología", href: "/tecnologia/" } as Cta,
      },
    ],
  },
  problems: {
    title: "¿Te suena familiar?",
    lead: "Estos son los problemas que más nos cuentan las gerencias y los equipos de TI, operaciones y transformación:",
    items: [
      "Las solicitudes llegan por correo y nadie sabe en qué etapa están.",
      "Los reportes se arman a mano cada semana o cada cierre.",
      "Las aprobaciones dependen de dos o tres personas y se frenan cuando no están.",
      "Los mismos datos se digitan en varios sistemas.",
      "Existen políticas y procedimientos, pero cada área trabaja con una versión distinta.",
      "Hay proyectos de TI en marcha, pero no está claro cuál es la prioridad ni quién responde por el resultado.",
    ],
    closing:
      "Si algo de esto ocurre en tu empresa, revisamos dónde se atasca el trabajo y qué cambios pueden aportar más valor.",
  },
  complement: {
    title: "Cómo se complementan los dos focos",
    intro:
      "Gobernanza y Consultoría define qué transformar, quién decide y cómo medir el avance. Tecnología convierte esas decisiones en flujos, software, integraciones, datos o soluciones de IA.",
    example: "Un ejemplo: la aprobación de un contrato o de una compra.",
    governance:
      "Gobernanza y Consultoría: definimos quién aprueba, bajo qué reglas, con qué documentos y en qué tiempos.",
    technology:
      "Tecnología: implementamos el formulario de solicitud, el flujo de aprobación y el tablero para dar seguimiento.",
    result: "El resultado es un proceso con reglas claras y una herramienta que las aplica.",
    startTitle: "Puedes empezar por donde más lo necesites",
    start: [
      {
        label: "Solo Gobernanza y Consultoría",
        text: "si necesitas ordenar decisiones, responsables o procesos antes de elegir herramientas.",
      },
      {
        label: "Solo Tecnología",
        text: "si ya tienes definido el proceso y necesitas implementarlo, integrarlo o automatizarlo.",
      },
      {
        label: "Ambos",
        text: "si quieres pasar del diseño del proceso a su puesta en marcha con un solo equipo.",
      },
    ],
    cta: { label: "Hablemos de por dónde empezar", href: "/contacto/" } as Cta,
  },
  method: {
    id: "como-trabajamos",
    title: "Cómo trabajamos",
    steps: [
      {
        title: "Diagnóstico",
        text: "Revisamos el proceso actual, quién participa, qué sistemas usa y dónde se concentra el esfuerzo. Acordamos el resultado que se busca.",
      },
      {
        title: "Priorización y diseño",
        text: "Definimos el alcance, el flujo propuesto, los controles y los criterios para validar la entrega. Si conviene, planteamos un piloto para probar el enfoque.",
      },
      {
        title: "Implementación y pruebas",
        text: "Configuramos, desarrollamos o integramos la solución. Probamos los escenarios de uso y las excepciones con los equipos responsables.",
      },
      {
        title: "Puesta en marcha y seguimiento",
        text: "Acompañamos la transición, entregamos la documentación acordada y definimos cómo se dará seguimiento a los indicadores y al soporte.",
      },
    ],
  },
  sectors: {
    title: "Experiencia por sector",
    text: "Nuestro equipo reúne experiencia profesional en banca, telecomunicaciones, comercio minorista (retail) y alimentos. También diseñamos soluciones aplicables a seguros y empresas de servicios.",
    chips: ["Banca", "Telecomunicaciones", "Comercio minorista (retail)", "Alimentos"],
    cta: { label: "Ver sectores", href: "/sectores/" } as Cta,
  },
  audience: {
    title: "A quién nos dirigimos",
    text: "A gerencias y equipos de TI, operaciones y transformación que necesitan ordenar su gestión, mejorar procesos o modernizar herramientas.",
  },
  faqs: [
    {
      q: "¿Tengo que contratar Gobernanza y Consultoría y Tecnología al mismo tiempo?",
      a: "No. Cada foco puede contratarse por separado. Si lo prefieres, puedes empezar por uno y sumar el otro cuando lo necesites.",
    },
    {
      q: "¿Puedo contratar solo la consultoría?",
      a: "Sí. Podemos trabajar en un diagnóstico, un modelo de gobierno o una hoja de ruta. La implementación puede formar parte de un alcance posterior.",
    },
    {
      q: "¿Podemos empezar por un solo proceso?",
      a: "Sí. Evaluamos una oportunidad concreta y definimos si conviene un diagnóstico, un piloto o una implementación acotada.",
    },
    {
      q: "¿Pueden integrar los sistemas que ya usamos?",
      a: "Evaluamos los accesos, las interfaces de programación (API) disponibles, la calidad de los datos y las restricciones de cada plataforma. Con esa información definimos la integración viable.",
    },
    {
      q: "¿Cómo definen el costo y el plazo?",
      a: "Dependen del número de procesos o sistemas, la complejidad de las integraciones y el acompañamiento requerido. Presentamos una propuesta con alcance y entregables después de revisar el proyecto.",
    },
    {
      q: "¿Qué pasa después de la entrega?",
      a: "Podemos acordar transferencia de conocimiento, soporte y ajustes posteriores. Las condiciones se detallan en la propuesta de cada proyecto.",
    },
  ] as Faq[],
  finalCta: {
    title: "¿Tienes un proceso que se atasca?",
    text: "Cuéntanos cómo funciona hoy y qué quieres lograr. Con esa información preparamos la primera conversación.",
    cta: { label: "Hablemos de tu operación", href: "/contacto/" } as Cta,
  },
};
