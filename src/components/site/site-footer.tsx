import { Mail, Phone } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/site/section";
import { Logo } from "@/components/site/logo";
import { footerNav, site } from "@/lib/site";

const linkClass =
  "rounded-sm text-sm text-muted-foreground underline-offset-4 outline-none transition-colors hover:text-primary hover:underline focus-visible:ring-3 focus-visible:ring-ring/50";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/50">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm font-medium">VantriAI · Consultoría y tecnología</p>
          </div>

          <nav aria-label="Pie de página">
            <ul className="grid gap-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="grid content-start gap-2.5 not-italic">
            <a href={`mailto:${site.email}`} className={`${linkClass} inline-flex items-center gap-2`}>
              <Mail className="size-4" aria-hidden="true" />
              {site.email}
            </a>
            <a href={site.phoneHref} className={`${linkClass} inline-flex items-center gap-2`}>
              <Phone className="size-4" aria-hidden="true" />
              {site.phone}
            </a>
          </address>
        </div>

        <p className="mt-10 border-t pt-6 text-sm text-muted-foreground">
          © 2026 VantriAI. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
