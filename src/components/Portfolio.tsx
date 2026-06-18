'use client';

import { motion } from "framer-motion";

const items = [
  "AI Systems",
  "Automation Engines",
  "SaaS Platforms",
  "Startup Launches"
];

export default function Portfolio() {
  return (
    <section className="py-24 px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        Our Work
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10"
          >
            <h3 className="text-2xl font-semibold">{item}</h3>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
