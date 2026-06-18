"use client";

export default function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-[#7c5cff] blur-[160px] opacity-30 animate-pulse top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-[#00ffd5] blur-[160px] opacity-20 animate-pulse bottom-[-200px] right-[-200px]" />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
