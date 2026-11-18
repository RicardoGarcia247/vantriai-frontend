"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { CtaLink } from "@/components/site/cta-link";
import { Logo } from "@/components/site/logo";
import { headerCta, mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href);
}

const linkBase =
  "rounded-full px-4 py-2 text-sm font-bold text-ink-2 outline-none transition-colors duration-(--dur-micro) hover:bg-paper-3 hover:text-ink focus-visible:outline-2 focus-visible:outline-focus";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Cierra el menú móvil al navegar.
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setOpen(false);
  }

  // Cierra con Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-(--z-sticky-nav) border-b border-rule bg-paper">
      <div className="container flex h-[4.5rem] items-center justify-between gap-(--space-lg)">
        <Logo />

        <nav aria-label="Principal" className="hidden items-center gap-(--space-3xs) lg:flex">
          {mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(linkBase, active && "bg-accent-soft text-accent-deep")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-(--space-xs)">
          <CtaLink href={headerCta.href} className="hidden h-11 px-5 text-sm sm:inline-flex">
            {headerCta.label}
          </CtaLink>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-rule text-ink outline-none transition-colors duration-(--dur-micro) hover:bg-paper-3 focus-visible:outline-2 focus-visible:outline-focus lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="menu-movil" hidden={!open} className="border-t border-rule bg-paper lg:hidden">
        <nav aria-label="Principal móvil" className="container py-(--space-md)">
          <ul className="flex flex-col">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-rule last:border-0">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block py-(--space-md) text-lg font-bold outline-none focus-visible:outline-2 focus-visible:outline-focus",
                      active && "text-accent-deep",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <CtaLink href={headerCta.href} className="mt-(--space-md) w-full sm:hidden">
            {headerCta.label}
          </CtaLink>
        </nav>
      </div>
    </header>
  );
}
