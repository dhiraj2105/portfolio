export default function AlgoVisualVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#090909] p-6">
      <div className="grid w-full grid-cols-10 gap-2">
        {Array.from({ length: 50 }).map((_, index) => {
          const heights = [
            "h-8",
            "h-12",
            "h-16",
            "h-20",
            "h-24",
            "h-28",
            "h-32",
            "h-36",
          ];

          const randomHeight = heights[index % heights.length];

          const active = index === 18 || index === 27 || index === 39;

          return (
            <div
              key={index}
              className={`
                ${randomHeight}
                ${active ? "bg-[#58f29a]/80" : "bg-zinc-700"}

                transition-all
                duration-300
              `}
            />
          );
        })}
      </div>
    </div>
  );
}
