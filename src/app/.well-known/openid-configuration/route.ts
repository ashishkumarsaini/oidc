'use server'
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const origin = process.env.NEXT_PUBLIC_OIDC_ISSUER_URL ?? new URL(request.url).origin;

  return NextResponse.json(
    {
      issuer: origin,
      authorization_endpoint: process.env.NEXT_PUBLIC_OIDC_AUTHORIZATION_ENDPOINT ?? `${origin}/login`,
      userinfo_endpoint: process.env.NEXT_PUBLIC_OIDC_TOKEN_ENDPOINT ?? `${origin}/oauth2/user-info`,
      jwks_uri: process.env.NEXT_PUBLIC_OIDC_JWKS_URI ?? `${origin}/oauth2/jwks.json`,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300, stale-while-revalidate=300",
      },
    },
  );
}
