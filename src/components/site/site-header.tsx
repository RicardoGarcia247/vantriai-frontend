import { Logo } from "@/components/site/logo";
import { Photo } from "@/components/site/photo";
import { headerCta, mainNav, paths } from "@/lib/site";

const chev = (
  <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Barra fija y opaca (nav-mega). El kit (system.js) abre el panel móvil, cambia aria-expanded,
 * cierra con Escape y al tocar un enlace. La palabra de la página actual se marca en kit-boot.
 */
export function SiteHeader() {
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Logo />
        <nav className="nav__links" id="menu-movil" aria-label="Principal">
          {mainNav.map((item) =>
            item.href === paths.technology ? (
              <div className="nav__item" key={item.href}>
                <a className="nav__link" href={item.href}>
                  {item.label} {chev}
                </a>
                <div className="nav__menu">
                  <div className="wrap grid">
                    <div className="menu-col span-4">
                      <p className="t-label">{item.label}</p>
                      <a href={paths.automation}>Automatización de procesos</a>
                      <a href={paths.software}>Desarrollo de software a medida</a>
                      <a href={paths.technology}>Tecnología</a>
                    </div>
                    <a className="menu-card span-4 start-9" href={`${paths.technology}#que-hacemos`}>
                      <div className="panel">
                        <Photo id="grid" className="frame__img" sizes="400px" decorative />
                      </div>
                      <span className="t-card">Ver qué hacemos</span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="nav__item" key={item.href}>
                <a className="nav__link" href={item.href}>
                  {item.label}
                </a>
              </div>
            ),
          )}
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary" href={headerCta.href}>
            {headerCta.label}
          </a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-controls="menu-movil" aria-label="Abrir menú">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
