import React from "react";
import styles from "./Index.module.css";

interface ProductProps {
  sectionTitle?: string;
  title?: string;
  children?: React.ReactNode;
}

const ProductSection = ({ sectionTitle, children }: ProductProps) => {
  return (
    <section
      className={styles["product-container"]}
      role="banner"
      aria-label="Hero"
    >
      <h2 className={styles["section-title"]}>{sectionTitle}</h2>
      <div className={styles["product-content"]}>
        <h2 className={styles["title"]}></h2>
        {children}
      </div>
    </section>
  );
};

export default ProductSection;
