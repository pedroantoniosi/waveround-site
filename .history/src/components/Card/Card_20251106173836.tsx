// src/components/Card/Index.tsx
import styles from "./Index.module.css";

type CardProps = {
  image: string;
  title: string;
  originalPrice?: number;
  currentPrice: number;
};

const Card = ({ image, title, originalPrice, currentPrice }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-img"]}>
        <img src={image} alt={title} />
        <span className={styles.sold}>Sold</span>
      </div>

      <div className={styles["card-caption"]}>
        <h2 className={styles.title}>{title}</h2>
        <div className="row">
          {originalPrice && (
            <span className={styles["original-price"]}>
              R$ {originalPrice.toFixed(2)}
            </span>
          )}
          <span className={styles["current-price"]}>
            R$ {currentPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
