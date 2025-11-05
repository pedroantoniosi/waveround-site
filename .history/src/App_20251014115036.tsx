import { Hero } from "./components/Hero/Hero";
import { Template } from "./components/Template/Template";
import { Card } from "./components/Card/Card";

function App() {
  return (
    <>
      <div>
        <Template>
          <Card />
        </Template>
      </div>
    </>
  );
}

export default App;
