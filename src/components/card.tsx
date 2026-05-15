import type { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`rounded-[24px] border border-[#E4DFB5]/80 bg-white/45 shadow-2xl shadow-[#9AB17A]/10 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#E4DFB5] bg-[#FBE8CE]/70 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#1f241c]/70">
      {children}
    </span>
  );
}
