import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Logo/Header */}
        <div className="text-center">
          <div className="text-2xl font-bold text-slate-900 mb-2">404</div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Página no encontrada
          </h1>
        </div>

        {/* Main Card */}
        <Card className="shadow-lg border-slate-200">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              {/* Icono */}
              <div className="w-20 h-20 mx-auto bg-slate-100 rounded-full flex items-center justify-center">
                <div className="text-2xl">🔍</div>
              </div>

              {/* Mensaje */}
              <p className="text-slate-600 text-lg leading-relaxed">
                Lo sentimos, la página que buscas no existe o ha sido movida.
              </p>

              {/* Código de error adicional */}
              {/* <div className="bg-slate-50 rounded-lg p-3">
                <code className="text-sm text-slate-500">
                  Error: 404 - Not Found
                </code>
              </div> */}

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild variant="outline" className="flex-1">
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Volver atrás
                  </Link>
                </Button>

                {/* <Button asChild className="flex-1">
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2"
                  >
                    <Home className="w-4 h-4" />
                    Ir al inicio
                  </Link>
                </Button> */}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Información adicional */}
        {/* <div className="text-center">
          <p className="text-sm text-slate-500">
            Si crees que esto es un error,{" "}
            <Link
              href="/contact"
              className="text-slate-700 hover:text-slate-900 underline"
            >
              contáctanos
            </Link>
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default NotFound;
