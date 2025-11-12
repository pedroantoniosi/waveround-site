// src/components/ProductList.tsx
import React from "react";
import { products } from "../../api/api";
import Card from "./Card/Index";

type ProductListProps = {
  category?: "headsets" | "earbuds"; // opcional, pode mostrar todos se não passar
};

const ProductList = ({ category }: ProductListProps) => {
  // Filtra os produtos conforme o tipo
  const filteredProducts = category
    ? products.filter((item) => item.src.includes(category))
    : products;

  return (
    <section className="product-list">
      {filteredProducts.map((item) => (
        <Card
          key={item.title}
          image={item.src}
          title={item.title}
          currentPrice={item.price}
          status={item.status}
        />
      ))}
    </section>
  );
};

export default ProductList;
