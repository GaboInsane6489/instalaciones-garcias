import jwt from "jsonwebtoken";

// Middleware para verificar el token JWT
export const verifyToken = (req, res, next) => {
  // Extraer el token del header "Authorization"
  const token = req.headers["authorization"];

  // Si no hay token, denegamos acceso
  if (!token) {
    return res.status(401).json({ message: "Acceso denegado, no hay token" });
  }

  try {
    // Normalmente el token llega con el formato: "Bearer <token>"
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);

    // Guardamos la info del usuario en la request
    req.user = decoded;

    // Pasamos al siguiente middleware/controlador
    next();
  } catch (error) {
    return res.status(400).json({ message: "Token inválido" });
  }
};
