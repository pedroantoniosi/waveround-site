import Hero from "./components/Hero/Hero";
import ProductSection from "./components/ProductSection/ProductSection";
import ProductCard from "./components/ProductCard/ProductCard";
// import Template from "./components/Template/Template";

export default function App() {
  return (
    <>
      <Hero title="Waveround Onde o som encontra a perfeição" />
      <ProductSection sectionTitle="Headsets">
        <ProductCard category="headsets" />
      </ProductSection>
      <ProductSection sectionTitle="Earbuds">
        <ProductCard category="earbuds" />
      </ProductSection>
    </>
  );
}
