import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  /** primary: acción principal · secondary: acción secundaria · link: enlace interno entre servicios */
  variant?: "primary" | "secondary" | "link";
  arrow?: boolean;
  className?: string;
  external?: boolean;
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  arrow,
  className,
  external,
}: Props) {
  const showArrow = arrow ?? variant !== "secondary";
  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="transition-transform group-hover/cta:translate-x-0.5" />
      )}
    </>
  );

  const classes =
    variant === "link"
      ? cn(
          "group/cta inline-flex items-center gap-1.5 rounded-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 [&_svg]:size-4",
          className,
        )
      : cn(
          buttonVariants({ variant: variant === "primary" ? "default" : "outline" }),
          "group/cta h-11 gap-2 rounded-xl px-5 text-sm",
          variant === "primary" &&
            "shadow-sm shadow-primary/25 hover:bg-brand-600 active:bg-brand-700",
          className,
        );

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
