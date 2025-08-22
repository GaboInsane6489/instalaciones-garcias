// Middleware para verificar roles
export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "Acceso denegado: se requiere rol de administrador" });
  }
  next();
};

// Middleware más genérico: recibe roles permitidos
export const hasRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Acceso denegado: rol no autorizado" });
    }
    next();
  };
};
