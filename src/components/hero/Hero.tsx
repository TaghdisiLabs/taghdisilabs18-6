"use client";

import Button from "@/components/ui/Button";
import { MotionDiv } from "@/components/motion/Motion";

export default function Hero() {
  return (
    <section className="section text-center relative">
      <MotionDiv>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Build the Future with <span className="gradient-text">AI Systems</span>
        </h1>
      </MotionDiv>

      <MotionDiv>
        <p className="mt-6 text-white/60 max-w-xl mx-auto">
          We design cinematic AI-driven digital experiences that feel alive,
          adaptive, and intelligent.
        </p>
      </MotionDiv>

      <MotionDiv>
        <div className="mt-10 flex justify-center gap-4">
          <Button>Start Project</Button>
          <button className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40">
            Watch Demo
          </button>
        </div>
      </MotionDiv>
    </section>
  );
}
