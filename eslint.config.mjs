import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Los enlaces internos son <a> nativos a propósito: cada navegación carga la página completa para que
    // el kit de diseño (menú, capa de movimiento, momentos) se inicialice sobre el DOM nuevo.
    rules: { "@next/next/no-html-link-for-pages": "off" },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "public/assets/**",
    ".taste-skill/**",
    ".agents/**",
    ".claude/**",
  ]),
]);

export default eslintConfig;
