import { Hero } from "./components/Hero/Hero";
import { ProductSection } from "./components/Template/Template";
import { Container } from "./components/Container/Container";

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
