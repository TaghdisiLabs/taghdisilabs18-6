import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-[1200px] mx-auto px-4", className)}>
      {children}
    </div>
  );
}
