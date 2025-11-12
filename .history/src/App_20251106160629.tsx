import Hero from "./components/Hero/Hero";
import ProductSection from "./components/ProductSection/ProductSection";
import ProductCard from "./components/ProductCard/ProductCard";
// import Template from "./components/Template/Template";

export default function App() {
  return (
    <>
      <Hero />
      <ProductSection sectionTitle="Headsets">
        <ProductList category="headsets" />
      </ProductSection>
      <ProductSection sectionTitle="Earbuds">
        <ProductList category="earbuds" />
      </ProductSection>
    </>
  );
}
