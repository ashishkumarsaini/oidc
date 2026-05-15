'use server';

import { NextResponse } from "next/server";

export function GET() {
  const config = {
    issuer: process.env.NEXT_PUBLIC_OIDC_ISSUER_URL,
    authorization_endpoint: process.env.NEXT_PUBLIC_OIDC_AUTHORIZATION_ENDPOINT,
    token_endpoint: process.env.NEXT_PUBLIC_OIDC_TOKEN_ENDPOINT,
    jwks_uri: process.env.NEXT_PUBLIC_OIDC_JWKS_URI,
  };

  return NextResponse.json(config);
}