import { motion, useScroll, useTransform } from "framer-motion";
import { BentoBox } from "../ui/BentoBox";
import { useRef } from "react";

// Duplicate testimonials to create a seamless loop
const testimonials = [
  {
    id: 1,
    text: "Working with them was an absolute pleasure. Their attention to detail and creative approach brought our vision to life perfectly.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
  },
  {
    id: 2,
    text: "Exceptional work quality and professional attitude. They delivered our project ahead of schedule with outstanding results.",
    author: "Michael Chen",
    role: "Product Manager, InnovateCo",
  },
  {
    id: 3,
    text: "Their expertise in modern web technologies and problem-solving abilities made our complex project seem effortless.",
    author: "Emma Davis",
    role: "CTO, DigitalFlow",
  },
  {
    id: 4,
    text: "Innovative solutions and great communication throughout the project. Highly recommended for any web development needs.",
    author: "Alex Thompson",
    role: "Founder, WebStack",
  },
];

// Create three sets of testimonials for smooth infinite loop
const duplicatedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export default function Testimonials() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} id="testimonials" className="py-20">
      <div className="grid grid-cols-1">
        <BentoBox className="p-8 space-y-12">
          {/* Header */}
          <div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              What People Say
            </h2>
            <p className="text-zinc-400 text-lg">
              Trusted by amazing people and companies
            </p>
          </div>

          {/* Scrolling Testimonials */}
          <div className="relative">
            <motion.div style={{ x }} className="flex gap-8 w-[300%]">
              {duplicatedTestimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="group relative w-[450px] flex-shrink-0"
                >
                  <div className="relative h-full p-6 rounded-lg bg-zinc-900/50 border border-zinc-800 space-y-4">
                    <p className="text-zinc-300 text-lg italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-purple-400">
                        {testimonial.author}
                      </p>
                      <p className="text-zinc-500 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </BentoBox>
      </div>
    </section>
  );
}
