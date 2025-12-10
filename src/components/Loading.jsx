export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
      {/* Ruedita animada */}
      <div className="w-16 h-16 border-4 border-purple-300 border-t-transparent rounded-full animate-spin mb-4"></div>
      
      {/* Texto */}
      <p className="text-lg font-semibold text-purple-600">Cargando...</p>
    </div>
  );
}
