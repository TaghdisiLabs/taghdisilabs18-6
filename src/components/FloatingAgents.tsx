"use client";

import { motion } from "framer-motion";

export default function FloatingAgents() {
  return (
    <>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="fixed bottom-20 left-10 w-16 h-16 rounded-full bg-cyan-400/30 blur-xl"
      />

      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="fixed top-40 right-20 w-20 h-20 rounded-full bg-blue-500/30 blur-xl"
      />

      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="fixed bottom-40 right-40 w-24 h-24 rounded-full bg-lime-400/20 blur-xl"
      />
    </>
  );
}