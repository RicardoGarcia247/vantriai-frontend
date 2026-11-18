import type { Cta, Faq, Seo } from "./types";

export const governanceSeo: Seo = {
  path: "/gobernanza-y-consultoria/",
  title: "Consultoría de gobierno de TI para empresas | VantriAI",
  description:
    "Define prioridades, responsables y controles: consultoría de TI, gobierno de TI, mejora de procesos y gestión documental para empresas.",
};

export const governance = {
  hero: {
    h1: "Consultoría de gobierno de TI para ordenar decisiones, procesos y documentos",
    intro: [
      "Ayudamos a tu empresa a definir cómo toma decisiones, asigna responsabilidades y da seguimiento a sus iniciativas. Partimos de cómo funciona hoy la operación para proponer cambios que tu equipo pueda poner en práctica.",
    ],
    primary: { label: "Solicitar una reunión", href: "/contacto/" } as Cta,
    secondary: { label: "Ver qué puedes recibir", href: "#que-puedes-recibir" } as Cta,
  },
  problems: {
    title: "¿Qué problema atendemos?",
    lead: "Cuando la gestión de TI y de los procesos crece sin reglas claras, aparecen señales como estas:",
    items: [
      "Las prioridades de TI compiten entre áreas y no hay un criterio común para decidir.",
      "Nadie tiene claro quién aprueba un cambio ni quién responde cuando ocurre un incidente.",
      "Los procesos dependen de personas concretas, no de reglas acordadas.",
      "Las políticas y los procedimientos existen, pero hay varias versiones y no se sabe cuál está vigente.",
      "Se lanzan iniciativas sin indicadores para saber si avanzan.",
    ],
    closing:
      "Gobernanza significa definir quién decide qué, con qué reglas y cómo se verifica que se cumpla. Es la base para que la tecnología y los procesos funcionen de manera ordenada.",
  },
  services: {
    title: "¿Qué hacemos?",
    items: [
      {
        key: "strategy",
        title: "Consultoría de TI y estrategia tecnológica",
        paragraphs: [
          "Evaluamos sistemas, servicios y necesidades del negocio. Identificamos brechas, revisamos opciones tecnológicas y construimos una hoja de ruta con prioridades, responsables, hitos e indicadores.",
        ],
      },
      {
        key: "itgov",
        title: "Gobierno de TI y gestión de servicios",
        paragraphs: [
          "Definimos quién decide, quién ejecuta y cómo se elevan los riesgos. Diseñamos comités, matrices de responsabilidades y controles.",
          "Usamos marcos de referencia como COBIT (para el gobierno y la gestión de TI) e ITIL (para la gestión de servicios de TI) cuando aportan al alcance, por ejemplo, para ordenar decisiones de TI o gestionar incidentes y cambios.",
        ],
      },
      {
        key: "process",
        title: "Mejora de procesos y gobierno operativo",
        paragraphs: [
          "Mapeamos cómo se realiza el trabajo, detectamos cuellos de botella y diseñamos el flujo futuro. Priorizamos iniciativas por impacto, esfuerzo, riesgo y factibilidad.",
          "Podemos definir un portafolio de automatización con responsables, indicadores y criterios de seguimiento.",
        ],
      },
      {
        key: "docs",
        title: "Gobernanza y gestión documental",
        paragraphs: [
          "Definimos cómo se crean, revisan, aprueban y actualizan políticas, procedimientos y expedientes. Organizamos permisos, control de versiones y evidencias para facilitar la consulta y el seguimiento.",
        ],
      },
    ],
  },
  deliverables: {
    id: "que-puedes-recibir",
    title: "¿Qué puedes recibir?",
    lead: "Según el alcance, entregamos:",
    items: [
      "Un diagnóstico de madurez de la gestión de TI o de los procesos.",
      "Un mapa de procesos con los cuellos de botella identificados.",
      "Una hoja de ruta con prioridades, responsables, hitos e indicadores.",
      "Una matriz de responsabilidades.",
      "Políticas y procedimientos.",
      "Un tablero de seguimiento.",
    ],
  },
  bridge: {
    title: "Cuando el proceso ya está claro",
    text: "Podemos llevar el diseño a la práctica con formularios, flujos de aprobación, integraciones y tableros. Así, las reglas que definimos juntos quedan aplicadas en una herramienta que tu equipo usa a diario.",
    cta: { label: "Explorar Tecnología", href: "/tecnologia/" } as Cta,
  },
  start: {
    title: "Cómo iniciar una conversación",
    text: "Cuéntanos qué decisión, proceso o documento hoy genera más fricción. En una primera reunión revisamos el contexto y definimos si conviene empezar con un diagnóstico acotado, una hoja de ruta o el diseño de un proceso específico.",
    cta: { label: "Solicitar una reunión", href: "/contacto/" } as Cta,
  },
  faqs: [
    {
      q: "¿Qué es el gobierno de TI?",
      a: "Es el conjunto de decisiones, responsabilidades y controles que define cómo se priorizan, ejecutan y supervisan las iniciativas y los servicios de tecnología de una empresa.",
    },
    {
      q: "¿Puedo contratar solo la consultoría?",
      a: "Sí. Podemos trabajar en un diagnóstico, un modelo de gobierno o una hoja de ruta. La implementación puede formar parte de un alcance posterior.",
    },
    {
      q: "¿Necesito aplicar COBIT o ITIL para empezar?",
      a: "No necesariamente. Los usamos como referencia cuando aportan al alcance. Lo primero es entender cómo funciona hoy tu operación y qué necesitas ordenar.",
    },
  ] as Faq[],
};
