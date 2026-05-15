import type { ReactNode } from "react";

export function CodeBlock({ children }: { children: ReactNode }) {
  return (
    <pre className="overflow-x-auto rounded-3xl border border-[#E4DFB5] bg-[#1f241c] p-5 text-sm leading-7 text-[#FBE8CE] shadow-xl shadow-[#1f241c]/15">
      <code>{children}</code>
    </pre>
  );
}
