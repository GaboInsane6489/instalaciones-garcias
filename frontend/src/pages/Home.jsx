import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Efecto de fondo con círculos */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Título principal animado */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        className="text-5xl md:text-7xl font-extrabold text-center"
      >
        Instalaciones <span className="text-blue-400">Garcia's</span>
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl text-center"
      >
        Expertos en instalaciones y mantenimiento eléctrico, brindando{" "}
        <span className="text-blue-400 font-semibold">calidad y seguridad</span>{" "}
        en cada proyecto.
      </motion.p>

      {/* Botones CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-10 flex gap-6"
      >
        {/* Botón principal: texto blanco para mejor contraste */}
        <a
          href="/services"
          className="px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition font-semibold shadow-lg"
        >
          Nuestros Servicios
        </a>
        {/* Botón secundario */}
        <a
          href="/contact"
          className="px-6 py-3 rounded-xl border border-gray-500 hover:border-blue-400 transition font-semibold"
        >
          Contáctanos
        </a>
      </motion.div>

      {/* Imagen decorativa flotante con filtro blanco */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/3145/3145765.png"
        alt="Electricidad"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
        className="mt-12 w-32 md:w-40 opacity-90 hover:scale-110 transition-transform invert brightness-200"
      />
    </section>
  );
}
