export default function MenPackVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#090909] p-6">
      <div className="h-full border border-[#1a1a1a] bg-[#0d0d0d] p-5">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-zinc-700" />
          <div className="h-3 w-3 rounded-full bg-zinc-700" />
          <div className="h-3 w-3 rounded-full bg-zinc-700" />
        </div>

        <div className="space-y-4 font-mono text-sm">
          <div className="text-zinc-500">$ npm create men-pack</div>

          <div className="text-[#58f29a]">✔ Backend boilerplate generated</div>

          <div className="pl-4 text-zinc-400">
            ├── controllers
            <br />
            ├── routes
            <br />
            ├── services
            <br />
            ├── middleware
            <br />
            ├── config
            <br />
            └── Dockerfile
          </div>

          <div className="border border-[#1a1a1a] bg-black/30 p-4 text-zinc-500">
            Express + TypeScript + CI/CD
          </div>
        </div>
      </div>
    </div>
  );
}
