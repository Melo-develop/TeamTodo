import { createContext, useContext, useState } from "react";
import { API_URL } from "../config"; // ← IMPORTAR

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// ❌ ELIMINA ESTA LÍNEA:
// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [showToast, setShowToast] = useState(false);

  const login = async (username, password) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_URL}/users?username=${username}&password=${password}`
      );
      const data = await response.json();

      if (data.length === 1) {
        const user = data[0];
        setUser(user);
        triggerToast(`🎉 Bienvenido, ${user.username}`);
      } else {
        throw new Error("Usuario o contraseña incorrectos.");
      }
    } catch (error) {
      triggerToast(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    triggerToast("👋 Sesión cerrada");
  };

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