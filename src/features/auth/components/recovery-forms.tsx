"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { AuthField, AuthHeading, FormErrors, FormNotice } from "./auth-fields";
import styles from "../auth.module.css";

const emailSchema = z.object({
  email: z.string().trim().email("Enter a valid email address.").max(254),
});
const passwordSchema = z
  .object({
    password: z.string().min(1, "Enter a new password.").max(1024),
    confirmPassword: z.string().min(1, "Confirm your new password.").max(1024),
  })
  .refine((values) => values.password === values.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export function ForgotPasswordForm() {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
  });
  return (
    <form
      className={styles.form}
      noValidate
      onSubmit={handleSubmit(() =>
        setMessage(
          "Password recovery is not available yet. Please try again later.",
        ),
      )}
    >
      <AuthHeading title="Forgot Password">
        Enter your email to recover your password
      </AuthHeading>
      <AuthField
        id="email"
        label="Email Address"
        type="email"
        autoComplete="email"
        placeholder="hello@example.com"
        error={errors.email?.message}
        {...register("email")}
      />
      <FormNotice message={message} />
      <Button type="submit" className={styles.submit}>
        Send OTP
      </Button>
    </form>
  );
}

export function ResetPasswordForm() {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    shouldFocusError: false,
  });
  return (
    <>
      <FormErrors errors={errors} submitCount={submitCount} />
      <form
        className={styles.form}
        noValidate
        onSubmit={handleSubmit(() =>
          setMessage(
            "Password changes are not available yet. Please try again later.",
          ),
        )}
      >
        <AuthHeading title="Change Password">
          Enter your email to recover your password
        </AuthHeading>
        <div className={styles.fields}>
          <AuthField
            id="password"
            label="Create New Password"
            type="password"
            autoComplete="new-password"
            placeholder="********"
            error={errors.password?.message}
            {...register("password")}
          />
          <AuthField
            id="confirmPassword"
            label="Confirm New Password"
            type="password"
            autoComplete="new-password"
            placeholder="********"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />
        </div>
        <FormNotice message={message} />
        <Button type="submit" className={styles.submit}>
          Change Password
        </Button>
      </form>
    </>
  );
}
