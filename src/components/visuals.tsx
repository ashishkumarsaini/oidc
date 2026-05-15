export function SecureIcon() {
  return (
    <div className="grid size-14 place-items-center rounded-3xl border border-[#E4DFB5] bg-[#C3CC9B]/65">
      <div className="relative h-7 w-6 rounded-b-lg border-2 border-[#1f241c]">
        <span className="absolute -top-4 left-1/2 h-5 w-5 -translate-x-1/2 rounded-t-full border-2 border-b-0 border-[#1f241c]" />
      </div>
    </div>
  );
}

export function AuthFlow() {
  return (
    <div className="mt-8 grid gap-3">
      {["App request", "Provider challenge", "Token exchange", "Session issued"].map(
        (step, index) => (
          <div key={step} className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-[#9AB17A] text-xs font-black">
              {index + 1}
            </span>
            <div className="h-px flex-1 bg-[#E4DFB5]" />
            <span className="min-w-36 rounded-2xl border border-[#E4DFB5] bg-white/50 px-4 py-2 text-sm font-bold">
              {step}
            </span>
          </div>
        ),
      )}
    </div>
  );
}

export function BackgroundShapes() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-28 top-12 size-72 rounded-full bg-[#C3CC9B]/45 blur-3xl" />
      <div className="absolute right-0 top-20 size-96 rounded-full bg-[#E4DFB5]/55 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 size-80 rounded-full bg-[#9AB17A]/25 blur-3xl" />
    </div>
  );
}
