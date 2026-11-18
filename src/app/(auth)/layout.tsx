import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { AuthShell } from "@/features/auth/components/auth-shell";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={syne.variable}>
      <AuthShell>{children}</AuthShell>
    </div>
  );
}
