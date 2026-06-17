import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      <div className="space-y-40 px-6 md:px-0">
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}