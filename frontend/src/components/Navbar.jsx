import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { UserCircle } from "lucide-react"; // 👤 ícono limpio

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Cierra el menú móvil al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const links = [
    { label: "Inicio", path: "/" },
    { label: "Nosotros", path: "/about" },
    { label: "Servicios", path: "/services" },
    { label: "Contacto", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/60 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo texto */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-blue-400 hover:scale-105 transition-transform"
          >
            <span>Instalaciones Garcia's</span>
          </Link>

          {/* Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium relative">
            {links.map(({ label, path }) => {
              const isActive = location.pathname === path;
              return (
                <div key={path} className="relative">
                  <Link
                    to={path}
                    className={`transition duration-300 ${
                      isActive
                        ? "text-blue-400"
                        : "text-gray-200 hover:text-blue-300"
                    }`}
                  >
                    {label}
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-400 rounded-full"
                    />
                  )}
                </div>
              );
            })}

            {/* Ícono Usuario (Login/Registro) */}
            <Link
              to="/auth"
              className="flex items-center text-gray-200 hover:text-blue-400 transition"
              aria-label="Iniciar sesión o registrarse"
            >
              <UserCircle className="w-6 h-6" />
            </Link>
          </div>

          {/* Botón Hamburguesa (Mobile) */}
          <div className="md:hidden flex items-center gap-4">
            {/* Ícono Usuario en Mobile */}
            <Link
              to="/auth"
              className="text-gray-200 hover:text-blue-400 transition"
              aria-label="Iniciar sesión o registrarse"
            >
              <UserCircle className="w-6 h-6" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-400 focus:outline-none"
              aria-label="Abrir menú"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile con animación */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.4 }}
        className="md:hidden bg-slate-800/90 backdrop-blur-md px-4 py-4 space-y-4 text-sm font-medium border-t border-slate-700"
      >
        {links.map(({ label, path }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`block transition ${
                isActive
                  ? "text-blue-400 font-semibold"
                  : "text-gray-200 hover:text-blue-300"
              }`}
            >
              {label}
            </Link>
          );
        })}

        {/* Ícono Usuario (Mobile dentro del menú) */}
        <Link
          to="/auth"
          className="flex items-center gap-2 text-gray-200 hover:text-blue-400 transition"
        >
          <UserCircle className="w-6 h-6" />
          <span>Acceder</span>
        </Link>
      </motion.div>
    </nav>
  );
}
