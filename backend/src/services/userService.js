import User from "../models/User.js";
import bcrypt from "bcryptjs";

/* =====================================================
    📌 Crear usuario (solo admin)
===================================================== */
export const createUserService = async ({ name, email, password, role }) => {
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error("El email ya está registrado");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: role || "user",
  });

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
};

/* =====================================================
    📌 Obtener todos los usuarios
===================================================== */
export const getAllUsersService = async () => {
  return await User.find().select("-password");
};

/* =====================================================
    📌 Obtener usuario por ID
===================================================== */
export const getUserByIdService = async (id) => {
  const user = await User.findById(id).select("-password");
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};

/* =====================================================
    📌 Actualizar usuario
===================================================== */
export const updateUserService = async (id, data) => {
  const updateData = {
    name: data.name,
    email: data.email,
  };

  if (data.password) {
    updateData.password = await bcrypt.hash(data.password, 10);
  }

  const user = await User.findByIdAndUpdate(id, updateData, {
    new: true,
  }).select("-password");

  if (!user) throw new Error("Usuario no encontrado");
  return user;
};

/* =====================================================
    📌 Eliminar usuario
===================================================== */
export const deleteUserService = async (id) => {
  const user = await User.findByIdAndDelete(id);
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};
