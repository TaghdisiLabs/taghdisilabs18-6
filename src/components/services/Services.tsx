"use client";

import ScrollFade from "@/components/motion/ScrollFade";

const items = [
  { title: "AI Automation", desc: "Self-running workflows" },
  { title: "UI Systems", desc: "Living interfaces" },
  { title: "Brand Intelligence", desc: "Identity systems" },
];

export default function Services() {
  return (
    <section className="section">
      <ScrollFade>
        <h2 className="text-4xl font-bold text-center mb-12">
          Core Systems
        </h2>
      </ScrollFade>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <ScrollFade key={i}>
            <div className="p-6 rounded-2xl glass hover:scale-105 transition">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-white/60 mt-2">{item.desc}</p>
            </div>
          </ScrollFade>
        ))}
      </div>
    </section>
  );
}
