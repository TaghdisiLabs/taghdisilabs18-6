'use client';

import { motion } from "framer-motion";

const services = [
  { title: "AI Automation", desc: "Build intelligent workflows that scale businesses." },
  { title: "Growth Systems", desc: "Turn traffic into revenue with structured systems." },
  { title: "Web Engineering", desc: "High-performance Next.js production systems." },
];

export default function Services() {
  return (
    <section className="py-24 px-6 relative z-10">
      
      <h2 className="text-4xl font-bold text-center mb-12">
        What We Build
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
