import {
  createUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
} from "../services/userService.js";

/* =====================================================
    📌 Crear usuario (Solo admin)
===================================================== */
export const createUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await createUserService({ name, email, password, role });
    res.status(201).json({
      message: "Usuario creado correctamente",
      user,
    });
  } catch (error) {
    next(error);
  }
};

/* =====================================================
    📌 Obtener todos los usuarios (Solo admin)
===================================================== */
export const getUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

/* =====================================================
    📌 Obtener un usuario por ID
===================================================== */
export const getUserById = async (req, res, next) => {
  try {
    if (req.user.role !== "admin" && req.user.id !== req.params.id) {
      return res.status(403).json({ message: "No puedes ver otros perfiles" });
    }
    const user = await getUserByIdService(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

/* =====================================================
    📌 Actualizar usuario
===================================================== */
export const updateUser = async (req, res, next) => {
  try {
    if (req.user.role !== "admin" && req.user.id !== req.params.id) {
      return res
        .status(403)
        .json({ message: "No puedes modificar a otros usuarios" });
    }
    const user = await updateUserService(req.params.id, req.body);
    res.json({ message: "Usuario actualizado correctamente", user });
  } catch (error) {
    next(error);
  }
};

/* =====================================================
    📌 Eliminar usuario (Solo admin)
===================================================== */
export const deleteUser = async (req, res, next) => {
  try {
    const user = await deleteUserService(req.params.id);
    res.json({ message: "Usuario eliminado correctamente", user });
  } catch (error) {
    next(error);
  }
};
