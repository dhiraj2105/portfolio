export default function MiniUrlVisual() {
  return (
    <div className="relative h-full w-full bg-[#090909] p-6">
      <div className="grid h-full grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="border border-[#1a1a1a] bg-[#0d0d0d] p-4">
            <div className="mb-2 font-mono text-xs text-zinc-500">
              TOTAL CLICKS
            </div>

            <div className="text-3xl font-black">12.4K</div>
          </div>

          <div className="border border-[#1a1a1a] bg-[#0d0d0d] p-4">
            <div className="mb-2 font-mono text-xs text-zinc-500">
              UNIQUE USERS
            </div>

            <div className="text-3xl font-black">8.2K</div>
          </div>

          <div className="border border-[#1a1a1a] bg-[#0d0d0d] p-4">
            <div className="mb-3 font-mono text-xs text-zinc-500">
              API STATUS
            </div>

            <div className="flex items-center justify-between text-sm">
              <span>Redis Cache</span>

              <span className="text-[#58f29a]">ONLINE</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between border border-[#1a1a1a] bg-[#0d0d0d] p-4">
          <div>
            <div className="mb-4 font-mono text-xs text-zinc-500">
              SHORT LINKS
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span>/abc123</span>

                <span className="text-[#58f29a]">ACTIVE</span>
              </div>

              <div className="flex items-center justify-between">
                <span>/sdk92k</span>

                <span className="text-zinc-500">EXPIRED</span>
              </div>

              <div className="flex items-center justify-between">
                <span>/launch7</span>

                <span className="text-[#58f29a]">ACTIVE</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex h-24 items-end gap-2">
            <div className="h-8 w-full bg-zinc-800" />
            <div className="h-12 w-full bg-zinc-700" />
            <div className="h-16 w-full bg-zinc-600" />
            <div className="h-24 w-full bg-[#58f29a]/70" />
          </div>
        </div>
      </div>
    </div>
  );
}
