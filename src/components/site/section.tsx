import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)} {...props} />
  );
}

export function Section({
  id,
  tone = "default",
  className,
  children,
  labelledBy,
}: {
  id?: string;
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
        "py-16 sm:py-24",
        tone === "muted" && "bg-muted/60",
        tone === "brand" && "bg-brand-50 dark:bg-brand-900/20",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl sm:mb-12",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
      >
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{lead}</p>
      )}
    </div>
  );
}
