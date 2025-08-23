import { registerService, loginService } from "../services/authService.js";

/* =====================================================
    📌 Registro de usuario
===================================================== */
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Todos los campos son requeridos" });
    }

    const user = await registerService({ name, email, password });

    res.status(201).json({
      message: "✅ Usuario registrado con éxito",
      user,
    });
  } catch (error) {
    console.error("❌ Error en register:", error.message);
    res.status(500).json({ message: error.message || "Error en el servidor" });
  }
};

/* =====================================================
    📌 Login de usuario
===================================================== */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email y contraseña son requeridos" });
    }

    const { user, token } = await loginService({ email, password });

    res.json({
      message: "✅ Login exitoso",
      token,
      user,
    });
  } catch (error) {
    console.error("❌ Error en login:", error.message);
    res
      .status(401)
      .json({ message: error.message || "Credenciales inválidas" });
  }
};
