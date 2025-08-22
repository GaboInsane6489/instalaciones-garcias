# ⚡ Instalaciones García's

Aplicación web full stack para **gestionar servicios técnicos** de electricidad, plomería y mantenimiento.  
Incluye un **backend con Node.js + Express + MongoDB** y un **frontend con React + Vite**, optimizado para SEO, rendimiento y animaciones.

---

## 🚀 Tecnologías principales

### Backend

- Node.js + Express
- MongoDB + Mongoose
- JWT (autenticación)
- BcryptJS (hash de contraseñas)
- Dotenv (variables de entorno)
- Morgan (logs)
- ESLint + Prettier (estilo y calidad de código)

### Frontend

- React (con Vite)
- TailwindCSS + Animaciones
- React Router DOM
- Axios (consumo de API)
- Framer Motion (animaciones)

---

## 📂 Estructura del proyecto

📦 instalaciones-garcias
├── backend
│ └── src
│ ├── config # Configuración general (db, etc.)
│ ├── controllers # Lógica de negocio
│ ├── middlewares # Middlewares (auth, roles)
│ ├── models # Modelos de Mongoose
│ ├── routes # Rutas Express
│ ├── services # Servicios (ej: email, helpers)
│ ├── utils # Funciones de utilidad
│ └── app.js # Punto de entrada
├── frontend
│ └── src
│ ├── assets # Recursos estáticos
│ ├── components # Componentes reutilizables
│ ├── pages # Páginas principales
│ ├── hooks # Custom Hooks
│ ├── context # Context API / Providers
│ └── main.jsx # Punto de entrada React
├── .env # Variables de entorno
├── package.json
└── README.md

---

## ⚙️ Instalación

### 🔹 1. Clonar repositorio

```bash
git clone https://github.com/tuusuario/instalaciones-garcias.git
cd instalaciones-garcias

🔹 2. Configuración Backend

cd backend
npm install

    Crear archivo .env en backend/ con:

PORT=4000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/instalaciones
JWT_SECRET=tu_secreto_seguro

    Levantar servidor en desarrollo:

npm run dev

Levantar servidor en desarrollo:

npm run dev

🌟 Roadmap (pendiente)

    Dashboard administrativo

    Sistema de notificaciones por email

    SEO avanzado en frontend

    Tests unitarios y de integración

👨‍💻 Autor

Proyecto desarrollado por Gabriel González
💼 LinkedIn
    | 🌐 Portafolio


```
