"use client";

import { MotionDiv } from "@/components/motion/Motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <div className="text-center max-w-4xl px-4">
        <MotionDiv>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            We Build <span className="gradient-text">Living AI Systems</span>
          </h1>
        </MotionDiv>

        <MotionDiv>
          <p className="text-white/60 mt-6 text-lg">
            Interfaces that think. Designs that move. Systems that feel alive.
          </p>
        </MotionDiv>

        <MotionDiv>
          <button className="mt-10 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
            Enter System
          </button>
        </MotionDiv>
      </div>

      {/* glowing background core */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-[#7c5cff] blur-[140px] opacity-20 top-20 left-1/4" />
        <div className="absolute w-[400px] h-[400px] bg-[#00ffd5] blur-[140px] opacity-20 bottom-20 right-1/4" />
      </div>
    </section>
  );
}
