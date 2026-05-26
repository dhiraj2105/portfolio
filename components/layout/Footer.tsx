import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-[#111] py-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-4 text-sm text-zinc-600">
          <div>© 2026 Dhiraj Kumar</div>

          <div className="font-mono">DESIGNED FOR PERFORMANCE</div>
        </div>
      </Container>
    </footer>
  );
}
