import React from "react";
import styles from "./Index.module.css";
import Container from "../Container/Container";

interface ProductProps {
  sectionTitle: string;
  title?: string;
  children?: React.ReactNode;
}

const ProductSection = ({ sectionTitle, children }: ProductProps) => {
  return (
    <section className={styles["product-container"]}>
      <h2 className={styles["section-title"]}>{sectionTitle}</h2>
      <div className={styles["product-content"]}>{children}</div>
    </section>
  );
};

export default ProductSection;
