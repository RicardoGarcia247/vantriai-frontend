import { photoProps, type PhotoId } from "@/lib/photos";

/** Fotografía de arquitectura en blanco y negro (img nativo: la capa de movimiento del kit actúa sobre él). */
export function Photo({
  id,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  eager,
  decorative,
  style,
}: {
  id: PhotoId;
  className?: string;
  sizes?: string;
  eager?: boolean;
  decorative?: boolean;
  style?: React.CSSProperties;
}) {
  const p = photoProps(id);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={p.src}
      srcSet={p.srcSet}
      sizes={sizes}
      width={p.width}
      height={p.height}
      alt={decorative ? "" : p.alt}
      aria-hidden={decorative || undefined}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      className={["bw", className].filter(Boolean).join(" ")}
      data-source="stand-in"
      data-subject="arquitectura"
      style={style}
    />
  );
}
