"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] w-6 h-6 rounded-full blur-sm bg-gradient-to-r from-[#7c5cff] to-[#00ffd5] opacity-70"
      style={{
        transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
      }}
    />
  );
}
