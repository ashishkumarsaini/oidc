import type { ReactNode } from "react";
import { Badge, GlassCard } from "./card";
import { PageShell } from "./shell";
import { AuthFlow, BackgroundShapes } from "./visuals";

export function AuthShell({
  title,
  eyebrow,
  description,
  children,
  asideTitle,
  asideText,
}: {
  title: string;
  eyebrow: string;
  description: string;
  children: ReactNode;
  asideTitle: string;
  asideText: string;
}) {
  return (
    <PageShell>
      <main className="relative overflow-hidden px-5 py-12 sm:px-8 lg:py-20">
        <BackgroundShapes />
        <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1fr]">
          <div className="order-2 p-7 lg:order-1 lg:p-9">
            <div className="flex items-start justify-between gap-4 border-b border-[#E4DFB5] pb-8">
              <div>
                <Badge>Identity Layer</Badge>
                <h2 className="mt-5 text-3xl font-black tracking-tight">{asideTitle}</h2>
              </div>
            </div>
            <p className="mt-7 text-base leading-8 text-[#1f241c]/70">{asideText}</p>
            <AuthFlow />
          </div>
          <GlassCard className="order-1 p-7 lg:order-2 lg:p-10">
            <Badge>{eyebrow}</Badge>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
            <p className="mt-4 max-w-xl text-base leading-8 text-[#1f241c]/70">{description}</p>
            <div className="mt-8">{children}</div>
          </GlassCard>
        </div>
      </main>
    </PageShell>
  );
}
