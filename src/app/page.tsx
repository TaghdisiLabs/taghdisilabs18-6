import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import CTA from "@/components/cta/CTA";
import BackgroundFX from "@/components/background/BackgroundFX";
import MiniTZ from "@/components/mini-tz/MiniTZ";

export default function Home() {
  return (
    <main className="relative text-white">
      <BackgroundFX />

      <Hero />
      <Services />
      <Portfolio />
      <CTA />

      <MiniTZ />
    </main>
  );
}
