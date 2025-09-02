import { useState } from "react";
import AuthContext from "./AuthContext";
import { login } from "../services/authService";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    const data = await login(email, password);
    setUser(data.user); // ⚡ depende de que devuelva tu backend
    localStorage.setItem("token", data.token);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
