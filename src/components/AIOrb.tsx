"use client";

import { motion } from "framer-motion";

export default function AIOrb() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-600/20 via-cyan-400/20 to-lime-400/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute w-[300px] h-[300px] rounded-full bg-cyan-400/20 blur-2xl"
      />
    </div>
  );
}