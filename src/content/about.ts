import type { Cta, Faq, Seo } from "./types";

export const aboutSeo: Seo = {
  path: "/nosotros/",
  title: "Empresa de consultoría y tecnología | VantriAI",
  description:
    "Conoce a VantriAI, firma ecuatoriana de consultoría y tecnología: gobernanza, transformación de procesos, desarrollo de software y datos para empresas.",
};

export const about = {
  hero: {
    h1: "VantriAI: firma ecuatoriana de consultoría y tecnología",
  },
  who: {
    title: "Quiénes somos",
    text: "Somos una firma ecuatoriana de consultoría y tecnología. Reunimos experiencia en gobernanza, transformación de procesos, desarrollo de software y datos para ayudar a organizaciones a pasar de una necesidad operativa a una solución que su equipo pueda usar y mantener.",
  },
  approach: {
    title: "Cómo entendemos el trabajo",
    items: [
      {
        lead: "Partimos de la operación real.",
        text: "Revisamos cómo funciona hoy el proceso antes de proponer cambios.",
      },
      {
        lead: "Definimos antes de construir.",
        text: "Acordamos qué se quiere resolver y cómo sabremos que funciona.",
      },
      {
        lead: "Diseñamos para que tu equipo la use.",
        text: "Validamos los escenarios con quienes operarán la solución.",
      },
      {
        lead: "No te dejamos solo después de la entrega.",
        text: "Acordamos documentación, transferencia de conocimiento y soporte.",
      },
    ],
  },
  pillars: {
    title: "Dos focos que se complementan",
    governance:
      "Gobernanza y Consultoría ordena la gestión de TI y los procesos del negocio: define prioridades, responsables, controles e indicadores.",
    technology:
      "Tecnología diseña e implementa las soluciones: automatización, software a medida, integración de sistemas, inteligencia artificial (IA), analítica, ingeniería de datos, comercio electrónico y CRM (gestión de relaciones con clientes).",
    closing:
      "Puedes contratar cada foco por separado o combinarlos para pasar del diseño del proceso a su puesta en marcha.",
    ctas: [
      { label: "Ver Gobernanza y Consultoría", href: "/gobernanza-y-consultoria/" },
      { label: "Ver Tecnología", href: "/tecnologia/" },
    ] as Cta[],
  },
  experience: {
    title: "Experiencia del equipo",
    text: "Nuestro equipo reúne experiencia profesional en banca, telecomunicaciones, comercio minorista y alimentos. También diseñamos soluciones aplicables a seguros y empresas de servicios.",
    chips: ["Banca", "Telecomunicaciones", "Comercio minorista", "Alimentos"],
    link: { label: "Ver sectores", href: "/sectores/" } as Cta,
  },
  audience: {
    title: "A quién nos dirigimos",
    text: "A gerencias y equipos de TI (tecnologías de la información), operaciones y transformación que necesitan ordenar su gestión, mejorar procesos o modernizar herramientas.",
  },
  faqs: [
    {
      q: "¿VantriAI ofrece consultoría, tecnología o ambas?",
      a: "Ambas. Son dos focos con el mismo peso y puedes contratarlos por separado o en conjunto, según lo que necesites resolver.",
    },
    {
      q: "¿Cómo empezamos?",
      a: "Con una conversación sobre el proceso o la decisión que hoy genera más fricción. Después definimos si conviene un diagnóstico, un piloto o una implementación acotada.",
    },
  ] as Faq[],
  finalCta: {
    title: "Conversemos sobre tu operación",
    text: "Cuéntanos qué quieres mejorar y por dónde crees que debería empezar el trabajo.",
    cta: { label: "Hablemos de tu operación", href: "/contacto/" } as Cta,
  },
};
