import styles from "./Index.module.css";

const Card = () => {
  return (
    <>
      <div className={styles["card"]}>
        <div className={styles["card-img"]}></div>
        <span>Sold</span>
        <div className={styles["card-caption"]}>
          <h2 className={styles["card-title"]}></h2>
        </div>
      </div>
    </>
  );
};

export default Card;
