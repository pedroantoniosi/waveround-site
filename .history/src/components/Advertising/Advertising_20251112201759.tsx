import styles from "./Advertising.module.css";
import Container from "../Container/Container";

const Advertising = () => {
  return (
    <Container>
      <section
        className={styles.adContainer}
        role="banner"
        aria-label="adContainer"
      >
        <div className={styles.adCaption}>
          <h2 className="title">Som Lendário</h2>
          <p className="text">Escute o dia todo</p>
        </div>
      </section>
    </Container>
  );
};

export default Advertising;
