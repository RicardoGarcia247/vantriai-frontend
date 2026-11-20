"use client";

import { useId, useRef, useState } from "react";

import { Arrow } from "@/components/site/cta-link";
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
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)
        ?.focus();
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
      <div role="status" className="cform__done">
        <p>{copy.messages.success}</p>
      </div>
    );
  }

  const field = (
    key: "name" | "email" | "company",
    extra: React.InputHTMLAttributes<HTMLInputElement>,
  ) => (
    <div className="field">
      <label htmlFor={id(key)}>{copy.fields[key].label}</label>
      <input
        id={id(key)}
        name={key}
        required
        placeholder={copy.fields[key].placeholder}
        value={values[key]}
        onChange={(e) => update(key, e.target.value)}
        onBlur={() => validateField(key)}
        {...extra}
        {...aria(key)}
      />
      {fieldError(key)}
    </div>
  );

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="cform">
      <div className="cform__row">
        {field("name", { autoComplete: "name" })}
        {field("email", { type: "email", autoComplete: "email", inputMode: "email" })}
      </div>
      <div className="cform__row">
        {field("company", { autoComplete: "organization" })}
        <div className="field">
          <label htmlFor={id("interest")}>{copy.fields.interest.label}</label>
          <select
            id={id("interest")}
            name="interest"
            required
            value={values.interest}
            onChange={(e) => update("interest", e.target.value)}
            onBlur={() => validateField("interest")}
            className={values.interest ? undefined : "is-empty"}
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
      </div>

      <div className="field">
        <label htmlFor={id("message")}>{copy.fields.message.label}</label>
        <textarea
          id={id("message")}
          name="message"
          required
          rows={6}
          placeholder={copy.fields.message.placeholder}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => validateField("message")}
          {...aria("message")}
        />
        {fieldError("message")}
        <p className="field__help">{copy.help}</p>
      </div>

      {/* Honeypot anti-spam: oculto para personas y lectores de pantalla. */}
      <div aria-hidden="true" className="hp">
        <label>
          No completar
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="cform__foot">
        <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
          {copy.submit}
          <Arrow />
        </button>
        <p className="cform__privacy">
          {copy.privacyLead}{" "}
          <a href={paths.privacy}>{copy.privacyLink}</a>
        </p>
      </div>

      <div aria-live="polite" className="cform__status">
        {status === "sending" && <p>{copy.messages.sending}</p>}
        {status === "error" && (
          <p role="alert" className="is-error">
            {copy.messages.error}
          </p>
        )}
      </div>
    </form>
  );
}
