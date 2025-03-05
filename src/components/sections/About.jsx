import { motion } from "framer-motion";
import { BentoBox } from "../ui/BentoBox";

export const About = () => {
  const stats = [
    { label: "Years Experience", value: "1" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "7+" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BentoBox className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-zinc-400 leading-relaxed">
            Full-stack developer with a passion for creating beautiful and
            functional web applications. Specialized in React, Node.js, and
            modern web technologies.
          </p>

          <div className="pl-4 border-l-2 border-purple-400 dark:border-purple-500">
            <p className="leading-relaxed italic text-zinc-700 dark:text-zinc-300">
              "When I'm not coding, you can find me exploring new hiking
              trails."
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </BentoBox>

        <BentoBox className="flex flex-col justify-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
            <h3 className="text-xl font-semibold">What I Do</h3>
          </div>
          <ul className="space-y-2 text-zinc-400">
            <li>✦ Frontend Development</li>
            <li>✦ Backend Development</li>
            <li>✦ UI/UX Design</li>
            <li>✦ API Integration</li>
          </ul>
        </BentoBox>
      </div>
    </section>
  );
};
