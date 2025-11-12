import styles from "./Index.module.css";

const Sponsors = () => {
  return (
    <section
      className={styles["hero-container"]}
      role="banner"
      aria-label="Hero"
    >
      <div className={styles["hero-slider"]}>
        <div className={styles["card"]}>Spotify</div>
        <div className={styles["card"]}>Deezer</div>
        <div className={styles["card"]}>ASUS</div>
        <div className={styles["card"]}>SoundCloud</div>
        <div className={styles["card"]}>YouTube Music</div>
        <div className={styles["card"]}>Shazam</div>
        <div className={styles["card"]}>Adobe</div>
        <div className={styles["card"]}>Discord</div>
      </div>
    </section>
  );
};

export default Sponsors;
