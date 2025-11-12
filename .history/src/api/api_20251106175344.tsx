// src/api/api.tsx

// Apenas dois estados possíveis
export type ProductStatus = "for sale" | "sold out";

// Interface simples
export interface Product {
  title: string;
  price: number;
  src: string;
  status: ProductStatus;
}

// Lista de produtos
export const products: Product[] = [
  {
    title: "Headset Waveround H110",
    price: 99.99,
    src: new URL("../assets/img/headsets/W-H110.png", import.meta.url).href,
    status: "for sale",
  },
  {
    title: "Headset Waveround H110B Bluetooth",
    price: 109.99,
    src: new URL("../assets/img/headsets/W-H110B.png", import.meta.url).href,
    status: "sold out",
  },
  {
    title: "Headset Waveround H110X Gamer",
    price: 129.99,
    src: new URL("../assets/img/headsets/W-H110G.png", import.meta.url).href,
    status: "for sale",
  },
  {
    title: "Earbud Waveround E100 White",
    price: 89.99,
    src: new URL("../assets/img/earbuds/white-E100.png", import.meta.url).href,
    status: "for sale",
  },
  {
    title: "Earbud Waveround E100 Black",
    price: 89.99,
    src: new URL("../assets/img/earbuds/black-E100.png", import.meta.url).href,
    status: "sold out",
  },
  {
    title: "Earbud Waveround E100 Blue",
    price: 89.99,
    src: new URL("../assets/img/earbuds/blue-E100.png", import.meta.url).href,
    status: "for sale",
  },
];
