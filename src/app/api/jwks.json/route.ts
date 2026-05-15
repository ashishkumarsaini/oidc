'use server';

import { PUBLIC_KEY } from '@/utils/cert';
import { NextResponse } from 'next/server';
import * as jose from 'node-jose';

export async function GET() {
  const key = await jose.JWK.asKey(PUBLIC_KEY, "pem");

  return NextResponse.json({
    keys: [key.toJSON()]
  })
} 