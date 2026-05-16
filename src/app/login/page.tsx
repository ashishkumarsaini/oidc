'use client'
import Link from "next/link";
import { AuthShell, Field, PrimaryButton } from "@/components";
import { SubmitEventHandler, useState } from "react";

export default function LoginPage() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleFormValueChange = (formField: string, formValues: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [formField]: formValues
    }))
  }

  const handleFormSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (formValues.email && formValues.password) {
      setError('');

    }
    else {
      setError('Please enter form credentials');
    }
  }

  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign in to your authentication workspace."
      description="Access provider configuration, user sessions, token usage, and live OIDC diagnostics."
      asideTitle="Secure console access"
      asideText="A polished login experience with workspace context, device trust, and quick support recovery for application teams."
    >
      <form className="grid gap-5" onSubmit={handleFormSubmit}>
        <Field required label="Email" type="email" placeholder="admin@company.com" value={formValues.email} onChange={handleFormValueChange} />
        <Field required label="Password" type="password" placeholder="Enter your password" value={formValues.password} onChange={handleFormValueChange} />
        {/* <SelectField label="Workspace" options={["Production", "Staging", "Customer sandbox"]} /> */}
        <strong className="text-red-500 text-sm">{error}</strong>
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
      <p className="mt-7 text-sm font-bold text-[#1f241c]/60">
        New workspace?{" "}
        <Link href="/register" className="font-black text-[#1f241c] hover:text-[#1f241c]/70">
          Register your OIDC provider
        </Link>
      </p>
    </AuthShell>
  );
}
