import Image from "next/image";
import { assets } from "../constants";
import styles from "../landing.module.css";

export function Evidence() {
  return (
    <section
      className={`${styles.content} ${styles.evidence}`}
      aria-labelledby="evidence-heading"
    >
      <h2 id="evidence-heading" className={styles.evidenceHeading}>
        Trusted By <em>Thousands of People</em>
      </h2>
      <p className={styles.evidenceDescription}>
        Thousands of people trust our verified professional service,
        high-quality home services.
      </p>
      <div className={styles.evidenceGrid}>
        <div className={styles.evidenceLeft}>
          <div className={`${styles.statCard} ${styles.statWide}`}>
            <div>
              <div>
                <strong>12,000+</strong>
                <p>Businesses matched</p>
              </div>
              <p>Through our intake process</p>
            </div>
            <div className={styles.matchedPhoto}>
              <Image
                src={assets.matched}
                alt="A professional working in an office"
                width={889}
                height={594}
                sizes="(max-width: 767px) 45vw, 24vw"
              />
            </div>
          </div>
          <div className={styles.statPhoto}>
            <Image
              src={assets.professional}
              alt="A business professional in a suit"
              fill
              sizes="(max-width: 767px) 45vw, 20vw"
            />
          </div>
          <div className={styles.statCard}>
            <div>
              <strong>4,800+</strong>
              <p>Verified professionals</p>
            </div>
            <p>Assessed, trained &amp; approved</p>
          </div>
        </div>
        <div className={styles.evidenceRight}>
          <div className={styles.statCard}>
            <div>
              <strong>98.4%</strong>
              <p>Client satisfaction</p>
            </div>
            <p>Verified post-engagement</p>
          </div>
          <div className={styles.statPhoto}>
            <Image
              src={assets.satisfaction}
              alt="Colleagues celebrating a successful meeting"
              fill
              sizes="(max-width: 767px) 45vw, 20vw"
            />
          </div>
          <div
            className={`${styles.statCard} ${styles.statWide} ${styles.statMatch}`}
          >
            <div>
              <div>
                <strong>48hrs</strong>
                <p>Average match time</p>
              </div>
              <p>From intake to first interview</p>
            </div>
            <Image
              src={assets.clocks}
              alt="A collection of clocks"
              width={383}
              height={202}
              sizes="(max-width: 767px) 45vw, 20vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
