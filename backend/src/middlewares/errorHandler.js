const errorHandler = (err, req, res, next) => {
  console.error("❌ Error capturado:", err.stack);

  let statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  let message = err.message || "Ocurrió un error en el servidor";

  // Manejo de errores de Mongo/Mongoose
  if (err.name === "CastError") {
    statusCode = 400;
    message = "ID inválido en la solicitud";
  }

  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
  }

  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
