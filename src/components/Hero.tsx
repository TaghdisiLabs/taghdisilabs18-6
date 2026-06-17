"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">

      <div className="max-w-3xl">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight glow-text"
        >
          Build Intelligent
          <span className="text-cyan-400"> Growth Systems</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/60 mt-6 text-lg"
        >
          TaghdisiLabs designs AI-driven systems that scale businesses automatically with precision and clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex gap-4 justify-center"
        >

          <button className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition">
            Book Strategy Call
          </button>

          <button className="px-6 py-3 rounded-xl glass text-white hover:bg-white/10 transition">
            Explore Systems
          </button>

        </motion.div>

      </div>

    </section>
  );
}