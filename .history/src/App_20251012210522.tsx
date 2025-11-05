import { Hero } from "./components/Hero/Hero";
import { Template } from "./components/Template/Template";
import { ProductCard } from "./components/Card/Card";

// import { Container } from "./components/Container/Container";

function App() {
  return (
    <>
      <Hero />
      <div>
        <h2 className="section-title">BEST SELLER</h2>
        <Template>
          <Card />
        </Template>
      </div>
      <div>
        <h2 className="section-title">BEST SELLER</h2>
        <Template>
          <Card />
        </Template>
      </div>
    </>
  );
}

export default App;
