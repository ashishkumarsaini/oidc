import type { Metadata } from "next";
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
      <body className="min-h-full bg-[#FBE8CE] text-[#1f241c]">{children}</body>
    </html>
  );
}
