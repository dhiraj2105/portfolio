import { motion } from "framer-motion";
import { BentoBox } from "../ui/BentoBox";

import reactsvg from "../../assets/react.svg";
import javascriptsvg from "../../assets/javascript.svg";
import linuxsvg from "../../assets/linux.svg";
import nodejssvg from "../../assets/nodejs.svg";
import cppsvg from "../../assets/cpp.svg";
import pythonsvg from "../../assets/python.svg";
import typescriptsvg from "../../assets/typescript.svg";
import javasvg from "../../assets/java.svg";
import nextjssvg from "../../assets/nextjs.svg";
import tailwindscsssvg from "../../assets/tailwindcss.svg";
import mongodbsvg from "../../assets/mongodb.svg";
import expressjssvg from "../../assets/express.svg";
import mysqlsvg from "../../assets/mysql.svg";
import dockersvg from "../../assets/docker.svg";
import gitsvg from "../../assets/git.svg";

export const Skills = () => {
  const skills = {
    // Frontend: [
    //   { name: "React", icon: "react.svg" },
    //   { name: "Next.js", icon: "nextjs.svg" },
    //   { name: "TypeScript", icon: "typescript.svg" },
    //   { name: "Tailwind", icon: "tailwind.svg" },
    // ],
    // Backend: [
    //   { name: "Node.js", icon: "nodejs.svg" },
    //   { name: "Express", icon: "express.svg" },
    //   { name: "MongoDB", icon: "mongodb.svg" },
    //   { name: "PostgreSQL", icon: "postgresql.svg" },
    // ],
    // Tools: [
    //   { name: "Git", icon: "git.svg" },
    //   { name: "Docker", icon: "docker.svg" },
    //   { name: "AWS", icon: "aws.svg" },
    //   { name: "Figma", icon: "figma.svg" },
    // ],
    Language: [
      { name: "JavaScript", icon: javascriptsvg },
      { name: "C++", icon: cppsvg },
      { name: "TypeScript", icon: typescriptsvg },
      { name: "Python", icon: pythonsvg },
      { name: "Java", icon: javasvg },
    ],
    FrameworksAndLibraries: [
      { name: "React.js", icon: reactsvg },
      { name: "Next.js", icon: nextjssvg },
      { name: "Node.js", icon: nodejssvg },
      { name: "TailwindCSS", icon: tailwindscsssvg },
      { name: "Express.js", icon: expressjssvg },
    ],
    Others: [
      { name: "MySQL", icon: mysqlsvg },
      { name: "MongoDB", icon: mongodbsvg },
      { name: "Docker", icon: dockersvg },
      { name: "Linux", icon: linuxsvg },
      { name: "Git", icon: gitsvg },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section id="skills" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8"
      >
        Skills & Technologies
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, items], i) => (
          <BentoBox key={category} delay={i * 0.1}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover="hover"
                    >
                      <motion.img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-6 h-6"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="text-sm text-zinc-400">
                        {skill.name}
                      </span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </BentoBox>
        ))}
      </div>
    </section>
  );
};
