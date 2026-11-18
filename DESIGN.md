# Design: VantriAI

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: modern-minimal
- Shape of the first page: Ledger (hero, rows and wells on twelve columns, one ink band, one accent close)
- Theme: brand (the project's own violet #7D39EB, kept from `globals.css`; not a catalog theme)
- Axes: violet-paper/grotesk/violet-signal · posture: Restrained, two declared bands (ink method, accent close)

## Tokens
`src/app/tokens.css` is the source of truth. The roles:
```css
:root {
  --color-paper: oklch(97.6% 0.008 293);  --color-paper-2: oklch(95% 0.013 293);  --color-paper-3: oklch(91.5% 0.022 293);
  --color-ink: oklch(20% 0.045 293);  --color-ink-2: oklch(32% 0.04 293);  --color-muted: oklch(45% 0.03 293);  --color-rule: oklch(86% 0.025 293);
  --color-accent: oklch(54% 0.23 293);  --color-accent-ink: oklch(98% 0.01 293);  --color-focus: oklch(56% 0.22 293);
  --font-display: Schibsted Grotesk;  --font-body: Schibsted Grotesk;  --font-outlier: var(--font-body);
  --radius-card: 8px;  --radius-pill: 999px;  --rule-hair: 1px;  --shadow-card: none;
}
```
Also declared: `--color-field` (the ink band) with `-field-ink`, `-field-muted`, `-field-rule`; `--color-accent-soft`, `--color-accent-deep`; `--color-brand-50…900`. shadcn names in `globals.css` point at these tokens. `--color-muted` is Hallmark's text grey, not shadcn's hover surface, so use `bg-paper-3` for hover wells.
The spacing scale, the type scale, the easings and the durations are the scaffold's and live in `tokens.css`.

## Controls
- Primary: accent fill, accent-ink text · pill · 48px (44px in the nav). One per screen.
- Secondary: 1px ink outline, transparent · pill · 48px. Links between services are accent text with an underline.

## Rules this build holds
- Labels, captions and table heads: body face, sentence case, untracked. No eyebrows.
- Lists are rows parted by hairlines, not cards. Numbers come from a real `<ol>` and a CSS counter.
- No shadows, no blur, no gradients, no infinite loops. Hover is a colour step.
- Diagrams are built from the site's own words (see `src/components/diagrams/`); no invented figures, logos or quotes.

## Motion
- Character: still. One hero entrance (`.settle`, a fade with an 8px rise); under reduced motion everything ends at once.

## Exports
`src/app/tokens.css` in this project. Tailwind 4 reads it directly through `@theme static`.
