"use client";

export default function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-[#7c5cff] blur-[160px] opacity-20 top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-[#00ffd5] blur-[180px] opacity-20 bottom-[-120px] right-[-100px]" />

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
    </div>
  );
}
