import About from "./widget/About";
import Contact from "./widget/Contact";
import Hero from "./widget/Hero";
import Impact from "./widget/Impact";
import OurSolutions from "./widget/Solution";

export default function Home() {
  return (
    <>
      <Hero />
      <Impact />
      <About />
      <OurSolutions />
      <Contact />
    </>
  );
}
