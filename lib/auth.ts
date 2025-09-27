import NextAuth from "next-auth"
import authConfig from "@/lib/auth.config";
import { prisma }  from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter"
 
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  ...authConfig,
  pages: {
    signIn: '/sign-in',
  },
  session: { strategy: "jwt" },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  trustHost: true,
})