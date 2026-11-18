"use client";

import { useId, useRef, useState } from "react";

import { contact } from "@/content/contact";
import {
  validateContact,
  type ContactErrors,
  type ContactInput,
} from "@/lib/contact-schema";
import { paths } from "@/lib/site";

const { form: copy } = contact;
type Status = "idle" | "sending" | "success" | "error";
const empty: ContactInput = { name: "", email: "", company: "", interest: "", message: "" };

export function ContactForm() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const id = (k: string) => `${uid}-${k}`;

  function update<K extends keyof ContactInput>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validateField(key: keyof ContactInput) {
    const { errors: found } = validateContact(values);
    setErrors((e) => ({ ...e, [key]: found[key] }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const { errors: found } = validateContact(values);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as (keyof ContactInput)[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const honeypot =
        (formRef.current?.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "";
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 422 && data.fields) {
        setErrors(data.fields);
        setStatus("idle");
        return;
      }
      if (!res.ok || !data.ok) throw new Error("send_failed");
      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  }

  const fieldError = (k: keyof ContactInput) =>
    errors[k] ? (
      <p id={id(`${k}-error`)} className="field__error">
        {errors[k]}
      </p>
    ) : null;

  const aria = (k: keyof ContactInput) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? id(`${k}-error`) : undefined,
  });

  if (status === "success") {
    return (
      <div role="status" className="card">
        <p className="t-lead">{copy.messages.success}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="stack-4">
      <div className="field">
        <label htmlFor={id("name")}>{copy.fields.name.label}</label>
        <input
          id={id("name")}
          name="name"
          autoComplete="name"
          required
          placeholder={copy.fields.name.placeholder}
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          onBlur={() => validateField("name")}
          {...aria("name")}
        />
        {fieldError("name")}
      </div>
      <div className="field">
        <label htmlFor={id("email")}>{copy.fields.email.label}</label>
        <input
          id={id("email")}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          placeholder={copy.fields.email.placeholder}
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          onBlur={() => validateField("email")}
          {...aria("email")}
        />
        {fieldError("email")}
      </div>
      <div className="field">
        <label htmlFor={id("company")}>{copy.fields.company.label}</label>
        <input
          id={id("company")}
          name="company"
          autoComplete="organization"
          required
          placeholder={copy.fields.company.placeholder}
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
          onBlur={() => validateField("company")}
          {...aria("company")}
        />
        {fieldError("company")}
      </div>
      <div className="field">
        <label htmlFor={id("interest")}>{copy.fields.interest.label}</label>
        <select
          id={id("interest")}
          name="interest"
          required
          value={values.interest}
          onChange={(e) => update("interest", e.target.value)}
          onBlur={() => validateField("interest")}
          {...aria("interest")}
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          {copy.interestOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        {fieldError("interest")}
      </div>
      <div className="field">
        <label htmlFor={id("message")}>{copy.fields.message.label}</label>
        <textarea
          id={id("message")}
          name="message"
          required
          rows={5}
          placeholder={copy.fields.message.placeholder}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => validateField("message")}
          {...aria("message")}
        />
        {fieldError("message")}
        <p className="t-small muted">{copy.help}</p>
      </div>

      {/* Honeypot anti-spam: oculto para personas y lectores de pantalla. */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: -9999, width: 0, height: 0, overflow: "hidden" }}
      >
        <label>
          No completar
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className="form__status" role="status" aria-live="polite">
        {status === "sending" ? copy.messages.sending : status === "error" ? copy.messages.error : ""}
      </p>

      <div className="btn-row">
        <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
          {copy.submit}
        </button>
      </div>
      <p className="t-small muted">
        {copy.privacyLead}{" "}
        <a className="link" href={paths.privacy}>
          {copy.privacyLink}
        </a>
      </p>
    </form>
  );
}
