import Scene from "@/components/motion/Scene";

export default function CTA() {
  return (
    <Scene>
      <section className="text-center py-32">
        <h2 className="text-5xl font-bold">
          Build Something That Feels Alive
        </h2>

        <p className="text-white/60 mt-6">
          Systems, interfaces, and brands powered by motion intelligence
        </p>

        <button className="mt-10 px-10 py-4 bg-white text-black rounded-xl font-semibold hover:scale-105">
          Start Now
        </button>
      </section>
    </Scene>
  );
}
