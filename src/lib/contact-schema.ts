import { contact } from "@/content/contact";

export const interestOptions = contact.form.interestOptions;

export type ContactInput = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Validación compartida entre el formulario (cliente) y la API (servidor). */
export function validateContact(input: Partial<Record<keyof ContactInput, unknown>>): {
  values: ContactInput;
  errors: ContactErrors;
} {
  const { required, invalidEmail } = contact.form.messages;
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

  const values: ContactInput = {
    name: str(input.name),
    email: str(input.email),
    company: str(input.company),
    interest: str(input.interest),
    message: str(input.message),
  };

  const errors: ContactErrors = {};
  (Object.keys(values) as (keyof ContactInput)[]).forEach((key) => {
    if (!values[key]) errors[key] = required;
  });
  if (values.email && !EMAIL_RE.test(values.email)) errors.email = invalidEmail;
  if (values.interest && !interestOptions.includes(values.interest)) {
    errors.interest = required;
  }

  // Límites de longitud (defensa básica en servidor).
  if (values.name.length > 120) values.name = values.name.slice(0, 120);
  if (values.company.length > 160) values.company = values.company.slice(0, 160);
  if (values.email.length > 200) errors.email = invalidEmail;
  if (values.message.length > 5000) values.message = values.message.slice(0, 5000);

  return { values, errors };
}
