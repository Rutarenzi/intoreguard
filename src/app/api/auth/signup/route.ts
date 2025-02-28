import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { email, password} = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "required fields" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    let role = "USER"
     const users = prisma.user.findMany()
     if(users.length=== 0) {
        role = "ADMIN"
     }
    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: role as "ADMIN" | "MODERATOR" | "USER",
      },
    });

    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(userWithoutPassword, { status: 201 });
  } catch (error: any) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}
