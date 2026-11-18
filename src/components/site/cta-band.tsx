import { Container } from "@/components/site/section";
import { CtaLink } from "@/components/site/cta-link";
import type { Cta } from "@/content/types";

/** Bloque de llamada a la acción: título, texto y un botón principal. */
export function CtaBand({
  title,
  text,
  cta,
  id,
}: {
  title: string;
  text: string;
  cta: Cta;
  id?: string;
}) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl bg-brand-700 px-6 py-14 text-center text-white sm:px-14 sm:py-16 dark:bg-brand-800">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 size-full opacity-20"
          >
            <defs>
              <pattern id="cta-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-dots)" />
          </svg>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{text}</p>
          <div className="mt-8 flex justify-center">
            <CtaLink
              href={cta.href}
              className="bg-white text-brand-800 shadow-none hover:bg-brand-100 active:bg-brand-200 focus-visible:ring-white/60"
            >
              {cta.label}
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
