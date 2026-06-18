'use client';

import BackgroundFX from "./BackgroundFX";
import CharacterSystem from "./characters/CharacterSystem";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">

      <BackgroundFX />
      <CharacterSystem />

      <div className="relative z-10 text-center px-6 max-w-5xl">

        <div className="text-sm text-blue-400 tracking-widest">
          MINI TZ SYSTEM V3
        </div>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight mt-4">
          BUILD
          <span className="text-blue-400"> INTELLIGENT</span>
          <br />
          SYSTEMS
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          From idea → AI agents → automation → scale
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-500 rounded-xl">
            Start System
          </button>

          <button className="px-8 py-4 border border-white/20 rounded-xl">
            Watch Demo
          </button>
        </div>

      </div>
    </section>
  );
}
