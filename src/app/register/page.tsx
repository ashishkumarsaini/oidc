"use client"
import Link from "next/link";
import { AuthShell, Field, PrimaryButton } from "@/components";
import { SubmitEventHandler, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/provider/auth-provider";

export default function RegisterPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated, router]);

  const [formValues, setFormValues] = useState({
    full_name: '',
    organization: '',
    email: '',
    password: '',
    redirect_uri: '',
  });
  const [error, setError] = useState('');

  const handleFormValueChange = async (formField: string, formValues: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [formField]: formValues
    }));
  };

  const handleFormSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!formValues.email || !formValues.full_name || !formValues.organization || !formValues.password || !formValues.redirect_uri) {
      setError('All fields are required');
      return;
    }

    const response = await fetch('/api/user/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues)
    });

    const data = await response.json();

    if (data.success) {
      router.push('/login')
    } else {
      setError(data.message || 'Unable to register user.');
    }
  }

  return (
    <AuthShell
      eyebrow="Start a tenant"
      title="Create your OIDC support workspace."
      description="Reserve an issuer, create your first app client, and start authenticating users with OIDC."
      asideTitle="Guided application onboarding"
      asideText="Launch with safe defaults for PKCE, redirect URI validation, token signing, session policies, and event monitoring."
    >
      <form className="grid gap-5" onSubmit={handleFormSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full Name" placeholder="Full Name" required value={formValues.full_name} onChange={handleFormValueChange} />
          <Field label="Organization" placeholder="Organization" required value={formValues.organization} onChange={handleFormValueChange} />
        </div>
        <Field label="Email" type="email" placeholder="Email Address" required value={formValues.email} onChange={handleFormValueChange} />
        {/* <Field label="Issuer slug" placeholder="northstar-auth" /> */}
        {/* <SelectField label="Application type" options={["Web application", "Single-page app", "Mobile app", "Machine-to-machine"]} /> */}
        <Field label="Password" type="password" placeholder="Create a strong password" required value={formValues.password} onChange={handleFormValueChange} />
        <Field label="Redirect URI" type="url" placeholder="http://xyz.com/authenticate/callback" required value={formValues.redirect_uri} onChange={handleFormValueChange} />
        <label className="flex items-start gap-3 rounded-2xl border border-[#E4DFB5] bg-[#C3CC9B]/35 p-4 text-sm leading-6 text-[#1f241c]/70">
          <input type="checkbox" className="mt-1 size-4 accent-[#9AB17A]" required />
          <span>
            I agree to keep redirect URIs, secrets, and signing keys controlled by my
            organization&apos;s security policy.
          </span>
        </label>
        {error && <strong className="text-sm bg-red-500">{error}</strong>}
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
