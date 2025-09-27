export interface RouteConfig {
  path: string;
  roles: string[]; // ['*'] para público, ['USER'], ['ADMIN'], etc.
  redirectTo?: string;
}

export const routeConfig: RouteConfig[] = [
  // Ruta raíz - redirige según autenticación
  { path: '/', roles: ['*'] },
  
  // Rutas de autenticación
  { path: '/sign-in', roles: ['*'] },
  { path: '/sign-up', roles: ['*'] },
  { path: '/auth/error', roles: ['*'] },
  
  // Rutas de error
  { path: '/unauthorized', roles: ['*'] },
  { path: '/not-found', roles: ['*'] },
  
  // Rutas exclusivas de USER
  { path: '/dashboard', roles: ['USER'], redirectTo: '/admin' },
  { path: '/profile', roles: ['USER'], redirectTo: '/admin' },
  { path: '/settings', roles: ['USER'], redirectTo: '/admin' },
  { path: '/user/*', roles: ['USER'], redirectTo: '/admin' },
  
  // Rutas exclusivas de ADMIN
  { path: '/admin', roles: ['ADMIN'], redirectTo: '/dashboard' },
  { path: '/admin/*', roles: ['ADMIN'], redirectTo: '/dashboard' },
];

export function findMatchingRoute(pathname: string): RouteConfig | undefined {
  return routeConfig.find(route => {
    if (route.path.endsWith('*')) {
      const basePath = route.path.slice(0, -1);
      return pathname.startsWith(basePath);
    }
    return pathname === route.path || pathname.startsWith(route.path + '/');
  });
}

export function hasAccess(role: string | undefined, route: RouteConfig): boolean {
  // Si la ruta permite todos los roles
  if (route.roles.includes('*')) return true;
  
  // Si no hay rol (usuario no autenticado)
  if (!role) return false;
  
  // Verificar si el rol tiene acceso
  return route.roles.includes(role);
}