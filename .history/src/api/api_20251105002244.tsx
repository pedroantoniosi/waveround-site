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
    src: "/assets/img/shop/headsets/headset-alpha-pro.png",
  },
  {
    title: "Headset Waveround H110B",
    price: 109.99,
    src: "/assets/img/shop/headsets/headset-storm-rgb.png",
  },
  {
    title: "HHeadset Waveround H110 Gamer",
    price: 129.99,
    src: "/assets/img/shop/headsets/headset-vortex-x7.png",
  },

  // 🎵 Earbuds
  {
    title: "Earbud Waveround E100 Black",
    price: 89.99,
    src: "/assets/img/shop/earbuds/earbuds-airflow.png",
  },
  {
    title: "Earbud Waveround E100 Black",
    price: 89.99,
    src: "/assets/img/shop/earbuds/earbuds-neo-lite.png",
  },
  {
    title: "Earbud Waveround E100 Black",
    price: 89.99,
    src: "/assets/img/shop/earbuds/earbuds-sonic-x.png",
  },
];
