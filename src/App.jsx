import { useEffect } from "react";
import Lenis from "lenis";
import { Layout } from "./components/layout/Layout";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { Cursor } from "./components/ui/Cursor";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import Testimonials from "./components/sections/Testimonials";
import Experience from "./components/sections/Experience";

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Inter'] selection:bg-purple-500/30">
      <Cursor />
      <ScrollProgress />
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
