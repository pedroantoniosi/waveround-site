import styles from "./Advertising.module.css";

const Advertising = () => {
  return (
    <section
      className={styles.adContainer}
      role="banner"
      aria-label="adContainer"
    >
      <div>
        <h2 className="title">Som Lendário</h2>
        <p className="text">Escute o dia todo</p>
      </div>
    </section>
  );
};

export default Advertising;
