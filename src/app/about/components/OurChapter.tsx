import styles from "../about.module.css";

const OurChapter = () => {
  return (
    <>
      <section className={styles.ourChapter}>
        <img src=" lion.png" alt="logo" className={styles.subtitleLogo} />
        <h2 className={styles.sectionTitle}>Our Chapter</h2>
      </section>

      <section className={styles.ourChapterContainer}>
        <div className={styles.content}>
          <div className={styles.photoContainer}>
            <img
              className={styles.initiationPhoto}
              src="askbackground.jpeg"
              alt="USF ASK at the 2025 Initiation Ceremony"
            />
            <p className={styles.photoDescription}>
              Members of USF ASK at the 2025 Initiation Ceremony, celebrating
              sisterhood and welcoming the new Iota class.
            </p>
          </div>
          <div className={styles.textContainer}>
            <p className={styles.description}>
              The University of South Florida chapter of Alpha Sigma Kappa –
              Women in Technical Studies is a vibrant and growing community of
              women pursuing degrees in science, technology, engineering, and
              mathematics. We are united by a shared commitment to academic
              excellence, leadership, and sisterhood. Our chapter creates a
              space where members can connect through common goals and support
              one another through the unique challenges of being a woman in a
              technical field.{" "}
            </p>
            <p className={styles.description}>
              Our members come from a wide range of majors and backgrounds,
              creating a dynamic environment where everyone brings something
              valuable to the table. Whether we’re collaborating on study
              sessions, organizing outreach events, or enjoying sisterhood
              socials, we prioritize connection, empowerment, and mutual
              respect. ASK at USF offers countless opportunities to grow both
              professionally and personally, surrounded by a community that
              genuinely cares{" "}
            </p>
            <p className={styles.description}>
              What makes our chapter special is our passion for lifting each
              other up and making an impact beyond the classroom. From
              volunteering with local organizations to leading campus
              initiatives, our members are committed to being forces for good.
              At USF ASK, you're not just joining a sorority—you're joining a
              network of changemakers who will stand by your side as you rise in
              your academic, career, and life journey.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurChapter;
