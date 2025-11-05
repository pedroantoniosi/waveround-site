import { Hero } from "./components/Hero/Hero";
import { Template } from "./components/Template/Template";

export default function App() {
  return (
    <>
      <Hero />
      <section className="py-2">
        <Template title="Headsets" />
      </section>
      <section className="py-2">
        <Template title="Earbuds" />
      </section>
    </>
  );
}
