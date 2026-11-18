"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { AuthField, AuthHeading, FormErrors, FormNotice } from "./auth-fields";
import styles from "../auth.module.css";

const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address.").max(254),
  password: z.string().min(1, "Enter your password.").max(1024),
  remember: z.boolean(),
});
const rememberedEmailKey = "bookkeepers-remembered-email";

export function LoginForm({ callbackUrl }: { callbackUrl?: string }) {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, submitCount },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    shouldFocusError: false,
    defaultValues: { email: "", password: "", remember: false },
  });

  useEffect(() => {
    try {
      const email = localStorage.getItem(rememberedEmailKey);
      if (email) {
        setValue("email", email);
        setValue("remember", true);
      }
    } catch {
      /* Login remains available when browser storage is blocked. */
    }
  }, [setValue]);

  async function submit(values: z.infer<typeof loginSchema>) {
    setMessage("");
    try {
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (!result?.ok || result.error) {
        setMessage(
          "Unable to log in. Check your email and password and try again.",
        );
        return;
      }
      try {
        if (values.remember)
          localStorage.setItem(rememberedEmailKey, values.email);
        else localStorage.removeItem(rememberedEmailKey);
      } catch {
        /* Storage preferences must not block a successful login. */
      }

      let destination = "/";
      if (callbackUrl) {
        try {
          const url = new URL(callbackUrl, window.location.origin);
          if (
            url.origin === window.location.origin &&
            !url.pathname.startsWith("//") &&
            !url.username &&
            !url.password
          )
            destination = `${url.pathname}${url.search}${url.hash}`;
        } catch {
          /* Ignore malformed callback URLs. */
        }
      }
      router.replace(destination);
      router.refresh();
    } catch {
      setMessage("Unable to connect. Please try again.");
    }
  }

  return (
    <>
      <FormErrors errors={errors} submitCount={submitCount} />
      <form
        className={`${styles.form} ${styles.loginForm}`}
        noValidate
        onSubmit={handleSubmit(submit)}
        aria-busy={isSubmitting}
      >
        <AuthHeading title="Welcome Back">
          Access your account to manage applications, training, and professional
          opportunities.
        </AuthHeading>
        <div className={styles.loginFields}>
          <div className={styles.fields}>
            <AuthField
              id="email"
              label="Email Address"
              type="email"
              autoComplete="email"
              placeholder="hello@example.com"
              error={errors.email?.message}
              {...register("email")}
            />
            <AuthField
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              placeholder="********"
              error={errors.password?.message}
              {...register("password")}
            />
          </div>
          <div className={styles.loginOptions}>
            <label className={styles.remember}>
              <input type="checkbox" {...register("remember")} />
              Remember me
              <span className={styles.srOnly}>
                {" "}
                — remember my email on this device
              </span>
            </label>
            <Link href="/forgot-password" className={styles.textLink}>
              Forgot Password?
            </Link>
          </div>
        </div>
        <FormNotice message={message} />
        <Button type="submit" className={styles.submit} disabled={isSubmitting}>
          {isSubmitting ? "Logging in…" : "Log In"}
        </Button>
        <p className={styles.footer}>
          Don’t have an account? <Link href="/signup">Sign Up</Link>
        </p>
      </form>
    </>
  );
}
