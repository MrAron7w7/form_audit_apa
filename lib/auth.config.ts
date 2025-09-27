import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { signInSchema } from "./schemas/signin.schema";
import { comparePassword } from "./crypt";
import { prisma } from "./prisma";

export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      allowDangerousEmailAccountLinking: true, // Importante para linking
    }),
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials) => {

        const validated = signInSchema.safeParse(credentials);

        if (!validated.success) return null;

        const {email, password } = validated.data;

        const user = await prisma.user.findUnique({
          where: { email: email }
        })

        if (!user || !user.password) return null;

        const isValid = await comparePassword(password, user.password);

        if (!isValid) return null;

        return {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role || 'USER',
        }
        }
      },
     
    ),


    
  ],
} satisfies NextAuthConfig