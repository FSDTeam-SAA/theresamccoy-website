"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { AuthField, AuthHeading, FormErrors, FormNotice } from "./auth-fields";
import styles from "../auth.module.css";

const signupSchema = z
  .object({
    accountType: z.enum(["bookkeeper", "business"]),
    firstName: z.string().trim().min(1, "Enter your first name."),
    lastName: z.string().trim().min(1, "Enter your last name."),
    companyName: z.string().trim(),
    email: z.string().trim().email("Enter a valid email address.").max(254),
    password: z.string().min(1, "Enter a password.").max(1024),
  })
  .superRefine((values, context) => {
    if (values.accountType === "business" && !values.companyName)
      context.addIssue({
        code: "custom",
        path: ["companyName"],
        message: "Enter your company name.",
      });
  });

export function SignupForm() {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    control,
    setValue,
    clearErrors,
    formState: { errors, submitCount },
  } = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    shouldFocusError: false,
    defaultValues: {
      accountType: "bookkeeper",
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      password: "",
    },
  });
  const accountType = useWatch({ control, name: "accountType" });
  const business = accountType === "business";

  return (
    <>
      <FormErrors errors={errors} submitCount={submitCount} />
      <form
        className={styles.form}
        noValidate
        onSubmit={handleSubmit(() =>
          setMessage(
            "Account registration is not available yet. Please try again later.",
          ),
        )}
      >
        <div className={styles.signupHeader}>
          <div
            className={`${styles.accountTypes} ${business ? styles.businessTypes : ""}`}
            role="group"
            aria-label="Account type"
          >
            {(["bookkeeper", "business"] as const).map((type) => (
              <button
                key={type}
                type="button"
                aria-pressed={accountType === type}
                onClick={() => {
                  setValue("accountType", type);
                  clearErrors("companyName");
                  setMessage("");
                }}
              >
                I am a {type === "business" ? "Business" : "Bookkeeper"}
              </button>
            ))}
          </div>
          <AuthHeading title="Create your account" signup>
            Create your account to apply, access training, and connect with
            professional opportunities.
          </AuthHeading>
        </div>
        <div className={styles.fields}>
          <div className={styles.nameFields}>
            <AuthField
              id="firstName"
              label="First Name"
              autoComplete="given-name"
              placeholder="Sarah"
              error={errors.firstName?.message}
              {...register("firstName")}
            />
            <AuthField
              id="lastName"
              label="Last Name"
              autoComplete="family-name"
              placeholder="Johnson"
              error={errors.lastName?.message}
              {...register("lastName")}
            />
          </div>
          {business && (
            <AuthField
              id="companyName"
              label="Company Name"
              autoComplete="organization"
              placeholder="Acme Corp"
              error={errors.companyName?.message}
              {...register("companyName")}
            />
          )}
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
            autoComplete="new-password"
            placeholder="********"
            error={errors.password?.message}
            {...register("password")}
          />
        </div>
        <FormNotice message={message} />
        <Button
          type="submit"
          className={`${styles.submit} ${business ? styles.businessSubmit : ""}`}
        >
          Sign Up
        </Button>
        <p className={styles.footer}>
          Already have an account? <Link href="/login">Log In</Link>
        </p>
      </form>
    </>
  );
}
