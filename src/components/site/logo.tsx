import Link from "next/link";

import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("size-8 shrink-0", className)}>
      <rect width="64" height="64" rx="16" fill="var(--color-accent)" />
      <path
        d="M16 18l16 28 16-28"
        fill="none"
        stroke="var(--color-accent-ink)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="18" r="4.5" fill="var(--color-accent-ink)" />
    </svg>
  );
}

export function Logo({ className, size = "md" }: { className?: string; size?: "md" | "lg" }) {
  return (
    <Link
      href="/"
      aria-label="VantriAI, ir al inicio"
      className={cn(
        "inline-flex items-center gap-(--space-xs) rounded-sm outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
        className,
      )}
    >
      <LogoMark className={size === "lg" ? "size-12" : undefined} />
      <span
        className={cn(
          "font-bold tracking-[-0.03em]",
          size === "lg" ? "text-(length:--text-display-s)" : "text-xl",
        )}
      >
        Vantri<span className="text-accent">AI</span>
      </span>
    </Link>
  );
}
