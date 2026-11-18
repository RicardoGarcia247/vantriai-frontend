import type { Faq, Seo } from "./types";

export const contactSeo: Seo = {
  path: "/contacto/",
  title: "Contacto: consultoría y tecnología para empresas | VantriAI",
  description:
    "Cuéntanos qué proceso quieres mejorar. Coordina una conversación con VantriAI para revisar tu proyecto de consultoría o tecnología.",
};

export const contact = {
  hero: {
    h1: "Hablemos de tu proyecto",
    intro:
      "Cuéntanos qué proceso necesitas mejorar, qué herramientas utiliza hoy tu equipo y qué quieres lograr. Usaremos esa información para preparar la primera conversación.",
  },
  prepare: {
    title: "Qué ayuda a preparar la conversación",
    items: [
      "Qué proceso o decisión quieres mejorar.",
      "Qué herramientas o sistemas usa hoy tu equipo.",
      "Quiénes participan y dónde se atasca el trabajo.",
      "Qué resultado esperas.",
    ],
    closing:
      "Si no tienes todo claro, no hay problema. Describe lo que sepas y lo revisamos juntos.",
  },
  next: {
    title: "Qué pasa después de enviar tu consulta",
    items: [
      "Revisamos la información que compartiste.",
      "Te escribimos al correo que indicaste.",
      "Coordinamos una primera conversación para definir si conviene un diagnóstico, un piloto o una implementación acotada.",
    ],
  },
  channels: { title: "Otros canales" },
  form: {
    submit: "Enviar consulta",
    whatsapp: "Escribir por WhatsApp",
    fields: {
      name: { label: "Nombre y apellido", placeholder: "Tu nombre y apellido" },
      email: { label: "Correo de trabajo", placeholder: "nombre@empresa.com" },
      company: { label: "Empresa", placeholder: "Nombre de tu empresa" },
      interest: { label: "¿En qué podemos ayudarte?" },
      message: {
        label: "Cuéntanos sobre tu proyecto",
        placeholder:
          "Por ejemplo: las solicitudes llegan por correo y no podemos darles seguimiento.",
      },
    },
    interestOptions: [
      "Gobernanza y Consultoría",
      "Tecnología",
      "Ambos focos",
      "Aún estoy evaluando",
    ],
    help: "Describe el reto de forma general. Evita incluir contraseñas o información confidencial.",
    privacyLead: "Consulta nuestra",
    privacyLink: "Política de privacidad.",
    messages: {
      required: "Completa este campo para continuar.",
      invalidEmail: "Escribe un correo de trabajo válido.",
      sending: "Enviando tu consulta…",
      success: "Recibimos tu consulta. Te contactaremos en el correo que compartiste.",
      error:
        "No pudimos enviar tu consulta. Intenta de nuevo o escríbenos a info@vantriai.com.",
    },
  },
  faqs: [
    {
      q: "¿Tengo que tener definido el alcance para escribirles?",
      a: "No. Basta con que describas el reto y qué herramientas usas hoy. Con esa información definimos juntos por dónde empezar.",
    },
    {
      q: "¿Cómo definen el costo y el plazo?",
      a: "Dependen del número de procesos o sistemas, la complejidad de las integraciones y el acompañamiento requerido. Presentamos una propuesta con alcance y entregables después de revisar el proyecto.",
    },
    {
      q: "¿Qué información no debo enviar por el formulario?",
      a: "Evita contraseñas e información confidencial. Describe el reto de forma general; los detalles los vemos en la conversación.",
    },
  ] as Faq[],
};

export const notFound = {
  h1: "Página no encontrada",
  text: "La página que buscas no está disponible. Puedes volver al inicio, explorar nuestros servicios o contactarnos.",
  ctas: [
    { label: "Volver al inicio", href: "/" },
    { label: "Explorar servicios", href: "/gobernanza-y-consultoria/" },
    { label: "Contactarnos", href: "/contacto/" },
  ],
};
