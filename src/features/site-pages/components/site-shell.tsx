import type { ReactNode } from "react";
import { LandingHeader } from "@/features/landing/components/landing-header";
import { LandingFooter } from "@/features/landing/components/landing-footer";
import landing from "@/features/landing/landing.module.css";
import styles from "../site-pages.module.css";
import { pageAssets } from "../assets";

export function SiteShell({
  active,
  children,
  header = true,
}: {
  active: "About" | "Marketplace" | "Training";
  children: ReactNode;
  header?: boolean;
}) {
  return (
    <div className={landing.landing}>
      <a href="#main-content" className={landing.skipLink}>
        Skip to content
      </a>
      {header && (
        <div className={styles.plainHeader}>
          <LandingHeader active={active} light />
        </div>
      )}
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <LandingFooter
        {...(active === "Marketplace" && !header
          ? {
              logoSrc: pageAssets.marketFooterLogo,
              facebookSrc: pageAssets.marketFacebook,
              compactLogo: true,
            }
          : {})}
      />
    </div>
  );
}
