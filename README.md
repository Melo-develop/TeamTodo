#  Team To-Do (Proyecto Final)

Este es mi proyecto final hecho con **React + Vite + TailwindCSS**, un dashboard para gestionar tareas con login sencillo, pantalla de carga y notificaciones dinámicas.  

---

## Características
- Login con usuario y contraseña (acepta cualquier valor).
- Pantalla de carga con ruedita y texto **"Cargando..."**.
- Dashboard pastel con:
  - Añadir nuevas tareas.
  - Buscar tareas o autores (con mini-loading).
  - Marcar tareas como **completadas** o **no completadas**.
- Toast dinámico (verde, rojo, morado, amarillo) para mensajes de éxito o error.
- Uso de **database.json** con **json-server** como base de datos local.

---


Instalar dependencias:

bash
Copiar código
npm install
Instalar json-server de forma global (si no lo tienes):

bash
Copiar código
npm install -g json-server
Crear un archivo database.json en la raíz con este contenido inicial:

json
Copiar código
{
  "tasks": []
}
Ejecutar el servidor JSON:

bash
Copiar código
json-server --watch database.json --port 3001
Levantar la app en otro terminal:

bash
Copiar código
npm run dev
🚀 Uso
Ingresa con cualquier usuario y contraseña.

Se mostrará un loading pastel antes de entrar al dashboard.

Desde el dashboard puedes:

Añadir una nueva tarea.

Buscar por texto o autor (con mini-loading).

Marcar como completada/no completada con un botón.

El botón Cerrar sesión está fijo en la parte superior derecha.

📚 Dependencias
React

Vite

TailwindCSS

json-server

👩‍💻 Autores
Desarrollado por Paula Buitrago