import { Breadcrumbs, type Crumb } from "@/components/site/breadcrumbs";
import { Arrow } from "@/components/site/cta-link";
import { Photo } from "@/components/site/photo";
import type { Cta } from "@/content/types";
import type { PhotoId } from "@/lib/photos";

/**
 * Héroe dealt "photo": fotografía de arquitectura a sangre, y las palabras sobre un bloque sólido
 * de papel en las seis columnas de la izquierda. Una sola h1, hasta dos acciones.
 */
export function PageHero({
  h1,
  intro = [],
  primary,
  secondary,
  breadcrumbs,
  photo,
  pos = "50% 50%",
  short,
  legend,
}: {
  /** Leyenda de plano sobre la foto (etiquetas de la ilustración original), solo escritorio. */
  legend?: string[];
  h1: string;
  intro?: string[];
  primary?: Cta;
  secondary?: Cta;
  breadcrumbs?: Crumb[];
  photo: PhotoId;
  pos?: string;
  short?: boolean;
}) {
  return (
    <section
      className={["hero", "hero--photo", short && "hero--short"].filter(Boolean).join(" ")}
      data-enter=""
      data-calm="left"
      aria-labelledby="hero-h"
    >
      <Photo
        id={photo}
        className="hero__bg"
        sizes="100vw"
        eager
        decorative
        style={{ "--ly-pos": pos, "--ly-pos-phone": pos } as React.CSSProperties}
      />
      {legend && (
        <ol className="hero-legend" aria-hidden="true">
          {legend.map((l, i) => (
            <li key={l}>
              <b>{String.fromCharCode(65 + i)}</b>
              {l}
            </li>
          ))}
        </ol>
      )}
      <div className="wrap">
        <div className="hero-text">
          <div className="hero__text">
            {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
            <h1 id="hero-h">{h1}</h1>
            {intro.map((p) => (
              <p key={p} className="hero__lead">
                {p}
              </p>
            ))}
            {(primary || secondary) && (
              <div className="btn-row">
                {primary && (
                  <a className="btn btn--primary" href={primary.href}>
                    {primary.label}
                    <Arrow />
                  </a>
                )}
                {secondary && (
                  <a
                    className="btn btn--secondary"
                    href={secondary.href}
                    {...(secondary.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {secondary.label}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
