"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import styles from "../site-pages.module.css";

export const CONTACT_EMAIL = "bookkeeper11@gmail.com";

const schema = z.object({
  firstName: z.string().trim().min(1, "Enter your first name").max(80),
  lastName: z.string().trim().min(1, "Enter your last name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(254),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^[+\d\s().-]*$/, "Enter a valid phone number"),
  message: z.string().trim().min(1, "Tell us how we can help").max(2000),
});

type ContactValues = z.infer<typeof schema>;

const fields = [
  { name: "firstName", label: "First Name", autoComplete: "given-name" },
  { name: "lastName", label: "Last Name", autoComplete: "family-name" },
  { name: "email", label: "Email", autoComplete: "email", type: "email" },
  { name: "phone", label: "Phone Number", autoComplete: "tel", type: "tel" },
] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // No contact API exists yet, so a valid submission opens the visitor's mail
  // client addressed to the team instead of silently dropping the message.
  const onSubmit = (values: ContactValues) => {
    const body = [
      `Name: ${values.firstName} ${values.lastName}`,
      `Email: ${values.email}`,
      values.phone ? `Phone: ${values.phone}` : "",
      "",
      values.message,
    ]
      .filter((line, index) => line || index === 3)
      .join("\n");
    const subject = `Website enquiry from ${values.firstName} ${values.lastName}`;
    window.location.assign(
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`,
    );
    setSent(true);
  };

  return (
    <form
      className={styles.contactForm}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-labelledby="contact-form-heading"
    >
      <h2 id="contact-form-heading">Your Information</h2>
      <div className={styles.contactFields}>
        {fields.map(({ name, label, ...rest }) => (
          <div key={name} className={styles.contactField}>
            <label htmlFor={`contact-${name}`} className={styles.srOnly}>
              {label}
            </label>
            <Input
              id={`contact-${name}`}
              placeholder={label}
              aria-invalid={Boolean(errors[name])}
              aria-describedby={
                errors[name] ? `contact-${name}-error` : undefined
              }
              className={styles.contactInput}
              {...rest}
              {...register(name)}
            />
            {errors[name] && (
              <p id={`contact-${name}-error`} className={styles.contactError}>
                {errors[name]?.message}
              </p>
            )}
          </div>
        ))}
        <div className={`${styles.contactField} ${styles.contactWide}`}>
          <label htmlFor="contact-message" className={styles.srOnly}>
            Any Message
          </label>
          <Textarea
            id="contact-message"
            placeholder="Any Message"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            className={`${styles.contactInput} ${styles.contactTextarea}`}
            {...register("message")}
          />
          {errors.message && (
            <p id="contact-message-error" className={styles.contactError}>
              {errors.message.message}
            </p>
          )}
        </div>
      </div>
      <button type="submit" className={styles.contactSubmit}>
        Submit
      </button>
      <p className={styles.contactStatus} role="status">
        {sent
          ? "Your email app should open with your message ready to send."
          : ""}
      </p>
    </form>
  );
}
