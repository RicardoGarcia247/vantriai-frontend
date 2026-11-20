import { CtaLink } from "@/components/site/cta-link";
import { Photo } from "@/components/site/photo";
import { Section } from "@/components/site/section";
import type { Cta } from "@/content/types";
import type { PhotoId } from "@/lib/photos";

/** Conexión entre los dos focos (Gobernanza y Consultoría ↔ Tecnología): texto y una fotografía. */
export function Bridge({
  title,
  text,
  cta,
  asLink,
  photo,
  no,
  ground = "surface",
}: {
  title: string;
  text: string;
  cta: Cta;
  asLink?: boolean;
  photo: PhotoId;
  no?: number;
  ground?: "base" | "surface" | "inverse";
}) {
  return (
    <Section ground={ground} labelledBy="bridge-title">
      <div className="split fill">
        <div className="split__a stack">
          <div className="section-head">
            {no !== undefined && (
              <p className="sec-no">
                <b>{String(no).padStart(2, "0")}</b>
              </p>
            )}
            <h2 id="bridge-title">{title}</h2>
            <p>{text}</p>
          </div>
          <div className="btn-row">
            <CtaLink href={cta.href} variant={asLink ? "link" : "primary"}>
              {cta.label}
            </CtaLink>
          </div>
        </div>
        <figure
          className="split__b photo-frame split__photo develop"
          data-moment="picture-develops"
          data-moment-opts='{"look":"film"}'
        >
          <Photo id={photo} />
        </figure>
      </div>
    </Section>
  );
}
