"use client";

import { useEffect } from "react";

const MODULES = ["/assets/system.js", "/assets/motion/motion.js", "/assets/layout/layout.js"];

/**
 * Carga el kit de diseño (menú, formularios del kit, capa de movimiento, momentos) después de la
 * hidratación de React, para que sus cambios en el DOM no choquen con ella.
 */
export function KitBoot() {
  useEffect(() => {
    // Palabra del menú de la página actual (barra de 2px bajo la palabra).
    const path = window.location.pathname;
    document.querySelectorAll<HTMLAnchorElement>(".nav__links > .nav__item > .nav__link").forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (href !== "/" && path.startsWith(href)) a.setAttribute("aria-current", "page");
    });
    // Etiqueta del botón de menú según su estado (system.js cambia aria-expanded).
    const toggle = document.querySelector<HTMLButtonElement>(".nav__toggle");
    const obs = toggle
      ? new MutationObserver(() =>
          toggle.setAttribute(
            "aria-label",
            toggle.getAttribute("aria-expanded") === "true" ? "Cerrar menú" : "Abrir menú",
          ),
        )
      : null;
    if (toggle) obs!.observe(toggle, { attributes: true, attributeFilter: ["aria-expanded"] });

    for (const src of MODULES) {
      if (document.querySelector(`script[src="${src}"]`)) continue;
      const s = document.createElement("script");
      s.type = "module";
      s.src = src;
      document.body.appendChild(s);
    }
    return () => obs?.disconnect();
  }, []);
  return null;
}
