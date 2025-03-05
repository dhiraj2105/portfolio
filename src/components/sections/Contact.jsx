import { motion } from "framer-motion";
import { BentoBox } from "../ui/BentoBox";

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="grid grid-cols-1">
        <BentoBox className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left Side - Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-zinc-400 text-lg">
              Have a project in mind? Let's talk about it.
            </p>
          </div>

          {/* Right Side - Contact Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a
                href="mailto:your@email.com"
                className="text-zinc-400 hover:text-purple-400 transition-colors duration-300 text-lg"
              >
                your@email.com
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Social</h3>
              <div className="flex gap-6">
                {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
                  <motion.a
                    key={platform}
                    href="#"
                    whileHover={{ y: -3, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="text-zinc-400 hover:text-purple-400 transition-colors duration-300 text-lg"
                  >
                    {platform}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </BentoBox>
      </div>
    </section>
  );
};
