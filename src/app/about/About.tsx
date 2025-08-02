"use client";

import Section from "@/components/Section";
import WhoAreWe from "./components/WhoAreWe";
import OurChapter from "./components/OurChapter";
import OurMission from "./components/OurMission";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.aboutTitle}>
        Alpha Sigma Kappa - Women in Technical Studies
      </h1>
      <blockquote className={styles.initialQuote}>
        A posse ad esse - From possibility to reality
      </blockquote>

      <Section>
        <WhoAreWe />
      </Section>
      <Section>
        <OurChapter />
      </Section>
      <Section>
        <OurMission />
      </Section>
    </div>
  );
};

export default About;
