import Link from "next/link";

import { Logo } from "@/components/site/logo";
import { footerNav, site } from "@/lib/site";

const linkClass =
  "rounded-sm underline-offset-4 outline-none transition-colors duration-(--dur-micro) hover:text-accent-deep hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-paper-2 py-(--space-3xl)">
      <div className="container">
        <Logo size="lg" />
        <p className="mt-(--space-md) text-muted-foreground">VantriAI · Consultoría y tecnología</p>

        <div className="mt-(--space-2xl) grid gap-(--space-xl) border-t border-rule pt-(--space-xl) md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <nav aria-label="Pie de página">
            <ul className="grid gap-x-(--gap-columns) gap-y-(--space-sm) sm:grid-cols-2 lg:grid-cols-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="grid content-start gap-(--space-sm) not-italic">
            <a href={`mailto:${site.email}`} className={linkClass}>
              {site.email}
            </a>
            <a href={site.phoneHref} className={linkClass}>
              {site.phone}
            </a>
          </address>
        </div>

        <p className="mt-(--space-2xl) text-sm text-muted-foreground">
          © 2026 VantriAI. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
