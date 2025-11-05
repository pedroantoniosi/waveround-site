import { Hero } from "./components/Hero/Hero";
import (Container) from "./components/Container/Container"
import { Template } from "./components/Template/Template";
// import { Card } from "./components/Card/Card";

function App() {
  return (
    <>
      <Hero />
      <Template>
        <h2>Olá mundo</h2>
        <h2>Olá mundo</h2>
        <h2>Olá mundo</h2>
      </Template>
    </>
  );
}

export default App;
