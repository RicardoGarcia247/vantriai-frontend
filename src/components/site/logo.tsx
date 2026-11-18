import Link from "next/link";

import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={cn("size-8 shrink-0", className)}
    >
      <rect width="64" height="64" rx="16" fill="var(--brand-500)" />
      <path
        d="M16 18l16 28 16-28"
        fill="none"
        stroke="#fff"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="18" r="4.5" fill="#fff" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="VantriAI, ir al inicio"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className,
      )}
    >
      <LogoMark />
      <span className="text-lg font-semibold tracking-tight">
        Vantri<span className="text-primary">AI</span>
      </span>
    </Link>
  );
}
