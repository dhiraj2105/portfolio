import { motion } from "framer-motion";
import { BentoBox } from "../ui/BentoBox";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    }),
  };

  const socials = [
    {
      name: "GitHub",
      icon: "github.svg",
      link: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: "linkedin.svg",
      link: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Twitter",
      icon: "twitter.svg",
      link: "https://twitter.com/yourusername",
    },
  ];

  const terminalLines = [
    { text: "> npm install dependencies...", delay: 0 },
    { text: "> Loading modules...", delay: 800 },
    { text: "> Building components...", delay: 1600 },
    { text: "> Running tests...", delay: 2400 },
    { text: "> Optimizing bundle...", delay: 3000 },
    { text: "> Deploying to production...", delay: 3600 },
    { text: "> Deploy successful! ✨", delay: 4200 },
  ];

  const useTypingEffect = (text, delay = 0) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
      const timeout = setTimeout(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
          if (currentIndex <= text.length) {
            setDisplayText(text.substring(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(interval);
          }
        }, 50); // Adjust typing speed here

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timeout);
    }, [text, delay]);

    return displayText;
  };

  return (
    <section
      id="home"
      className="min-h-[85vh] grid grid-cols-1 md:grid-cols-3 gap-4 py-10"
    >
      <BentoBox className="md:col-span-2 md:row-span-2 flex flex-col justify-center relative overflow-hidden p-8 group">
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-2xl"
        >
          <motion.div
            custom={0}
            variants={slideUpVariants}
            className="text-sm font-medium text-purple-400 mb-3 flex items-center gap-2"
          >
            <span className="w-10 h-[2px] bg-purple-400" />
            Software Developer
          </motion.div>

          <motion.h1
            custom={1}
            variants={slideUpVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Dhiraj
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={slideUpVariants}
            className="text-base md:text-lg mt-4 text-zinc-400 max-w-lg leading-relaxed"
          >
            Passionate about building scalable web applications and creating
            exceptional digital experiences.
          </motion.p>

          <motion.div custom={3} variants={slideUpVariants} className="mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium relative group overflow-hidden"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 group-hover:opacity-75 transition-opacity duration-500" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-pink-500/20 rounded-full blur-[120px]"
        />
      </BentoBox>

      {/* Terminal Animation Box */}
      <BentoBox
        className="group relative overflow-hidden bg-[#1E1E1E] w-full"
        delay={0.2}
      >
        <div className="relative z-10 h-full flex flex-col p-3">
          {/* Terminal Header */}
          <div className="flex items-center gap-1.5 pb-2 border-b border-white/10">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="text-[10px] text-zinc-400 ml-2">terminal</span>
          </div>

          {/* Terminal Content */}
          <div className="flex-1 pt-2 font-mono text-[11px] leading-relaxed overflow-hidden h-[180px]">
            <div className="space-y-1.5">
              {terminalLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: line.delay / 1000,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="text-zinc-300 whitespace-nowrap"
                >
                  <span className="text-green-400">$</span>
                  <span className="text-purple-400"> ~/dhiraj</span>
                  <span className="ml-1.5">{line.text}</span>

                  {/* Blinking cursor for the last line */}
                  {index === terminalLines.length - 1 && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="inline-block w-1.5 h-3.5 -mb-[1px] bg-zinc-400 ml-1"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Terminal Reflection Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Glass Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Screen Glare Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 0.1, 0], scale: 1.2 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent"
        />
      </BentoBox>

      {/* Status Box */}
      <BentoBox className="relative group overflow-hidden" delay={0.3}>
        <div className="relative z-10 h-full flex flex-col justify-between p-6">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs text-green-400">Available for Work</span>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xs text-zinc-400"
            >
              2025
            </motion.span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-green-500/20 rounded-full" />
              <span className="text-sm font-medium">Quick Links</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1.5 text-xs bg-white/5 hover:bg-green-500/10 rounded-md text-zinc-400 hover:text-green-400 flex items-center gap-1.5 transition-colors"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Projects
              </motion.a>
              <motion.a
                href="#skills"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1.5 text-xs bg-white/5 hover:bg-green-500/10 rounded-md text-zinc-400 hover:text-green-400 flex items-center gap-1.5 transition-colors"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Skills
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1.5 text-xs bg-white/5 hover:bg-green-500/10 rounded-md text-zinc-400 hover:text-green-400 flex items-center gap-1.5 transition-colors"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Contact
              </motion.a>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </BentoBox>
    </section>
  );
};
