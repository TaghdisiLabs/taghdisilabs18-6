"use client";

import { motion } from "framer-motion";

export default function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Dark base */}
      <div className="absolute inset-0 bg-[#05060a]" />

      {/* Soft ambient glow (OpenAI style) */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[700px] h-[700px] bg-cyan-500/10 blur-[160px] rounded-full top-[-250px] left-[-200px]"
      />

      <motion.div
        animate={{ scale: [1.1, 0.9, 1.1] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute w-[800px] h-[800px] bg-purple-500/10 blur-[180px] rounded-full bottom-[-300px] right-[-250px]"
      />

      {/* Subtle noise layer */}
      <div className="absolute inset-0 opacity-[0.05] noise" />
    </div>
  );
}