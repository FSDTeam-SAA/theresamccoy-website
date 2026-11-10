import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { LandingHeader } from "@/features/landing/components/landing-header";
import { Certification } from "@/features/landing/components/training";
import { pageAssets } from "../assets";
import { SiteShell } from "../components/site-shell";
import styles from "../site-pages.module.css";

const steps = [
  [
    "Complete the Assessment",
    "Your 90-minute adaptive assessment covers reconciliation, software, payroll, compliance, and professional judgment. Responses are automatically scored against our calibrated benchmark.",
  ],
  [
    "Receive Your Score Report",
    "Within 24 hours you receive a detailed breakdown by category — showing your strengths, development areas, and the overall score that places you on the tier ladder.",
  ],
  [
    "Enroll in Your Assigned Path",
    "Based on your score, you're enrolled in the Marketplace Ready, Certified, or Elite path. You also choose one specialization track to deepen your expertise in a specific industry.",
  ],
  [
    "Complete Courses & Workshops",
    "Work through on-demand courses and live workshops at your own pace within structured weekly milestones. All content is built with practicing CPAs and updated quarterly.",
  ],
  [
    "Complete Mentoring & Earn Your Certification",
    "Alongside training, you complete structured mentoring sessions with a senior Elite-tier professional. Once training and mentoring are done, your certification tier is formally awarded.",
  ],
] as const;
const modules = [
  "Core Bookkeeping Principles",
  "QuickBooks Online: Full Walkthrough",
  "Xero Essentials",
  "Bank Reconciliation Masterclass",
  "Payroll Fundamentals",
  "GST, BAS & Tax Basics",
  "Client Communication Standards",
  "Professional Ethics & Conduct",
];
const industries = [
  [
    "E-commerce & Retail",
    "Shopify, WooCommerce, inventory reconciliation, multi-channel revenue tracking.",
  ],
  [
    "Real Estate & Property",
    "Trust accounting, rental income schedules, property portfolio management.",
  ],
  [
    "SaaS & Tech Startups",
    "MRR/ARR reconciliation, stripe integration, cap table support, burn tracking.",
  ],
  [
    "Healthcare & Allied Health",
    "Medicare billing, practice management software, NDIS compliance.",
  ],
  [
    "Hospitality & Food Service",
    "POS reconciliation, supplier payments, tips & gratuities, daily Z-reports.",
  ],
  [
    "Non-profits & Charities",
    "Grant tracking, restricted fund accounting, charity reporting standards.",
  ],
  [
    "Construction & Trades",
    "Job costing, progress billing, retention management, subcontractor payments.",
  ],
  [
    "Professional Services",
    "Time-based billing, WIP schedules, trust account reconciliation, partner drawings.",
  ],
] as const;

export function TrainingPage() {
  return (
    <SiteShell active="Training" header={false}>
      <section className={styles.trainingHero}>
        <Image
          src={pageAssets.trainingHero}
          alt=""
          fill
          sizes="100vw"
          priority
          className={styles.cover}
        />
        <div className={styles.heroShade} />
        <LandingHeader active="Training" />
        <div className={styles.trainingHeroCopy}>
          <h1>
            Training That&apos;s
            <br />
            <em>Built Around Your Score.</em>
            <Image
              src={pageAssets.trainingHeroLine}
              alt=""
              width={666}
              height={14}
              className={styles.trainingHeroLine}
            />
          </h1>
          <p>
            When you complete the assessment, your score determines your
            starting path. Training isn&apos;t generic — it&apos;s assigned
            based on your performance, gaps, and chosen specialization track.
          </p>
        </div>
      </section>
      <section className={`${styles.container} ${styles.trainingProcess}`}>
        <div className={styles.trainingCollage}>
          <div>
            <Image
              src={pageAssets.trainingFirst}
              alt="A person working on financial records"
              fill
              sizes="25vw"
            />
          </div>
          <div>
            <Image
              src={pageAssets.trainingSecond}
              alt="A desk with documents"
              fill
              sizes="25vw"
            />
          </div>
          <div>
            <Image
              src={pageAssets.trainingThird}
              alt="A group working together"
              fill
              sizes="40vw"
            />
          </div>
        </div>
        <div>
          <h2 className={styles.serifTitle}>
            Score → Path → Certification.
            <Image
              src={pageAssets.trainingLine}
              alt=""
              width={746}
              height={8}
              className={styles.trainingLine}
            />
          </h2>
          <p className={styles.trainingIntro}>
            Your assessment score isn&apos;t just a number — it&apos;s the
            engine that drives your personalised development plan.
          </p>
          <div className={styles.timeline}>
            <Image
              src={pageAssets.trainingRail}
              alt=""
              width={32}
              height={600}
              className={styles.timelineRail}
            />
            <ol>
              {steps.map(([title, description], i) => (
                <li key={title}>
                  <h3>
                    {i + 1}. {title}
                  </h3>
                  <p>{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className={styles.pathSection}>
        <div className={styles.container}>
          <h2 className={styles.serifTitle}>
            Three Paths. <span>One Standard.</span>
          </h2>
          <div className={styles.pathLayout}>
            <div className={styles.pathCard}>
              <small>Entry Level · 4 weeks</small>
              <h3>Marketplace Ready</h3>
              <p>
                Eligible to join the marketplace at the Ready tier. Profile
                visible to businesses with entry-to-intermediate bookkeeping
                needs.
              </p>
              <dl>
                {[
                  ["Courses", "8 modules"],
                  ["Mentoring", "Not included"],
                  ["Specialization", "Not included"],
                  ["Platform visibility", "Standard"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <Link href="/#apply">
                Apply For This Path{" "}
                <ArrowUp
                  aria-hidden="true"
                  className={styles.arrow}
                  size={16}
                />
              </Link>
            </div>
            <ol className={styles.moduleList}>
              {modules.map((item, i) => (
                <li key={item}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className={`${styles.container} ${styles.industries}`}>
        <div>
          <h2 className={styles.serifTitle}>
            Go Deep In The
            <br />
            Industries You Know.
          </h2>
          <p>
            Specialization tracks are available from the Certified tier. They
            deepen your expertise in a specific sector and make you
            significantly more attractive to businesses in that industry.
          </p>
        </div>
        <div className={styles.timeline}>
          <Image
            src={pageAssets.industryRail}
            alt=""
            width={32}
            height={884}
            className={styles.timelineRail}
          />
          <ol>
            {industries.map(([title, description], i) => (
              <li key={title}>
                <h3>
                  {i + 1}. {title}
                </h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <Certification />
    </SiteShell>
  );
}
