import { BRAND } from "@/lib/brand";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 font-bold text-xl">
      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#7c5cff] to-[#00ffd5] animate-pulse" />
      {BRAND.name}
    </div>
  );
}
