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
          <p>
            Experimente o novo headset Waveround: som cristalino, conforto
            absoluto e design sofisticado. <br />
            Projetado para longas horas de uso sem perder a leveza e a precisão
            sonora. <br />
            Eleva sua experiência auditiva a um novo nível de performance e
            estilo.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Advertising;
