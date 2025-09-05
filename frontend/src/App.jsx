import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy, useEffect } from "react"; // 👈 añade useEffect aquí
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./layouts/Layout.jsx";

// Lazy load páginas
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));

// Componente para animar transición de rutas
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {[
          { path: "/", Element: Home },
          { path: "/about", Element: About },
          { path: "/services", Element: Services },
          { path: "/contact", Element: Contact },
        ].map(({ path, Element }) => (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Suspense
                    fallback={
                      <div className="text-center py-20">Cargando...</div>
                    }
                  >
                    <Element />
                  </Suspense>
                </motion.div>
              </Layout>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

// Scroll top al cambiar de ruta
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
