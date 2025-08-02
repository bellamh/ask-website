"use client";

import React, { useState, useEffect } from "react";
import styles from "./home.module.css";

export default function Home() {
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderVisible(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      </div>
    </div>
  );
}
