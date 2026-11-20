export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={["logo-mark", className].filter(Boolean).join(" ")}>
      <rect width="64" height="64" rx="16" fill="var(--brand-500)" />
      <path d="M16 18l16 28 16-28" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="18" r="4.5" fill="#fff" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" aria-label="VantriAI, ir al inicio" className={["nav__logo", className].filter(Boolean).join(" ")}>
      <LogoMark />
      <span className="logo-word">
        Vantri<span className="logo-ai">AI</span>
      </span>
    </a>
  );
}
