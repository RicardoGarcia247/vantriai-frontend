import type { Cta, Faq, Seo } from "./types";

export const softwareSeo: Seo = {
  path: "/tecnologia/desarrollo-de-software/",
  title: "Desarrollo de software a medida para empresas | VantriAI",
  description:
    "Desarrollamos aplicaciones web, portales y herramientas internas, con integración de sistemas por API, para resolver necesidades de tu operación.",
};

export const software = {
  hero: {
    h1: "Desarrollo de software a medida para tu operación",
    intro: [
      "Diseñamos portales, aplicaciones web y herramientas internas que responden a una necesidad específica de tu negocio. Definimos pantallas, permisos, integraciones y criterios de aceptación junto al equipo que utilizará la solución.",
    ],
    primary: { label: "Conversemos sobre tu aplicación", href: "/contacto/" } as Cta,
  },
  problems: {
    title: "¿Qué problema atendemos?",
    items: [
      "Un proceso importante depende de hojas de cálculo que solo entiende una persona.",
      "La información está repartida en plataformas que no se conectan entre sí.",
      "No existe un lugar único para recibir solicitudes y darles seguimiento.",
      "Las herramientas del mercado cubren una parte de la necesidad, pero no el flujo completo de tu operación.",
    ],
  },
  method: {
    title: "¿Qué hacemos?",
    paragraphs: [
      "Diseñamos y construimos la aplicación a partir de cómo trabaja tu equipo. Definimos las pantallas, los permisos por perfil, las integraciones con otros sistemas y los criterios de aceptación, es decir, las condiciones acordadas de antemano para dar por terminada una funcionalidad.",
      "Conectamos sistemas mediante interfaces de programación (API) e incorporamos diseño de experiencia de usuario (UX/UI), pruebas y documentación según el alcance.",
    ],
    pieces: [
      "Pantallas",
      "Permisos por perfil",
      "Integraciones con otros sistemas",
      "Criterios de aceptación",
    ],
  },
  examples: {
    title: "¿Qué podemos construir?",
    items: [
      "Un portal de atención para recibir y seguir solicitudes.",
      "Una aplicación interna para centralizar registros.",
      "Una herramienta que conecte información entre plataformas.",
    ],
    closing:
      "Validamos los flujos con el equipo que usará la solución y entregamos documentación según el alcance.",
  },
  deliverables: {
    title: "¿Qué puedes recibir?",
    items: [
      "Una aplicación web o un portal probado con los escenarios que acordamos.",
      "Integraciones con los sistemas que participan en el proceso.",
      "Documentación de la solución.",
      "Transferencia de conocimiento a tu equipo.",
      "Soporte y ajustes posteriores, según lo que acordemos en la propuesta.",
    ],
  },
  bridge: {
    title: "Cuando el proceso aún no está definido",
    text: "Antes de construir, conviene tener claro quién aprueba, con qué reglas y en qué tiempos. En Gobernanza y Consultoría ordenamos el proceso para que la aplicación refleje reglas acordadas.",
    cta: { label: "Ver Gobernanza y Consultoría", href: "/gobernanza-y-consultoria/" } as Cta,
  },
  start: {
    title: "Cómo iniciar una conversación",
    text: "Cuéntanos qué necesidad quieres cubrir, qué herramientas usa hoy tu equipo y quiénes usarían la aplicación. En una primera reunión revisamos el caso y definimos si conviene un piloto o una primera versión acotada.",
    cta: { label: "Conversemos sobre tu aplicación", href: "/contacto/" } as Cta,
  },
  faqs: [
    {
      q: "¿Qué es una API y para qué sirve?",
      a: "Una API es una interfaz de programación que permite que dos sistemas intercambien información de forma ordenada. Con ella evitamos digitar los mismos datos en varias plataformas.",
    },
    {
      q: "¿Podemos empezar con una primera versión?",
      a: "Sí. Si conviene, planteamos un piloto o una versión acotada para probar el enfoque con tu equipo antes de ampliar el alcance.",
    },
    {
      q: "¿Qué pasa con la aplicación después de la entrega?",
      a: "Podemos acordar documentación, transferencia de conocimiento, soporte y ajustes posteriores. Las condiciones se detallan en la propuesta de cada proyecto.",
    },
  ] as Faq[],
};
