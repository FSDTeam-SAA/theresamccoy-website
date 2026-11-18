import type { Metadata } from "next";
import { ResetPasswordForm } from "@/features/auth/components/recovery-forms";

export const metadata: Metadata = {
  title: "Change Password | The Bookkeepers Marketplace",
};

export default function ResetPasswordPage() {
  return <ResetPasswordForm />;
}
