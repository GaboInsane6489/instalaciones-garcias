import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // ⚡ tu backend corre aquí
  withCredentials: true, // si usas cookies (ej. JWT en cookies)
});

export default api;
