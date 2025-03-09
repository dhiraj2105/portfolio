import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BentoBox } from "../ui/BentoBox";

import menpackImage from "../../assets/project-images/menpack.png";
import dlogImage from "../../assets/project-images/dlog.png";
import videchatImage from "../../assets/project-images/videochat.png";
import meilleurspaceImage from "../../assets/project-images/meilleurspace.png";

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projects = [
    {
      title: "Men-Pack",
      description:
        "Developed and published an npm package that enhanced the efficiency of Express and MongoDB application development.​ Attracting over 500 developers who benefited from streamlined coding processes.",
      tech: ["MongoDB", "Express.js", "Node.js", "TypeScript"],
      image: menpackImage,
      link: "#",
    },
    {
      title: "MeilleurSpace",
      description:
        "Designed a user-friendly image-sharing platform with integrated messaging capabilities. Implemented feedback mechanisms that resulted in a 30% improvement in user satisfaction ratings, directlyimpacting platform growth.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: meilleurspaceImage,
      link: "#",
    },
    {
      title: "Video Conferencing Platform",
      description:
        "Engineered a video conferencing app with real-time communication, enabling one-on-one video calls and callmeetings.",
      tech: ["React", "Node.js", "MongoDB", "ZegoCloud", "TypeScript"],
      image: videchatImage,
      link: "#",
    },
    {
      title: "Blog Platform",
      description:
        "Engineered a blogging platform with full CRUD capabilities and image upload, supporting 55+ users.Implemented user authentication and authorization, ensuring secure user data.",
      tech: ["Tailwind CSS", "Next.js", "MongoDB", "TypeScript"],
      image: dlogImage,
      link: "#",
    },
    {
      title: "Your-linux",
      description:
        "Currently working on a project where students can learn linux",
      tech: ["Tailwind CSS", "React.js", "MongoDB", "Node.js", "Docker"],
      image: menpackImage,
      link: "#",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-8"
      >
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            onClick={() =>
              setActiveProject(
                (prev) => (prev - 1 + projects.length) % projects.length
              )
            }
          >
            ←
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            onClick={() =>
              setActiveProject((prev) => (prev + 1) % projects.length)
            }
          >
            →
          </motion.button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <BentoBox className="md:col-span-3 relative overflow-hidden aspect-[16/10]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full">
                <img
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg" />
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-2 mb-3">
              {projects[activeProject].tech.map((tech) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </BentoBox>

        <div className="md:col-span-2 grid grid-rows-3 gap-4">
          <BentoBox className="row-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-3">
                  {projects[activeProject].title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {projects[activeProject].description}
                </p>
                <motion.a
                  href={projects[activeProject].link}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Project
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </BentoBox>

          <BentoBox className="flex items-center justify-between">
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveProject(i)}
                  className={`w-12 h-1 rounded-full transition-colors ${
                    i === activeProject ? "bg-purple-500" : "bg-white/20"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            <motion.div
              className="text-sm text-zinc-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {activeProject + 1} / {projects.length}
            </motion.div>
          </BentoBox>
        </div>
      </div>
    </section>
  );
};
