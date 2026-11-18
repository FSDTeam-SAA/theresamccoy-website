import type { Metadata } from "next";
import { ForgotPasswordForm } from "@/features/auth/components/recovery-forms";

export const metadata: Metadata = {
  title: "Forgot Password | The Bookkeepers Marketplace",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
