import Link from "next/link";
import { AuthShell, Field, PrimaryButton, SelectField } from "@/components";

export default function LoginPage() {
  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign in to your authentication workspace."
      description="Access provider configuration, user sessions, token usage, and live OIDC diagnostics."
      asideTitle="Secure console access"
      asideText="A polished login experience with workspace context, device trust, and quick support recovery for application teams."
    >
      <form className="grid gap-5">
        <Field label="Email address" type="email" placeholder="admin@company.com" />
        <Field label="Password" type="password" placeholder="Enter your password" />
        <SelectField label="Workspace" options={["Production", "Staging", "Customer sandbox"]} />
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <label className="flex items-center gap-2 font-bold text-[#1f241c]/60">
            <input type="checkbox" className="size-4 accent-[#9AB17A]" />
            Remember this device
          </label>
          <Link href="/documentation" className="font-black text-[#1f241c] hover:text-[#1f241c]/70">
            Need help?
          </Link>
        </div>
        <PrimaryButton>Sign in securely</PrimaryButton>
      </form>
      <div className="mt-7 rounded-2xl border border-[#E4DFB5] bg-[#C3CC9B]/35 p-4 text-sm leading-6 text-[#1f241c]/70">
        New workspace?{" "}
        <Link href="/register" className="font-black text-[#1f241c] hover:text-[#1f241c]/70">
          Register your OIDC provider
        </Link>
      </div>
    </AuthShell>
  );
}
