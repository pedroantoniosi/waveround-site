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
            <span className={styles["original-price"]}></span>
            <span className={styles["current-price"]}></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
