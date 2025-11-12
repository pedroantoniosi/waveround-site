import styles from "./Index.module.css";

const Card = () => {
  return (
    <>
      <div className={styles["card"]}>
        <div className={styles["card-img"]}></div>
        <span>Sold</span>
        <div className={styles["card-caption"]}>
          <h2 className={styles["title"]}></h2>
          <div className="row">
            <span className={styles["old-price"]}>R$ 129,99</span>
            <span className={styles["current-price"]}>R$ 99,99</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
