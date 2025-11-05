import { Hero } from "./components/Hero/Hero";
import { ProductSection } from "./components/ProductSection/ProductSection";

import wH110 from "./assets/img/headsets/W-H110.png";
import wH110B from "./assets/img/headsets/W-H110B.png";
import wH110G from "./assets/img/headsets/W-H110G.png";

import eE100 from "./assets/img/earbuds/black-E100.png";
import eE200 from "./assets/img/earbuds/blue-E100.png";
import eE200 from "./assets/img/earbuds/blue-E100.png";

export default function App() {
  const headsets = [
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
  ];

  const earbuds = [
    {
      image: blackE100,
      title: "Earbud Waveround E100",
      oldPrice: "R$ 129,99",
      newPrice: "R$ 109,99",
    },
    {
      image: blueE100,
      title: "Earbud Waveround E200 Pro",
      oldPrice: "R$ 149,99",
      newPrice: "R$ 129,99",
    },
    {
      image: whiteE100,
      title: "Earbud Waveround E200 Pro",
      oldPrice: "R$ 149,99",
      newPrice: "R$ 129,99",
    },
  ];

  return (
    <>
      <Hero />
      <ProductSection title="Melhores Headsets" products={headsets} />
      <ProductSection title="Melhores Earbuds" products={earbuds} />
    </>
  );
}
