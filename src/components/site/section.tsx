type Ground = "base" | "surface" | "inverse";

/** Una sección = una o dos pantallas (--h), con un solo .wrap y su h2 primero. */
export function Section({
  id,
  h = 1,
  hm,
  ground = "base",
  className,
  children,
  labelledBy,
  moment,
}: {
  id?: string;
  h?: 1 | 2;
  hm?: 1 | 2 | 3;
  ground?: Ground;
  className?: string;
  children: React.ReactNode;
  labelledBy?: string;
  moment?: string;
}) {
  const style = { "--h": h, ...(hm ? { "--hm": hm } : {}) } as React.CSSProperties;
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={["section", ground !== "base" && `ground-${ground}`, className].filter(Boolean).join(" ")}
      style={style}
      data-moment={moment}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}

/** Encabezado de sección: número de plano, rótulo opcional, h2 y entrada. */
export function SectionHeading({
  id,
  no,
  eyebrow,
  title,
  lead,
  className,
}: {
  id?: string;
  no?: number;
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={["section-head", className].filter(Boolean).join(" ")}>
      {no !== undefined && (
        <p className="sec-no" aria-hidden="true">
          <b>{String(no).padStart(2, "0")}</b>
        </p>
      )}
      {eyebrow && <p className="sec-label">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {lead && <p>{lead}</p>}
    </div>
  );
}
