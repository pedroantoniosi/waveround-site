// src/api/api.tsx

export interface Product {
  title: string;
  price: number;
  src: string;
}
export const products: Product[] = [
  // 🎧 Headsets
  {
    title: "Headset Waveround H110o",
    price: 99.99,
    src: new URL("../assets/img/headsets/W-H110.png", import.meta.url).href,
  },
  {
    title: "Headset Waveround H110B",
    price: 109.99,
    src: new URL("../assets/img/headsets/W-H110B.png", import.meta.url).href,
  },
  {
    title: "HHeadset Waveround H110X Gamer",
    price: 129.99,
    src: new URL("../assets/img/headsets/W-H110G.png", import.meta.url).href,
  },

  // 🎵 Earbuds
  {
    title: "Earbud Waveround E100 White",
    price: 89.99,
    src: new URL("../assets/img/earbuds/white-E100.png", import.meta.url).href,
  },
  {
    title: "Earbud Waveround E100 Black",
    price: 89.99,
    src: new URL("../assets/img/earbuds/black-E100.png", import.meta.url).href,
  },
  {
    title: "Earbud Waveround E100 Blue",
    price: 89.99,
    src: "/assets/img/shop/earbuds/earbuds-sonic-x.png",
  },
];
