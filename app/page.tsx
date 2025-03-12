import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
