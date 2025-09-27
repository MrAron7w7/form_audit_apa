"use client";

import HeaderBreadcrumb from "@/components/admin/header-breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Eye, CheckCircle, Clock } from "lucide-react";

// Datos de ejemplo - en una aplicación real estos vendrían de una API
const pedidosData = [
  {
    id: 1,
    usuario: {
      nombre: "María González",
      email: "maria@email.com",
      avatar: "/avatars/maria.jpg",
      iniciales: "MG",
    },
    fecha: new Date(2024, 2, 15, 14, 30),
    monto: 49.9,
    capturaYape: "/capturas/yape1.jpg",
    estado: "pendiente",
  },
  {
    id: 2,
    usuario: {
      nombre: "Carlos Rodríguez",
      email: "carlos@email.com",
      avatar: "/avatars/carlos.jpg",
      iniciales: "CR",
    },
    fecha: new Date(2024, 2, 14, 10, 15),
    monto: 49.9,
    capturaYape: "/capturas/yape2.jpg",
    estado: "pendiente",
  },
  {
    id: 3,
    usuario: {
      nombre: "Ana López",
      email: "ana@email.com",
      avatar: "/avatars/ana.jpg",
      iniciales: "AL",
    },
    fecha: new Date(2024, 2, 13, 16, 45),
    monto: 49.9,
    capturaYape: "/capturas/yape3.jpg",
    estado: "completado",
  },
];

function OrdersPage() {
  const confirmarPago = (pedidoId: number) => {
    // Lógica para confirmar el pago y activar Pro
    console.log("Confirmando pago para el pedido:", pedidoId);
    // Aquí iría la llamada a la API
  };

  const verCaptura = (capturaUrl: string) => {
    // Lógica para ver la captura en modal o nueva pestaña
    window.open(capturaUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50/30">
      <HeaderBreadcrumb title="Pedidos (Pagos Yape)" href="/admin/orders" />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Listado de Pedidos Pro
            <Badge variant="secondary" className="ml-2">
              {pedidosData.length} pendientes
            </Badge>
          </CardTitle>
          <CardDescription>
            Pedidos generados por usuarios que quieren pasar a Pro. Confirma los
            pagos Yape para activar 30 días de suscripción Pro.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Usuario</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Monto</TableHead>
                  <TableHead>Captura Yape</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pedidosData.map((pedido) => (
                  <TableRow key={pedido.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={pedido.usuario.avatar}
                            alt={pedido.usuario.nombre}
                          />
                          <AvatarFallback>
                            {pedido.usuario.iniciales}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">
                            {pedido.usuario.nombre}
                          </div>
                          <div className="text-sm text-gray-500">
                            {pedido.usuario.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {format(pedido.fecha, "dd MMM yyyy 'a las' HH:mm", {
                        locale: es,
                      })}
                    </TableCell>
                    <TableCell className="font-semibold text-green-600">
                      S/ {pedido.monto.toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => verCaptura(pedido.capturaYape)}
                        className="flex items-center gap-1"
                      >
                        <Eye className="h-4 w-4" />
                        Ver Captura
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          pedido.estado === "pendiente"
                            ? "default"
                            : "secondary"
                        }
                        className={
                          pedido.estado === "pendiente"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-green-100 text-green-800"
                        }
                      >
                        {pedido.estado === "pendiente" ? (
                          <Clock className="h-3 w-3 mr-1" />
                        ) : (
                          <CheckCircle className="h-3 w-3 mr-1" />
                        )}
                        {pedido.estado === "pendiente"
                          ? "Pendiente"
                          : "Completado"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {pedido.estado === "pendiente" && (
                        <Button
                          onClick={() => confirmarPago(pedido.id)}
                          className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-1"
                        >
                          <CheckCircle className="h-4 w-4" />
                          Confirmar Pago
                        </Button>
                      )}
                      {pedido.estado === "completado" && (
                        <span className="text-sm text-gray-500">
                          Pro activado
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {pedidosData.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Clock className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                No hay pedidos pendientes
              </h3>
              <p className="text-gray-500 mt-1">
                No hay pagos Yape pendientes de confirmación.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Estadísticas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total Pendientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">
              {pedidosData.filter((p) => p.estado === "pendiente").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total Completados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {pedidosData.filter((p) => p.estado === "completado").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monto Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              S/ {pedidosData.reduce((sum, p) => sum + p.monto, 0).toFixed(2)}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default OrdersPage;
