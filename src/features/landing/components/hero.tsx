import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { assets } from "../constants";
import { LandingHeader } from "./landing-header";
import styles from "../landing.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-heading">
      <Image
        className={styles.heroPhoto}
        src={assets.hero}
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <div className={styles.heroShade} />
      <LandingHeader />
      <div className={`${styles.content} ${styles.heroCopy}`}>
        <h1
          id="hero-heading"
          className={styles.heroTitle}
          aria-label="The Bookkeeper Your Business Has Been Waiting For"
        >
          The Bookkeeper<em>Your Business</em> Has Been Waiting For
          <Image
            src={assets.heroUnderline}
            alt=""
            width={617}
            height={14}
            style={{ height: "auto" }}
            className={styles.heroUnderline}
          />
        </h1>
        <p className={styles.heroDescription}>
          MyCPA OnCall connects business owners with fully vetted bookkeeping
          professionals every one of whom has been assessed, scored, trained,
          mentored, and approved before they ever appear in the marketplace.
        </p>
        <div className={styles.heroButtons}>
          <Button asChild className={styles.pill}>
            <Link href="/marketplace">
              Find a Bookkeeper
              <Image
                src={assets.arrow}
                alt=""
                width={16}
                height={16}
                className={styles.arrow}
              />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className={`${styles.pill} ${styles.pillOutline}`}
          >
            <a href="#apply">
              Apply as a Bookkeeper
              <Image
                src={assets.applyArrow}
                alt=""
                width={16}
                height={16}
                className={styles.arrow}
              />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
