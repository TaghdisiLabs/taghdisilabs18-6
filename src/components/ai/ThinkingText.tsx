"use client";

import { useEffect, useState } from "react";

export default function ThinkingText({
  text,
}: {
  text: string;
}) {
  const [out, setOut] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setOut(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{out}</span>;
}
