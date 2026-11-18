/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
/**
 * Capa de marcado del kit de design-taste-frontend (public/assets).
 * Cada página es una recarga completa (<a>, nunca <Link>) para que system.js y motion.js
 * vuelvan a montar la barra, el hero y los momentos.
 */
import type { CSSProperties, ReactNode } from "react";

import type { Cta } from "@/content/types";
import { footerNav, headerCta, mainNav, site } from "@/lib/site";

/* ---------------------------------------------------------------- fotografías */

type Photo = { id: string; w: number; h: number; sizes: number[]; alt: string; subject: string };

/** Fotografías de reemplazo (búsqueda en Wikimedia Commons). Cada una se sustituye por una propia. */
export const photos = {
  canvas: {
    id: "f70241531", w: 1280, h: 853, sizes: [500, 960, 1280],
    alt: "Taller de planificación: un lienzo de modelo de negocio con notas adhesivas sobre la mesa",
    subject: "taller de consultoría",
  },
  laptop: {
    id: "f61684334", w: 1280, h: 927, sizes: [500, 960, 1280],
    alt: "Manos escribiendo en una laptop con código en pantalla",
    subject: "desarrollo de software",
  },
  dc: {
    id: "f69501205", w: 1280, h: 853, sizes: [500, 960, 1280],
    alt: "Dos técnicos revisan el cableado de un centro de datos",
    subject: "sistemas e integraciones",
  },
  office: {
    id: "f8575733", w: 960, h: 640, sizes: [500, 960],
    alt: "Oficina abierta con un equipo trabajando y conversando",
    subject: "equipo en la oficina",
  },
  hub: {
    id: "f93116599", w: 960, h: 640, sizes: [500, 960],
    alt: "Oficina de trabajo compartido con zonas de reunión y escritorios",
    subject: "espacio de trabajo",
  },
  bay: {
    id: "f77859475", w: 1280, h: 853, sizes: [500, 960, 1280],
    alt: "Sala de trabajo con puestos y monitores en fila",
    subject: "operación",
  },
  nolich: {
    id: "f84610204", w: 960, h: 640, sizes: [500, 960],
    alt: "Oficina de trabajo con puestos, monitores y un equipo trabajando",
    subject: "oficina",
  },
  team: {
    id: "f86419362", w: 960, h: 640, sizes: [500, 960],
    alt: "Personas trabajando con laptops en una sala de trabajo compartido",
    subject: "equipo trabajando",
  },
  work: {
    id: "f63785226", w: 1280, h: 853, sizes: [500, 960, 1280],
    alt: "Equipo trabajando con laptops en una oficina luminosa",
    subject: "equipo trabajando",
  },
  room: {
    id: "f111283129", w: 1280, h: 960, sizes: [500, 960, 1280],
    alt: "Sala de reuniones con mesas de madera y sillas",
    subject: "sala de trabajo",
  },
  desk: {
    id: "f95249144", w: 1280, h: 962, sizes: [500, 960, 1280],
    alt: "Oficina con escritorios, archivadores y una ventana",
    subject: "oficina",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

export function Pic({
  k,
  eager,
  pos,
  sizes = "(max-width: 639px) 200vw, 1400px",
  className = "frame__img",
}: {
  k: PhotoKey;
  eager?: boolean;
  pos?: string;
  sizes?: string;
  className?: string;
}) {
  const p: Photo = photos[k];
  const file = (s: number) =>
    `/assets/img/photo-${p.id}${s === p.sizes[p.sizes.length - 1] && p.sizes.length === 3 ? "" : `-${s}`}.jpg`;
  const top = p.sizes[p.sizes.length - 1];
  const style = pos ? ({ "--ly-pos": pos } as CSSProperties) : undefined;
  return (
    <img
      className={className}
      src={file(top)}
      srcSet={p.sizes.map((s) => `${file(s)} ${s === 960 && p.sizes.length === 2 ? 960 : s}w`).join(", ")}
      sizes={sizes}
      width={p.w}
      height={p.h}
      alt={p.alt}
      style={style}
      {...(eager ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
      decoding="async"
      data-source="stand-in"
      data-subject={p.subject}
    />
  );
}

/* ---------------------------------------------------------------- piezas pequeñas */

export function Arrow() {
  return (
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

export function Btn({
  cta,
  variant = "primary",
  arrow,
  external,
}: {
  cta: Cta;
  variant?: "primary" | "secondary";
  arrow?: boolean;
  external?: boolean;
}) {
  return (
    <a
      className={`btn btn--${variant}`}
      href={cta.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {cta.label}
      {arrow && <Arrow />}
    </a>
  );
}

export function TextLink({ cta }: { cta: Cta }) {
  return (
    <a className="link" href={cta.href}>
      {cta.label}
    </a>
  );
}

/* ---------------------------------------------------------------- barra */

const markPath = "M4 7h16M4 12h16M4 17h16";

export function Brand({ footer }: { footer?: boolean }) {
  return (
    <a className="nav__logo" href="/" aria-label="VantriAI, ir al inicio">
      <span className="mark" data-mark="stack" aria-hidden="true" />
      {footer ? <span className="footer__mark">VantriAI</span> : "VantriAI"}
    </a>
  );
}

/** nav-centre: el logo en la línea izquierda, las palabras al centro, la acción en la derecha. */
export function Nav() {
  return (
    <header className="nav nav--centre">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">
          Saltar al contenido
        </a>
        <Brand />
        <nav className="nav__links" aria-label="Principal">
          {mainNav.map((item) => (
            <div className="nav__item" key={item.href}>
              <a className="nav__link" href={item.href}>
                {item.label}
              </a>
            </div>
          ))}
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary" href={headerCta.href}>
            {headerCta.label}
          </a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menú">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}

/* ---------------------------------------------------------------- hero (split) */

export function Hero({
  h1,
  lead,
  primary,
  secondary,
  img,
  pos,
}: {
  h1: string;
  lead: string;
  primary?: Cta;
  secondary?: Cta;
  img: PhotoKey;
  pos?: string;
}) {
  return (
    <section className="hero hero--split" data-enter aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text grid hero__grid">
          <div className="hero__text span-5">
            <h1 id="hero-h">{h1}</h1>
            <p className="hero__lead">{lead}</p>
            <div className="btn-row">
              {primary && <Btn cta={primary} arrow />}
              {secondary && <Btn cta={secondary} variant="secondary" external={secondary.href.startsWith("http")} />}
            </div>
          </div>
          <div className="hero__media span-6 start-7">
            <Pic k={img} eager pos={pos} sizes="(max-width: 639px) 100vw, 1400px" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- secciones */

export function Sec({
  id,
  labelId,
  title,
  lead,
  h = 1,
  hm,
  ground,
  children,
  statement,
}: {
  id?: string;
  labelId: string;
  title?: string;
  lead?: string;
  h?: 1 | 2;
  hm?: 2;
  ground?: "surface" | "inverse";
  children?: ReactNode;
  statement?: boolean;
}) {
  const cls = ["section", ground && `ground-${ground}`, statement && "statement"].filter(Boolean).join(" ");
  return (
    <section
      className={cls}
      id={id}
      aria-labelledby={labelId}
      style={h === 2 || hm ? ({ ...(h === 2 ? { "--h": 2 } : {}), ...(hm ? { "--hm": 2 } : {}) } as CSSProperties) : undefined}
    >
      <div className="wrap">
        {title && (
          <div className="section-head">
            <h2 id={labelId}>{title}</h2>
            {lead && <p>{lead}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/** Lista de filas con su filete; cada fila es un texto (y, si hay, una línea de apoyo). */
export function Rows({ items, className = "" }: { items: (string | { name: string; text?: string })[]; className?: string }) {
  return (
    <ul className={`rows ${className}`.trim()}>
      {items.map((it) => {
        const row = typeof it === "string" ? { name: it } : it;
        return (
          <li key={row.name}>
            <span className="rows__name">{row.name}</span>
            {row.text && <p>{row.text}</p>}
          </li>
        );
      })}
    </ul>
  );
}

/** Una fotografía a la derecha de la sección, en la línea de división. */
export function SplitPic({ k, pos, fill }: { k: PhotoKey; pos?: string; fill?: boolean }) {
  return (
    <div
      className={`frame frame--photo ${fill ? "frame--fill " : ""}span-6 start-7`}
      style={fill ? undefined : ({ aspectRatio: "3 / 2" } as CSSProperties)}
    >
      <Pic k={k} pos={pos} />
    </div>
  );
}

export function Card({
  title,
  children,
  img,
  span = 6,
}: {
  title: string;
  children: ReactNode;
  img?: PhotoKey;
  span?: 4 | 6 | 12;
}) {
  return (
    <article className={`card card--row card--open span-${span}`}>
      <h3>{title}</h3>
      {children}
      {img && (
        <div className="panel">
          <Pic k={img} />
        </div>
      )}
    </article>
  );
}

/** Una banda de fotografía a todo el ancho y, debajo, el texto en ocho columnas. */
export function Strip({ k, pos, aside, children }: { k: PhotoKey; pos?: string; aside?: ReactNode; children: ReactNode }) {
  return (
    <div className="stack-4">
      <div className="frame frame--photo strip" style={{ aspectRatio: "21 / 3" } as CSSProperties}>
        <Pic k={k} pos={pos} />
      </div>
      <div className="grid grid--top">
        <div className={`${aside ? "span-6" : "span-12"} stack-4`}>{children}</div>
        {aside && <div className="span-6 start-7 stack-4">{aside}</div>}
      </div>
    </div>
  );
}

/** El texto a la izquierda y la fotografía en un panel a la derecha. */
export function PanelSplit({ k, pos, children }: { k: PhotoKey; pos?: string; children: ReactNode }) {
  return (
    <div className="grid grid--top">
      <div className="span-6 stack-4">{children}</div>
      <div className="panel span-6 start-7" style={{ ["--p-h" as string]: "500px" }}>
        <Pic k={k} pos={pos} />
      </div>
    </div>
  );
}

/** Un texto a la izquierda y una fotografía a la derecha, a la altura del texto. */
export function Split({ k, pos, children }: { k: PhotoKey; pos?: string; children: ReactNode }) {
  return (
    <div className="grid grid--top fill">
      <div className="span-6 stack-4">{children}</div>
      <SplitPic k={k} pos={pos} fill />
    </div>
  );
}

/** Preguntas frecuentes: todas abiertas, sin acordeón. */
function FaqHalf({ items, id, title, labelId, img }: { items: { q: string; a: string }[]; id: string; title: string; labelId: string; img: PhotoKey }) {
  return (
    <Sec id={id} labelId={labelId} title={title}>
      <div className="grid grid--top fill">
        <div className="faq span-6">
          {items.map((f) => (
            <div className="faq__item" key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
        <div className="frame frame--photo faq__photo span-6 start-7" style={{ aspectRatio: "3 / 2" } as CSSProperties}>
          <Pic k={img} />
        </div>
      </div>
    </Sec>
  );
}

/** Preguntas frecuentes: todas abiertas, sin acordeón, en dos secciones de una pantalla. */
export function FaqList({ items, id = "preguntas-frecuentes", img = "work", img2 = "team" }: { items: { q: string; a: string }[]; id?: string; img?: PhotoKey; img2?: PhotoKey }) {
  const mid = Math.ceil(items.length / 2);
  return (
    <>
      <FaqHalf items={items.slice(0, mid)} id={id} labelId="faq-title" title="Preguntas frecuentes" img={img} />
      {items.length > mid && (
        <FaqHalf items={items.slice(mid)} id={id + "-2"} labelId="faq2-title" title="Más preguntas frecuentes" img={img2} />
      )}
    </>
  );
}

/* ---------------------------------------------------------------- cierre y pie */

export function Closing({ title, text, cta, img }: { title: string; text: string; cta: Cta; img: PhotoKey }) {
  const groups = [
    { h: "Servicios", links: [mainNav[0], mainNav[1]] },
    { h: "Empresa", links: [mainNav[2], mainNav[3]] },
    { h: "Contacto", links: [mainNav[4]] },
    { h: "Legal", links: [footerNav[5]] },
  ];
  return (
    <footer className="footer closing footer--dark ground-inverse" id="contacto" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--photo">
          <div className="section-head--split">
            <div>
              <h2 id="close-h">{title}</h2>
              <p className="t-lead">{text}</p>
            </div>
            <Btn cta={cta} arrow />
          </div>
          <div className="close__media">
            <Pic k={img} sizes="1400px" className="" />
          </div>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <Brand footer />
              <p className="footer__lede">Consultoría y tecnología</p>
            </div>
            {groups.map((g) => (
              <div className="span-2 footer__col" key={g.h}>
                <h3>{g.h}</h3>
                <ul>
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                  {g.h === "Contacto" && (
                    <>
                      <li>
                        <a href={`mailto:${site.email}`}>{site.email}</a>
                      </li>
                      <li>
                        <a href={site.phoneHref}>{site.phone}</a>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer__legal">
            <span>© 2026 VantriAI. Todos los derechos reservados.</span>
            <a className="credits" href="/creditos/">
              Fotografías vía Wikimedia Commons
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { markPath };
