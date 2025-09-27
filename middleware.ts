// middleware.ts (versión final y completa)
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { findMatchingRoute, hasAccess} from "@/lib/router/route.config";

export default async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;

  const token = await getToken({ 
    req, 
    secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET 
  });
 
  const isLoggedIn = !!token;
  const userRole = token?.role as string | undefined;

  console.log("============================");
  console.log("DEBUG MIDDLEWARE");
  console.log("============================");
  console.log("Pathname:", pathname);
  console.log("User role:", userRole);
  console.log("Is logged in:", isLoggedIn);
  console.log("============================");

  // Manejo especial para la ruta raíz "/"
  if (pathname === "/") {
    if (isLoggedIn) {
      const redirectPath = userRole === 'ADMIN' ? '/admin' : '/dashboard';
      return NextResponse.redirect(new URL(redirectPath, nextUrl));
    }
    // Si no está logueado, permitir acceso a la raíz
    return NextResponse.next();
  }

  // Encontrar la configuración de la ruta actual
  const route = findMatchingRoute(pathname);

  // Si no se encuentra configuración para la ruta, denegar acceso
  if (!route) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/not-found', nextUrl));
    }
    const signInUrl = new URL('/sign-in', nextUrl);
    signInUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(signInUrl);
  }

  // Verificar acceso
  const userHasAccess = hasAccess(userRole, route);

  // Redirecciones para usuarios autenticados en rutas de auth
  if ((pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up')) && isLoggedIn) {
    const redirectPath = userRole === 'ADMIN' ? '/admin' : '/dashboard';
    return NextResponse.redirect(new URL(redirectPath, nextUrl));
  }

  // Si no tiene acceso
  if (!userHasAccess) {
    // Usuario no autenticado
    if (!isLoggedIn) {
      const signInUrl = new URL('/sign-in', nextUrl);
      signInUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(signInUrl);
    }

    // Usuario autenticado pero sin permisos
    if (route.redirectTo) {
      return NextResponse.redirect(new URL(route.redirectTo, nextUrl));
    }
    
    return NextResponse.redirect(new URL('/unauthorized', nextUrl));
  }

  // Si tiene acceso, permitir
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};