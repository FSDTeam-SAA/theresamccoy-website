"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { assets, questions } from "../constants";
import styles from "../landing.module.css";

export function LandingFaq() {
  return (
    <section
      className={`${styles.content} ${styles.faq}`}
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className={styles.faqPicture}>
        <div className={styles.faqPhotoCrop}>
          <Image
            src={assets.faq}
            alt="A bookkeeper reviewing accounts on a laptop"
            width={638}
            height={955}
            sizes="(max-width: 767px) 80vw, 25vw"
          />
        </div>
      </div>
      <div className={styles.faqContent}>
        <h2 id="faq-heading" className={styles.serifHeading}>
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          defaultValue="question-0"
          className={styles.accordion}
        >
          {questions.map((question, index) => (
            <AccordionItem value={`question-${index}`} key={question}>
              <AccordionTrigger className={styles.faqTrigger}>
                {question}
                <span className={styles.faqIndicator} aria-hidden="true">
                  <Image
                    src={assets.plus}
                    alt=""
                    width={24}
                    height={24}
                    className={styles.faqPlus}
                  />
                  <Image
                    src={assets.minus}
                    alt=""
                    width={24}
                    height={24}
                    className={styles.faqMinus}
                  />
                </span>
              </AccordionTrigger>
              <AccordionContent className={styles.faqAnswer}>
                {index === 0 ? (
                  "We offer complete residential and commercial construction services, including site preparation, foundation work, welding & fabrication, structural construction, and project management from start to finish."
                ) : (
                  <a href="#contact">
                    Contact our team to discuss your project.
                  </a>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
