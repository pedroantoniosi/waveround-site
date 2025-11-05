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
      <h2 className={styles["title"]}></h2>
      <div className="hero-content">
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default ProductSection;
