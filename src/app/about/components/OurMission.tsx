import styles from "../about.module.css";

const OurMission = () => {
  return (
    <>
      <section className={styles.ourMission}>
        <img src=" lion.png" alt="logo" className={styles.subtitleLogo} />
        <h2 className={styles.sectionTitle}>Our Mission</h2>
      </section>

      <section className={styles.missionSection}>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <p className={styles.description}>
              The traditions and symbols of Alpha Sigma Kappa – Women in
              Technical Studies reflect the strength, unity, and pride that
              define our sisterhood. From our founding to the present, these
              elements serve as lasting reminders of who we are and the values
              we carry. The white rose, our official flower, represents purity
              of intention and the strength in gentleness. Our official jewel,
              the blue topaz, symbolizes wisdom, loyalty, and clear
              communication—all traits we value deeply within our members and
              our mission.
            </p>
            <p className={styles.description}>
              Our official colors, royal blue and silver, are boldly worn in
              everything from our merchandise to our events. These colors
              represent our confidence, dignity, and unity. The lioness—strong,
              fearless, and protective—serves as one of our cherished symbols,
              embodying the leadership and resilience that ASK women bring to
              technical fields. Alongside it, the infinity symbol speaks to the
              enduring connections, limitless potential, and lifelong sisterhood
              that our organization fosters.
            </p>
            <p className={styles.description}>
              At the core of Alpha Sigma Kappa is a shared purpose: to promote
              friendship, academic excellence, and service. We are a sorority of
              women committed to supporting one another through the challenges
              of rigorous technical majors while striving to make a difference
              in our communities. Our members lead with purpose, uplift with
              kindness, and grow through unity. Through leadership, scholarship,
              and service, ASK empowers women to thrive in every aspect of their
              journey.
            </p>
          </div>
          <div className={styles.photoContainer}>
            <img
              className={styles.biglittlePhoto}
              src="identity.jpeg"
              alt="ASK Big/Little event"
            />
            <p className={styles.photoDescription}>
              Members of ASK celebrating sisterhood at the 2024 Big/Little
              reveal event.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMission;
