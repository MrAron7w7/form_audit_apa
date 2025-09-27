"use server";

import { encryptPassword } from "@/lib/crypt";
import {prisma} from "@/lib/prisma";
import { signUpSchema } from "@/lib/schemas/signup.schema";
import z from "zod";


type AuthResponse = {
    success: boolean;
    message: string;
    error?: string;
    status: 'success' | 'error' ;
};


export default async function SignUpAction(
     values: z.infer<typeof signUpSchema>
): Promise<AuthResponse> { 
    
    const { success, error, data } = signUpSchema.safeParse(values);
    
    if (!success) {
        return {
          success: false,
          message: "Error en los datos de entrada",
          error: error?.issues[0]?.message,
          status: "error",
        };
    }

     // Verificamos si el usuario ya existe
      const { name, email, password } = data;
  
      const existingUser = await prisma.user.findUnique({
        where: {
          email: email.toLocaleLowerCase(),
        },
      });
  
      if (existingUser) {
        return {
          success: false,
          message: "Usuario ya existe",
          error: "Usuario ya existe",
          status: "error",
        };
      }
  
      //   Contraseña encriptada
      const hashedPassword = await encryptPassword(password);
  
      await prisma.user.create({
        data: {
          email: email.toLocaleLowerCase(),
          name: name,
          password: hashedPassword,
        },
      });
  
      return {
        success: true,
        message: "Usuario registrado exitosamente",
        status: "success",
      };

}