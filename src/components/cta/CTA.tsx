"use client";

import Button from "@/components/ui/Button";
import { MotionDiv } from "@/components/motion/Motion";

export default function CTA() {
  return (
    <section className="section text-center">
      <MotionDiv>
        <h2 className="text-5xl font-bold">
          Let’s Build Something <span className="gradient-text">Iconic</span>
        </h2>
      </MotionDiv>

      <MotionDiv>
        <p className="text-white/60 mt-6 max-w-xl mx-auto">
          Your brand deserves a system, not just a website. We build living AI-driven experiences.
        </p>
      </MotionDiv>

      <MotionDiv>
        <div className="mt-8">
          <Button>Start Now</Button>
        </div>
      </MotionDiv>
    </section>
  );
}
