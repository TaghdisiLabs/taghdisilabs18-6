'use client';

import CharacterSystem from "./characters/CharacterSystem";
import BackgroundFX from "./BackgroundFX";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      <BackgroundFX />
      <CharacterSystem />

      <div className="relative z-10 text-center max-w-4xl px-6">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          FROM VISION
          <span className="text-blue-400"> TO VELOCITY</span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          MiniTZ AI System — where Scout, Ninja, Builder, Captain
          transform ideas into scalable systems.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-500 rounded-xl">
            Book Discovery Call
          </button>

          <button className="px-6 py-3 border border-white/20 rounded-xl">
            Explore System
          </button>
        </div>

      </div>
    </section>
  );
}
