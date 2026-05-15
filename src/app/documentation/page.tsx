import {
  AuthFlow,
  BackgroundShapes,
  Badge,
  CodeBlock,
  Field,
  GlassCard,
  PageShell,
  PrimaryButton,
  PrimaryLink,
  SecondaryLink,
  SelectField,
} from "@/components";

const endpoints = [
  ["GET", "/.well-known/openid-configuration", "Discovery metadata for clients and SDKs."],
  ["GET", "/oauth2/authorize", "Authorization code flow with PKCE, scopes, and consent."],
  ["POST", "/oauth2/token", "Code, refresh token, and client credential token exchange."],
  ["GET", "/oauth2/jwks", "Rotating signing keys for JWT verification."],
  ["POST", "/sessions/revoke", "Revoke sessions, refresh tokens, and risky devices."],
];

const tabs = ["Overview", "Authorize", "Tokens", "Sessions", "Webhooks"];

export default function DocumentationPage() {
  return (
    <PageShell>
      <main className="relative overflow-hidden">
        <BackgroundShapes />
        <section className="relative px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Badge>Developer Documentation</Badge>
              <h1 className="mt-6 text-5xl font-black tracking-tight text-[#1f241c] sm:text-6xl">
                View Documentation for OIDC integrations.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#1f241c]/70">
                Build, debug, and operate authentication flows with readable APIs,
                realistic responses, and support-first OAuth diagnostics.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href="#api">View Documentation</PrimaryLink>
                <SecondaryLink href="/dashboard">Open dashboard</SecondaryLink>
              </div>
            </div>
            <GlassCard className="p-5">
              <CodeBlock>{`curl --request POST https://auth.ashish.dev/oauth2/token \\
  --header "Authorization: Bearer sk_live_..." \\
  --data "grant_type=authorization_code" \\
  --data "code=auth_code_9r2..." \\
  --data "redirect_uri=https://app.company.com/callback"`}</CodeBlock>
            </GlassCard>
          </div>
        </section>

        <section id="api" className="relative px-5 py-14 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_1fr]">
            <GlassCard className="h-fit p-5 lg:sticky lg:top-24">
              <Badge>Docs</Badge>
              <div className="mt-5 grid gap-2">
                {tabs.map((tab) => (
                  <a
                    href={`#${tab.toLowerCase()}`}
                    key={tab}
                    className="rounded-2xl px-4 py-3 text-sm font-black text-[#1f241c]/65 transition hover:bg-[#E4DFB5]/60 hover:text-[#1f241c]"
                  >
                    {tab}
                  </a>
                ))}
              </div>
              <div className="mt-6 rounded-3xl bg-[#C3CC9B]/55 p-4 text-sm leading-7 text-[#1f241c]/70">
                <strong className="text-[#1f241c]">Base URL</strong>
                <br />
                https://auth.ashish.dev
              </div>
            </GlassCard>

            <div className="grid gap-8">
              <GlassCard id="overview" className="p-7">
                <Badge>Quickstart</Badge>
                <h2 className="mt-5 text-3xl font-black tracking-tight">Developer-first setup</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {[
                    "Create an application and exact redirect URI.",
                    "Start authorization with PKCE and nonce.",
                    "Exchange the code from your backend.",
                    "Validate issuer, audience, expiry, and JWKS.",
                  ].map((step, index) => (
                    <div key={step} className="rounded-3xl border border-[#E4DFB5] bg-white/45 p-5">
                      <span className="grid size-10 place-items-center rounded-2xl bg-[#9AB17A] text-sm font-black">
                        {index + 1}
                      </span>
                      <p className="mt-4 text-sm font-bold leading-7 text-[#1f241c]/70">{step}</p>
                    </div>
                  ))}
                </div>
                <AuthFlow />
              </GlassCard>

              <GlassCard id="authorize" className="p-7">
                <Badge>Endpoints</Badge>
                <h2 className="mt-5 text-3xl font-black tracking-tight">OIDC API surface</h2>
                <div className="mt-6 overflow-hidden rounded-3xl border border-[#E4DFB5] bg-white/35">
                  {endpoints.map(([method, path, text]) => (
                    <div
                      key={path}
                      className="grid gap-3 border-b border-[#E4DFB5] p-5 last:border-b-0 lg:grid-cols-[90px_1fr_1.2fr]"
                    >
                      <span className="w-fit rounded-full bg-[#C3CC9B] px-3 py-1 font-mono text-xs font-black">
                        {method}
                      </span>
                      <code className="font-mono text-sm font-black text-[#1f241c]">{path}</code>
                      <p className="text-sm leading-6 text-[#1f241c]/65">{text}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard id="tokens" className="p-7">
                <Badge>Token Example</Badge>
                <h2 className="mt-5 text-3xl font-black tracking-tight">Elegant JSON responses</h2>
                <div className="mt-6">
                  <CodeBlock>{`{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "id_token": "eyJraWQiOiJrZXlfMjAyNi...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "openid profile email",
  "session_id": "sess_prod_4Kp9a2"
}`}</CodeBlock>
                </div>
              </GlassCard>

              <GlassCard id="sessions" className="p-7">
                <Badge>Design System</Badge>
                <h2 className="mt-5 text-3xl font-black tracking-tight">Production-ready components</h2>
                <div className="mt-6 grid gap-5 lg:grid-cols-2">
                  <div className="grid gap-4">
                    <Field label="Client ID" placeholder="client_prod_8Lk2" />
                    <SelectField label="Grant type" options={["Authorization Code", "Refresh Token", "Client Credentials"]} />
                    <PrimaryButton>Test token exchange</PrimaryButton>
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-3xl border border-[#E4DFB5] bg-white/45 p-5">
                      <p className="text-sm font-black">Toast notification</p>
                      <p className="mt-2 text-sm text-[#1f241c]/65">Provider connected successfully.</p>
                    </div>
                    <div className="rounded-3xl border border-[#E4DFB5] bg-[#C3CC9B]/45 p-5">
                      <p className="text-sm font-black">Modal preview</p>
                      <p className="mt-2 text-sm text-[#1f241c]/65">Rotate API key with audit confirmation.</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard id="webhooks" className="p-7">
                <Badge>Light / Dark</Badge>
                <h2 className="mt-5 text-3xl font-black tracking-tight">Mode previews</h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-[#E4DFB5] bg-[#FBE8CE] p-5">
                    <p className="font-black">Light console</p>
                    <p className="mt-2 text-sm text-[#1f241c]/65">Warm cream surfaces with sage actions.</p>
                  </div>
                  <div className="rounded-3xl border border-[#E4DFB5]/35 bg-[#1f241c] p-5 text-[#FBE8CE]">
                    <p className="font-black">Dark console</p>
                    <p className="mt-2 text-sm text-[#FBE8CE]/65">High contrast monitoring for operations rooms.</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
