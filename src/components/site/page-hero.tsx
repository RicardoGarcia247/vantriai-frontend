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
  eyebrow,
  size = "default",
}: {
  h1: string;
  intro?: string[];
  primary?: Cta;
  secondary?: Cta;
  breadcrumbs?: Crumb[];
  art?: React.ReactNode;
  eyebrow?: string;
  size?: "default" | "large";
}) {
  return (
    <section className="relative isolate overflow-hidden border-b">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -z-10 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-300/30 blur-3xl dark:bg-brand-600/20"
      />
      <Container className="py-12 sm:py-16 lg:py-20">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div
          className={cn(
            "grid items-center gap-12",
            art && "lg:grid-cols-[1.15fr_0.85fr] lg:gap-10",
          )}
        >
          <div className="animate-fade-up">
            {eyebrow && (
              <p className="mb-4 text-xs font-semibold tracking-widest text-primary uppercase">
                {eyebrow}
              </p>
            )}
            <h1
              className={cn(
                "font-semibold tracking-tight text-balance",
                size === "large"
                  ? "text-4xl leading-[1.1] sm:text-5xl lg:text-[3.4rem]"
                  : "text-3xl leading-tight sm:text-4xl lg:text-5xl",
              )}
            >
              {h1}
            </h1>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground">
              {intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {(primary || secondary) && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
            <div
              aria-hidden="true"
              className="animate-fade-up mx-auto w-full max-w-md [animation-delay:150ms] lg:max-w-none"
            >
              {art}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
