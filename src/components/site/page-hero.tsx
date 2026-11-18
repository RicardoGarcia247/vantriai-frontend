import { Breadcrumbs, type Crumb } from "@/components/site/breadcrumbs";
import { CtaLink } from "@/components/site/cta-link";
import { Container } from "@/components/site/section";
import type { Cta } from "@/content/types";
import { cn } from "@/lib/utils";

/** Hero de página: H1 único, introducción, hasta dos acciones y arte opcional. */
export function PageHero({
  h1,
  intro = [],
  primary,
  secondary,
  breadcrumbs,
  art,
  size = "default",
}: {
  h1: string;
  intro?: string[];
  primary?: Cta;
  secondary?: Cta;
  breadcrumbs?: Crumb[];
  art?: React.ReactNode;
  size?: "default" | "large";
}) {
  return (
    <section className="border-b border-rule">
      <Container
        className={cn(
          "pt-(--space-xl) pb-(--space-2xl)",
          size === "large" && "min-h-[min(46rem,calc(100dvh-4.5rem))] pt-(--space-xl) pb-(--space-2xl)",
        )}
      >
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div
          className={cn(
            "grid items-center gap-(--space-2xl)",
            art && "lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-(--space-2xl)",
            size === "large" && "min-h-[inherit]",
          )}
        >
          <div className="settle">
            <h1
              className={cn(
                "max-w-[30ch] text-(length:--text-display-s)",
                size === "default" && "text-(length:--text-section)",
              )}
            >
              {h1}
            </h1>
            <div className="lead mt-(--space-lg) max-w-[56ch] space-y-(--space-md) text-muted-foreground">
              {intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {(primary || secondary) && (
              <div className="mt-(--space-xl) flex flex-col gap-(--space-sm) sm:flex-row">
                {primary && <CtaLink href={primary.href}>{primary.label}</CtaLink>}
                {secondary && (
                  <CtaLink
                    href={secondary.href}
                    variant="secondary"
                    external={secondary.href.startsWith("http")}
                  >
                    {secondary.label}
                  </CtaLink>
                )}
              </div>
            )}
          </div>
          {art && (
            <div aria-hidden="true" className="settle settle-2 mx-auto w-full max-w-lg lg:max-w-none">
              {art}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
