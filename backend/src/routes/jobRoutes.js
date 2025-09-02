import express from "express";
import {
  createJob,
  getJobs,
  getJobById,
  deleteJob,
} from "../controllers/jobController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/roleMiddleware.js";

const router = express.Router();

// ✅ Filtrado disponible para todos (no requiere login)
router.get("/", getJobs);
router.get("/:id", getJobById);

// ✅ Solo admin puede crear/eliminar
router.post("/", protect, isAdmin, createJob);
router.delete("/:id", protect, isAdmin, deleteJob);

export default router;
