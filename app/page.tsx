import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Expertise from "@/components/sections/Expertise";
import Contact from "@/components/sections/Contact";

import CustomCursor from "@/components/ui/CustomCursor";

export default function HomePage() {
  return (
    <>
      <div className="noise" />

      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <Work />
        <Expertise />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
