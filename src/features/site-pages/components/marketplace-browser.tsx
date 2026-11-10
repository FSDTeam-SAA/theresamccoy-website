"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LandingHeader } from "@/features/landing/components/landing-header";
import { pageAssets } from "../assets";
import { professional } from "../professionals";
import styles from "../site-pages.module.css";

const industries = [
  "E-commerce & Retail",
  "SaaS & Technology",
  "Real Estate & Property",
  "Healthcare & Allied Health",
  "Non-profits & Charities",
  "Construction & Trades",
];
const certs = [
  "Xero Certified",
  "QuickBooks ProAdvisor",
  "MYOB Certified",
  "BAS Agent",
  "Certified Payroll Professional",
];
const sorts = [
  "Assessment Score",
  "Client Rating",
  "Years Experience",
  "Hourly Rate",
];

function FilterGroup({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset className={styles.filterGroup}>
      <legend>{title}</legend>
      {options.map((option) => (
        <label
          className={value === option ? styles.filterSelected : ""}
          key={option}
        >
          <input
            type="radio"
            name={title}
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
}

function ProfessionalCard() {
  return (
    <article className={styles.professionalCard}>
      <div className={styles.cardPhoto}>
        <Image
          src={professional.image}
          alt=""
          fill
          sizes="(max-width: 767px) 40vw, 220px"
        />
      </div>
      <div className={styles.cardInfo}>
        <h2>
          <Link
            className={styles.cardLink}
            href={`/marketplace/${professional.slug}`}
          >
            {professional.name}
          </Link>
        </h2>
        <p>{professional.title}</p>
        <p className={styles.cardMeta}>
          <Image src={pageAssets.location} alt="" width={16} height={16} />
          {professional.location}
          <Image src={pageAssets.dot} alt="" width={16} height={16} />
          {professional.languages}
          <Image src={pageAssets.dot} alt="" width={16} height={16} />
          {professional.years}yr exp
        </p>
        <div className={styles.cardSummary}>
          <Image src={pageAssets.thunder} alt="" width={24} height={24} />
          <span>
            Eight years managing multi-channel
            <br /> e-commerce accounts with accuracy.
          </span>
        </div>
        <div className={styles.expertise}>
          <strong>Expertise</strong>
          <div>
            {professional.expertise.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className={styles.cardRating}>
          <strong>{professional.rating}</strong>
          <Image src={pageAssets.stars} alt="" width={96} height={16} />
          <span>(63 reviews)</span>
        </div>
      </div>
      <div className={styles.cardActions}>
        <p>
          <strong>${professional.rate}</strong>/hr
        </p>
        <p className={styles.available}>•&nbsp; Available Now</p>
        <Link
          href={`/marketplace/${professional.slug}`}
          className={styles.solidButton}
        >
          View Profile <span aria-hidden="true">→</span>
        </Link>
        <Link
          href="/api/auth/signin"
          prefetch={false}
          className={styles.cardActionLink}
        >
          Invite to Interview
        </Link>
        <ul>
          {[
            [pageAssets.work, `${professional.projects} Completed Projects`],
            [pageAssets.people, `${professional.clients} Total clients`],
            [pageAssets.clock, `${professional.hours}+ Total Hours`],
          ].map(([icon, label]) => (
            <li key={label}>
              <Image src={icon} alt="" width={16} height={16} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function MarketplaceBrowser() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState(sorts[0]);
  const [tier, setTier] = useState("All Tiers");
  const [industry, setIndustry] = useState("All Industries");
  const [software, setSoftware] = useState("All software");
  const [certification, setCertification] = useState("All Certifications");
  const [available, setAvailable] = useState(false);
  const [experience, setExperience] = useState("Any");
  const matches = useMemo(() => {
    const search = [
      professional.name,
      professional.title,
      professional.location,
      professional.languages,
      professional.industry,
      ...professional.expertise,
    ]
      .join(" ")
      .toLowerCase();
    return (
      search.includes(query.trim().toLowerCase()) &&
      (tier === "All Tiers" || tier === professional.tier) &&
      (industry === "All Industries" || industry === professional.industry) &&
      (software === "All software" ||
        professional.software.some((item) => item === software)) &&
      (certification === "All Certifications" ||
        professional.certifications.some(
          (item) => item.filter === certification,
        )) &&
      (!available || professional.available) &&
      (experience === "Any" ||
        professional.years >= Number.parseInt(experience))
    );
  }, [query, tier, industry, software, certification, available, experience]);
  function reset() {
    setQuery("");
    setSort(sorts[0]);
    setTier("All Tiers");
    setIndustry("All Industries");
    setSoftware("All software");
    setCertification("All Certifications");
    setAvailable(false);
    setExperience("Any");
  }
  return (
    <>
      <section className={styles.marketHero}>
        <Image
          src={pageAssets.marketplaceHero}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.cover}
        />
        <div className={styles.heroShade} />
        <LandingHeader active="Marketplace" />
        <div className={styles.marketHeroContent}>
          <h1>
            Every professional
            <br />
            here <em>has earned their</em> place.
            <Image
              src={pageAssets.marketplaceUnderline}
              alt=""
              width={536}
              height={14}
              className={styles.marketUnderline}
            />
          </h1>
          <p>
            No self-reported profiles. No unverified credentials. Every
            bookkeeper listed here has passed our 7-stage vetting pipeline —
            assessed, trained, mentored, and approved.
          </p>
          <div className={styles.searchBox}>
            <Image src={pageAssets.search} alt="" width={24} height={24} />
            <label className="sr-only" htmlFor="professional-search">
              Search by name, skill, email or specialization
            </label>
            <input
              id="professional-search"
              type="search"
              placeholder="Search by name, skill, email or specialization"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className={styles.quickFilters}>
            <label>
              Industry
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option>All Industries</option>
                {industries.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            <label>
              Software
              <select
                value={software}
                onChange={(e) => setSoftware(e.target.value)}
              >
                <option>All software</option>
                {professional.software.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            <label>
              Available
              <select
                value={available ? "Available now" : "Any time"}
                onChange={(e) =>
                  setAvailable(e.target.value === "Available now")
                }
              >
                <option>Any time</option>
                <option>Available now</option>
              </select>
            </label>
          </div>
        </div>
      </section>
      <div className={`${styles.container} ${styles.marketLayout}`}>
        <aside aria-label="Filter professionals" className={styles.filters}>
          <FilterGroup
            title="SORT BY"
            options={sorts}
            value={sort}
            onChange={setSort}
          />
          <FilterGroup
            title="Certification Tier"
            options={["All Tiers", "Elite", "Certified", "Ready"]}
            value={tier}
            onChange={setTier}
          />
          <FilterGroup
            title="Industry"
            options={["All Industries", ...industries]}
            value={industry}
            onChange={setIndustry}
          />
          <FilterGroup
            title="Certification"
            options={["All Certifications", ...certs]}
            value={certification}
            onChange={setCertification}
          />
          <div className={styles.filterGroup}>
            <p className={styles.filterHeading}>Availability</p>
            <label className={styles.availabilityToggle}>
              Available now only
              <input
                type="checkbox"
                role="switch"
                checked={available}
                onChange={(e) => setAvailable(e.target.checked)}
              />
            </label>
            <p>Min. Experience</p>
            <div className={styles.experience}>
              {["Any", "3yr+", "5yr+", "8yr+"].map((item) => (
                <button
                  type="button"
                  aria-pressed={experience === item}
                  key={item}
                  onClick={() => setExperience(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button type="button" className={styles.resetButton} onClick={reset}>
            Reset Filters
          </button>
        </aside>
        <div className={styles.results} aria-live="polite">
          {matches ? (
            [0, 1, 2].map((i) => <ProfessionalCard key={i} />)
          ) : (
            <div className={styles.noResults}>
              <h2>No professionals match your filters.</h2>
              <p>Try another search or reset your filters.</p>
              <button type="button" onClick={reset}>
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
