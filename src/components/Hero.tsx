'use client';

import BackgroundFX from "./BackgroundFX";
import CharacterSystem from "./CharacterSystem";

export default function HeroV4() {
  return (
    <section className="h-screen flex items-center justify-center relative">

      <BackgroundFX />
      <CharacterSystem />

      <div className="relative z-10 text-center max-w-5xl px-6">

        <div className="text-blue-400 tracking-widest text-sm">
          MINI TZ V4 SYSTEM
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mt-4">
          FROM IDEA
          <span className="text-blue-400"> TO VIRAL SYSTEM</span>
        </h1>

        <p className="text-gray-400 mt-6">
          Scroll to activate AI agents
        </p>

      </div>

    </section>
  );
}
