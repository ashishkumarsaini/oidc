import {
  AuthFlow,
  BackgroundShapes,
  Badge,
  CodeBlock,
  GlassCard,
  PageShell,
  PrimaryLink,
  SecondaryLink,
} from "@/components";

const features = [
  ["Application clients", "Create OIDC clients, manage redirect URIs, configure scopes, and rotate client secrets."],
  ["Flow debugging", "Trace authorize, callback, token, JWKS, nonce, and audience failures in one timeline."],
  ["Session control", "Inspect active sessions, revoke risky tokens, and enforce secure expiry policies."],
  ["Hosted authentication", "Provide login, registration, password reset, and consent screens for your applications."],
  ["Event monitoring", "Track login attempts, callback errors, token spikes, and application health in real time."],
  ["Developer APIs", "Use clean endpoints, API keys, terminal-ready examples, and JSON responses made for teams."],
];

const pricing = [
  ["Starter", "$0", "For prototypes and internal tools", "3 applications"],
  ["Team", "$49", "For growing product teams", "25 applications"],
  ["Scale", "Custom", "For high-volume authentication", "Unlimited applications"],
];

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:py-28">
          <BackgroundShapes />
          <div className="relative mx-auto max-w-7xl flex flex-col items-center justify-center">
            <Badge>OIDC Support Platform</Badge>
            <h1 className="mt-10 max-w-4xl text-5xl font-black tracking-tight text-[#1f241c] sm:text-6xl lg:text-7xl text-center">
              OIDC Authentication Made Simple
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#1f241c]/70  text-center">
              Secure authentication infrastructure for registering applications, signing
              users in, issuing tokens, managing sessions, and debugging OIDC flows.
            </p>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/register">Start Free</PrimaryLink>
              <SecondaryLink href="/documentation">View Documentation</SecondaryLink>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <Badge>Developer UX</Badge>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-[#1f241c]">
                Everything around the authentication flow is observable.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map(([title, text]) => (
                <GlassCard key={title} className="p-6 transition hover:-translate-y-1 hover:shadow-[#9AB17A]/20">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-[#C3CC9B]/75">
                    <span className="size-5 rounded-md border-2 border-[#1f241c]" />
                  </div>
                  <h3 className="text-xl font-black text-[#1f241c]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#1f241c]/65">{text}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
            <GlassCard className="p-7">
              <Badge>API Response</Badge>
              <div className="mt-5">
                <CodeBlock>
                  {`{
                    "issuer": "https://auth.ashish.dev",
                    "authorization_endpoint": "/oauth2/authorize",
                    "token_endpoint": "/oauth2/token",
                    "jwks_uri": "/oauth2/jwks",
                    "response_types_supported": ["code"],
                    "code_challenge_methods_supported": ["S256"]
                  }`}
                </CodeBlock>
              </div>
            </GlassCard>
            <div>
              <Badge>Flow Clarity</Badge>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-[#1f241c]">
                See every redirect, token, and provider decision.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#1f241c]/70">
                The platform turns opaque OIDC behavior into readable events, structured
                diagnostics, and support-ready context for every customer login.
              </p>
              <AuthFlow />
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <Badge>Pricing</Badge>
                <h2 className="mt-5 text-4xl font-black tracking-tight text-[#1f241c]">
                  Start small. Scale authentication with your apps.
                </h2>
              </div>
              <SecondaryLink href="/register">Compare plans</SecondaryLink>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {pricing.map(([name, price, text, limit]) => (
                <GlassCard key={name} className="p-7">
                  <h3 className="text-2xl font-black">{name}</h3>
                  <p className="mt-4 text-4xl font-black">{price}</p>
                  <p className="mt-3 text-sm leading-7 text-[#1f241c]/65">{text}</p>
                  <div className="mt-6 rounded-2xl bg-[#C3CC9B]/55 px-4 py-3 text-sm font-black">
                    {limit}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
