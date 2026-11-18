import type { Metadata } from "next";
import { LoginForm } from "@/features/auth/components/login-form";

export const metadata: Metadata = {
  title: "Log In | The Bookkeepers Marketplace",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string | string[] }>;
}) {
  const { callbackUrl } = await searchParams;
  return (
    <LoginForm
      callbackUrl={typeof callbackUrl === "string" ? callbackUrl : undefined}
    />
  );
}
