import Link from "next/link";
import { CodeBlock, GlassCard, Logo, SecureIcon } from "@/components";

const sidebar = ["Overview", "Providers", "Sessions", "Tokens", "Errors", "API Keys", "Users"];
const cards = [
  ["Auth events", "48,219", "+12.4%"],
  ["Active sessions", "6,842", "+8.1%"],
  ["Token exchanges", "182k", "+19.7%"],
  ["Error rate", "0.18%", "-2.3%"],
];
const applications = [
  ["Web dashboard", "Active", "12 redirect URIs", "99.99%"],
  ["Mobile app", "Active", "4 redirect URIs", "99.95%"],
  ["Developer portal", "Review", "2 redirect URIs", "98.71%"],
];
const activity = [
  ["10:42", "Login completed", "olivia@northstar.dev", "S256 verified"],
  ["10:39", "Token refreshed", "api-client-prod", "scope updated"],
  ["10:32", "Callback error", "fingrid-sso", "redirect_uri mismatch"],
  ["10:24", "Session revoked", "morgan@orbitops.io", "admin action"],
];
const users = [
  ["Olivia Chen", "olivia@northstar.dev", "Admin", "Active"],
  ["Morgan Reed", "morgan@orbitops.io", "Developer", "Active"],
  ["Riya Kapoor", "riya@fingrid.com", "Support", "Invited"],
  ["Jon Bell", "jon@cloudlane.io", "Viewer", "Active"],
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#FBE8CE] text-[#1f241c]">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-[#E4DFB5] bg-white/35 p-5 backdrop-blur-xl lg:border-b-0 lg:border-r">
          <Logo />
          <nav className="mt-8 grid gap-2">
            {sidebar.map((item, index) => (
              <Link
                key={item}
                href="#"
                className={`rounded-2xl px-4 py-3 text-sm font-black transition ${index === 0
                  ? "bg-[#9AB17A] text-[#1f241c] shadow-lg shadow-[#9AB17A]/25"
                  : "text-[#1f241c]/65 hover:bg-[#E4DFB5]/60 hover:text-[#1f241c]"
                  }`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="mt-8 rounded-[24px] border border-[#E4DFB5] bg-[#C3CC9B]/45 p-5">
            <p className="text-sm font-black">OIDC authentication</p>
            <p className="mt-2 text-sm leading-6 text-[#1f241c]/65">
              31 applications use hosted login, rotating JWKS, and secure session policies.
            </p>
          </div>
        </aside>

        <section className="overflow-hidden">
          <header className="flex flex-col gap-4 border-b border-[#E4DFB5] bg-[#FBE8CE]/70 px-5 py-5 backdrop-blur-xl sm:px-8 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1f241c]/55">
                Production issuer
              </p>
              <h1 className="mt-2 text-3xl font-black tracking-tight">Authentication Dashboard</h1>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                placeholder="Search sessions, users, clients..."
                className="h-12 min-w-72 rounded-2xl border border-[#E4DFB5] bg-white/60 px-4 text-sm font-bold outline-none transition placeholder:text-[#1f241c]/35 focus:border-[#9AB17A] focus:ring-4 focus:ring-[#9AB17A]/20"
              />
              <button className="h-12 rounded-2xl bg-[#9AB17A] px-5 text-sm font-black shadow-lg shadow-[#9AB17A]/25 transition hover:-translate-y-0.5">
                New provider
              </button>
            </div>
          </header>

          <div className="grid gap-6 px-5 py-6 sm:px-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {cards.map(([label, value, delta]) => (
                <GlassCard key={label} className="p-5">
                  <p className="text-sm font-black text-[#1f241c]/55">{label}</p>
                  <div className="mt-4 flex items-end justify-between gap-3">
                    <p className="text-4xl font-black tracking-tight">{value}</p>
                    <span className="rounded-full bg-[#C3CC9B]/70 px-3 py-1 text-xs font-black">
                      {delta}
                    </span>
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
              <GlassCard className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-black text-[#1f241c]/55">Token usage statistics</p>
                    <h2 className="mt-2 text-2xl font-black">OAuth traffic by hour</h2>
                  </div>
                  <div className="flex rounded-full border border-[#E4DFB5] bg-white/35 p-1 text-xs font-black">
                    {["24h", "7d", "30d"].map((tab, index) => (
                      <span
                        key={tab}
                        className={`rounded-full px-3 py-2 ${index === 0 ? "bg-[#9AB17A]" : ""}`}
                      >
                        {tab}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex h-64 items-end gap-3 rounded-[24px] border border-[#E4DFB5] bg-[#FBE8CE]/55 p-5">
                  {[46, 58, 42, 74, 66, 88, 61, 92, 78, 84, 69, 96].map((height, index) => (
                    <div key={index} className="flex flex-1 items-end">
                      <div
                        className="w-full rounded-t-2xl bg-[#9AB17A] shadow-lg shadow-[#9AB17A]/20 transition hover:bg-[#C3CC9B]"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black text-[#1f241c]/55">Error monitoring</p>
                    <h2 className="mt-2 text-2xl font-black">Callback failures</h2>
                  </div>
                  <SecureIcon />
                </div>
                <div className="mt-6 rounded-3xl bg-[#1f241c] p-5 text-[#FBE8CE]">
                  <p className="text-sm font-black">OIDC_ERROR_REDIRECT_URI</p>
                  <p className="mt-3 text-sm leading-7 text-[#FBE8CE]/70">
                    12 events from web-dashboard. Last seen 10:32 AM. Suggested fix:
                    add https://app.fingrid.com/auth/callback to allowed redirect URIs.
                  </p>
                </div>
                <div className="mt-4 rounded-3xl border border-[#E4DFB5] bg-[#C3CC9B]/45 p-4 text-sm font-black">
                  Toast: Provider health check recovered.
                </div>
              </GlassCard>
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
              <GlassCard className="p-6 xl:col-span-2">
                <h2 className="text-2xl font-black">OIDC applications</h2>
                <div className="mt-5 overflow-hidden rounded-3xl border border-[#E4DFB5] bg-white/35">
                  {applications.map(([name, status, redirects, uptime]) => (
                    <div
                      key={name}
                      className="grid gap-3 border-b border-[#E4DFB5] p-5 last:border-b-0 sm:grid-cols-[1fr_120px_100px_90px]"
                    >
                      <p className="font-black">{name}</p>
                      <span className="text-sm font-bold text-[#1f241c]/65">{status}</span>
                      <span className="text-sm font-bold text-[#1f241c]/65">{redirects}</span>
                      <span className="text-sm font-black">{uptime}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <h2 className="text-2xl font-black">API keys</h2>
                <div className="mt-5 grid gap-3">
                  {["sk_live_prod_9K...", "sk_support_42L...", "whsec_event_8P..."].map((key) => (
                    <div key={key} className="rounded-2xl border border-[#E4DFB5] bg-white/45 p-4">
                      <p className="font-mono text-sm font-black">{key}</p>
                      <p className="mt-2 text-xs font-bold text-[#1f241c]/50">Last used 4 minutes ago</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
              <GlassCard className="p-6">
                <h2 className="text-2xl font-black">Login activity timeline</h2>
                <div className="mt-5 grid gap-4">
                  {activity.map(([time, event, actor, note]) => (
                    <div key={`${time}-${event}`} className="grid grid-cols-[54px_1fr] gap-4">
                      <span className="text-xs font-black text-[#1f241c]/50">{time}</span>
                      <div className="rounded-3xl border border-[#E4DFB5] bg-white/45 p-4">
                        <p className="font-black">{event}</p>
                        <p className="mt-1 text-sm text-[#1f241c]/65">{actor} · {note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <h2 className="text-2xl font-black">User management</h2>
                <div className="mt-5 overflow-x-auto rounded-3xl border border-[#E4DFB5] bg-white/35">
                  <table className="w-full min-w-[640px] text-left text-sm">
                    <thead className="bg-[#C3CC9B]/45">
                      <tr>
                        {["User", "Email", "Role", "Status"].map((heading) => (
                          <th key={heading} className="px-5 py-4 font-black">{heading}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user[1]} className="border-t border-[#E4DFB5]">
                          {user.map((cell) => (
                            <td key={cell} className="px-5 py-4 font-bold text-[#1f241c]/70">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCard>
            </div>

            <GlassCard className="p-6">
              <h2 className="text-2xl font-black">Terminal API response</h2>
              <div className="mt-5">
                <CodeBlock>{`{
  "event": "user.login.succeeded",
  "client": "Web dashboard",
  "session_id": "sess_prod_4Kp9a2",
  "user": "olivia@northstar.dev",
  "ip": "203.0.113.42",
  "risk": "low"
}`}</CodeBlock>
              </div>
            </GlassCard>
          </div>
        </section>
      </div>
    </main>
  );
}
