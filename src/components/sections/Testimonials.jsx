import { motion, useScroll, useTransform } from "framer-motion";
import { BentoBox } from "../ui/BentoBox";
import { useRef } from "react";

// Duplicate testimonials to create a seamless loop
const testimonials = [
  {
    id: 1,
    text: "Dhiraj is a talented and diligent computer science student. He possesses strong technical skills and a proactive approach to learning, especially in Full Stack Web Development. His contribution to building his college website showcased his ability to handle real-world projects efficiently. I highly recommend him.",
    author: "Hemendra Shrama",
    role: "Faculty, COER University",
  },
  {
    id: 2,
    text: "Dhiraj did an excellent job as a backend intern—reliable, quick at solving problems, and great to work with. He adapted well to challenges and consistently delivered quality work. He has a lot of potential to grow in his career!",
    author: "Shraddha Sarwade",
    role: "Team Leader, To-Let Globe",
  },
  {
    id: 3,
    text: "I had the pleasure of working with Dhiraj on my website, and I couldn't be more satisfied with the result. He has excellent web design skills, creating a clean, professional, and user-friendly site. Beyond his technical skills, Dhiraj is reliable, communicative, and committed to delivering quality work. Throughout the process, he was highly communicative, receptive to feedback, and made revisions promptly based on my inputs. I highly recommend him for anyone looking for a skilled and dependable web developer! ",
    author: "Prahlada Mittal",
    role: "IIT Roorkee",
  },
  {
    id: 4,
    text: "I am pleased to write this testimonial for Dhiraj Kumar, a student of the MCA course at COER University. Dhiraj possesses excellent knowledge of web development and has consistently demonstrated strong technical skills in his projects. He is a highly obedient, dedicated and hardworking student who approaches his studies with sincerity and focus. His respectful attitude and willingness to learn make him stand out in the classroom. I am confident that Dhiraj’s technical expertise and disciplined nature will lead him to great success in his future.",
    author: "Gesu Thakur",
    role: "HOD - CSE, COER University",
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
