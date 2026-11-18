"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { AuthHeading, FormNotice } from "./auth-fields";
import styles from "../auth.module.css";

const codeSchema = z.object({
  code: z.string().regex(/^\d{6}$/, "Enter the 6-digit verification code."),
});

export function VerifyEmailForm() {
  const [message, setMessage] = useState("");
  const [remaining, setRemaining] = useState(59);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof codeSchema>>({
    resolver: zodResolver(codeSchema),
    defaultValues: { code: "" },
  });
  const code = useWatch({ control, name: "code" });

  useEffect(() => {
    const timer = window.setInterval(
      () => setRemaining((seconds) => Math.max(0, seconds - 1)),
      1000,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <form
      className={styles.form}
      noValidate
      onSubmit={handleSubmit(() =>
        setMessage(
          "Email verification is not available yet. Please try again later.",
        ),
      )}
    >
      <AuthHeading title="Verify Email">
        Enter OTP to verify your email address
      </AuthHeading>
      <div className={styles.otp}>
        <div className={styles.otpControl}>
          <label className={styles.srOnly} htmlFor="code">
            Verification code
          </label>
          <input
            id="code"
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            className={styles.otpInput}
            aria-invalid={Boolean(errors.code)}
            aria-describedby={errors.code ? "code-error" : undefined}
            {...register("code")}
          />
          <div className={styles.otpSlots} aria-hidden="true">
            {Array.from({ length: 6 }, (_, index) => (
              <span key={index} data-filled={Boolean(code[index])}>
                {code[index] ?? ""}
              </span>
            ))}
          </div>
        </div>
        {errors.code && (
          <p id="code-error" className={styles.fieldError}>
            {errors.code.message}
          </p>
        )}
        <div className={styles.otpMeta}>
          <span className={styles.timer}>
            <Image src="/images/auth/clock.svg" width={24} height={24} alt="" />
            <span aria-label={`${remaining} seconds until you can resend`}>
              00:{String(remaining).padStart(2, "0")}
            </span>
          </span>
          <span>
            Didn’t get a code?{" "}
            <button
              type="button"
              className={styles.resend}
              disabled={remaining > 0}
              onClick={() =>
                setMessage(
                  "Sending a new code is not available yet. Please try again later.",
                )
              }
            >
              Resend
            </button>
          </span>
        </div>
      </div>
      <FormNotice message={message} />
      <Button type="submit" className={styles.submit}>
        Verify
      </Button>
    </form>
  );
}
