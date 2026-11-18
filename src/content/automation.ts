import type { Cta, Faq, Seo } from "./types";

export const automationSeo: Seo = {
  path: "/tecnologia/automatizacion-de-procesos/",
  title: "Automatización de procesos para empresas | VantriAI",
  description:
    "Digitaliza solicitudes, validaciones y aprobaciones con flujos, robots de software (RPA) e integraciones adaptadas a tu operación.",
};

export const automation = {
  hero: {
    h1: "Automatización de procesos para tu empresa",
    intro: [
      "Digitaliza un proceso de principio a fin, desde que alguien ingresa una solicitud hasta que el equipo recibe el resultado. Implementamos formularios, reglas, aprobaciones, alertas, robots de software e integraciones según el flujo.",
    ],
    primary: { label: "Revisemos un proceso", href: "/contacto/" } as Cta,
  },
  problems: {
    title: "¿Qué problema atendemos?",
    items: [
      "Las solicitudes llegan por correo, chat o papel y no hay forma de saber en qué etapa están.",
      "Alguien copia datos de un sistema a otro todos los días.",
      "Las aprobaciones se frenan cuando una persona no está disponible.",
      "Los errores y las excepciones se descubren tarde, cuando ya afectaron al cliente o al cierre.",
    ],
  },
  method: {
    title: "¿Qué hacemos?",
    paragraphs: [
      "Analizamos el proceso, definimos las reglas y lo implementamos con la combinación de herramientas que mejor encaja. Combinamos gestión de procesos de negocio (BPM), plataformas de bajo código y robots de software (RPA, que son programas que repiten tareas de escritorio como lo haría una persona).",
      "Revisamos volumen, reglas, excepciones y sistemas para decidir si conviene un flujo digital, un robot o una integración mediante interfaces de programación (API).",
    ],
    tools: [
      "Gestión de procesos de negocio (BPM)",
      "Plataformas de bajo código",
      "Robots de software (RPA)",
      "Integración mediante API",
    ],
  },
  automatable: {
    title: "¿Qué podemos automatizar?",
    items: [
      "Altas y solicitudes internas.",
      "Validación de documentos.",
      "Actualización de registros.",
      "Conciliación de información.",
      "Seguimiento de casos.",
    ],
  },
  example: {
    title: "Un ejemplo: el flujo de aprobación",
    text: "Primero definimos responsables, reglas y tiempos de la aprobación. Luego implementamos el formulario de solicitud, el flujo que enruta cada caso al aprobador correcto, las alertas por vencimiento y el tablero de seguimiento. Las excepciones quedan registradas.",
  },
  deliverables: {
    title: "¿Qué puedes recibir?",
    items: [
      "El proceso documentado, con reglas, responsables y excepciones.",
      "La automatización implementada y probada con los escenarios acordados.",
      "Alertas y tableros de seguimiento.",
      "Documentación y transferencia de conocimiento a tu equipo.",
    ],
  },
  metrics: {
    title: "Cómo medimos el avance",
    text: "Podemos tomar como referencia el tiempo de ciclo, las tareas manuales y el volumen de excepciones antes de implementar, para compararlos durante la operación.",
    items: ["Tiempo de ciclo", "Tareas manuales", "Volumen de excepciones"],
  },
  start: {
    title: "Cómo iniciar una conversación",
    text: "Elige un proceso concreto, por ejemplo, una aprobación o un trámite interno que hoy consuma tiempo del equipo. Lo revisamos contigo y definimos si conviene un diagnóstico, un piloto o una implementación acotada.",
    cta: { label: "Revisemos un proceso", href: "/contacto/" } as Cta,
  },
  faqs: [
    {
      q: "¿Cuándo conviene usar RPA y cuándo conectar sistemas por API?",
      a: "Depende del proceso. Si los sistemas ofrecen una API, suele ser mejor conectarlos directamente. Si no la ofrecen, un robot de software puede reproducir la tarea. Lo decidimos al revisar tus sistemas.",
    },
    {
      q: "¿Hay que definir el proceso antes de automatizarlo?",
      a: "Sí. Automatizar un proceso desordenado solo lo hace más rápido. Si hace falta, primero lo ordenamos en Gobernanza y Consultoría.",
    },
    {
      q: "¿Podemos empezar por un solo proceso?",
      a: "Sí. Evaluamos una oportunidad concreta y definimos si conviene un diagnóstico, un piloto o una implementación acotada.",
    },
  ] as Faq[],
};
