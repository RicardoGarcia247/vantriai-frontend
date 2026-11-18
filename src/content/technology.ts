import type { Cta, Faq, Seo } from "./types";

export const technologySeo: Seo = {
  path: "/tecnologia/",
  title: "Soluciones tecnológicas para empresas | VantriAI",
  description:
    "Automatiza procesos, conecta sistemas y desarrolla software a medida, con inteligencia artificial, analítica e ingeniería de datos para tu empresa.",
};

export const technology = {
  hero: {
    h1: "Soluciones tecnológicas para empresas que automatizan procesos y conectan sistemas",
    intro: [
      "Diseñamos e implementamos soluciones para reducir trabajo manual, conectar aplicaciones y dar visibilidad a la operación. Definimos el alcance a partir del proceso, los datos y las herramientas que ya utiliza tu equipo.",
    ],
    primary: { label: "Conversemos sobre tu solución", href: "/contacto/" } as Cta,
    secondary: { label: "Ver qué hacemos", href: "#que-hacemos" } as Cta,
  },
  problems: {
    title: "¿Qué problema atendemos?",
    items: [
      "El trabajo pasa de un correo a una hoja de cálculo y de ahí a otro sistema.",
      "Las aplicaciones de la empresa no se comunican entre sí.",
      "La información está dispersa y cada reporte se arma a mano.",
      "Nadie ve en un solo lugar cuántos casos hay, cuánto tardan y dónde se detienen.",
    ],
    closing:
      "Resolvemos estos problemas con herramientas ajustadas a tu operación, no con soluciones genéricas.",
  },
  services: {
    id: "que-hacemos",
    title: "¿Qué hacemos?",
    items: [
      {
        key: "automation",
        featured: true,
        title: "Automatización de procesos e hiperautomatización",
        text: "Digitalizamos solicitudes, formularios, validaciones, aprobaciones y alertas. Combinamos gestión de procesos de negocio (BPM), plataformas de bajo código y robots de software (RPA) cuando el flujo lo requiere. Podemos asignar responsables y registrar excepciones.",
        link: { label: "Ver automatización de procesos", href: "/tecnologia/automatizacion-de-procesos/" } as Cta,
      },
      {
        key: "ai",
        featured: true,
        title: "Inteligencia artificial aplicada y agentes de IA",
        text: "Creamos asistentes que consultan fuentes autorizadas, clasifican documentos y ayudan a responder solicitudes. Diseñamos agentes de IA que ejecutan tareas específicas dentro de un flujo, con permisos definidos, puntos de revisión humana y trazabilidad según el caso.",
      },
      {
        key: "software",
        featured: true,
        title: "Desarrollo de software a medida e integración de sistemas",
        text: "Construimos aplicaciones web, portales y herramientas internas. Conectamos sistemas mediante interfaces de programación (API) e incorporamos diseño de experiencia de usuario (UX/UI), pruebas y documentación según el alcance.",
        link: { label: "Ver desarrollo de software a medida", href: "/tecnologia/desarrollo-de-software/" } as Cta,
      },
      {
        key: "analytics",
        title: "Datos y analítica empresarial",
        text: "Definimos indicadores y construimos reportes y tableros ejecutivos u operativos. Tu equipo puede hacer seguimiento a tiempos de atención, volumen de casos, desempeño y avance de iniciativas desde un mismo lugar.",
      },
      {
        key: "dataeng",
        title: "Ingeniería e integración de datos",
        text: "Conectamos archivos, bases de datos y plataformas. Diseñamos flujos de carga, transformación y validación de datos para que la información llegue con la frecuencia y el nivel de calidad que requiere cada uso.",
      },
      {
        key: "ecommerce",
        title: "Comercio electrónico y CRM",
        text: "Conectamos catálogo, ventas, pagos y logística con la gestión de clientes. Integramos plataformas de comercio electrónico con herramientas de gestión comercial (CRM) y sistemas internos según tu operación.",
      },
    ],
  },
  deliverables: {
    title: "¿Qué puedes recibir?",
    lead: "Según el alcance, entregamos:",
    items: [
      "La solución configurada o desarrollada, probada con los escenarios que acordamos.",
      "Integraciones entre los sistemas que participan en el proceso.",
      "Reportes o tableros de seguimiento.",
      "Documentación de la solución.",
      "Transferencia de conocimiento a tu equipo.",
      "Soporte posterior, según lo que acordemos en la propuesta.",
    ],
  },
  rollout: {
    title: "Cómo ponemos en marcha una solución",
    text: "Acordamos qué proceso cubrir, qué sistemas participan y cómo sabremos que la solución funciona. Validamos los escenarios con el equipo que usará la herramienta y definimos la documentación, la transferencia de conocimiento y el soporte después de la entrega.",
  },
  bridge: {
    title: "Cuando aún falta ordenar el proceso",
    text: "Si las reglas, los responsables o los tiempos no están definidos, conviene resolverlos antes de automatizar. En Gobernanza y Consultoría diseñamos el proceso y luego podemos implementarlo aquí.",
    cta: { label: "Explorar Gobernanza y Consultoría", href: "/gobernanza-y-consultoria/" } as Cta,
  },
  start: {
    title: "Cómo iniciar una conversación",
    text: "Cuéntanos qué proceso quieres resolver y qué herramientas usa hoy tu equipo. En una primera reunión revisamos el caso y definimos si conviene un diagnóstico, un piloto o una implementación acotada.",
    cta: { label: "Conversemos sobre tu solución", href: "/contacto/" } as Cta,
  },
  faqs: [
    {
      q: "¿Pueden integrar los sistemas que ya usamos?",
      a: "Evaluamos los accesos, las API disponibles, la calidad de los datos y las restricciones de cada plataforma. Con esa información definimos la integración viable.",
    },
    {
      q: "¿Qué diferencia hay entre un asistente de IA y un agente de IA?",
      a: "Un asistente consulta fuentes y ayuda a responder. Un agente ejecuta tareas específicas dentro de un flujo, con permisos definidos y puntos de revisión humana.",
    },
    {
      q: "¿Necesito tener mis datos ordenados para empezar?",
      a: "No siempre. Revisamos qué datos existen, de dónde vienen y con qué calidad llegan, y definimos qué conviene resolver primero según el uso que quieras darles.",
    },
  ] as Faq[],
};
