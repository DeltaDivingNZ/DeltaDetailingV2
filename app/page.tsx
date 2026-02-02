import Hero from "../components/Hero";
import Services from "../components/Services";
import Packages from "../components/Packages";
import Gallery from "../components/Gallery";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Packages />
      <Gallery />
      <CTA />
    </main>
  );
}
