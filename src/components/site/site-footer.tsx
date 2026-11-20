import { Arrow } from "@/components/site/cta-link";
import { Logo } from "@/components/site/logo";
import type { Cta } from "@/content/types";
import { photoCredits } from "@/lib/credits";
import { footerNav, paths, site, whatsappUrl } from "@/lib/site";

export type Close = { title: string; text: string; cta: Cta };


/**
 * El cierre y el pie en una sola sección (footer.closing): fila 1 el cierre tipográfico (close-type) con la
 * acción de la página; fila 2 el contacto puesto en grande, los enlaces y la línea legal. Fondo de tinta.
 */
export function SiteFooter({ close }: { close?: Close }) {
  return (
    <footer className="footer closing ground-inverse" aria-labelledby={close ? "close-h" : undefined}>
      <div className="wrap">
        {close ? (
          <div className="closing__cta close--type">
            <div className="section-head">
              <h2 id="close-h">{close.title}</h2>
              <p>{close.text}</p>
            </div>
            <a className="btn btn--primary btn--xl btn--wide" href={close.cta.href}>
              {close.cta.label}
              <Arrow />
            </a>
          </div>
        ) : (
          <h2 className="sr-only">VantriAI · Consultoría y tecnología</h2>
        )}
        <div className="closing__links">
          <div className="grid">
            <div className="span-5 stack">
              <Logo />
              <p className="footer__lede">VantriAI · Consultoría y tecnología</p>
              <address className="footer__contact" style={{ fontStyle: "normal" }}>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <a href={site.phoneHref}>{site.phone}</a>
              </address>
            </div>
            <nav className="span-4 start-7 footer__col" aria-label="Pie de página">
              <h3>VantriAI</h3>
              <ul>
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="span-2 start-11 footer__col">
              <h3>Tecnología</h3>
              <ul>
                <li>
                  <a href={paths.automation}>Automatización de procesos</a>
                </li>
                <li>
                  <a href={paths.software}>Desarrollo de software a medida</a>
                </li>
                <li>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>© 2026 VantriAI. Todos los derechos reservados.</span>
            <details className="credits">
              <summary>Fotografías de arquitectura vía Wikimedia Commons</summary>
              <p>
                {photoCredits.map((c, i) => (
                  <span key={c.page}>
                    {c.by} ({c.licence}){i < photoCredits.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
            </details>
          </div>
        </div>
      </div>
    </footer>
  );
}
