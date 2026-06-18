'use client';

import { motion } from "framer-motion";

export default function CharacterSystem() {
  return (
    <div className="absolute inset-0 pointer-events-none">

      <motion.img
        src="/scoutT.png"
        className="w-20 absolute left-10 top-24"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.img
        src="/ninjaT.png"
        className="w-20 absolute right-16 top-40"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <motion.img
        src="/builderT.png"
        className="w-24 absolute left-1/3 bottom-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.img
        src="/captainT.png"
        className="w-24 absolute right-1/3 bottom-32"
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

    </div>
  );
}
