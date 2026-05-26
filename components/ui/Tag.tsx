type Props = {
  children: React.ReactNode;
};

export default function Tag({ children }: Props) {
  return (
    <div
      className="
        inline-flex
        items-center
        justify-center
        whitespace-nowrap

        rounded-full

        border border-[#1f1f1f]

        px-4
        py-2.5

        text-[11px]
        tracking-wide
        text-[#9e9e9e]

        bg-transparent

        transition-colors duration-300

        hover:border-[#2f2f2f]
        hover:text-white
      "
    >
      {children}
    </div>
  );
}
