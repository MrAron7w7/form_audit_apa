import NextAuth from "next-auth"
import authConfig from "@/lib/auth.config"
import { NextResponse } from "next/server";
 
const { auth: middleware } = NextAuth(authConfig)

const publicRoutes = [
  '/sign-in',
  '/sign-up',
  '/',
];

const protectedUsersRoutes = [
  '/dashboard',
];

const adminRoutes = [
  '/admin',
  '/admin/users',
  '/admin/settings',
];

export default middleware((req) => {
  const { nextUrl, auth } = req
  const isLoggedIn = !!auth?.user;

  if(!publicRoutes.includes(nextUrl.pathname) && !isLoggedIn) {
    return NextResponse.redirect(new URL('/sign-in', nextUrl))
  }

  return NextResponse.next();

})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}