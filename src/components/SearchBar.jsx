export default function SearchBar({ setSearch }) {
  return (
    <div className="flex items-center bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-xl shadow space-x-2">
      {/* Icono búsqueda */}
      <span className="text-purple-500">🔍</span>

      {/* Input */}
      <input
        type="text"
        placeholder="Buscar por autor o texto..."
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
      />
    </div>
  );
}
