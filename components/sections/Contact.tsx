import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="py-40">
      <Container>
        <FadeIn className="max-w-5xl">
          <SectionTitle
            label="CONTACT"
            title={
              <>
                Building systems
                <br />
                that create leverage.
              </>
            }
          />

          <p className="text-zinc-500 text-xl leading-relaxed mt-10 max-w-2xl">
            Available for select collaborations involving AI infrastructure,
            trading systems, and high-performance product engineering.
          </p>

          <div className="flex flex-wrap gap-6 mt-16">
            <a
              href="Dhiraj_Resume.pdf"
              className="border border-[#1a1a1a] hover:border-[#333] transition px-8 py-5 text-sm tracking-wide"
            >
              RESUME
            </a>

            <a
              href="https://www.linkedin.com/in/dhiraj-kumar-3900a71a6/"
              className="border border-[#1a1a1a] hover:border-[#333] transition px-8 py-5 text-sm tracking-wide"
            >
              LINKEDIN
            </a>

            <a
              href="https://github.com/dhiraj2105"
              className="border border-[#1a1a1a] hover:border-[#333] transition px-8 py-5 text-sm tracking-wide"
            >
              GITHUB
            </a>

            <a
              href="mailto:dkskp2005@gmail.com"
              className="bg-white text-black px-8 py-5 text-sm tracking-wide hover:opacity-90 transition"
            >
              CONTACT
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
