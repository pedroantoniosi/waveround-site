import styles from "./Index.module.css";

const Card = () => {
  return (
    <>
      <div className={styles["card"]}>
        <div className={styles["card-img"]}></div>
        <div className={styles["card-caption"]}>
          <h2></h2>
        </div>
      </div>
    </>
  );
};

export default Card;
