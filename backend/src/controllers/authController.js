import { registerService, loginService } from "../services/authService.js";

/* =====================================================
    📌 Registro de usuario
    - Crea siempre usuarios con rol "user"
    - Roles especiales ("admin", "worker") se crean solo por admin
===================================================== */
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Todos los campos son requeridos" });
    }

    // 👇 Forzamos el rol "user" en el registro
    const user = await registerService({ name, email, password, role: "user" });

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
