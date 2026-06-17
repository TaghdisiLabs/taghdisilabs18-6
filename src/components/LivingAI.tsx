"use client";

import { motion } from "framer-motion";

export default function LivingAI() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* drifting AI orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-cyan-500/10 blur-3xl rounded-full"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* subtle floating grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg,#fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}