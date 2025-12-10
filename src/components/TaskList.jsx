export default function TaskList({ tasks, toggleTask }) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 italic">
        No hay tareas todavía ✨
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => {
        // ✅ FIX: Validar si author es string u objeto
        const authorName = typeof task.author === 'string' 
          ? task.author 
          : task.author?.username || 'Anónimo';

        return (
          <div
            key={task.id}
            className="p-4 bg-pink-50 rounded-xl shadow-md border border-purple-100"
          >
            {/* Autor */}
            <h3 className="text-sm font-semibold text-purple-600 mb-1">
              Autor: {authorName}
            </h3>

            {/* Texto de la tarea */}
            <p
              className={`text-lg ${
                task.done ? "line-through text-gray-400" : "text-gray-700"
              }`}
            >
              {task.text}
            </p>

            {/* Botón de acción */}
            <button
              onClick={() => toggleTask(task.id)}
              className={`mt-3 px-3 py-1 rounded-lg font-medium transition ${
                task.done
                  ? "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  : "bg-purple-400 text-white hover:bg-purple-500"
              }`}
            >
              {task.done ? "Marcar como pendiente" : "Marcar como completada"}
            </button>
          </div>
        );
      })}
    </div>
  );
}