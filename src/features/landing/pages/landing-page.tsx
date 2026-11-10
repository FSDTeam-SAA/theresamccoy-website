import { Hero } from "../components/hero";
import { Marketplace } from "../components/marketplace";
import { Evidence } from "../components/evidence";
import { Testimonials } from "../components/testimonials";
import { Certification, Training } from "../components/training";
import { LandingFaq } from "../components/landing-faq";
import { LandingFooter } from "../components/landing-footer";
import styles from "../landing.module.css";

export function LandingPage() {
  return (
    <div className={styles.landing}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to content
      </a>
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Marketplace />
        <Evidence />
        <Testimonials />
        <Training />
        <Certification />
        <LandingFaq />
      </main>
      <LandingFooter />
    </div>
  );
}
