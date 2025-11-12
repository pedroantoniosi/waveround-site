// src/components/ProductList.tsx

import { products } from "../../api/api";
import Card from "../Card/Card";

type ProductListProps = {
  category?: "headsets" | "earbuds"; // opcional, pode mostrar todos se não passar
};

const ProductCard = ({ category }: ProductListProps) => {
  // Filtra os produtos conforme o tipo
  const filteredProducts = category
    ? products.filter((item) => item.src.includes(category))
    : products;

  return (
    <>
      {filteredProducts.map((item) => (
        <Card
          key={item.title}
          image={item.src}
          title={item.title}
          currentPrice={item.price}
          status={item.status}
        />
      ))}
    </>
  );
};

export default ProductCard;
