import { motion, AnimatePresence } from "framer-motion";
import { FloatingNav } from "./FloatingNav";

export const Layout = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-smooth"
      >
        {children}
        <FloatingNav />
      </motion.main>
    </AnimatePresence>
  );
};
