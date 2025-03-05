import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const navItems = [
    "home",
    "about",
    "experience",
    "projects",
    "skills",
    "testimonials",
    "contact",
  ];
  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item));

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden sm:block"
    >
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 shadow-lg">
        {navItems.map((item) => (
          <motion.button
            key={item}
            onClick={() => scrollToSection(item)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`
              px-4 py-2 rounded-full text-sm capitalize transition-colors duration-300
              ${
                activeSection === item
                  ? "bg-purple-500 text-white"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }
            `}
          >
            {item}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};
