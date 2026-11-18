import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  /** primary: acción principal · secondary: acción secundaria · link: enlace interno entre servicios */
  variant?: "primary" | "secondary" | "link" | "onField";
  arrow?: boolean;
  className?: string;
  external?: boolean;
};

const base =
  "group/cta inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold outline-none transition-colors duration-(--dur-micro) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus [&_svg]:size-4 [&_svg]:shrink-0";

const button = "h-12 rounded-full px-6 text-base";

const styles = {
  primary: cn(base, button, "bg-accent text-accent-ink hover:bg-accent-deep active:bg-brand-800"),
  secondary: cn(
    base,
    button,
    "border border-ink bg-transparent text-ink hover:bg-paper-3 active:bg-rule",
  ),
  onField: cn(base, button, "bg-field-ink text-field hover:bg-paper-3 active:bg-rule"),
  link: cn(
    base,
    "rounded-sm text-accent underline decoration-1 underline-offset-4 hover:text-accent-deep",
  ),
} as const;

export function CtaLink({
  href,
  children,
  variant = "primary",
  arrow,
  className,
  external,
}: Props) {
  const showArrow = arrow ?? variant === "link";
  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight aria-hidden="true" className="transition-transform duration-(--dur-short) group-hover/cta:translate-x-0.5" />
      )}
    </>
  );
  const classes = cn(styles[variant], className);

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
