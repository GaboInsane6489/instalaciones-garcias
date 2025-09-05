import { motion } from "framer-motion";

export default function AnimatedSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="mb-12"
    >
      {children}
    </motion.div>
  );
}
