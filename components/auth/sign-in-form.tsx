"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignInFormValues, signInSchema } from "@/lib/schemas/signin.schema";
import Link from "next/link";
import { signInAction } from "@/actions/auth/signin.action";
import z from "zod";
import { toast } from "sonner";

function SignInForm() {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    try {
      const res = await signInAction(data);
      toast.success(res.message);
      if (!res.status) {
        throw new Error("No status returned from signInAction");
      }

      // Aquí iría la lógica de autenticación
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            O continúa con email
          </span>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="tu@email.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input placeholder="••••••••" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Iniciar Sesión
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm">
        ¿No tienes una cuenta?{" "}
        <Button variant="link" className="p-0 h-auto font-medium" asChild>
          <Link href="/sign-up">Regístrate</Link>
        </Button>
      </div>
    </>
  );
}

export default SignInForm;
