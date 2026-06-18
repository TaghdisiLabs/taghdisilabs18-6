'use client';

import { motion } from "framer-motion";

export default function CharacterSystem() {
  return (
    <div className="absolute inset-0 pointer-events-none">

      <motion.img
        src="/scoutT.png"
        className="w-20 absolute left-10 top-24"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.img
        src="/ninjaT.png"
        className="w-20 absolute right-10 top-40"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      <motion.img
        src="/builderT.png"
        className="w-24 absolute left-1/3 bottom-20"
        animate={{ rotate: [0, 1, -1, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.img
        src="/captainT.png"
        className="w-24 absolute right-1/3 bottom-28"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

    </div>
  );
}
