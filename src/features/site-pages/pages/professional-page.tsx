import Image from "next/image";
import Link from "next/link";
import { Certification } from "@/features/landing/components/training";
import { LandingFaq } from "@/features/landing/components/landing-faq";
import { pageAssets } from "../assets";
import { professional } from "../professionals";
import { SiteShell } from "../components/site-shell";
import styles from "../site-pages.module.css";

export function ProfessionalPage() {
  return (
    <SiteShell active="Marketplace">
      <div className={`${styles.container} ${styles.profile}`}>
        <section className={`${styles.profilePanel} ${styles.profileHeader}`}>
          <div className={styles.profileIdentity}>
            <div className={styles.profilePhoto}>
              <Image
                src={professional.image}
                alt="Sarah Chen"
                fill
                sizes="(max-width: 767px) 35vw, 200px"
                priority
              />
            </div>
            <div>
              <h1>{professional.name}</h1>
              <p>{professional.title}</p>
              <p className={styles.cardMeta}>
                <Image
                  src={pageAssets.location}
                  alt=""
                  width={16}
                  height={16}
                />
                {professional.location}
                <Image src={pageAssets.dot} alt="" width={16} height={16} />
                {professional.languages}
                <Image src={pageAssets.dot} alt="" width={16} height={16} />
                {professional.years}yr exp
              </p>
              <p className={styles.available}>Available Now</p>
            </div>
          </div>
          <div className={styles.profileMetrics}>
            {[
              [professional.score, "ASSESSMENT SCORE"],
              [professional.rating, "CURRENT RATING"],
              [professional.projects, "PROJECTS DONE"],
              [`$${professional.rate}/hr`, "Rate"],
            ].map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>
        <div className={styles.profileSkillsRow}>
          <section className={styles.profilePanel}>
            <h2>SKILLS &amp; APPRECIATION</h2>
            <ul className={styles.profileTags}>
              {professional.skills.map((skill, index) => (
                <li key={`${skill}-${index}`}>{skill}</li>
              ))}
            </ul>
          </section>
          <aside className={styles.hire}>
            <h2>Hire Sarah</h2>
            <p>
              Sign in as a business owner to send
              <br /> an interview request.
            </p>
            <Link href="/api/auth/signin" prefetch={false}>
              Sign in to Hire&nbsp; →
            </Link>
          </aside>
        </div>
        <section className={styles.profilePanel}>
          <h2>CERTIFICATIONS</h2>
          <ul className={styles.certList}>
            {professional.certifications.map((cert) => (
              <li key={cert.name}>
                <Image
                  src={pageAssets.verified}
                  alt=""
                  width={24}
                  height={24}
                />
                <div>
                  <strong>{cert.name}</strong>
                  <p>{cert.issuer}</p>
                </div>
                <span>{cert.year}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.profilePanel}>
          <h2>PORTFOLIO</h2>
          <ul className={styles.portfolioList}>
            {professional.portfolio.map((item) => (
              <li key={item.title}>
                <Image
                  src={pageAssets.document}
                  alt=""
                  width={20}
                  height={20}
                />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
                <span>E-COMMERCE &amp; RETAIL</span>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.reviewGrid} aria-label="Reviews">
          {Array.from({ length: 6 }, (_, i) => (
            <article className={styles.review} key={i}>
              <div>
                <strong>4.9</strong>
                <Image
                  src={pageAssets.profileStars}
                  alt=""
                  width={96}
                  height={16}
                />
                <time dateTime="2025-03">March 2025</time>
              </div>
              <p>
                “Sarah reconciled our Shopify and Amazon accounts seamlessly.
                Our BAS has never been cleaner. We renewed for a third
                consecutive year.”
              </p>
              <span>Founders, Halcyon Home</span>
            </article>
          ))}
        </section>
      </div>
      <Certification />
      <LandingFaq />
    </SiteShell>
  );
}
