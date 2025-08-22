import { Router } from "express";
import { register, login } from "../controllers/authController.js";

const router = Router();

/* =====================================================
    📌 Rutas de Autenticación
   ===================================================== */
router.post("/register", register); // 👉 POST /api/auth/register
router.post("/login", login); // 👉 POST /api/auth/login

export default router;
