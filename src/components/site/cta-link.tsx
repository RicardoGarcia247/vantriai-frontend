type Props = {
  href: string;
  children: React.ReactNode;
  /** primary: acción principal · secondary: acción secundaria · link: enlace interno entre servicios */
  variant?: "primary" | "secondary" | "link";
  arrow?: boolean;
  className?: string;
  external?: boolean;
};

export function Arrow() {
  return (
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

/**
 * Enlace con aspecto de botón o de enlace de texto. Se usa <a> nativo (carga completa de página)
 * para que el kit de diseño (movimiento, momentos, menú) se inicialice en cada página.
 */
export function CtaLink({ href, children, variant = "primary", arrow, className, external }: Props) {
  const showArrow = arrow ?? variant !== "secondary";
  const base =
    variant === "link" ? "link link--arrow" : variant === "primary" ? "btn btn--primary" : "btn btn--secondary";
  const ext = external ?? href.startsWith("http");
  return (
    <a
      href={href}
      className={[base, className].filter(Boolean).join(" ")}
      {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {showArrow && <Arrow />}
    </a>
  );
}
