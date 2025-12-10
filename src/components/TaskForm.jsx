import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center space-x-2 bg-gradient-to-r from-pink-50 to-blue-50 p-3 rounded-xl shadow"
    >
      <input
        type="text"
        placeholder="✏️ Escribe una nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
      />
      <button
        type="submit"
        className="bg-green-300 text-green-900 font-semibold px-4 py-2 rounded-lg hover:bg-green-400 shadow transition"
      >
        Añadir
      </button>
    </form>
  );
}
