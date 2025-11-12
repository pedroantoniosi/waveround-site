import styles from "./Index.module.css";

const Card = () => {
  return (
    <>
      <div className={styles["card"]}>
        <div className="card-img"></div>
        <div className="card-caption">
          <h2></h2>
        </div>
      </div>
    </>
  );
};

export default Card;
