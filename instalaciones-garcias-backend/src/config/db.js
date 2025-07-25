// src/config/db.js
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Conectado a MongoDB Atlas");
    } catch (error) {
        console.error("❌ Error de conexión:", error.message);
    }
};

