import type { ReactNode } from "react";
import Link from "next/link";
import { Logo, LogoText } from "./logo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/documentation", label: "Documentation" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/login", label: "Login" },
];

const footerGroups: { title: string; links: string[] }[] = [
  { title: "Product", links: ["Dashboard", "Clients", "Sessions", "Pricing"] },
  { title: "Developers", links: ["API Docs", "SDKs", "Webhooks", "Status"] },
  { title: "Company", links: ["Security", "Support", "Terms", "Privacy"] },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#E4DFB5]/70 bg-[#FBE8CE]/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 rounded-full border border-[#E4DFB5] bg-white/35 p-1 shadow-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-[#1f241c]/70 transition hover:bg-[#E4DFB5]/70 hover:text-[#1f241c]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/register"
          className="rounded-full bg-[#9AB17A] px-5 py-2.5 text-sm font-black text-[#1f241c] shadow-lg shadow-[#9AB17A]/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#9AB17A]/35"
        >
          Start Free
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#E4DFB5] bg-[#1f241c] px-5 py-12 text-[#FBE8CE] sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_0.7fr_0.7fr_0.7fr]">
        <div>
          <LogoText />
          <p className="mt-4 max-w-md text-sm leading-7 text-[#FBE8CE]/70">
            OIDC authentication infrastructure for developers and security owners who
            need reliable login, sessions, tokens, and debugging tools.
          </p>
        </div>
        {footerGroups.map(({ title, links }) => (
          <div key={title}>
            <p className="font-black text-[#FBE8CE]">{title}</p>
            <div className="mt-4 grid gap-3 text-sm text-[#FBE8CE]/65">
              {links.map((link) => (
                <span key={link}>{link}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FBE8CE] text-[#1f241c]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
