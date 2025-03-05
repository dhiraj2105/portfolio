import { BentoBox } from "../ui/BentoBox";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Backend Developer Intern",
    company: "To-Let Globe",
    duration: "2024 - 2025",
    description:
      "Designed and implemented scalable RESTful APIs for a chatbot, enabling context-driven user navigation,enhanced overall user experience, resulting in a 12% improvement in user flow and increased userengagement. ​ Optimized existing API performance by refactoring critical code paths and leveraging best practices in datahandling and processing, leading to a 20% improvement in response time and an 8% reduction in serverload.",
    skills: ["Node.js", "TypeScript", "Express.js", "MongoDB"],
    color: "from-purple-400 to-pink-500",
  },

  {
    id: 2,
    role: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "2019 - 2020",
    description:
      "Developed and designed my college's official website, which included implementing responsive design, a user-friendly layout, and efficient navigation. This led to a 2% increase in student engagement and admissions. The site also featured a dynamic content management system and streamlined the application process.",
    skills: ["JavaScript", "HTML", "PHP", "Tailwind CSS", "Hostinger"],
    color: "from-green-400 to-emerald-500",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="grid grid-cols-1">
        <BentoBox className="p-8 space-y-12">
          {/* Header */}
          <div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-zinc-400 text-lg">
              My professional journey and expertise
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-purple-500/50 to-transparent" />

            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative ml-12"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute -left-[41px] top-5 h-5 w-5 rounded-full bg-gradient-to-r ${exp.color} shadow-lg shadow-purple-500/20`}
                />

                <div className="relative rounded-lg p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50 transition-colors group">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <h3
                          className={`text-xl font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                        >
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-zinc-400 mt-1">
                          <span className="font-medium">{exp.company}</span>
                          <span className="text-zinc-600">•</span>
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-sm bg-zinc-800/50 text-zinc-300 rounded-full border border-zinc-700/50 hover:border-zinc-600/50 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </BentoBox>
      </div>
    </section>
  );
}
