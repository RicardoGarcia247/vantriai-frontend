import { Photo } from "@/components/site/photo";
import { Section } from "@/components/site/section";
import type { Faq as FaqItem } from "@/content/types";
import type { PhotoId } from "@/lib/photos";
import { JsonLd, faqLd } from "@/lib/seo";

/** Preguntas frecuentes desplegables (<details>, accesibles por teclado sin JS). */
export function Faq({
  items,
  no,
  ground = "base",
  h = 1,
  hm,
  photo,
}: {
  photo?: PhotoId;
  items: FaqItem[];
  no?: number;
  ground?: "base" | "surface" | "inverse";
  h?: 1 | 2;
  hm?: 1 | 2 | 3;
  tone?: string;
}) {
  return (
    <Section id="preguntas-frecuentes" ground={ground} h={h} hm={hm} labelledBy="faq-title">
      <JsonLd data={faqLd(items)} />
      <div className="split">
        <div className="split__a section-head">
          {no !== undefined && (
            <p className="sec-no">
              <b>{String(no).padStart(2, "0")}</b>
            </p>
          )}
          <h2 id="faq-title">Preguntas frecuentes</h2>
          {photo && (
            <div className="photo-frame split__photo" style={{ marginTop: "var(--s-5)" }}>
              <Photo id={photo} className="frame__img" decorative />
            </div>
          )}
        </div>
        <div className="split__b faq-list">
          {items.map((item) => (
            <details key={item.q}>
              <summary>
                <h3>{item.q}</h3>
                <span className="faq-plus" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
