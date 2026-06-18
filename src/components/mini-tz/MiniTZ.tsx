"use client";

import { useEffect, useState } from "react";

const lines = [
  "MiniTZ is watching...",
  "AI thinking...",
  "optimizing reality...",
  "designing experience...",
  "hello human 👋",
];

export default function MiniTZ() {
  const [text, setText] = useState(lines[0]);

  useEffect(() => {
    const i = setInterval(() => {
      setText(lines[Math.floor(Math.random() * lines.length)]);
    }, 3000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 glass px-4 py-2 rounded-xl text-sm text-white/80">
      🧠 MiniTZ: {text}
    </div>
  );
}
