import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="glass rounded-[18px] p-6 transition-all hover:scale-[1.02] duration-300">
      {children}
    </div>
  );
}
