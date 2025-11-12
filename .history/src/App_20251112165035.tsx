import Hero from "./components/Hero/Hero";
import Sponsors from "./components/Sponsors/Sponsors";
import ProductSection from "./components/ProductSection/ProductSection";
import ProductCard from "./components/ProductCard/ProductCard";
// import Template from "./components/Template/Template";

export default function App() {
  return (
    <>
      <div className="background-banner">
        <Hero title="High performance starts with precision audio" />
        <Sponsors />
      </div>
      <ProductSection sectionTitle="Headsets">
        <ProductCard category="headsets" />
      </ProductSection>
      <ProductSection sectionTitle="Earbuds">
        <ProductCard category="earbuds" />
      </ProductSection>
    </>
  );
}
