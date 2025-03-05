import { motion } from "framer-motion";
import { useState } from "react";

export const BentoBox = ({ children, className, delay = 0, hover = true }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={handleMouseMove}
      className={`
        relative
        rounded-3xl
        bg-gradient-to-br from-white/[0.03] to-white/[0.08]
        backdrop-blur-3xl
        border border-white/10
        p-6
        transition-all duration-300
        overflow-hidden
        ${
          hover
            ? "hover:border-white/25 hover:shadow-2xl hover:shadow-purple-500/10"
            : ""
        }
        ${className}
      `}
    >
      {hover && (
        <motion.div
          className="absolute inset-0 opacity-0 hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168,85,247,0.06), transparent 40%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
};
