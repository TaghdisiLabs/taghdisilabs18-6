"use client";

import { motion } from "framer-motion";

export default function AgentCard({
  name,
  role,
  status,
}: {
  name: string;
  role: string;
  status: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass p-6 rounded-2xl border border-white/10"
    >
      <div className="flex justify-between items-center">
        <h3 className="font-bold">{name}</h3>

        <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
          {status}
        </span>
      </div>

      <p className="text-slate-400 mt-2">{role}</p>
    </motion.div>
  );
}