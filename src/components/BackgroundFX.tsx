'use client';

export default function BackgroundFX() {
  return (
    <div className="absolute inset-0">

      {/* Gradient Core */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050816] to-black" />

      {/* Glow Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 
        bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
        bg-[size:40px_40px]" />

    </div>
  );
}
