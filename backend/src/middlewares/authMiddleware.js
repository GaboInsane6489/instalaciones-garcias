import jwt from "jsonwebtoken";

/* =====================================================
  📌 Middleware para proteger rutas con JWT
===================================================== */
export const protect = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Acceso denegado, no hay token" });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Token inválido" });
  }
};
