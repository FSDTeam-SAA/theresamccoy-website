import Image from "next/image";
import Link from "next/link";
import { Certification } from "@/features/landing/components/training";
import { pageAssets } from "../assets";
import { SiteShell } from "../components/site-shell";
import styles from "../site-pages.module.css";

const stats = [
  ["30–35", "Days to", "approval"],
  ["7", "Pipeline", "stages"],
  ["59+", "Training", "courses"],
  ["100%", "Online &", "flexible"],
] as const;

const requirements = [
  [
    "Minimum 2 years practical experience",
    "End-to-end bookkeeping in a real business or client environment.",
  ],
  [
    "Proficiency in at least one platform",
    "QuickBooks Online, Xero, MYOB, FreshBooks, Sage, or Wave.",
  ],
  [
    "Professional references available",
    "At least two referees who can speak to your bookkeeping work.",
  ],
  [
    "Registered professional or ABN holder",
    "Active professional registration or equivalent in your jurisdiction.",
  ],
  [
    "Commitment to completing the assessment",
    "The assessment takes approximately 90 minutes to complete online.",
  ],
  [
    "Openness to structured training & mentoring",
    "Training and mentoring completion is required before approval.",
  ],
] as const;

const benefits = [
  [
    "Verified Marketplace Badge",
    "Your profile displays your assessment tier and approval status signalling proven credibility to every business that views your profile.",
  ],
  [
    "Intake-Matched Opportunities",
    "You don't have to find clients. When businesses submit intake forms matching your skills, you receive curated engagement opportunities automatically.",
  ],
  [
    "Full Training Library Access",
    "Approved professionals retain access to the full training library including new courses, regulatory update modules, and advanced specialization content added monthly.",
  ],
  [
    "Ongoing Mentoring Network",
    "The mentor relationship doesn't end at approval. You'll remain connected to the platform's peer and mentoring network for ongoing professional development.",
  ],
  [
    "Professional Analytics Dashboard",
    "Track your profile views, client match rates, engagement history, and income metrics through your personal dashboard updated in real time.",
  ],
  [
    "Career Tier Progression",
    "As you build your reputation and complete advanced training, you’ll unlock higher visibility, better client matches, and greater earning potential.",
  ],
] as const;

const stages = [
  [
    "Online Application",
    "Complete the application form online. Provide your work history, years of experience, software proficiencies, areas of specialization, and professional references. Your application is reviewed by our team within 24 hours.",
  ],
  [
    "Resume & Document Upload",
    "Upload your resume, any relevant certifications, and supporting documents. Our system extracts key credentials and begins building your platform profile automatically.",
  ],
  [
    "Skills Assessment",
    "Complete our adaptive online assessment at a time that suits you. It covers bookkeeping principles, bank reconciliation scenarios, payroll fundamentals, software knowledge, and professional judgment questions.",
  ],
  [
    "Automatic Scoring & Tier Placement",
    "Your responses are automatically scored against our proprietary benchmark framework. A detailed report breaks down your performance by category. Your score determines your starting certification tier and which training path you'll be enrolled in.",
  ],
  [
    "Training Path Enrolment",
    "Based on your score and specialization goals, you're enrolled in a tailored training path — Marketplace Ready, Marketplace Certified, or Marketplace Elite. Paths include on-demand courses, live workshops, and specialization tracks.",
  ],
  [
    "Mentoring Sessions",
    "You're matched with a senior Elite-tier mentor based on your specialization. Structured sessions cover professional development, client communication, and platform best practices. Mentoring completion is required for approval.",
  ],
  [
    "Approval & Marketplace Activation",
    "Once you've completed training and mentoring, our credentialing team reviews your full profile. Upon approval, your verified profile goes live in the marketplace and you begin receiving matched business opportunities.",
  ],
] as const;

export function ApplyPage() {
  return (
    <SiteShell active="Apply">
      <section className={`${styles.container} ${styles.applyHero}`}>
        <div className={styles.applyHeroCopy}>
          <h1>
            Become a <em>Verified, Approved</em> Professional.
          </h1>
          <p>
            Our application pipeline takes you from submission to marketplace
            approval in roughly 30–45 days. Every step — assessment, scoring,
            training, and mentoring is structured to set you up for success from
            the first client interaction.
          </p>
          <div className={styles.applyActions}>
            <Link href="/signup" className={styles.applyPrimary}>
              Start Your Application
            </Link>
            <Link href="/training" className={styles.applySecondary}>
              View Training Paths
            </Link>
          </div>
        </div>
        <div className={styles.applyCollage}>
          <div>
            <Image
              src={pageAssets.applySite}
              alt="Construction site scaffolding"
              fill
              sizes="(max-width: 767px) 45vw, 17vw"
              priority
            />
          </div>
          <div>
            <Image
              src={pageAssets.applyEngineer}
              alt="A professional in a safety vest reviewing plans"
              fill
              sizes="(max-width: 767px) 45vw, 17vw"
              priority
            />
          </div>
        </div>
      </section>

      <section
        className={`${styles.container} ${styles.applyStats}`}
        aria-label="Application at a glance"
      >
        {stats.map(([value, first, second], index) => (
          <div key={value}>
            <strong>{value}</strong>
            <span>
              {first}
              <br />
              {second}
            </span>
            {index < stats.length - 1 && (
              <Image
                src={pageAssets.aboutLine}
                alt=""
                width={72}
                height={1}
                className={styles.applyStatDivider}
              />
            )}
          </div>
        ))}
      </section>

      <section className={`${styles.container} ${styles.applyWho}`}>
        <div>
          <h2 className={styles.serifTitle}>
            Who should <span>apply?</span>
          </h2>
          <p>
            We look for bookkeeping professionals with genuine experience, a
            commitment to standards, and the ambition to operate at the highest
            level. Our process is rigorous because our clients expect it to be.
          </p>
        </div>
        <div className={styles.timeline}>
          <Image
            src={pageAssets.applyRail}
            alt=""
            width={32}
            height={592}
            className={styles.timelineRail}
          />
          <ol>
            {requirements.map(([title, description], i) => (
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

      <section className={styles.applyUnlocks}>
        <div className={styles.container}>
          <div className={styles.applyUnlocksIntro}>
            <h2>
              What approval <em>unlocks.</em>
            </h2>
            <p>
              Platform approval is the beginning of your professional journey
              not the end of it.
            </p>
          </div>
          <ul className={styles.applyBenefits}>
            {benefits.map(([title, description], i) => (
              <li key={title}>
                <span className={styles.applyBenefitIcon}>
                  <Image
                    src={
                      i % 2 === 0
                        ? pageAssets.applySparkle
                        : pageAssets.applyHourglass
                    }
                    alt=""
                    width={32}
                    height={32}
                  />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.container} ${styles.applyStages}`}>
        <div className={styles.applyStagesIntro}>
          <h2>
            Seven stages. <em>One approved</em> professional.
          </h2>
          <p>
            Every stage is designed to build genuine capability not just tick
            boxes. By the time you reach approval, clients already know what
            you&apos;re capable of.
          </p>
        </div>
        <ol>
          {stages.map(([title, description], i) => (
            <li key={title}>
              <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
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
