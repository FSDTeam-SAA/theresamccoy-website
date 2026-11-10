"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { assets } from "../constants";
import styles from "../landing.module.css";

const portraits = [
  assets.portrait1,
  assets.portrait2,
  assets.portrait3,
  assets.portrait4,
  assets.portrait5,
];

export function Testimonials() {
  const [active, setActive] = useState(2);
  const select = (direction: number) =>
    setActive(
      (current) => (current + direction + portraits.length) % portraits.length,
    );

  return (
    <section
      className={styles.testimonials}
      aria-label="Community testimonials"
      aria-roledescription="carousel"
    >
      <div className={styles.portraits}>
        {portraits.map((_, position) => {
          const index =
            (active + position - 2 + portraits.length) % portraits.length;
          return (
            <button
              key={index}
              type="button"
              className={`${styles.portrait} ${styles[`portraitPosition${position}`]}`}
              aria-label={`View portrait ${index + 1}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            >
              <Image
                src={portraits[index]}
                alt={
                  index === 2 ? "Floyd Miles" : `Community member ${index + 1}`
                }
                fill
                sizes="(max-width: 767px) 70vw, 25vw"
              />
              {position === 2 && (
                <Image
                  className={styles.quoteMark}
                  src={assets.quote}
                  width={56}
                  height={43}
                  alt=""
                />
              )}
              {position === 2 && index === 2 && (
                <span className={styles.portraitCaption}>
                  <strong>Floyd Miles</strong>
                  <span>
                    A7 Property Solutions exceeded our expectations from start
                    to finish. Their team was professional, communicated
                    clearly, and delivered excellent workmanship on schedule.
                  </span>
                </span>
              )}
            </button>
          );
        })}
      </div>
      <blockquote className={styles.testimonialQuote}>
        Promoto transformed how we connect with our
        <br className={styles.desktopBreak} /> customers. The automation
        workflows saved us hours
        <br className={styles.desktopBreak} /> each week and boosted engagement
        instantly.
      </blockquote>
      <div className={styles.carouselControls}>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Previous portrait"
          className={styles.carouselArrow}
          onClick={() => select(-1)}
        >
          <Image
            src={assets.previous}
            alt=""
            width={32}
            height={32}
            className={styles.previousArrow}
          />
        </Button>
        <div className={styles.pagination} aria-label="Select a portrait">
          <Image
            src={assets.pagination}
            alt=""
            width={108}
            height={24}
            className={
              active === 2 ? styles.initialPagination : styles.hiddenPagination
            }
          />
          {portraits.map((_, index) => (
            <button
              type="button"
              key={index}
              aria-label={`Select portrait ${index + 1}`}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
              className={`${styles.paginationDot} ${active === index ? styles.activeDot : ""} ${active === 2 ? styles.transparentDot : ""}`}
            />
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Next portrait"
          className={styles.carouselArrow}
          onClick={() => select(1)}
        >
          <Image src={assets.next} alt="" width={32} height={32} />
        </Button>
      </div>
    </section>
  );
}
