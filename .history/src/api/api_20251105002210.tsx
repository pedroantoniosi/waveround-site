// src/api/api.tsx

export interface Product {
  title: string;
  price: number;
  src: string;
}
export const products: Product[] = [
  // 🎧 Headsets
  {
    title: "Headset Alpha Pro",
    price: 99.99,
    src: "/assets/img/shop/headsets/headset-alpha-pro.png",
  },
  {
    title: "Headset Storm RGB",
    price: 109.99,
    src: "/assets/img/shop/headsets/headset-storm-rgb.png",
  },
  {
    title: "Headset Vortex X7",
    price: 129.99,
    src: "/assets/img/shop/headsets/headset-vortex-x7.png",
  },

  // 🎵 Earbuds
  {
    title: "Earbuds AirFlow",
    price: 89.99,
    src: "/assets/img/shop/earbuds/earbuds-airflow.png",
  },
  {
    title: "Earbuds Neo Lite",
    price: 89.99,
    src: "/assets/img/shop/earbuds/earbuds-neo-lite.png",
  },
  {
    title: "Earbuds Sonic X",
    price: 89.99,
    src: "/assets/img/shop/earbuds/earbuds-sonic-x.png",
  },
];
