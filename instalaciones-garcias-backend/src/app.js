import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Ruta simple para confirmar estado del servidor
app.get("/api/status", (req, res) => {
    res.json({
        success: true,
        message: "Servidor activo y conectado a MongoDB Atlas"
    });
});

// Puerto configurable desde .env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
});
