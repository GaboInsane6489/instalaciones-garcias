import bcrypt from "bcryptjs"; // 👈 Manejo seguro de contraseñas
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* =====================================================
    📌 Generar JWT (Función reutilizable)
   ===================================================== */
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role }, // payload
    process.env.JWT_SECRET, // clave secreta
    { expiresIn: "1d" } // duración del token
  );
};

/* =====================================================
    📌 Registro de usuario
   ===================================================== */
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1️⃣ Validar campos obligatorios
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Todos los campos son requeridos" });
    }

    // 2️⃣ Verificar si ya existe el usuario
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // 3️⃣ Hashear contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ Crear nuevo usuario con rol por defecto = "user"
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "user",
    });

    // 5️⃣ Generar token automático tras registrarse
    const token = generateToken(newUser);

    res.status(201).json({
      message: "✅ Usuario registrado con éxito",
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error("❌ Error en register:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

/* =====================================================
    📌 Login de usuario
   ===================================================== */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Validar campos
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email y contraseña son requeridos" });
    }

    // 2️⃣ Buscar usuario por email
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    // 3️⃣ Verificar contraseña
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    // 4️⃣ Generar token JWT
    const token = generateToken(user);

    res.json({
      message: "✅ Login exitoso",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("❌ Error en login:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};
