import styles from "../involvement.module.css";

const Philanthropy = () => {
  return (
    <>
      <section className={styles.philanthropy}>
        <img src="lion.png" alt="logo" className={styles.subtitleLogo}></img>
        <h2 className={styles.sectionTitle}>Philanthropy</h2>
      </section>

      <section className={styles.philanthropyContainer}>
        <div className={styles.content}>
          <div className={styles.photoContainer}>
            <img
              className={styles.philanthropyPhoto}
              src="/filantropia.jpeg"
              alt="Philanthropy Event"
            />
            <p className={styles.photoDescription}>
              ASK members participate in a philanthropic event to support
              DonorsChoose, radiating enthusiasm and commitment to giving back
              to the community. Their engagement highlights the chapter’s
              dedication to educational equity and collective action through
              meaningful service
            </p>
          </div>
          <div className={styles.textContainer}>
            <p className={styles.description}>
              Philanthropy plays a vital role in our chapter’s mission to serve
              and uplift the broader community. Our national philanthropy is
              DonorsChoose, an organization dedicated to supporting public
              school teachers and classroom needs. Throughout the year, we host
              fundraisers and small-scale events to raise money and awareness
              for DonorsChoose initiatives, and we were proud to launch our
              first major philanthropy event in Fall 2016 to expand our impact
              even further.
            </p>
            <p className={styles.description}>
              Beyond our national cause, we also engage in local service
              opportunities such as volunteering with Feed My Starving Children,
              and we actively support the philanthropic efforts of other Greek
              organizations at USF. Whether we’re packing meals, fundraising for
              educational equity, or cheering on fellow chapters at their
              events, our members are committed to giving back and making a
              difference through collective action and compassion.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Philanthropy;
