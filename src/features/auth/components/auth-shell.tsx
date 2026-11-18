"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../auth.module.css";

export function AuthShell({ children }: { children: React.ReactNode }) {
  const signup = usePathname() === "/signup";

  return (
    <div className={styles.shell}>
      <aside
        className={`${styles.artwork} ${signup ? styles.signupArtwork : ""}`}
      >
        <div className={styles.artworkMedia}>
          <Image
            src={`/images/auth/workspace-${signup ? "signup" : "login"}.png`}
            alt=""
            fill
            priority
            sizes="(max-width: 799px) 1px, 54vw"
            className={styles.artworkImage}
          />
        </div>
        <nav className={styles.navigation} aria-label="Account navigation">
          <Link href="/login" aria-current={!signup ? "page" : undefined}>
            LOGIN
          </Link>
          <Link href="/signup" aria-current={signup ? "page" : undefined}>
            SIGN IN
          </Link>
        </nav>
      </aside>
      <main className={styles.content}>
        <Link href="/" className={styles.home}>
          Back to Home
        </Link>
        <div className={styles.card}>{children}</div>
      </main>
    </div>
  );
}
