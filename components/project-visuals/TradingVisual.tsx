export default function TradingVisual() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#090909] p-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-[#1a1a1a] bg-[#0d0d0d] p-4">
          <div className="mb-4 font-mono text-xs text-zinc-500">
            LIVE SIGNALS
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>BTC/USDT</span>

              <span className="text-[#58f29a]">LONG</span>
            </div>

            <div className="flex justify-between">
              <span>ETH/USDT</span>

              <span className="text-red-400">SHORT</span>
            </div>

            <div className="flex justify-between">
              <span>SOL/USDT</span>

              <span className="text-[#58f29a]">LONG</span>
            </div>
          </div>
        </div>

        <div className="border border-[#1a1a1a] bg-[#0d0d0d] p-4">
          <div className="mb-4 font-mono text-xs text-zinc-500">EXECUTION</div>

          <div className="space-y-3 text-sm text-zinc-400">
            <div>{"> Connected to Binance WS"}</div>
            <div>{"> Signal processed"}</div>
            <div>{"> Order executed"}</div>
            <div>{"> Position updated"}</div>
          </div>
        </div>
      </div>

      <div className="mt-6 border border-[#1a1a1a] bg-[#0d0d0d] p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="font-mono text-xs text-zinc-500">MARKET ACTIVITY</div>

          <div className="text-sm text-[#58f29a]">+18.2%</div>
        </div>

        <div className="flex h-40 items-end gap-2">
          <div className="h-10 w-full bg-zinc-800" />
          <div className="h-16 w-full bg-zinc-700" />
          <div className="h-20 w-full bg-zinc-700" />
          <div className="h-32 w-full bg-zinc-600" />
          <div className="h-24 w-full bg-zinc-700" />
          <div className="h-36 w-full bg-[#58f29a]/70" />
          <div className="h-28 w-full bg-zinc-600" />
        </div>
      </div>
    </div>
  );
}
