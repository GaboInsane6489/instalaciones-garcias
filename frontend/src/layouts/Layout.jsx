import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth bg-gradient-to-b from-slate-900 via-slate-950 to-black text-gray-100 overflow-x-hidden">
      {/* 🔝 Navbar fijo */}
      <Navbar />

      {/* 👇 Contenido con padding-top para no ser tapado */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-grow pt-16 px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.main>

      {/* 🔻 Footer elegante */}
      <Footer />
    </div>
  );
}
