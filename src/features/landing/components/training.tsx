import Image from "next/image";
import { Button } from "@/components/ui/button";
import { assets, tierFeatures, tiers } from "../constants";
import styles from "../landing.module.css";

export function Training() {
  return (
    <section
      className={styles.training}
      id="training"
      aria-labelledby="training-heading"
    >
      <div className={styles.content}>
        <h2 id="training-heading" className={styles.trainingHeading}>
          Three Tiers.
          <br />
          <em>One Standard of Excellence.</em>
        </h2>
        <div className={styles.tierGrid}>
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`${styles.tier} ${tier.featured ? styles.tierFeatured : ""}`}
            >
              <Image
                src={tier.background}
                alt=""
                width={496}
                height={388}
                className={styles.tierBackground}
              />
              <div className={styles.tierBody}>
                <div className={styles.tierHeader}>
                  <h3>{tier.name}</h3>
                  <span className={styles.duration}>{tier.duration}</span>
                </div>
                <ul className={styles.tierFeatures}>
                  {tierFeatures.map((feature) => (
                    <li key={feature}>
                      <Image
                        src={tier.featured ? assets.checkLight : assets.check}
                        alt=""
                        width={16}
                        height={16}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                src={tier.icon}
                alt=""
                width={48}
                height={48}
                className={styles.tierIcon}
              />
              <Button asChild className={`${styles.pill} ${styles.tierButton}`}>
                <a href="#apply" aria-label={`Learn more about ${tier.name}`}>
                  Learn More
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certification() {
  return (
    <section
      id="apply"
      className={`${styles.content} ${styles.certification}`}
      aria-labelledby="certification-heading"
    >
      <Image
        src={assets.certification}
        alt=""
        width={2000}
        height={1128}
        className={styles.certificationPhoto}
        sizes="90vw"
      />
      <div className={styles.certificationShade} />
      <div className={styles.certificationCopy}>
        <h2 id="certification-heading">Begin your certification journey.</h2>
        <p>
          Apply to the platform, complete the assessment, and your personalised
          training path is assigned automatically.
        </p>
        <div className={styles.certificationButtons}>
          <Button asChild className={styles.pill}>
            <a href="#contact">Apply Now</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className={`${styles.pill} ${styles.pillOutline}`}
          >
            <a href="#contact">Speak to Our Team</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
