# 🎯 Team To-Do: Gestor de Tareas Colaborativo

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON_Server-A6A6A6?style=for-the-badge&logo=json&logoColor=white)

Un dashboard intuitivo y moderno para la gestión de tareas en equipo, construido con tecnologías web modernas. Ofrece una experiencia de usuario fluida con funcionalidades clave como autenticación, creación, búsqueda y actualización de estado de tareas, todo en tiempo real.

---

## ✨ Características Principales

- **Login Sencillo:** Sistema de autenticación de usuario (acepta cualquier valor para demostración).
- **Dashboard Interactivo:** Una interfaz limpia y con estética pastel para gestionar tareas.
- **Creación de Tareas:** Añade nuevas tareas con descripciones claras.
- **Búsqueda Inteligente:** Filtra tareas por contenido o por autor con un indicador de carga para una mejor UX.
- **Gestión de Estado:** Marca tareas como `completadas` o `pendientes` con un solo clic.
- **Notificaciones Dinámicas:** Feedback visual instantáneo (éxito, error, información) a través de notificaciones "toast".
- **Backend Simulado:** Utiliza **JSON Server** para una rápida simulación de una API RESTful y persistencia de datos en un archivo `database.json`.

---

## 🛠️ Stack Tecnológico

Este proyecto está dividido en dos partes principales: un frontend moderno y un backend ligero para simular una base de datos.

### Frontend
- **React:** Biblioteca para construir la interfaz de usuario.
- **Vite:** Herramienta de desarrollo frontend ultrarrápida.
- **TailwindCSS:** Framework de CSS para un diseño rápido y personalizable.
- **Context API:** Para un manejo de estado global sencillo (ej. autenticación).

### Backend
- **Node.js:** Entorno de ejecución para el servidor.
- **json-server:** Para crear una API REST falsa con cero codificación en segundos.

---

## 🚀 Puesta en Marcha

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### 1. Pre-requisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 14 o superior) y npm.

### 2. Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/Melo-develop/team-to-do.git
    cd team-to-do
    ```

2.  **Instala las dependencias del Frontend:**
    ```bash
    npm install
    ```

3.  **Navega al backend e instala sus dependencias:**
    ```bash
    cd backend
    npm install
    cd ..
    ```

### 3. Configuración de la Base de Datos

El backend utiliza un archivo `database.json` para simular la base de datos. Si no existe en la carpeta `backend`, créalo con el siguiente contenido inicial:

```json
{
  "tasks": []
}
```

### 4. Ejecución del Proyecto

Necesitarás dos terminales para ejecutar el frontend y el backend de forma simultánea.

1.  **En la primera terminal, inicia el backend (API):**
    *Desde la raíz del proyecto*, ejecuta:
    ```bash
    npm run server
    ```
    Esto iniciará `json-server` en el puerto `3001` y "observará" los cambios en `backend/database.json`.

2.  **En la segunda terminal, inicia el frontend:**
    *Desde la raíz del proyecto*, ejecuta:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en [http://localhost:5173](http://localhost:5173) (o el puerto que indique Vite).

---

## 🕹️ Uso

1.  Abre la aplicación en tu navegador.
2.  Ingresa cualquier combinación de usuario y contraseña en el formulario de login.
3.  Una vez dentro, podrás ver el dashboard y empezar a gestionar tareas.
4.  Utiliza el botón **"Cerrar Sesión"** en la esquina superior derecha para volver a la pantalla de login.

---

## 👩‍💻 Autora

Desarrollado con ❤️ por **Paula Buitrago**.
