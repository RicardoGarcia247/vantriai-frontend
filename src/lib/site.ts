export const site = {
  name: "VantriAI",
  tagline: "Consultoría y tecnología",
  // Dominio público del sitio. Configúralo con NEXT_PUBLIC_SITE_URL.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vantriai.com").replace(
    /\/$/,
    "",
  ),
  email: "info@vantriai.com",
  phone: "+593 98 788 2435",
  phoneHref: "tel:+593987882435",
  whatsappNumber: "593987882435",
  whatsappMessage:
    "Hola, equipo de VantriAI. Quisiera conversar sobre un proyecto para mi empresa.",
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const paths = {
  home: "/",
  governance: "/gobernanza-y-consultoria/",
  technology: "/tecnologia/",
  automation: "/tecnologia/automatizacion-de-procesos/",
  software: "/tecnologia/desarrollo-de-software/",
  about: "/nosotros/",
  sectors: "/sectores/",
  contact: "/contacto/",
  privacy: "/politica-de-privacidad/",
} as const;

export const mainNav = [
  { label: "Gobernanza y Consultoría", href: paths.governance },
  { label: "Tecnología", href: paths.technology },
  { label: "Nosotros", href: paths.about },
  { label: "Sectores", href: paths.sectors },
  { label: "Contacto", href: paths.contact },
] as const;

export const footerNav = [...mainNav, { label: "Política de privacidad", href: paths.privacy }] as const;

export const headerCta = { label: "Solicitar una reunión", href: paths.contact };
