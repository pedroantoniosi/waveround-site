import { Hero } from "./components/Hero/Hero";
import { ProductSection } from "./components/ProductSection/ProductSection";
import { Container } from "./components/Container/Container";

import wH110 from "./assets/img/headsets/W-H110.png";
import wH110B from "./assets/img/headsets/W-H110B.png";
import wH110G from "./assets/img/headsets/W-H110G.png";

import blackE100 from "./assets/img/earbuds/black-E100.png";
import blueE100 from "./assets/img/earbuds/blue-E100.png";
import whiteE100 from "./assets/img/earbuds/white-E100.png";

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
      oldPrice: "R$ 109,99",
      newPrice: "R$ 84,99",
    },
    {
      image: wH110G,
      title: "Headset Waveround H110G Gaming Edition",
      oldPrice: "R$ 129,99",
      newPrice: "",
    },
  ];

  const earbuds = [
    {
      image: blackE100,
      title: "Earbud Waveround E100 Black",
      oldPrice: "R$ 99,99",
      newPrice: "",
    },
    {
      image: blueE100,
      title: "Earbud Waveround E100 Blue",
      oldPrice: "R$ 99,99",
      newPrice: "",
    },
    {
      image: whiteE100,
      title: "Earbud Waveround E100 White",
      oldPrice: "R$ 99,99",
      newPrice: "",
    },
  ];

  return (
    <>
      <main>
        <Hero />
      </main>
      <section className="py-2">
        <Container>
          <ProductSection title="Melhores Headsets" products={headsets} />
        </Container>
      </section>
      <section className="py-2">
        <Container>
          <ProductSection title="Melhores Earbuds" products={earbuds} />
        </Container>
      </section>
    </>
  );
}
