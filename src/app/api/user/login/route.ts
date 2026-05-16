'use server';

import crypto from "node:crypto";
import { db } from "@/lib/db";
import { usersTable } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({
      message: 'All field values are required',
      success: false
    }, { status: 400 })
  }

  try {
    const [user] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email))
      .limit(1);

    if (!user) {
      return NextResponse.json({
        message: 'User not found',
        success: false
      }, { status: 404 })
    }

    if (!user.password || !user.salt) {
      return NextResponse.json({
        message: "Invalid email or password.",
        success: false
      }, { status: 401 });
    }

    const hash = crypto.createHash('sha256').update(password + user.salt).digest('hex');

    if (hash !== user.password) {
      return NextResponse.json({
        message: 'Incorrect Password',
        success: false
      }, { status: 200 })
    }

    return NextResponse.json({
      data: {
        user
      },
      message: 'User logged in successfully',
      success: true
    }, { status: 200 })
  } catch (error) {
    console.log("Login user failed: ", error);
    return NextResponse.json({
      message: 'Internal server error',
      success: false
    }, { status: 500 });
  }
}