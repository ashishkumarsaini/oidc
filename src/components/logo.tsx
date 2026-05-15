import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Ashish OIDC home">
      <span className="relative grid size-11 place-items-center rounded-2xl bg-[#9AB17A] text-sm font-black text-[#1f241c] shadow-lg shadow-[#9AB17A]/30">
        <span className="absolute inset-1 rounded-xl border border-[#FBE8CE]/70" />
        AO
      </span>
      <span>
        <span className="block text-base font-black tracking-tight text-[#1f241c]">
          Ashish OIDC
        </span>
        <span className="block text-xs font-semibold text-[#1f241c]/60">
          Support & Authentication
        </span>
      </span>
    </Link>
  );
}

export function LogoText() {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-10 place-items-center rounded-2xl bg-[#9AB17A] text-sm font-black text-[#1f241c]">
        AO
      </span>
      <span className="text-lg font-black">Ashish OIDC</span>
    </div>
  );
}
