"use client"
import Link from "next/link";
import { AuthShell, Field, PrimaryButton } from "@/components";
import { useState } from "react";

export default function RegisterPage() {
  const [formValues, setFormValues] = useState({
    fullName: '',
    organization: '',
    email: '',
    password: '',
    redirectUri: '',
  })

  const handleFormValueChange = (formField: string, formValues: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [formField]: formValues
    }));
  };


  return (
    <AuthShell
      eyebrow="Start a tenant"
      title="Create your OIDC support workspace."
      description="Reserve an issuer, create your first app client, and start authenticating users with OIDC."
      asideTitle="Guided application onboarding"
      asideText="Launch with safe defaults for PKCE, redirect URI validation, token signing, session policies, and event monitoring."
    >
      <form className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" placeholder="Full Name" required value={formValues.fullName} onChange={handleFormValueChange} />
          <Field label="Organization" placeholder="Organization" required value={formValues.organization} onChange={handleFormValueChange} />
        </div>
        <Field label="Work email" type="email" placeholder="Email Address" required value={formValues.email} onChange={handleFormValueChange} />
        {/* <Field label="Issuer slug" placeholder="northstar-auth" /> */}
        {/* <SelectField label="Application type" options={["Web application", "Single-page app", "Mobile app", "Machine-to-machine"]} /> */}
        <Field label="Password" type="password" placeholder="Create a strong password" required value={formValues.password} onChange={handleFormValueChange} />
        <Field label="Redirect URI" type="url" placeholder="http://xyz.com/authenticate/callback" required value={formValues.redirectUri} onChange={handleFormValueChange} />
        <label className="flex items-start gap-3 rounded-2xl border border-[#E4DFB5] bg-[#C3CC9B]/35 p-4 text-sm leading-6 text-[#1f241c]/70">
          <input type="checkbox" className="mt-1 size-4 accent-[#9AB17A]" required />
          <span>
            I agree to keep redirect URIs, secrets, and signing keys controlled by my
            organization&apos;s security policy.
          </span>
        </label>
        <PrimaryButton>Create workspace</PrimaryButton>
      </form>
      <p className="mt-7 text-sm font-bold text-[#1f241c]/60">
        Already registered?{" "}
        <Link href="/login" className="font-black text-[#1f241c] hover:text-[#1f241c]/70">
          Sign in
        </Link>
      </p>
    </AuthShell>
  );
}
