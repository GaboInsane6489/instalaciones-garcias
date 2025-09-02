import {
  createUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
} from "../services/userService.js";

/* =====================================================
    📌 Crear usuario (Solo admin)
    - El admin puede asignar roles: "user", "worker" o "admin"
    - Si el rol enviado no es válido, se asigna "user"
===================================================== */
export const createUser = async (req, res, next) => {
  try {
    // Solo admin puede crear usuarios con roles especiales
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Solo un admin puede crear usuarios con roles" });
    }

    const { name, email, password, role } = req.body;

    // Roles permitidos en el sistema
    const allowedRoles = ["user", "worker", "admin"];
    const finalRole = allowedRoles.includes(role) ? role : "user";

    const user = await createUserService({
      name,
      email,
      password,
      role: finalRole,
    });

    res.status(201).json({
      message: `✅ Usuario con rol '${finalRole}' creado correctamente`,
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
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Acceso denegado" });
    }

    const users = await getAllUsersService();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

/* =====================================================
    📌 Obtener un usuario por ID
    - El admin puede ver cualquier usuario
    - Un user/worker solo puede ver su propio perfil
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
    - Admin puede modificar a cualquier usuario
    - Un user/worker solo puede modificar su propia cuenta
===================================================== */
export const updateUser = async (req, res, next) => {
  try {
    if (req.user.role !== "admin" && req.user.id !== req.params.id) {
      return res
        .status(403)
        .json({ message: "No puedes modificar a otros usuarios" });
    }
    const user = await updateUserService(req.params.id, req.body);
    res.json({ message: "✅ Usuario actualizado correctamente", user });
  } catch (error) {
    next(error);
  }
};

/* =====================================================
    📌 Eliminar usuario (Solo admin)
===================================================== */
export const deleteUser = async (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Solo un admin puede eliminar usuarios" });
    }

    const user = await deleteUserService(req.params.id);
    res.json({ message: "✅ Usuario eliminado correctamente", user });
  } catch (error) {
    next(error);
  }
};
