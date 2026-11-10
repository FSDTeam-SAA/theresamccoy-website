import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { assets, processSteps } from "../constants";
import styles from "../landing.module.css";

export function Marketplace() {
  return (
    <>
      <section
        className={`${styles.content} ${styles.marketplace}`}
        id="marketplace"
        aria-labelledby="marketplace-heading"
      >
        <Button asChild className={`${styles.pill} ${styles.eyebrow}`}>
          <Link href="/marketplace">
            Explore the Marketplace
            <Image
              src={assets.marketplaceArrow}
              alt=""
              width={16}
              height={16}
              className={styles.arrow}
            />
          </Link>
        </Button>
        <div className={styles.marketplaceIntro} id="about">
          <h2 className={styles.sectionHeading} id="marketplace-heading">
            Every Profile is{" "}
            <em>
              Assessed,
              <br />
              Trained, and Approved.
              <br />
              No Exceptions.
            </em>
            <Image
              src={assets.profileUnderline}
              alt=""
              width={536}
              height={13}
              style={{ height: "auto" }}
              className={styles.profileUnderline}
            />
          </h2>
          <p>
            The marketplace only contains professionals who have cleared every
            stage of our vetting pipeline. Browse with confidence — there are no
            unverified profiles here.
          </p>
        </div>
        <div className={styles.profileImages} id="profiles">
          <Image
            src={assets.businessOwner}
            alt="A business owner working on her accounts"
            width={494}
            height={520}
            className={styles.ownerImage}
            sizes="(max-width: 767px) 90vw, 26vw"
          />
          <Image
            src={assets.bookkeepers}
            alt="Bookkeeping professionals working together"
            width={1014}
            height={520}
            className={styles.bookkeeperImage}
            sizes="(max-width: 767px) 90vw, 53vw"
          />
          <Button asChild className={`${styles.pill} ${styles.profileExplore}`}>
            <Link href="/marketplace">
              Explore the Marketplace
              <Image
                src={assets.profileArrow}
                alt=""
                width={24}
                height={24}
                className={styles.arrow}
              />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className={`${styles.pill} ${styles.profileApply}`}
          >
            <a href="#apply">Apply as a Bookkeeper</a>
          </Button>
        </div>
      </section>
      <section
        className={`${styles.content} ${styles.process}`}
        aria-labelledby="process-heading"
      >
        <h2 className={styles.subHeading} id="process-heading">
          Two sides,
          <br />
          <em>
            One Rigorous
            <br />
            Process.
          </em>
        </h2>
        <div className={styles.processList}>
          <div className={styles.processRail}>
            <Image
              src={assets.process}
              alt=""
              width={32}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <ol className={styles.processSteps}>
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <h3>
                  {index + 1}. {step.title}
                </h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
