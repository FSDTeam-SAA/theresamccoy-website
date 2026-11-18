"use client";

import { useEffect, useRef, useState, type ComponentProps } from "react";
import Image from "next/image";
import { EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import styles from "../auth.module.css";

type AuthFieldProps = ComponentProps<typeof Input> & {
  label: string;
  error?: string;
};

export function AuthField({
  label,
  error,
  type,
  id,
  ...props
}: AuthFieldProps) {
  const [visible, setVisible] = useState(false);
  const password = type === "password";
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.inputWrap}>
        <Input
          {...props}
          id={id}
          type={password && visible ? "text" : type}
          className={`${styles.input} ${password ? styles.passwordInput : ""}`}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        {password && (
          <button
            type="button"
            className={styles.reveal}
            aria-label={`${visible ? "Hide" : "Show"} ${label.toLowerCase()}`}
            aria-pressed={visible}
            onClick={() => setVisible(!visible)}
          >
            {visible ? (
              <EyeOff size={24} aria-hidden="true" />
            ) : (
              <Image src="/images/auth/eye.svg" width={24} height={24} alt="" />
            )}
          </button>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} className={styles.fieldError}>
          {error}
        </p>
      )}
    </div>
  );
}

export function AuthHeading({
  title,
  children,
  signup = false,
}: {
  title: string;
  children: React.ReactNode;
  signup?: boolean;
}) {
  return (
    <div className={`${styles.heading} ${signup ? styles.signupHeading : ""}`}>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}

export function FormNotice({ message }: { message: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (message) ref.current?.focus();
  }, [message]);
  return message ? (
    <p ref={ref} className={styles.notice} role="alert" tabIndex={-1}>
      {message}
    </p>
  ) : null;
}

export function FormErrors({
  errors,
  submitCount,
}: {
  errors: Record<string, { message?: unknown } | undefined>;
  submitCount: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const focusedSubmission = useRef(0);
  const entries = Object.entries(errors).filter(
    ([, error]) => typeof error?.message === "string",
  );
  const multiple = entries.length > 1;
  const firstField = entries[0]?.[0];
  useEffect(() => {
    if (!submitCount || focusedSubmission.current === submitCount) return;
    focusedSubmission.current = submitCount;
    if (multiple) ref.current?.focus();
    else if (firstField) document.getElementById(firstField)?.focus();
  }, [submitCount, multiple, firstField]);
  if (!multiple) return null;
  return (
    <div
      ref={ref}
      className={`${styles.notice} ${styles.errorSummary}`}
      role="alert"
      tabIndex={-1}
    >
      Please check the following fields:
      <ul>
        {entries.map(([name, error]) => (
          <li key={name}>
            <a href={`#${name}`}>{String(error?.message)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
