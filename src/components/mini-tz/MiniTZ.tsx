"use client";

import { useEffect, useState } from "react";

const thoughts = [
  "I am observing your system…",
  "UI coherence increasing…",
  "design intelligence active",
  "motion layer stabilizing",
  "TaghdisiLabs is alive 🧠",
  "MiniTZ is learning from users",
];

export default function MiniTZ() {
  const [msg, setMsg] = useState(thoughts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsg(thoughts[Math.floor(Math.random() * thoughts.length)]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 glass px-4 py-2 rounded-xl text-sm text-white/80 animate-pulse">
      🤖 MiniTZ: {msg}
    </div>
  );
}
