"use client";

import { MotionDiv } from "@/components/motion/Motion";

const projects = [
  { title: "AI Dashboard", desc: "Realtime intelligence system" },
  { title: "Automation Engine", desc: "Workflow AI orchestration" },
  { title: "Brand System", desc: "Cinematic identity layer" },
  { title: "Web AI OS", desc: "Full stack AI interface" },
];

export default function Portfolio() {
  return (
    <section className="section">
      <MotionDiv>
        <h2 className="text-4xl font-bold text-center mb-10">
          Selected Work
        </h2>
      </MotionDiv>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <MotionDiv key={i}>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-white/60 mt-2">{p.desc}</p>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
