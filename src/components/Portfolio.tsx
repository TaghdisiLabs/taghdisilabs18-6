"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    "AI Automation System",
    "SaaS Growth Engine",
    "E-commerce Optimization",
    "Brand Intelligence Platform",
  ];

  return (
    <section id="portfolio" className="py-32 section-container">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-black text-center mb-16"
      >
        Proven <span className="gradient-text">Systems</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="
              glass
              p-10
              rounded-2xl
              border
              border-white/10
              hover:border-cyan-400/40
              transition-all
            "
          >
            <div className="text-xl font-bold">{p}</div>
            <p className="text-white/60 mt-3">
              Designed for automation, scale and revenue acceleration.
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}