import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SignInGoogle from "@/components/signin-google";
import SignInForm from "@/components/auth/sign-in-form";
import SignOut from "@/components/signout-button";

function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Iniciar Sesión
          </CardTitle>
          <CardDescription className="text-center">
            Ingresa a tu cuenta para continuar
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignInGoogle />
          <SignOut />

          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default SignIn;
