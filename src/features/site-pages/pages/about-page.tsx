import Image from "next/image";
import Link from "next/link";
import { Certification } from "@/features/landing/components/training";
import { pageAssets } from "../assets";
import { SiteShell } from "../components/site-shell";
import styles from "../site-pages.module.css";

const values = [
  [
    "Assessment Before Anything",
    "Trust is built before the marketplace, not after. Every professional is assessed against a proprietary benchmark before training begins.",
  ],
  [
    "Scored, Not Guessed",
    "Subjective hiring decisions cost businesses money. Our automatic scoring engine removes bias and makes qualification transparent and repeatable.",
  ],
  [
    "Training That Matters",
    "We don't certify professionals in generic skills. Training is assigned based on assessment gaps and tied to real industry specializations.",
  ],
  [
    "Mentoring as a Requirement",
    "No professional joins the marketplace without completing structured mentoring with a senior Elite-tier practitioner. This is non-negotiable.",
  ],
  [
    "Intake-Driven Matching",
    "Businesses don't search through 4,000 profiles. They submit an intake form. We do the matching — curated, relevant, and based on real business context.",
  ],
  [
    "Shared Accountability",
    "Platform approval isn't the end. We monitor engagement quality, collect structured reviews, and revisit tier placement annually.",
  ],
] as const;

export function AboutPage() {
  return (
    <SiteShell active="About">
      <section className={`${styles.container} ${styles.aboutHero}`}>
        <h1>
          The platform’s <em>financial trust</em> was built
          <br className={styles.desktopOnly} /> on transparency and reliability.
        </h1>
        <p>
          We connect businesses with qualified bookkeeping professionals through
          a structured process built around skill development, thoughtful
          vetting, and trusted professional partnerships.
        </p>
        <Link href="/marketplace" className={styles.outlineButton}>
          Get Started{" "}
          <Image
            src={pageAssets.aboutArrow}
            alt=""
            width={20}
            height={20}
            className={styles.arrow}
          />
        </Link>
        <div className={styles.aboutHeroImage}>
          <Image
            src={pageAssets.aboutHero}
            alt="A desk with notebooks and a laptop"
            fill
            sizes="90vw"
            priority
          />
        </div>
      </section>
      <section className={`${styles.container} ${styles.story}`}>
        <div>
          <h2>
            Built to Create a <span>Better Path for Bookkeeping</span>{" "}
            Professionals and Businesses
          </h2>
          <Link href="/marketplace" className={styles.outlineButton}>
            Get Started{" "}
            <Image
              src={pageAssets.aboutArrow}
              alt=""
              width={20}
              height={20}
              className={styles.arrow}
            />
          </Link>
        </div>
        <div className={styles.bodyCopy}>
          <p>
            The Bookkeepers Marketplace is the platform arm of My CPA On Call
            built to solve the trust problem at the source. Instead of listing
            whoever applies, we built a full pipeline: assessment, automatic
            scoring, assigned training, structured mentoring, and a formal
            approval process before any professional can appear in the
            marketplace.
          </p>
          <p>
            The scoring engine was co-developed with practicing CPAs and updated
            quarterly to reflect changes in software, regulation, and industry
            practice. It is not a self reported checklist it is a calibrated
            benchmark that places every professional on a tier ladder based on
            demonstrated competency.
          </p>
          <p>
            The intake-driven matching model was built for businesses. Rather
            than browsing hundreds of profiles, clients submit a structured
            intake form. Our team reviews the business context industry, size,
            software stack, volume and curates a shortlist of professionals
            specifically matched to those needs.
          </p>
          <p>
            Today, the platform operates across Australia, New Zealand, the UK,
            and Canada with over 4,800 approved professionals and 12,000
            businesses matched through intake-driven curation rather than
            keyword search.
          </p>
        </div>
        <div className={styles.aboutStats}>
          {[
            ["2019", "Was Founded"],
            ["12k+", "Businesses Matched"],
            ["4.8K+", "Professionals"],
            ["98.4%", "Satisfaction"],
          ].map(([value, label], index) => (
            <div key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
              {index < 3 && (
                <Image
                  src={pageAssets.aboutLine}
                  alt=""
                  width={72}
                  height={1}
                  className={styles.statDivider}
                />
              )}
            </div>
          ))}
        </div>
      </section>
      <section className={`${styles.container} ${styles.aboutSplit}`}>
        <div className={styles.bodyCopy}>
          <span className={styles.eyebrow}>OUR MISSION</span>
          <h2>
            Helping Bookkeepers <span>Grow and Businesses</span> Connect with
            Confidence
          </h2>
          <p>
            Our mission is to help bookkeeping professionals strengthen their
            skills, gain practical knowledge, and access meaningful
            opportunities for career growth. Through structured assessments,
            targeted training, and personalized mentoring, we create a clear
            pathway for professionals to develop their expertise and demonstrate
            their readiness.
          </p>
          <p>
            We also help businesses connect with qualified and reliable
            bookkeeping support through a transparent and thoughtful vetting
            process. By bringing learning, professional development, and trusted
            connections together, we aim to create better outcomes for both
            bookkeepers and the businesses they serve.
          </p>
        </div>
        <div className={styles.aboutSplitImage}>
          <Image
            src={pageAssets.aboutMission}
            alt="A professional reviewing financial records"
            fill
            sizes="(max-width: 767px) 90vw, 40vw"
          />
        </div>
      </section>
      <section className={`${styles.container} ${styles.aboutSplit}`}>
        <div className={styles.aboutCollage}>
          <div>
            <Image
              src={pageAssets.aboutVision}
              alt="Financial documents being reviewed"
              fill
              sizes="(max-width: 767px) 70vw, 28vw"
            />
          </div>
          <div>
            <Image
              src={pageAssets.aboutVisionDetail}
              alt="People collaborating at a table"
              fill
              sizes="(max-width: 767px) 52vw, 21vw"
            />
          </div>
        </div>
        <div className={styles.bodyCopy}>
          <span className={styles.eyebrow}>CORE VALUES</span>
          <h2>
            Creating a More <span>Trusted and Connected</span> Bookkeeping
            Ecosystem
          </h2>
          <p>
            Our vision is to create a trusted and scalable bookkeeping ecosystem
            where verified expertise, continuous learning, and meaningful
            business relationships come together. We envision a future where
            businesses can confidently connect with skilled professionals, while
            bookkeepers have clear opportunities to learn, grow, and build
            successful careers. By combining training, mentoring, vetting, and
            intelligent matching within one connected platform, we aim to
            strengthen professional standards, create long-term value, and
            support more successful partnerships across the bookkeeping
            industry.
          </p>
        </div>
      </section>
      <section className={`${styles.container} ${styles.values}`}>
        <h2 className={styles.serifTitle}>
          The Values Behind
          <br />
          Our Platform
        </h2>
        <ol>
          {values.map(([title, description], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>
      <Certification />
    </SiteShell>
  );
}
