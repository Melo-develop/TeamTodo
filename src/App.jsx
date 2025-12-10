import { useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import Toast from "./components/Toast";
import { useState, useEffect } from "react";
import { API_URL } from "./config";

export default function App() {
  const { user, logout, loading, showToast } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  // 🚀 Cargar tareas desde database.json
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(`${API_URL}/tasks`);
        const data = await res.json();
        setTasks(data);
      } catch (err) {
        showToast("❌ Error al cargar tareas");
      }
    };
    fetchTasks();
  }, [showToast]); // ← Agregada dependencia

  // ✅ Agregar tarea
  const addTask = async (text) => {
    if (text.trim() === "") {
      showToast("❌ La tarea no puede estar vacía");
      return;
    }

    // ← FIX: Usar user.username en lugar de todo el objeto user
    const newTask = { 
      id: Date.now(), 
      text, 
      author: user.username, // ← CAMBIO: Solo el username
      done: false 
    };

    try {
      await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });
      setTasks([...tasks, newTask]);
      showToast("✅ Tarea añadida con éxito");
    } catch {
      showToast("❌ Error al guardar tarea");
    }
  };

  // ✅ Cambiar estado
  const toggleTask = async (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    setTasks(updatedTasks);

    const updated = updatedTasks.find((t) => t.id === id);

    try {
      await fetch(`${API_URL}/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
    } catch {
      showToast("❌ Error al actualizar tarea");
    }
  };

  // ✅ Simular búsqueda con loading
  const handleSearch = (value) => {
    setSearch(value);
    setSearchLoading(true);
    setTimeout(() => {
      setSearchLoading(false);
    }, 1500);
  };

  const filteredTasks = tasks.filter(
    (t) =>
      t.text.toLowerCase().includes(search.toLowerCase()) ||
      t.author.toLowerCase().includes(search.toLowerCase())
  );

  // ⚡ Render condicional
  if (loading) return <Loading />;
  if (!user) return <Login />;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100 p-6 relative">
      {/* Botón cerrar sesión arriba */}
      <button
        onClick={logout}
        className="absolute top-4 right-6 bg-red-400 text-white px-4 py-2 rounded-lg shadow hover:bg-red-500 transition"
      >
        Cerrar sesión
      </button>

      {/* Contenedor central */}
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-4">
        <h1 className="text-3xl font-bold text-purple-600 text-center">
          Team To-Do ✨
        </h1>

        <TaskForm addTask={addTask} />
        <SearchBar setSearch={handleSearch} />

        {searchLoading ? (
          <Loading />
        ) : (
          <TaskList tasks={filteredTasks} toggleTask={toggleTask} />
        )}
      </div>

      <Toast />
    </div>
  );
}