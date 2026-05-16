import type { Metadata } from "next";
import { AuthProvider } from "@/provider/auth-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashish OIDC",
  description: "Premium OIDC authentication platform for developers and application teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#FBE8CE] text-[#1f241c]">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
