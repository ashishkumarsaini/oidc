import type { ReactNode } from "react";
import Link from "next/link";

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[#9AB17A] px-6 py-3 text-sm font-black text-[#1f241c] shadow-xl shadow-[#9AB17A]/30 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#9AB17A]/40"
    >
      {children}
    </Link>
  );
}

export function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-[#E4DFB5] bg-white/50 px-6 py-3 text-sm font-black text-[#1f241c] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#E4DFB5]/60"
    >
      {children}
    </Link>
  );
}

export function PrimaryButton({ children }: { children: ReactNode }) {
  return (
    <button className="h-12 w-full rounded-2xl bg-[#9AB17A] px-5 text-sm font-black text-[#1f241c] shadow-lg shadow-[#9AB17A]/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#9AB17A]/35">
      {children}
    </button>
  );
}
