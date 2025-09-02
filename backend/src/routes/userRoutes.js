import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userControllers.js";
import { protect } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/roleMiddleware.js";

const router = express.Router();

// 🔒 Todas requieren login
router.use(protect);

// 📌 Rutas accesibles solo para admin
router.get("/", isAdmin, getUsers); // ver todos
router.post("/", isAdmin, createUser); // crear usuario
router.delete("/:id", isAdmin, deleteUser); // eliminar usuario

// 📌 Rutas accesibles para cualquier usuario logueado
router.get("/:id", getUserById);
router.put("/:id", updateUser);

export default router;
