/**
 * 📌 Middleware para manejar rutas no encontradas (404)
 * Debe ir antes del errorHandler en app.js
 *
 * Ejemplo:
 *   app.use(notFound);
 */
const notFound = (req, res, next) => {
  const error = new Error(`❌ Ruta no encontrada - ${req.originalUrl}`);
  res.status(404);
  next(error); // Lo pasamos al errorHandler
};

export default notFound;
