'use server';

import { db } from "@/lib/db";
import { usersTable } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

export async function POST(request: NextRequest,) {
  const { full_name, email, password, redirect_uri } = await request.json();

  if (!full_name || !email || !password || !redirect_uri) {
    return NextResponse.json({
      message: 'All fields are required',
      success: false
    }, { status: 400 })
  }

  try {
    const existingUser = await db
      .select({ id: usersTable.id })
      .from(usersTable)
      .where(eq(usersTable.email, email))
      .limit(1);

    if (existingUser.length > 0) {
      return NextResponse.json({
        message: 'User already exists',
        success: false
      }, { status: 409 });
    }

    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.createHash('sha256').update(password + salt).digest('hex')

    const user: typeof usersTable.$inferInsert = {
      full_name, email, password: hash, salt, redirect_uri
    };

    const insertedUser = await db.insert(usersTable).values(user).returning({
      id: usersTable.id,
      email: usersTable.email,
      full_name: usersTable.full_name,
    });

    return NextResponse.json({
      data: {
        user: insertedUser[0]
      },
      message: 'User registered successfully',
      success: true
    }, { status: 201 })
  } catch (error) {
    console.log("Register user failed: ", error);

    return NextResponse.json({ message: 'Internal server error', success: false }, { status: 500 });
  }
}