import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// ⚡ IMPORTAR LA URL DE LA API
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [showToast, setShowToast] = useState(false);

  // ✅ Login real con una API
  const login = async (username, password) => {
    setLoading(true);
    try {
      // 1. Hacemos una petición GET a json-server para buscar al usuario
      // NOTA: En una app real, esto se haría con un POST a un endpoint seguro
      // y la contraseña nunca viajaría en la URL.
      const response = await fetch(
        `${API_URL}/users?username=${username}&password=${password}` // ← CAMBIO AQUÍ
      );
      const data = await response.json();

      // 2. Verificamos si la respuesta contiene exactamente un usuario
      if (data.length === 1) {
        // Asumimos que la API devuelve el objeto del usuario en `data`
        const user = data[0];
        setUser(user);
        triggerToast(`🎉 Bienvenido, ${user.username}`);
      } else {
        // Si no se encuentra el usuario, lanzamos un error
        throw new Error("Usuario o contraseña incorrectos.");
      }
    } catch (error) {
      // Capturamos cualquier error de red o del servidor
      triggerToast(`❌ ${error.message}`);
    } finally {
      // Nos aseguramos de detener el estado de carga
      setLoading(false);
    }
  };

  // ✅ Logout
  const logout = () => {
    setUser(null);
    triggerToast("👋 Sesión cerrada");
  };

  // ✅ Toast dinámico
  const triggerToast = (msg) => {
    if (!msg) {
      setShowToast(false);
      return;
    }
    setToast(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loading, toast, showToast, triggerToast }}
    >
      {children}
    </AuthContext.Provider>
  );
}