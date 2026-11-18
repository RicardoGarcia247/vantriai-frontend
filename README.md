# VantriAI · Sitio web corporativo

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · shadcn/ui · Lucide.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # compilación de producción
npm run lint
```

> El proyecto incluye un `.npmrc` que fija el registro público de npm.

## Estructura

| Ruta | Contenido |
| --- | --- |
| `src/content/*.ts` | **Contenido editorial** por página (textos, FAQ, CTA, SEO). Fuente: `docs/contenido-editorial.md`. Se actualiza aquí sin tocar componentes. |
| `src/app/**/page.tsx` | Páginas: `/`, `/gobernanza-y-consultoria/`, `/tecnologia/`, `/tecnologia/automatizacion-de-procesos/`, `/tecnologia/desarrollo-de-software/`, `/nosotros/`, `/sectores/`, `/contacto/`, `/politica-de-privacidad/` y `not-found.tsx` (404). |
| `src/components/site/` | Sistema de diseño del sitio: header, footer, hero, FAQ, CTA, listas, breadcrumbs, formulario. |
| `src/components/diagrams/` | Recursos visuales (flujo de aprobación, complemento de focos, pasos, maquetas). |
| `src/components/ui/` | Componentes shadcn/ui. |
| `src/lib/site.ts` | Datos globales: contacto, navegación, WhatsApp, URL del sitio. |
| `src/lib/seo.tsx` | Metadatos, canonical, Open Graph y JSON-LD (Organization, BreadcrumbList, FAQPage, Service). |
| `src/app/api/contact/route.ts` | Envío real del formulario. |

## Tema

Color primario `#7D39EB` = `hsl(263 82% 57%)`. En `src/app/globals.css` el matiz y la saturación
son variables (`--brand-h`, `--brand-s`) y los tonos `--brand-50 … --brand-900` solo cambian la
luminosidad. Los tokens de shadcn derivan de esos tonos (incluye modo oscuro).

## Configuración pendiente antes de publicar

1. **Formulario de contacto (obligatorio).** Copia `.env.example` a `.env.local` y configura **una** opción:
   - **Resend:** `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (el dominio remitente debe estar verificado en Resend).
   - **Webhook** (Formspree, Make, n8n, Zapier…): `CONTACT_WEBHOOK_URL`; recibe un POST JSON con `name, email, company, interest, message, source, receivedAt`.

   Sin proveedor, la API responde 503 y el formulario muestra el mensaje de error: nunca simula un éxito.
   Incluye validación en cliente y servidor, honeypot anti-spam, comprobación de origen y limitador de
   frecuencia en memoria (para varias instancias, usa un almacén compartido o el límite de tu CDN).
2. **`NEXT_PUBLIC_SITE_URL`**: dominio público (canonical, sitemap, Open Graph). Se asumió `https://vantriai.com`.
3. **Política de privacidad:** solo existe la estructura. Falta el texto legal oficial; la página está en `noindex` y fuera del sitemap hasta entonces.
4. **Decisiones editoriales abiertas** (ver "Nota editorial" en `docs/contenido-editorial.md`): validar palabras clave sin «en Ecuador», confirmar cómo comunicar la experiencia sectorial del equipo y la URL real de la política.
5. **Imágenes:** el sitio usa ilustraciones SVG/CSS propias (sin fotos de stock). Si se agregan fotografías, usar `next/image` con texto alternativo descriptivo.
