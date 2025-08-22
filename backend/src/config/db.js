import mongoose from "mongoose";

/**
 * 📌 Conexión a la base de datos MongoDB
 * Usa la URI definida en el archivo .env
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Compatibilidad con nuevas versiones
      useUnifiedTopology: true, // Mejor manejo de conexiones
    });

    console.log(`✅ MongoDB conectado en: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ Error de conexión a MongoDB:", error.message);
    process.exit(1); // 👈 Finaliza el proceso si no hay DB
  }
};

export default connectDB;
