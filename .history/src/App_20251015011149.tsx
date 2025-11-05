import { Hero } from "./components/Hero/Hero";
import { ProductSection } from "./components/ProductSection/ProductSection";
import { Container } from "./components/Container/Container";

import wH110 from "./assets/img/headsets/W-H110.png";
import wH110B from "./assets/img/headsets/W-H110B.png";
import wH110G from "./assets/img/headsets/W-H110G.png";

import blackE100 from "./assets/img/earbuds/black-E100.png";
import blueE100 from "./assets/img/earbuds/blue-E100.png";
import whiteE100 from "./assets/img/earbuds/white-E100.png";

// 👉 Função utilitária para calcular o preço com 15% de desconto
function applyDiscount(price: string, discount = 10) {
  // remove "R$", espaços e troca vírgula por ponto
  const numeric = parseFloat(price.replace("R$", "").replace(",", ".").trim());
  if (isNaN(numeric)) return "";

  const discounted = numeric * (1 - discount / 100);
  // retorna formatado no padrão brasileiro
  return `R$ ${discounted.toFixed(2).replace(".", ",")}`;
}

export default function App() {
  const headsets = [
    {
      image: wH110,
      title: "Headset Waveround H110",
      oldPrice: "R$ 99,99",
    },
    {
      image: wH110B,
      title: "Headset Waveround H110B Bluetooth",
      oldPrice: "R$ 109,99",
    },
    {
      image: wH110G,
      title: "Headset Waveround H110G Gaming Edition",
      oldPrice: "R$ 129,99",
    },
  ].map((item) => ({
    ...item,
    newPrice: applyDiscount(item.oldPrice),
  }));

  const earbuds = [
    {
      image: blackE100,
      title: "Earbud Waveround E100 Black",
      oldPrice: "R$ 99,99",
    },
    {
      image: blueE100,
      title: "Earbud Waveround E100 Blue",
      oldPrice: "R$ 99,99",
    },
    {
      image: whiteE100,
      title: "Earbud Waveround E100 White",
      oldPrice: "R$ 99,99",
    },
  ].map((item) => ({
    ...item,
    newPrice: applyDiscount(item.oldPrice),
  }));

  return (
    <>
      <main>
        <Hero />
      </main>
      <section className="py-2">
        <Container>
          <ProductSection title="Headsets" products={headsets} />
        </Container>
      </section>
      <section className="py-2">
        <Container>
          <ProductSection title="Earbuds" products={earbuds} />
        </Container>
      </section>
    </>
  );
}
