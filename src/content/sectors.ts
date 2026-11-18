import type { Cta, Faq, Seo } from "./types";

export const sectorsSeo: Seo = {
  path: "/sectores/",
  title: "Automatización de procesos bancarios y por sector | VantriAI",
  description:
    "Experiencia del equipo en banca, telecomunicaciones, retail y alimentos. Soluciones de automatización e integración aplicables a seguros y servicios.",
};

export type Sector = {
  key: "banking" | "telecom" | "retail" | "food" | "insurance";
  title: string;
  problem: string;
  solution: string;
};

export const sectors = {
  hero: {
    h1: "Soluciones por sector: experiencia del equipo en banca, telecomunicaciones, retail y alimentos",
    intro: [
      "Nuestro equipo reúne experiencia profesional en banca, telecomunicaciones, comercio minorista y alimentos. También diseñamos soluciones aplicables a aseguradoras y empresas de servicios.",
      "Cada sector tiene sus reglas, pero los problemas de fondo se repiten: solicitudes dispersas, aprobaciones lentas, sistemas desconectados y reportes armados a mano.",
    ],
  },
  experience: {
    title: "Experiencia profesional del equipo",
    note: "Esta experiencia corresponde a la trayectoria profesional de las personas que integran nuestro equipo.",
    items: [
      {
        key: "banking",
        title: "Banca y servicios financieros: automatización de procesos bancarios",
        problem:
          "Puedes tener aprobaciones internas sin trazabilidad, evidencias repartidas entre correos y carpetas, o reportes de excepciones que se arman a mano.",
        solution:
          "Diseñamos flujos internos con aprobaciones, controles y registro de evidencias. Construimos tableros para consultar estados, excepciones y tiempos de atención.",
      },
      {
        key: "telecom",
        title: "Telecomunicaciones",
        problem:
          "Las solicitudes operativas llegan por varios canales y los indicadores de servicio viven en fuentes distintas.",
        solution:
          "Organizamos la gestión de solicitudes operativas, integramos las fuentes de información y construimos tableros para dar seguimiento a indicadores de servicio.",
      },
      {
        key: "retail",
        title: "Comercio minorista y comercio electrónico",
        problem:
          "Ventas, pedidos, clientes y logística suelen estar en sistemas separados, y cada equipo ve una parte del cuadro.",
        solution:
          "Hacemos la integración para comercio electrónico: conectamos ventas, pedidos, clientes y logística, y armamos reportes para los equipos comerciales y operativos.",
      },
      {
        key: "food",
        title: "Alimentos y distribución",
        problem:
          "Los formularios en papel, las aprobaciones por correo y los reportes consolidados a mano consumen tiempo de operación.",
        solution:
          "Digitalizamos formularios y aprobaciones, damos seguimiento a pedidos y consolidamos reportes para los equipos de operación y distribución.",
      },
    ] as Sector[],
  },
  applicable: {
    title: "Sectores donde se pueden aplicar nuestras soluciones",
    items: [
      {
        key: "insurance",
        title: "Seguros y empresas de servicios",
        problem:
          "Los trámites con muchos documentos y validaciones necesitan seguimiento desde que ingresan hasta que se cierran.",
        solution:
          "Diseñamos flujos documentales con validaciones y seguimiento de solicitudes, también como automatización para aseguradoras y empresas de servicios.",
      },
    ] as Sector[],
    cta: { label: "Hablemos de tu operación", href: "/contacto/" } as Cta,
  },
  faqs: [
    {
      q: "¿Cómo adaptan una solución a mi sector?",
      a: "Partimos de tu proceso, tus sistemas y los requisitos propios de tu empresa. La propuesta se define después de revisar el caso.",
    },
    {
      q: "¿Trabajan con empresas de otros sectores?",
      a: "Los problemas de fondo, como solicitudes dispersas, aprobaciones lentas y sistemas desconectados, se repiten en muchos sectores. Cuéntanos tu caso y evaluamos cómo podemos ayudarte.",
    },
  ] as Faq[],
};
