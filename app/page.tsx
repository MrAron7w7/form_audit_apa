"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Shield,
  Zap,
  ArrowRight,
  Star,
  Upload,
  FileCheck,
  BarChart3,
  Lightbulb,
  CheckCircle,
  Clock,
  Award,
  Users,
  BookOpen,
  Search,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200/60 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-xl">
                <FileCheck className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-800">
                AcaCheck
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                Características
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                Cómo funciona
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                Precios
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                FAQ
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/sign-in">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-600 hover:text-blue-600"
                >
                  Iniciar Sesión
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                >
                  Comenzar Gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full text-sm font-medium text-blue-700">
              <Star className="h-4 w-4" />
              <span>La plataforma de revisión académica más confiable</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-800 leading-tight">
              Perfecciona tus{" "}
              <span className="text-blue-600">trabajos académicos</span> con IA
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              AcaCheck analiza tus documentos PDF y Word para garantizar el
              cumplimiento de normas APA, MLA y Vancouver. Obtén feedback
              instantáneo y mejora tu escritura académica de manera profesional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/sign-up">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Comenzar Gratis
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg font-semibold"
                >
                  Ver Demo
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            {/* <div className="flex flex-wrap items-center justify-center gap-6 pt-12 text-slate-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">100% Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">Resultados en 30s</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-amber-500" />
                <span className="text-sm font-medium">
                  Certificado por universidades
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">15k+</div>
              <div className="text-slate-600 font-medium">
                Estudiantes activos
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">75k+</div>
              <div className="text-slate-600 font-medium">
                Documentos revisados
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">99.8%</div>
              <div className="text-slate-600 font-medium">
                Precisión garantizada
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">24/7</div>
              <div className="text-slate-600 font-medium">
                Soporte disponible
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              Características principales
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Todo lo que necesitas para garantizar la excelencia académica en
              tus trabajos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <FileCheck className="h-7 w-7 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">
                  Análisis APA 7 Completo
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Revisión exhaustiva de formato, citas, referencias y
                  estructura según las normas APA más recientes y actualizadas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-6">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                  <Zap className="h-7 w-7 text-emerald-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">
                  Feedback Instantáneo
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Resultados en menos de 30 segundos con sugerencias específicas
                  y actionables para mejorar tu documento
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-6">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                  <Shield className="h-7 w-7 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">
                  Privacidad Total
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Tus documentos son completamente confidenciales y se procesan
                  con encriptación de nivel empresarial
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-6">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                  <Search className="h-7 w-7 text-orange-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">
                  Detección Inteligente
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Identifica automáticamente errores comunes y sugiere mejoras
                  basadas en mejores prácticas académicas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-6">
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors">
                  <BookOpen className="h-7 w-7 text-rose-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">
                  Múltiples Formatos
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Soporte completo para APA, MLA, Vancouver, Chicago y otros
                  estilos académicos internacionales
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-6">
                <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors">
                  <Users className="h-7 w-7 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">
                  Colaboración Grupal
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Comparte y revisa documentos en equipo con comentarios
                  colaborativos y control de versiones
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-blue-50 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              Cómo funciona
            </h2>
            <p className="text-xl text-slate-600">
              Proceso simple y eficiente en 3 pasos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold shadow-lg">
                  1
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-200 rounded-full"></div>
              </div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
                <Upload className="h-8 w-8 text-blue-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-800">
                  Sube tu documento
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Arrastra y suelta tu archivo PDF o Word. Soportamos documentos
                  hasta 50MB con formato preservado.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold shadow-lg">
                  2
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-200 rounded-full"></div>
              </div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
                <BarChart3 className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-800">
                  Análisis inteligente
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Nuestra IA avanzada examina formato, citas, referencias y
                  coherencia en tiempo real.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold shadow-lg">
                  3
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-200 rounded-full"></div>
              </div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
                <Lightbulb className="h-8 w-8 text-amber-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-800">
                  Recibe mejoras
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Obtén un reporte detallado con correcciones específicas y
                  sugerencias de mejora profesionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              Lo que dicen nuestros usuarios
            </h2>
            <p className="text-xl text-slate-600">
              Miles de estudiantes confían en AcaCheck
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-slate-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "AcaCheck me ayudó a mejorar significativamente mis trabajos
                  de investigación. La precisión en las citas APA es
                  impresionante."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      MR
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">
                      María Rodríguez
                    </div>
                    <div className="text-sm text-slate-500">
                      Estudiante de Psicología
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "Increíble herramienta. Me ahorra horas de trabajo y mis
                  profesores notan la diferencia en la calidad de mis ensayos."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-semibold text-sm">
                      CL
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">
                      Carlos López
                    </div>
                    <div className="text-sm text-slate-500">
                      Estudiante de Derecho
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "La facilidad de uso y la precisión de las correcciones son
                  excepcionales. Lo recomiendo a todos mis compañeros."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-sm">
                      AG
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">
                      Ana García
                    </div>
                    <div className="text-sm text-slate-500">
                      Estudiante de Medicina
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-800 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Eleva la calidad de tus trabajos académicos
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Únete a más de 15,000 estudiantes que ya están destacando en sus
              estudios con AcaCheck. Comienza gratis hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/sign-up">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Crear Cuenta Gratis
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-400 text-slate-300 hover:bg-slate-700 hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  Iniciar Sesión
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-12 text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                <span className="text-sm">Sin tarjeta de crédito</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                <span className="text-sm">
                  Cancelación en cualquier momento
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                <span className="text-sm">Soporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-xl">
                  <FileCheck className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-slate-800">
                  AcaCheck
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                La plataforma líder en revisión académica para estudiantes
                universitarios de todo el mundo.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-6">Producto</h4>
              <ul className="space-y-4 text-slate-600">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Características
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Precios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Preguntas frecuentes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Integraciones
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-6">Empresa</h4>
              <ul className="space-y-4 text-slate-600">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Acerca de nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Carreras
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Prensa
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-6">Soporte</h4>
              <ul className="space-y-4 text-slate-600">
                <li>
                  <span>support@acacheck.com</span>
                </li>
                <li>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Centro de ayuda
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Estado del servicio
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-slate-500">
                &copy; {new Date().getFullYear()} AcaCheck. Todos los derechos
                reservados.
              </p>
              <div className="flex items-center space-x-8 text-slate-500">
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors"
                >
                  Privacidad
                </Link>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors"
                >
                  Términos
                </Link>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
