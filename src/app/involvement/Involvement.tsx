"use client";

import Section from "@/components/Section";
import Sisterhood from "./components/Sisterhood";
import Philanthropy from "./components/Philanthropy";
import styles from "./involvement.module.css";

const Involvement = () => {
  return (
    <div className={styles.involvementPage}>
      <h1 className={styles.involvementTitle}>Our Involvement</h1>
      <Section>
        <Sisterhood />
      </Section>
      <Section>
        <Philanthropy />
      </Section>
    </div>
  );
};

export default Involvement;
