# 🛠 Instalaciones Garcia’s – Backend

Este repositorio contiene la base del backend para el proyecto “Instalaciones Garcia’s”, desarrollado con Node.js, Express y MongoDB. La arquitectura sigue un enfoque **MVC**, permitiendo escalabilidad y una fácil integración posterior con el frontend.

---

## 📁 Estructura

instalaciones-garcias-backend/
├── src/
│   ├── controllers/        # Lógica de cada recurso (FAQ, Servicios, Contacto, etc.)
│   ├── models/             # Esquemas de Mongoose
│   ├── routes/             # Define las rutas por recurso
│   ├── views/              # Si usas EJS para panel de administración
│   ├── utils/              # Funciones auxiliares (validación, formateo, helpers)
│   ├── middlewares/        # Validación, logging, manejo de errores
│   ├── config/             # Conexión a MongoDB, variables de entorno
│   ├── app.js              # Configuración principal de Express
├── .env                    # Variables sensibles como MONGO_URI
├── package.json
└── README.md


📦 Tecnologías

    Node.js

    Express

    MongoDB + Mongoose

    EJS (opcional para administración)

    dotenv

    nodemon (modo desarrollo)

📍 Estado actual
✅ Estructura base lista ✅ Conexión con base de datos ⏳ Próximo: Implementar modelos y rutas para módulos específicos

🤝 Autor
Gabriel González Desarrollador web apasionado por la calidad, la escalabilidad y la experiencia del usuario.