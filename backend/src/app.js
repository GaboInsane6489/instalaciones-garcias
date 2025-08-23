import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js"; // ✅ conexión a Mongo centralizada

// Importar rutas
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

// Importar middlewares personalizados
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";

// 📌 Cargar variables de entorno
dotenv.config();

// Inicializar aplicación
const app = express();

// =========================
// 🛠 Middlewares globales
// =========================
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*", // en .env pondrás la URL de tu frontend
    credentials: true,
  })
);
app.use(express.json()); // Permitir JSON en body
app.use(morgan("dev")); // Logs de requests

// =========================
// 🔗 Conexión a MongoDB
// =========================
connectDB(); // ✅ Ahora se conecta desde config/db.js

// =========================
// 📌 Rutas principales
// =========================
app.use("/api/users", userRoutes); // CRUD usuarios
app.use("/api/auth", authRoutes); // Registro y login

// Ruta raíz (check rápido de la API)
app.get("/", (_, res) => {
  res.json({ message: "Bienvenido a Instalaciones Garcia's API 🚀" });
});

// ✅ Middleware para rutas no encontradas (404)
app.use(notFound);

// ✅ Middleware para manejo de errores
app.use(errorHandler);

// =========================
// 🚀 Levantar servidor
// =========================
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
