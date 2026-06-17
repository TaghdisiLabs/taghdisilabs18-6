"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      price: "$60",
      name: "Starter Audit",
      features: ["Website analysis", "Bug report", "15min call"],
    },
    {
      price: "$150",
      name: "Growth Plan",
      features: ["Audit + fixes", "Strategy plan", "Consultation"],
    },
    {
      price: "$600",
      name: "Business System",
      features: ["Automation design", "Growth engine", "Optimization"],
    },
    {
      price: "$1500",
      name: "AI Infrastructure",
      features: ["Full AI system", "Scaling architecture", "Enterprise setup"],
    },
  ];

  return (
    <section id="pricing" className="py-32 section-container">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-black text-center mb-16"
      >
        Pricing Plans
      </motion.h2>

      <div className="grid md:grid-cols-4 gap-6">

        {plans.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="
              glass
              p-6
              rounded-2xl
              border
              border-white/10
              hover:border-cyan-400/40
              transition-all
            "
          >
            <div className="text-cyan-400 text-2xl font-bold">
              {p.price}
            </div>

            <div className="font-bold mt-2">{p.name}</div>

            <ul className="mt-4 text-white/60 text-sm space-y-2">
              {p.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>

            <button className="mt-6 w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold">
              Choose
            </button>
          </motion.div>
        ))}

      </div>
    </section>
  );
}