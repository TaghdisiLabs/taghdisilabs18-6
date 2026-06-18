import Scene from "@/components/motion/Scene";

const projects = [
  { title: "AI Automation Engine", desc: "Self-running business logic" },
  { title: "Cinematic UI System", desc: "Motion-first interface design" },
  { title: "Brand Intelligence Core", desc: "Adaptive identity system" },
];

export default function Portfolio() {
  return (
    <Scene>
      <section className="section">
        <h2 className="text-4xl font-bold text-center mb-12">
          Selected Systems
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl glass hover:scale-105"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-white/60 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Scene>
  );
}
