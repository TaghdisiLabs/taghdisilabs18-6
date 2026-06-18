'use client';

import { motion } from "framer-motion";

const steps = [
  { title: "1. Scout AI", desc: "Analyzes opportunity landscape" },
  { title: "2. Ninja AI", desc: "Executes automation flows" },
  { title: "3. Builder AI", desc: "Constructs scalable systems" },
  { title: "4. Captain AI", desc: "Controls growth strategy" },
];

export default function Services() {
  return (
    <section className="py-32 px-6">

      <h2 className="text-4xl font-bold text-center mb-16">
        How MiniTZ Works
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">

        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <h3 className="text-xl font-semibold text-blue-400">
              {s.title}
            </h3>
            <p className="text-gray-400 mt-2">{s.desc}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
