import React from "react";
import styles from "./recruitment.module.css";

const Recruitment: React.FC = () => {
  return (
    <div className={styles.recruitmentPage}>
      <h1 className={styles.recruitmentTitle}>Recruitment Week</h1>

      <section className={styles.recruitment}>
        <img src="lion.png" alt="logo" className={styles.subtitleLogo} />
        <h2 className={styles.sectionTitle}>Our Schedule</h2>
      </section>

      <section className={styles.recruitmentContainer}>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <p className={styles.description}>
              Recruitment at Alpha Sigma Kappa Women in Technical Studies is a
              week-long journey filled with excitement, connection, and
              discovery. Each day of the week offers a different themed event to
              help you get to know our members, our values, and what makes our
              sisterhood so special.
            </p>
            <p className={styles.description}>
              <strong>Monday (STEM Night):</strong> Dive into our passion for
              science, technology, engineering, and math with fun activities and
              conversations about women in STEM.
            </p>
            <p className={styles.description}>
              <strong>Tuesday (Sisterhood Night):</strong> Learn what it means
              to be part of our close-knit community through bonding games and
              heartfelt stories.
            </p>
            <p className={styles.description}>
              <strong>Wednesday (Traditions Night):</strong> Discover our unique
              history, values, and cherished traditions that have shaped ASK
              over the years.
            </p>
            <p className={styles.description}>
              <strong>Thursday (Philanthropy Night):</strong> Explore our
              national and local service initiatives and help us give back
              through a hands-on activity.
            </p>
            <p className={styles.description}>
              <strong>Friday (Preference Night) (Invite Only):</strong> A more
              personal evening where we reflect on the week and our values. This
              event is by invitation only.
            </p>
            <p className={styles.description}>
              After Preference Night, if you&apos;ve been selected to join our
              chapter, a sister will call you that evening to invite you to{" "}
              <strong>Bid Day</strong>, the final and most exciting event of
              the week! Bid Day is when you officially accept your bid and
              become a candidate member of ASK.
            </p>
          </div>

          <div className={styles.photoContainer}>
            <div className={styles.imageBlock}>
              <img
                className={styles.recruitmentPhoto}
                src="/recruitment.jpeg"
                alt="Recruitment Event"
              />
              <p className={styles.photoDescription}>
                During recruitment week, you&apos;ll meet inspiring women, engage in
                icebreaker activities, and start building friendships with other
                PNMs in your class, all while discovering the lifelong bonds
                and values that make ASK unique.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recruitment;
