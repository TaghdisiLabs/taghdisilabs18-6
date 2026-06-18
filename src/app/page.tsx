import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import CTA from "@/components/cta/CTA";
import MiniTZ from "@/components/mini-tz/MiniTZ";
import BackgroundFX from "@/components/background/BackgroundFX";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <BackgroundFX />

      <Hero />

      <div className="space-y-32 py-24">
        <Services />
        <Portfolio />
        <CTA />
      </div>

      <MiniTZ />
    </main>
  );
}
