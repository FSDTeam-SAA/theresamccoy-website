import Image from "next/image";
import Link from "next/link";
import { assets, navigation } from "../constants";
import styles from "../landing.module.css";

const socialIcons = [
  { name: "Facebook", src: assets.facebook },
  { name: "X", src: assets.x },
  { name: "Instagram", src: assets.instagram },
  { name: "LinkedIn", src: assets.linkedin },
  { name: "YouTube", src: assets.youtube },
];

export function LandingFooter({
  logoSrc = assets.logo,
  facebookSrc = assets.facebook,
  compactLogo = false,
}: { logoSrc?: string; facebookSrc?: string; compactLogo?: boolean } = {}) {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <Link
              href="/"
              className={`${styles.logo} ${compactLogo ? styles.footerCompactLogo : ""}`}
              aria-label="The Bookkeepers Marketplace home"
            >
              <Image
                src={logoSrc}
                alt="The Bookkeepers Marketplace"
                width={compactLogo ? 1254 : 2720}
                height={compactLogo ? 1254 : 880}
              />
            </Link>
            <p>
              MyCPA OnCall connects business owners with fully vetted
              bookkeeping professionals
            </p>
            <div className={styles.socials} aria-label="Social media">
              {socialIcons.map((social) => (
                <span key={social.name} className={styles.socialIcon}>
                  <Image
                    src={social.name === "Facebook" ? facebookSrc : social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3>Website</h3>
            <nav aria-label="Footer navigation" className={styles.footerLinks}>
              {[
                navigation[0],
                navigation[1],
                navigation[3],
                navigation[2],
                navigation[4],
                navigation[5],
              ].map(({ label, href }) => (
                <Link key={label} href={href}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3>Support</h3>
            <nav aria-label="Support" className={styles.footerLinks}>
              <Link href="/#apply">Bookkeeper</Link>
              <Link href="/marketplace">Explore</Link>
            </nav>
          </div>
          <div className={styles.footerContact}>
            <h3>Contact</h3>
            <address className={`${styles.contactList} not-italic`}>
              <a href="mailto:nathan.roberts@example.com">
                <Image src={assets.email} alt="" width={24} height={24} />
                <span>nathan.roberts@example.com</span>
              </a>
              <div>
                <Image src={assets.address} alt="" width={24} height={24} />
                <span>
                  2118 Thornridge Cir. Syracuse,
                  <br />
                  Connecticut 35624
                </span>
              </div>
              <a href="tel:+13085550121">
                <Image src={assets.phone} alt="" width={24} height={24} />
                <span>(308) 555-0121</span>
              </a>
            </address>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <Image
            src={assets.divider}
            alt=""
            width={1556}
            height={1}
            className={styles.footerDivider}
          />
          <div className={styles.footerLegal}>
            <p>© 2026&nbsp; All rights reserved.</p>
            <div className={styles.legalLinks}>
              <span>Privacy Policy</span>
              <Image src={assets.dot} alt="" width={4} height={4} />
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
