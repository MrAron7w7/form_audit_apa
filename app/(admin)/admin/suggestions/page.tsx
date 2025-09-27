"use client";
import HeaderBreadcrumb from "@/components/admin/header-breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { format, formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import {
  MessageSquare,
  Eye,
  Search,
  Filter,
  Mail,
  ThumbsUp,
  ThumbsDown,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Datos de ejemplo
const sugerenciasData = [
  {
    id: 1,
    usuario: {
      nombre: "María González",
      email: "maria@email.com",
      avatar: "/avatars/maria.jpg",
      iniciales: "MG",
      tipo: "Pro",
    },
    contenido:
      "Sería excelente si pudieran agregar la función de exportar reportes en PDF. Actualmente solo permite Excel y sería muy útil para presentaciones.",
    fecha: new Date(2024, 2, 15, 14, 30),
    categoria: "Funcionalidad",
    estado: "nuevo",
    prioridad: "alta",
  },
  {
    id: 2,
    usuario: {
      nombre: "Carlos Rodríguez",
      email: "carlos@email.com",
      avatar: "/avatars/carlos.jpg",
      iniciales: "CR",
      tipo: "Gratuito",
    },
    contenido:
      "La aplicación va muy bien, pero he notado que a veces se traba cuando hay muchas pestañas abiertas. ¿Podrían optimizar el rendimiento?",
    fecha: new Date(2024, 2, 14, 10, 15),
    categoria: "Rendimiento",
    estado: "revisado",
    prioridad: "media",
  },
  {
    id: 3,
    usuario: {
      nombre: "Ana López",
      email: "ana@email.com",
      avatar: "/avatars/ana.jpg",
      iniciales: "AL",
      tipo: "Pro",
    },
    contenido:
      "Me encantaría poder personalizar el dashboard con widgets arrastrables. Sería mucho más práctico para mi flujo de trabajo diario.",
    fecha: new Date(2024, 2, 13, 16, 45),
    categoria: "UI/UX",
    estado: "en_progreso",
    prioridad: "alta",
  },
  {
    id: 4,
    usuario: {
      nombre: "Roberto Silva",
      email: "roberto@email.com",
      avatar: "/avatars/roberto.jpg",
      iniciales: "RS",
      tipo: "Gratuito",
    },
    contenido:
      "Sugiero agregar más integraciones con herramientas de marketing como Mailchimp y HubSpot. Esto mejoraría mucho la productividad.",
    fecha: new Date(2024, 2, 12, 9, 20),
    categoria: "Integraciones",
    estado: "completado",
    prioridad: "media",
  },
  {
    id: 5,
    usuario: {
      nombre: "Laura Mendoza",
      email: "laura@email.com",
      avatar: "/avatars/laura.jpg",
      iniciales: "LM",
      tipo: "Pro",
    },
    contenido:
      "La función de búsqueda podría mejorar. A veces no encuentra resultados incluso cuando sé que la información está ahí.",
    fecha: new Date(2024, 2, 11, 11, 30),
    categoria: "Búsqueda",
    estado: "nuevo",
    prioridad: "alta",
  },
];

// Opciones de filtro
const categorias = [
  "Todas",
  "Funcionalidad",
  "UI/UX",
  "Rendimiento",
  "Integraciones",
  "Búsqueda",
];
const estados = ["Todos", "nuevo", "revisado", "en_progreso", "completado"];
const prioridades = ["Todas", "alta", "media", "baja"];

function SuggestionPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("Todas");
  const [filtroEstado, setFiltroEstado] = useState("Todos");
  const [filtroPrioridad, setFiltroPrioridad] = useState("Todas");
  const [sugerenciaSeleccionada, setSugerenciaSeleccionada] = useState(null);

  // Filtrar sugerencias
  const sugerenciasFiltradas = sugerenciasData.filter((sugerencia) => {
    const coincideBusqueda =
      sugerencia.contenido.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sugerencia.usuario.nombre
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const coincideCategoria =
      filtroCategoria === "Todas" || sugerencia.categoria === filtroCategoria;
    const coincideEstado =
      filtroEstado === "Todos" || sugerencia.estado === filtroEstado;
    const coincidePrioridad =
      filtroPrioridad === "Todas" || sugerencia.prioridad === filtroPrioridad;

    return (
      coincideBusqueda &&
      coincideCategoria &&
      coincideEstado &&
      coincidePrioridad
    );
  });

  const getBadgeVariant = (estado: string) => {
    switch (estado) {
      case "nuevo":
        return "default";
      case "revisado":
        return "secondary";
      case "en_progreso":
        return "outline";
      case "completado":
        return "success";
      default:
        return "secondary";
    }
  };

  const getBadgeColor = (estado: string) => {
    switch (estado) {
      case "nuevo":
        return "bg-blue-100 text-blue-800";
      case "revisado":
        return "bg-gray-100 text-gray-800";
      case "en_progreso":
        return "bg-amber-100 text-amber-800";
      case "completado":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPrioridadColor = (prioridad: string) => {
    switch (prioridad) {
      case "alta":
        return "bg-red-100 text-red-800 border-red-200";
      case "media":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "baja":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const verSugerenciaCompleta = (sugerencia: any) => {
    setSugerenciaSeleccionada(sugerencia);
  };

  return (
    <div className="min-h-screen bg-gray-50/30 ">
      <HeaderBreadcrumb
        title="Sugerencias de Usuarios"
        href="/admin/suggestions"
      />

      {/* Estadísticas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Total Sugerencias
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {sugerenciasData.length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <ThumbsUp className="h-4 w-4" />
              Nuevas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {sugerenciasData.filter((s) => s.estado === "nuevo").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <ThumbsDown className="h-4 w-4" />
              En Progreso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">
              {sugerenciasData.filter((s) => s.estado === "en_progreso").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Completadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {sugerenciasData.filter((s) => s.estado === "completado").length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filtros y Búsqueda */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Filtrar Sugerencias</CardTitle>
          <CardDescription>
            Busca y filtra las sugerencias por categoría, estado o prioridad
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Buscar sugerencias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>

            <select
              value={filtroCategoria}
              onChange={(e) => setFiltroCategoria(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm"
            >
              {categorias.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              value={filtroEstado}
              onChange={(e) => setFiltroEstado(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm"
            >
              {estados.map((estado) => (
                <option key={estado} value={estado}>
                  {estado === "nuevo"
                    ? "Nuevo"
                    : estado === "revisado"
                    ? "Revisado"
                    : estado === "en_progreso"
                    ? "En Progreso"
                    : estado === "completado"
                    ? "Completado"
                    : estado}
                </option>
              ))}
            </select>

            <select
              value={filtroPrioridad}
              onChange={(e) => setFiltroPrioridad(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm"
            >
              {prioridades.map((pri) => (
                <option key={pri} value={pri}>
                  {pri === "alta"
                    ? "Alta Prioridad"
                    : pri === "media"
                    ? "Media Prioridad"
                    : pri === "baja"
                    ? "Baja Prioridad"
                    : pri}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Sugerencias */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Listado de Sugerencias
            <Badge variant="secondary" className="ml-2">
              {sugerenciasFiltradas.length} encontradas
            </Badge>
          </CardTitle>
          <CardDescription>
            Sugerencias recibidas de los usuarios para mejorar la plataforma
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Usuario</TableHead>
                  <TableHead>Contenido</TableHead>
                  <TableHead className="text-center">Categoría</TableHead>
                  <TableHead className="text-center">Estado</TableHead>
                  <TableHead className="text-center">Prioridad</TableHead>
                  <TableHead className="text-center">Fecha/Hora</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sugerenciasFiltradas.map((sugerencia) => (
                  <TableRow key={sugerencia.id} className="hover:bg-gray-50/50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={sugerencia.usuario.avatar}
                            alt={sugerencia.usuario.nombre}
                          />
                          <AvatarFallback>
                            {sugerencia.usuario.iniciales}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">
                            {sugerencia.usuario.nombre}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {sugerencia.usuario.email}
                          </div>
                          <Badge variant="outline" className="text-xs mt-1">
                            {sugerencia.usuario.tipo}
                          </Badge>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-md">
                        <p className="line-clamp-2 text-sm">
                          {sugerencia.contenido}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className="text-xs">
                        {sugerencia.categoria}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        className={`text-xs ${getBadgeColor(
                          sugerencia.estado
                        )}`}
                      >
                        {sugerencia.estado === "nuevo"
                          ? "Nuevo"
                          : sugerencia.estado === "revisado"
                          ? "Revisado"
                          : sugerencia.estado === "en_progreso"
                          ? "En Progreso"
                          : "Completado"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant="outline"
                        className={`text-xs ${getPrioridadColor(
                          sugerencia.prioridad
                        )}`}
                      >
                        {sugerencia.prioridad === "alta"
                          ? "Alta"
                          : sugerencia.prioridad === "media"
                          ? "Media"
                          : "Baja"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center text-sm">
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {format(sugerencia.fecha, "dd/MM/yy")}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {format(sugerencia.fecha, "HH:mm")}
                        </div>
                        <div className="text-gray-400 text-xs mt-1">
                          {formatDistanceToNow(sugerencia.fecha, {
                            locale: es,
                            addSuffix: true,
                          })}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => verSugerenciaCompleta(sugerencia)}
                            className="flex items-center gap-1"
                          >
                            <Eye className="h-4 w-4" />
                            Ver
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>
                              Sugerencia de {sugerencia.usuario.nombre}
                            </DialogTitle>
                            <DialogDescription>
                              Detalles completos de la sugerencia recibida
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium">
                                  Usuario
                                </label>
                                <div className="flex items-center gap-2 mt-1">
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage
                                      src={sugerencia.usuario.avatar}
                                    />
                                    <AvatarFallback>
                                      {sugerencia.usuario.iniciales}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span>{sugerencia.usuario.nombre}</span>
                                </div>
                              </div>
                              <div>
                                <label className="text-sm font-medium">
                                  Fecha y Hora
                                </label>
                                <div className="mt-1">
                                  {format(
                                    sugerencia.fecha,
                                    "dd MMMM yyyy 'a las' HH:mm",
                                    { locale: es }
                                  )}
                                </div>
                              </div>
                            </div>

                            <div>
                              <label className="text-sm font-medium">
                                Categoría
                              </label>
                              <div className="mt-1">
                                <Badge variant="outline">
                                  {sugerencia.categoria}
                                </Badge>
                              </div>
                            </div>

                            <div>
                              <label className="text-sm font-medium">
                                Sugerencia Completa
                              </label>
                              <Textarea
                                value={sugerencia.contenido}
                                readOnly
                                className="mt-1 min-h-[100px]"
                              />
                            </div>

                            <div className="flex gap-2 justify-end">
                              <Button variant="outline">
                                Marcar como Revisado
                              </Button>
                              <Button>Respondir al Usuario</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {sugerenciasFiltradas.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <MessageSquare className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                No se encontraron sugerencias
              </h3>
              <p className="text-gray-500 mt-1">
                Intenta ajustar los filtros de búsqueda.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default SuggestionPage;
