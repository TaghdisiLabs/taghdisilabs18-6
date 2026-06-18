'use client';

export default function BackgroundFX() {
  return (
    <div className="absolute inset-0">

      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050816] to-black" />

      <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-blue-500/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-cyan-400/20 blur-[150px] rounded-full" />

      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />

    </div>
  );
}
