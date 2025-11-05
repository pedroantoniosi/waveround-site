import { Hero } from "./components/Hero/Hero";
import { Template } from "./components/Template/Template";
import { Container } from "./components/Container/Container";

export default function App() {
  return (
    <>
      <main>
        <Hero />
      </main>
      <section className="py-2">
        <Container>
          <Template title="Headsets" />
        </Container>
      </section>
      <section className="py-2">
        <Container>
          <Template title="Earbuds" />
        </Container>
      </section>
    </>
  );
}
