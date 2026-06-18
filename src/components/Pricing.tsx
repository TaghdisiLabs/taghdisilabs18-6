'use client';

import { motion } from "framer-motion";

const plans = [
  { name: "Starter", price: "$49", features: ["Landing Page", "Basic UI", "Email Setup"] },
  { name: "Growth", price: "$199", features: ["Full Website", "Animations", "AI Integration"] },
  { name: "Scale", price: "$499", features: ["Full System", "Automation", "Deployment"] },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        Pricing
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {plans.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-3xl font-bold my-4">{p.price}</p>

            <ul className="space-y-2 text-gray-400">
              {p.features.map((f, j) => (
                <li key={j}>• {f}</li>
              ))}
            </ul>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
