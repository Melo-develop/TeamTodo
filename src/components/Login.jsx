import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";

export default function Login() {
  const { login, loading } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
      <div className="bg-white p-7 rounded-2xl shadow-xl w-96">
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">
           Team To-Do ✨
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Usuario
            </label>
            <input
              type="text"
              placeholder="Escribe tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Escribe tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-400 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-purple-500 transition"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
