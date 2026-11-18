"use client";

import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import Link from "next/link";
import { useId, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contact } from "@/content/contact";
import {
  validateContact,
  type ContactErrors,
  type ContactInput,
} from "@/lib/contact-schema";
import { paths } from "@/lib/site";
import { cn } from "@/lib/utils";

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
      <p id={id(`${k}-error`)} className="mt-1.5 flex items-center gap-1.5 text-sm text-destructive">
        <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
        {errors[k]}
      </p>
    ) : null;

  const aria = (k: keyof ContactInput) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? id(`${k}-error`) : undefined,
  });

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-primary/30 bg-brand-50 p-8 text-center dark:bg-brand-900/20"
      >
        <CheckCircle2 className="mx-auto mb-4 size-10 text-primary" aria-hidden="true" />
        <p className="text-lg font-medium">{copy.messages.success}</p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="space-y-5 rounded-2xl border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor={id("name")} className="mb-2">
            {copy.fields.name.label}
          </Label>
          <Input
            id={id("name")}
            name="name"
            autoComplete="name"
            required
            placeholder={copy.fields.name.placeholder}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            onBlur={() => validateField("name")}
            className="h-11"
            {...aria("name")}
          />
          {fieldError("name")}
        </div>
        <div>
          <Label htmlFor={id("email")} className="mb-2">
            {copy.fields.email.label}
          </Label>
          <Input
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
            className="h-11"
            {...aria("email")}
          />
          {fieldError("email")}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor={id("company")} className="mb-2">
            {copy.fields.company.label}
          </Label>
          <Input
            id={id("company")}
            name="company"
            autoComplete="organization"
            required
            placeholder={copy.fields.company.placeholder}
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            onBlur={() => validateField("company")}
            className="h-11"
            {...aria("company")}
          />
          {fieldError("company")}
        </div>
        <div>
          <Label htmlFor={id("interest")} className="mb-2">
            {copy.fields.interest.label}
          </Label>
          <select
            id={id("interest")}
            name="interest"
            required
            value={values.interest}
            onChange={(e) => update("interest", e.target.value)}
            onBlur={() => validateField("interest")}
            className={cn(
              "h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-base outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30",
              !values.interest && "text-muted-foreground",
            )}
            {...aria("interest")}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {copy.interestOptions.map((o) => (
              <option key={o} value={o} className="text-foreground">
                {o}
              </option>
            ))}
          </select>
          {fieldError("interest")}
        </div>
      </div>

      <div>
        <Label htmlFor={id("message")} className="mb-2">
          {copy.fields.message.label}
        </Label>
        <Textarea
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
        <p className="mt-2 text-sm text-muted-foreground">{copy.help}</p>
      </div>

      {/* Honeypot anti-spam: oculto para personas y lectores de pantalla. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          No completar
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div aria-live="polite" className="min-h-6">
        {status === "sending" && (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            {copy.messages.sending}
          </p>
        )}
        {status === "error" && (
          <p
            role="alert"
            className="flex items-start gap-2 rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive"
          >
            <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            {copy.messages.error}
          </p>
        )}
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          disabled={status === "sending"}
          className="h-11 gap-2 rounded-xl px-6 text-sm shadow-sm shadow-primary/25 hover:bg-brand-600"
        >
          {status === "sending" ? (
            <Loader2 className="animate-spin" aria-hidden="true" />
          ) : (
            <Send aria-hidden="true" />
          )}
          {copy.submit}
        </Button>
        <p className="text-sm text-muted-foreground">
          {copy.privacyLead}{" "}
          <Link
            href={paths.privacy}
            className="text-primary underline underline-offset-4 hover:text-brand-700"
          >
            {copy.privacyLink}
          </Link>
        </p>
      </div>
    </form>
  );
}
