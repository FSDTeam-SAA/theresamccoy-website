import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuthHeading } from "@/features/auth/components/auth-fields";
import styles from "@/features/auth/auth.module.css";

export const metadata: Metadata = {
  title: "Password Changed | The Bookkeepers Marketplace",
};

export default function PasswordChangedPage() {
  return (
    <div className={styles.success}>
      <AuthHeading title="Password Changed Successfully">
        Your password has been updated successfully
      </AuthHeading>
      <Button asChild className={styles.submit}>
        <Link href="/login">Back to Login</Link>
      </Button>
    </div>
  );
}
