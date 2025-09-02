import api from "./api";

export const login = async (email, password) => {
  const { data } = await api.post("/auth/login", { email, password });
  localStorage.setItem("token", data.token); // si usas JWT en headers
  return data;
};

export const register = async (userData) => {
  const { data } = await api.post("/auth/register", userData);
  return data;
};
