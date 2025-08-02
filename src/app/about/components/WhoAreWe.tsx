import styles from "../about.module.css";

const WhoAreWe = () => {
  return (
    <>
      <section className={styles.whoAreWe}>
        <img src="lion.png" alt="logo" className={styles.subtitleLogo} />
        <h2 className={styles.sectionTitle}>Who Are We</h2>
      </section>

      <section className={styles.whoAreWeContainer}>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <p className={styles.description}>
              Alpha Sigma Kappa – Women in Technical Studies is a social
              sorority created to foster a strong sense of community among women
              pursuing degrees in STEM fields. Our organization was founded on
              the principle that women in male-dominated technical majors
              deserve a support system that celebrates academic excellence,
              shared goals, and lifelong sisterhood. We welcome members from a
              variety of technical backgrounds, creating a unique environment
              where collaboration and empowerment thrive.
            </p>
            <p className={styles.description}>
              ASK exists to support, motivate, and inspire women in STEM through
              a combination of academic encouragement, leadership development,
              and friendship. By connecting students who understand the
              challenges and rewards of technical majors, we create a space
              where members can grow both professionally and personally. Whether
              through study sessions, service projects, or social events, ASK
              encourages women to lead with confidence and lift each other up.
            </p>
            <p className={styles.description}>
              What sets Alpha Sigma Kappa apart is our commitment to long-term
              sisterhood and success beyond college. Our alumnae go on to excel
              in their careers, remaining connected to the values and
              relationships formed within the sorority. We are proud to shape
              not only women who excel in science and engineering, but also
              compassionate leaders and changemakers who support one another
              throughout life’s journey.{" "}
            </p>
          </div>
          <div className={styles.photoContainer}>
            <img
              className={styles.historicalPhoto}
              src="founders.jpg"
              alt="A Historical Photo 1"
            />
            <p className={styles.photoDescription}>
              This historical photo captures ASK's early years, showcasing its
              pioneering members and the organization's dedication to women in
              STEM.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoAreWe;
