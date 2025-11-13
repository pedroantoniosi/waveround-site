import styles from "./Advertising.module.css";
import Container from "../Container/Container";

const Advertising = () => {
  return (
    <section
      className={styles.adContainer}
      role="banner"
      aria-label="adContainer"
    >
      <Container className={styles.adContent}>
        <div className={styles.adCaption}>
          <h2 className={styles.title}>Som Lendário</h2>
          <p className={styles.text}>Escute o dia todo</p>
        </div>
      </Container>
    </section>
  );
};

export default Advertising;
