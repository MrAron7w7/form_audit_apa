"use client";

import { signOutAction } from "@/actions/auth/signout.action";
import { LogOut } from "lucide-react";

export default function SignOutSession() {
  const handleSignOut = async () => {
    try {
      await signOutAction();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="w-full text-left flex items-center gap-2"
    >
      <LogOut className="w-4 h-4" />
      Salir de sesión
    </button>
  );
}
