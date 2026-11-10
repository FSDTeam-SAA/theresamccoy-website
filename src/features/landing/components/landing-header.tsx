"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assets, navigation } from "../constants";
import styles from "../landing.module.css";

export function LandingHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggle = useRef<HTMLButtonElement>(null);

  return (
    <header className={styles.header}>
      <a
        href="#home"
        className={styles.logo}
        aria-label="The Bookkeepers Marketplace home"
      >
        <Image
          src={assets.logo}
          alt="The Bookkeepers Marketplace"
          width={2720}
          height={880}
          priority
        />
      </a>
      <nav aria-label="Main navigation" className={styles.desktopNav}>
        {navigation.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            aria-current={label === "Home" ? "page" : undefined}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className={styles.headerActions}>
        <Link
          className={styles.signIn}
          href="/api/auth/signin"
          prefetch={false}
        >
          Sign In
        </Link>
        <Button asChild className={styles.pill}>
          <a href="#marketplace">Get Started</a>
        </Button>
      </div>
      <Button
        ref={menuToggle}
        variant="ghost"
        size="icon"
        className={styles.menuToggle}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </Button>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={styles.mobileNav}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setMenuOpen(false);
              menuToggle.current?.focus();
            }
          }}
        >
          {navigation.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <Link href="/api/auth/signin" prefetch={false}>
            Sign In
          </Link>
        </nav>
      )}
    </header>
  );
}
