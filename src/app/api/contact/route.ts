import { validateContact, type ContactInput } from "@/lib/contact-schema";
import { site } from "@/lib/site";

/**
 * Envío real del formulario de contacto.
 *
 * Proveedores soportados (por orden de prioridad):
 *  1. Resend (API de correo)  -> RESEND_API_KEY + CONTACT_TO_EMAIL + CONTACT_FROM_EMAIL
 *  2. Webhook genérico (Formspree, Make, n8n, Zapier, etc.) -> CONTACT_WEBHOOK_URL
 *
 * Si no hay ninguno configurado responde 503 y el formulario muestra el mensaje de
 * error: nunca se simula un envío exitoso. Ver README.md.
 */

// Limitador en memoria (por instancia). Para producción multi-instancia, usar un
// almacén compartido (p. ej. Upstash Redis) o el rate limiting del proveedor/CDN.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function json(body: Record<string, unknown>, status: number) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

async function sendWithResend(data: ContactInput) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !to || !from) return null;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      reply_to: data.email,
      subject: `Nueva consulta web: ${data.company} (${data.interest})`,
      text: [
        `Nombre: ${data.name}`,
        `Correo: ${data.email}`,
        `Empresa: ${data.company}`,
        `Interés: ${data.interest}`,
        "",
        data.message,
      ].join("\n"),
      html: `<h2>Nueva consulta desde ${escapeHtml(site.name)}</h2>
<p><strong>Nombre:</strong> ${escapeHtml(data.name)}<br>
<strong>Correo:</strong> ${escapeHtml(data.email)}<br>
<strong>Empresa:</strong> ${escapeHtml(data.company)}<br>
<strong>Interés:</strong> ${escapeHtml(data.interest)}</p>
<p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`,
    }),
  });
  return res.ok;
}

async function sendWithWebhook(data: ContactInput) {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return null;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ ...data, source: site.url, receivedAt: new Date().toISOString() }),
  });
  return res.ok;
}

export async function POST(request: Request) {
  // Solo aceptamos envíos desde el propio sitio.
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return json({ ok: false, error: "forbidden" }, 403);
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) return json({ ok: false, error: "rate_limited" }, 429);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  // Campo trampa (honeypot): los bots lo rellenan, las personas no lo ven.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return json({ ok: true }, 200);
  }

  const { values, errors } = validateContact(body);
  if (Object.keys(errors).length > 0) {
    return json({ ok: false, error: "validation", fields: errors }, 422);
  }

  try {
    const result = (await sendWithResend(values)) ?? (await sendWithWebhook(values));
    if (result === null) {
      console.error(
        "[contact] Sin proveedor configurado. Define RESEND_API_KEY/CONTACT_TO_EMAIL/CONTACT_FROM_EMAIL o CONTACT_WEBHOOK_URL.",
      );
      return json({ ok: false, error: "not_configured" }, 503);
    }
    if (!result) return json({ ok: false, error: "provider_error" }, 502);
    return json({ ok: true }, 200);
  } catch (error) {
    console.error("[contact] Error al enviar", error);
    return json({ ok: false, error: "provider_error" }, 502);
  }
}
