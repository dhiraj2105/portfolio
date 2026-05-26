import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-[#111]">
      <Container>
        <div className="h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#58f29a] shadow-[0_0_10px_#58f29a]" />

            <span className="font-mono text-sm tracking-wider text-white">
              SOFTWARE ENGINEER
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm text-zinc-400">
            <a href="#work" className="hover:text-white transition">
              WORK
            </a>

            <a href="#expertise" className="hover:text-white transition">
              EXPERTISE
            </a>

            <a href="#contact" className="hover:text-white transition">
              CONTACT
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
