import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
