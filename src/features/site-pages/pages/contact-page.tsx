import Image from "next/image";
import { LandingHeader } from "@/features/landing/components/landing-header";
import { LandingFaq } from "@/features/landing/components/landing-faq";
import { Certification } from "@/features/landing/components/training";
import { pageAssets } from "../assets";
import { CONTACT_EMAIL, ContactForm } from "../components/contact-form";
import { SiteShell } from "../components/site-shell";
import styles from "../site-pages.module.css";

const socials = [
  ["Instagram", pageAssets.contactInstagram],
  ["Facebook", pageAssets.contactFacebook],
  ["LinkedIn", pageAssets.contactLinkedin],
] as const;

export function ContactPage() {
  return (
    <SiteShell active="Contact" header={false}>
      <section className={styles.contactHero}>
        <Image
          src={pageAssets.contactHero}
          alt=""
          fill
          sizes="100vw"
          priority
          className={styles.cover}
        />
        <div className={styles.contactShade} />
        <LandingHeader active="Contact" />
        <div className={styles.contactHeroBody}>
          <div className={styles.contactInfo}>
            <div className={styles.contactIntro}>
              <h1>
                You Have Questions
                <br />
                <em>We Have Answers</em>
                <Image
                  src={pageAssets.trainingHeroLine}
                  alt=""
                  width={666}
                  height={14}
                  className={styles.contactHeroLine}
                />
              </h1>
              <p>
                Discover experiences you dont find anywhere else
                <br />
                thoughtfully designed to help you
              </p>
            </div>
            <div className={styles.contactDetails}>
              <div>
                <h2>Location</h2>
                <address>
                  Ocean Breeze Resort
                  <br />
                  245 Sunset Avenue
                  <br />
                  Phuket 83100
                  <br />
                  Thailand
                </address>
              </div>
              <div>
                <h2>Social Media</h2>
                <ul>
                  {socials.map(([name, src]) => (
                    <li key={name}>
                      <span className={styles.contactSocialIcon}>
                        <Image src={src} alt="" width={12} height={12} />
                      </span>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Email</h2>
                <p>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </p>
              </div>
              <div>
                <h2>Contact</h2>
                <p>
                  <a href="tel:+3665229612">+3665229612</a>
                </p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <LandingFaq />
      <Certification />
    </SiteShell>
  );
}
