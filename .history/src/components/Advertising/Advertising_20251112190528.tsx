import styles from "./Advertising.css";

const Advertising = () => {
  return(
        <section className={styles.heroContainer} role="banner" aria-label="Hero">
      <Container>
        <div >
          <div className={styles.heroCaption}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>
              Domine cada partida com som de alta precisão. Nossos headsets
              entregam potência, clareza e resposta imediata — para quem exige o
              máximo em cada movimento.
            </p>
            <ButtonLight text="Ver Produtos" className="m-auto my-2" />
          </div>
        </div>
      </Container>
    </section>
  )

export default Advertising;
