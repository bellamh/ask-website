'use client';

import React from "react";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeContent}>
        <h1>Welcome to USF AΣK</h1>
        <h5>
          Alpha Sigma Kappa – Women in Technical Studies is where women in STEM
          find community, support, and the confidence to lead. Together, we
          grow, innovate, and break barriers.
        </h5>
        <a href="/about">
          <button className={styles.ctaButton}>Learn More</button>
        </a>
        <div className={styles.scrollDown}>&#x25BC;</div>
      </div>
    </div>
  );
}