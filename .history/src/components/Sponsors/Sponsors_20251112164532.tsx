import styles from "./Index.module.css";
import Container from "../Container/Container";

const Sponsors = () => {
  return (
    <Container>
      <section className={styles["sponsors-slider"]}>
        <div className={styles["card"]}>Spotify</div>
        <div className={styles["card"]}>Deezer</div>
        <div className={styles["card"]}>ASUS</div>
        <div className={styles["card"]}>SoundCloud</div>
        <div className={styles["card"]}>YouTube Music</div>
        <div className={styles["card"]}>Shazam</div>
        <div className={styles["card"]}>Adobe</div>
        <div className={styles["card"]}>Discord</div>
      </section>
    </Container>
  );
};

export default Sponsors;
