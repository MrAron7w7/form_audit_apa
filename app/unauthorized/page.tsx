export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Acceso Denegado</h1>
        <p>No tienes permisos para acceder a esta página.</p>
        <a href="/dashboard" className="text-blue-500 mt-4 inline-block">
          Volver al Dashboard
        </a>
      </div>
    </div>
  );
}
