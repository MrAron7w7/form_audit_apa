"use server";

import { signIn } from "@/lib/auth";
import { comparePassword } from "@/lib/crypt";
import { prisma } from "@/lib/prisma";
import { signInSchema } from "@/lib/schemas/signin.schema";
import { z } from "zod";

type AuthResponse = {
  success: boolean;
  message: string;
  error?: string;
  status: "success" | "error" | "unauthorized";
};

export async function signInAction(
  values: z.infer<typeof signInSchema>
): Promise<AuthResponse> {
  const { data, success } = signInSchema.safeParse(values);

  if (!success) {
    return {
      success: false,
      message: "Validation failed",
      error: "Validation failed",
      status: "error",
    };
  }

  const { email, password } = data;

  const existingUser = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!existingUser) {
    return {
      success: false,
      message: "User not found",
      error: "User not found",
      status: "error",
    };
  }

  const passwordMatch = await comparePassword(
    password,
    existingUser.password as string
  );

  console.log({ passwordMatch });

  if (!passwordMatch) {
    return {
      success: false,
      message: "Invalid credentials",
      error: "Invalid credentials",
      status: "unauthorized",
    };
  }

  await signIn("credentials", {
    email: email,
    password: password,
    redirect: true,
    redirectTo: "/dashboard",
    // callbackUrl: "/dashboard",
  });

  return {
    success: true,
    message: "Logged in",
    status: "success",
  };
}
