// src/components/Card/Card.tsx
import wH110 from "../../assets/img/headsets/W-H110.png";
import wH110B from "../../assets/img/headsets/W-H110B.png";
import wH110G from "../../assets/img/headsets/W-H110G.png";
import whiteE100 from "../../assets/img/earbuds/white-E100.png";
import blackE100 from "../../assets/img/earbuds/black-E100.png";
import blueE100 from "../../assets/img/earbuds/blue-E100.png";

import { ProductCard } from "../ProductCard/ProductCard";

export function Card() {
  // 🔹 Exemplo de dados — Headsets + Earbuds
  const products = [
    {
      image: wH110,
      title: "Headset Waveround H110",
      oldPrice: "R$ 99,99",
      newPrice: "R$ 84,99",
    },
    {
      image: wH110B,
      title: "Headset Waveround H110B Bluetooth",
      oldPrice: "R$ 99,99",
      newPrice: "R$ 84,99",
    },
    {
      image: wH110G,
      title: "Headset Waveround H110G Gaming Edition",
      oldPrice: "R$ 99,99",
      newPrice: "R$ 84,99",
    },
    {
      image: whiteE100,
      title: "White Earbuds Waveround E100",
      oldPrice: "R$ 129,99",
      newPrice: "R$ 109,99",
    },
    {
      image: blackE100,
      title: "Black Earbuds Waveround E100 Pro",
      oldPrice: "R$ 129,99",
      newPrice: "R$ 109,99",
    },
    {
      image: blueE100,
      title: "Blue Earbuds Waveround E100 Pro",
      oldPrice: "R$ 129,99",
      newPrice: "R$ 109,99",
    },
  ];

  return (
    <div className="card-list">
      {products.map((item, index) => (
        <ProductCard
          key={index}
          image={item.image}
          title={item.title}
          oldPrice={item.oldPrice}
          newPrice={item.newPrice}
        />
      ))}
    </div>
  );
}
