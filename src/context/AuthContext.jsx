import { createContext, useContext, useState, useEffect } from "react";
import { API_URL } from "../config";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // Estado para la carga de la sesión inicial
  const [isInitializing, setIsInitializing] = useState(true);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  // 🚀 Efecto para cargar el usuario desde localStorage al iniciar la app
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error al leer el usuario de localStorage", error);
      // Si hay un error, nos aseguramos de que no haya usuario
      setUser(null);
    }
    setIsInitializing(false); // Terminamos la inicialización
  }, []);

  // ✅ Login real con una API
  const login = async (username, password) => {
    // Validar que los campos no estén vacíos
    if (!username || !password) {
      showToast("❌ El usuario y la contraseña son obligatorios.");
      return;
    }

    setLoading(true);
    try {
      // 1. Hacemos una petición GET a json-server para buscar al usuario
      // NOTA: En una app real, esto se haría con un POST a un endpoint seguro
      // y la contraseña nunca viajaría en la URL.
      const response = await fetch(
        `${API_URL}/users?username=${username}&password=${password}`
      );
      const data = await response.json();

      // 2. Verificamos si la respuesta contiene exactamente un usuario
      if (data.length === 1) {
        // Asumimos que la API devuelve el objeto del usuario en `data`
        const user = data[0];
        setUser(user);
        // 💾 Guardamos el usuario en localStorage
        localStorage.setItem("user", JSON.stringify(user));
        showToast(`🎉 Bienvenido, ${user.username}`);
      } else {
        // Si no se encuentra el usuario, lanzamos un error
        throw new Error("Usuario o contraseña incorrectos.");
      }
    } catch (error) {
      // Capturamos cualquier error de red o del servidor
      showToast(`❌ ${error.message}`);
    } finally {
      // Nos aseguramos de detener el estado de carga
      setLoading(false);
    }
  };

  // ✅ Logout
  const logout = () => {
    setUser(null);
    // 🗑️ Eliminamos el usuario de localStorage
    localStorage.removeItem("user");
    showToast("👋 Sesión cerrada");
  };

  // ✅ Función showToast (para llamar desde otros componentes)
  const showToast = (msg) => {
    if (!msg) {
      setIsToastVisible(false);
      return;
    }
    setToast(msg);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 3000);
  };

  return (
    <AuthContext.Provider
      value={{ 
        user, 
        login, 
        logout,
        isInitializing, // ← Pasamos el estado de inicialización
        loading, 
        toast, 
        isToastVisible, // ← Booleano para Toast.jsx
        showToast       // ← Función para App.jsx y otros componentes
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
