import styles from "../involvement.module.css";

const Sisterhood = () => {
  return (
    <>
      <section className={styles.sisterhood}>
        <img src="lion.png" alt="logo" className={styles.subtitleLogo}></img>
        <h2 className={styles.sectionTitle}>Sisterhood</h2>
      </section>

      <section className={styles.sisterhoodContainer}>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <p className={styles.description}>
              At Alpha Sigma Kappa – Women in Technical Studies, sisterhood is
              at the heart of everything we do. As a small, close-knit chapter,
              we pride ourselves on truly knowing one another and creating
              meaningful, lasting connections. Whether it's a shared class, a
              group project, or a personal milestone, our members are there to
              celebrate, support, and uplift each other. We believe that this
              genuine closeness is what transforms us from classmates into
              lifelong sisters.
            </p>
            <p className={styles.description}>
              Our chapter hosts a variety of siblinghood events each semester
              designed to strengthen our bonds and create joyful, shared
              memories. From Big/Little reveal nights and themed socials to cozy
              movie marathons and spontaneous outings, these moments help us
              stay connected beyond academics. Weekly study nights also give us
              a chance to encourage one another in our technical pursuits while
              still having fun and decompressing together.
            </p>
            <p className={styles.description}>
              The connection we build within ASK goes far beyond chapter
              meetings—many of our members become roommates, best friends, and
              professional allies. The culture we foster is one of inclusion,
              mutual respect, and authentic care. It’s not just about sisterhood
              during college—it’s about building a lifelong network of women in
              STEM who have your back, no matter where life takes you.
            </p>
          </div>
          <div className={styles.photoContainer}>
            <img
              className={styles.sisterhoodPhoto}
              src="/sisterhood.jpeg"
              alt="Sisterhood Event"
            />
            <p className={styles.photoDescription}>
              Members of Alpha Sigma Kappa – Women in Technical Studies gather
              at a themed social event, joyfully showcasing their unity and
              sisterhood. These vibrant and inclusive moments reflect the strong
              connections formed within the chapter, turning classmates into
              lifelong friends.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sisterhood;
