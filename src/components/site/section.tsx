import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("container", className)} {...props} />;
}

/** Sección de página: el exterior pone el fondo y el espacio; el interior, el ancho. */
export function Section({
  id,
  tone = "default",
  className,
  children,
  labelledBy,
}: {
  id?: string;
  /** muted: cambio de papel · brand: banda de tinta */
  tone?: "default" | "muted" | "brand";
  className?: string;
  children: React.ReactNode;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "py-(--section-gap-s)",
        tone === "muted" && "bg-paper-2",
        tone === "brand" && "field",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

/** Cabecera de sección: titular de sección y, si hace falta, una línea de apoyo. */
export function SectionHeading({
  id,
  title,
  lead,
  align = "left",
  className,
}: {
  id?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-(--space-2xl) max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h2 id={id}>{title}</h2>
      {lead && <p className="lead mt-(--space-md) text-muted-foreground">{lead}</p>}
    </div>
  );
}
