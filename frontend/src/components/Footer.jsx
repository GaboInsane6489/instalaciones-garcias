import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-slate-900/90 backdrop-blur-md text-gray-300 mt-32 overflow-hidden">
      {/* Línea superior animada */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 origin-left"
      />

      {/* Contenido principal */}
      <div className="w-full max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Información */}
        <div>
          <h4 className="text-white font-semibold mb-4">Más información</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Política de privacidad",
              "Términos y condiciones",
              "Soporte",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h4 className="text-white font-semibold mb-4">Servicios</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Drywall y acabados",
              "Instalaciones eléctricas",
              "Remodelaciones",
              "Consultoría",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Compañía */}
        <div>
          <h4 className="text-white font-semibold mb-4">Compañía</h4>
          <ul className="space-y-2 text-sm">
            {["Sobre nosotros", "Proyectos", "Carreras"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-400" /> Caracas, Venezuela
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-blue-400" /> +58 212-1234567
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-blue-400" /> contacto@garcias.com
            </li>
            <li className="flex items-center gap-2">
              <Clock size={16} className="text-blue-400" /> Lun-Vie: 8am - 6pm
            </li>
          </ul>
        </div>

        {/* Newsletter + Redes */}
        <div>
          <h4 className="text-white font-semibold mb-4">Suscríbete</h4>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full sm:flex-1 px-3 py-2 rounded bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
            />
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white px-5 py-2 rounded text-sm font-medium transition">
              Enviar
            </button>
          </div>

          {/* Redes sociales */}
          <div className="mt-6 flex space-x-5 text-xl">
            <a href="#" className="hover:text-blue-400 transition">
              <Globe size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 py-6 border-t border-slate-700 text-sm">
        © {new Date().getFullYear()} Instalaciones Garcia's. Construyendo
        calidad y confianza.
      </div>
    </footer>
  );
}
