/* =====================================================
    📌 Middleware de autorización por roles
===================================================== */

/**
 * 🔒 Verifica si el usuario autenticado es administrador
 */
export const isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({
      message: "⛔ Acceso denegado: se requiere rol de administrador",
    });
  }
  next();
};

/**
 * 🔒 Middleware genérico para validar múltiples roles
 * @param  {...string} roles - Lista de roles permitidos
 *
 * Ejemplo:
 *   router.get("/ruta", hasRole("admin", "worker"), controlador);
 */
export const hasRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "⛔ Acceso denegado: rol no autorizado",
      });
    }
    next();
  };
};
