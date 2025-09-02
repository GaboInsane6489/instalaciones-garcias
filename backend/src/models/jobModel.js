// models/jobModel.js
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "El título es obligatorio"],
    },
    description: {
      type: String,
      required: [true, "La descripción es obligatoria"],
    },
    category: {
      type: String,
      enum: ["electricidad", "plomería", "pintura", "climatización", "otros"],
      required: true,
    },
    client: {
      type: String,
      required: false, // opcional, por privacidad
    },
    date: {
      type: Date,
      default: Date.now,
    },
    images: [String], // URLs de imágenes subidas
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Admin que subió el trabajo
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
