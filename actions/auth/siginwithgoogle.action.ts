"use server";

import { signIn } from "@/lib/auth";

export default async function signinWithGoogle() {
     await signIn("google", { redirectTo: '/dashboard'});
 }