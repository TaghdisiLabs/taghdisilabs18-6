'use client';

export default function BackgroundFX() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      <div className="absolute inset-0 bg-black" />

      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-cyan-400/20 blur-[120px] rounded-full" />

      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#ffffff10_1px,transparent_1px)] bg-[size:30px_30px]" />

    </div>
  );
}
