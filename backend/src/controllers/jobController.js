import {
  createJobService,
  getJobsService,
  getJobByIdService,
  deleteJobService,
} from "../services/jobService.js";

/* 📌 Crear trabajo (Solo admin) */
export const createJob = async (req, res, next) => {
  try {
    const job = await createJobService({
      ...req.body,
      createdBy: req.user._id, // el admin que lo crea
    });
    res.status(201).json({ message: "✅ Trabajo creado con éxito", job });
  } catch (error) {
    next(error);
  }
};

/* 📌 Obtener todos los trabajos con filtros */
export const getJobs = async (req, res, next) => {
  try {
    const { category, dateFrom, dateTo } = req.query;
    const filters = {};

    if (category) filters.category = category;
    if (dateFrom || dateTo) {
      filters.date = {};
      if (dateFrom) filters.date.$gte = new Date(dateFrom);
      if (dateTo) filters.date.$lte = new Date(dateTo);
    }

    const jobs = await getJobsService(filters);
    res.json(jobs);
  } catch (error) {
    next(error);
  }
};

/* 📌 Obtener trabajo por ID */
export const getJobById = async (req, res, next) => {
  try {
    const job = await getJobByIdService(req.params.id);
    if (!job) return res.status(404).json({ message: "Trabajo no encontrado" });
    res.json(job);
  } catch (error) {
    next(error);
  }
};

/* 📌 Eliminar trabajo (Solo admin) */
export const deleteJob = async (req, res, next) => {
  try {
    await deleteJobService(req.params.id);
    res.json({ message: "🗑️ Trabajo eliminado correctamente" });
  } catch (error) {
    next(error);
  }
};
