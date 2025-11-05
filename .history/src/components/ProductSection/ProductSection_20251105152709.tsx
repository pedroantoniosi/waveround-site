import React from "react";
import styles from "./Index.module.css";

interface ProductProps {
  title?: string;
  children?: React.ReactNode;
}

const ProductSection = ({ title, children }: ProductProps) => {
  return (
    <section
      className={styles["product-container"]}
      role="banner"
      aria-label="Hero"
    >
      <h2 className={styles["section-title"]}></h2>
      <div className={styles["product-content"]}>
        <h2 className={styles["title"]}>{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default ProductSection;
