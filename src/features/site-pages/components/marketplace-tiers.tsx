import Image from "next/image";
import Link from "next/link";
import { tierFeatures, tiers } from "@/features/landing/constants";
import { pageAssets } from "../assets";
import styles from "../site-pages.module.css";

export function MarketplaceTiers() {
  return (
    <section
      className={`${styles.container} ${styles.marketTiers}`}
      aria-labelledby="market-tiers-heading"
    >
      <h2 id="market-tiers-heading" className={styles.serifTitle}>
        Three tiers.
        <br />
        One standard of excellence.
      </h2>
      <div className={styles.marketTierGrid}>
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`${styles.marketTier} ${tier.featured ? styles.marketTierFeatured : ""}`}
          >
            <Image
              src={tier.featured ? pageAssets.tierDark : pageAssets.tierLight}
              alt=""
              width={496}
              height={388}
              className={styles.marketTierBackground}
            />
            <div className={styles.marketTierBody}>
              <div>
                <h3>{tier.name}</h3>
                <span>{tier.duration}</span>
              </div>
              <ul>
                {tierFeatures.map((feature) => (
                  <li key={feature}>
                    <Image
                      src={
                        tier.featured
                          ? pageAssets.tierCheckLight
                          : pageAssets.tierCheck
                      }
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
              className={styles.marketTierIcon}
            />
            <Link
              href="/training"
              aria-label={`Learn more about ${tier.name}`}
              className={styles.marketTierButton}
            >
              Learn More
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
