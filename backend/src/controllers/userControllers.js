import User from "../models/User.js";
import bcrypt from "bcryptjs"; // Para encriptar contraseñas

/* =====================================================
    📌 Crear usuario (Solo admin)
    ===================================================== */
export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // 1️⃣ Validar que no exista un usuario con el mismo email
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "El email ya está registrado" });
    }

    // 2️⃣ Hashear la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3️⃣ Crear el nuevo usuario
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: role || "user", // por defecto "user"
    });

    await user.save();

    res.status(201).json({
      message: "Usuario creado correctamente",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear usuario", error: error.message });
  }
};

/* =====================================================
    📌 Obtener todos los usuarios (Solo admin)
    ===================================================== */
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // excluye password
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener usuarios", error: error.message });
  }
};

/* =====================================================
    📌 Obtener un usuario por ID
    - Admin puede ver a cualquiera
    - Usuario solo puede ver su propio perfil
    ===================================================== */
export const getUserById = async (req, res) => {
  try {
    // Verificamos si no es admin y quiere ver otro perfil
    if (req.user.role !== "admin" && req.user.id !== req.params.id) {
      return res.status(403).json({ message: "No puedes ver otros perfiles" });
    }

    const user = await User.findById(req.params.id).select("-password");
    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener usuario", error: error.message });
  }
};

/* =====================================================
    📌 Actualizar usuario
    - Admin puede actualizar a cualquiera
    - Usuario solo puede actualizar su propio perfil
    ===================================================== */
export const updateUser = async (req, res) => {
  try {
    if (req.user.role !== "admin" && req.user.id !== req.params.id) {
      return res
        .status(403)
        .json({ message: "No puedes modificar a otros usuarios" });
    }

    const { name, email, password } = req.body;
    const updateData = { name, email };

    // Si envía password, la hasheamos antes de actualizar
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const user = await User.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    }).select("-password");

    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    res.json({ message: "Usuario actualizado correctamente", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar usuario", error: error.message });
  }
};

/* =====================================================
    📌 Eliminar usuario (Solo admin)
    ===================================================== */
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar usuario", error: error.message });
  }
};
