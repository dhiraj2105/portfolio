type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`
        interactive
        border border-[#171717]
        bg-[#090909]
        transition-all duration-500
        hover:border-[#2a2a2a]
        hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </div>
  );
}
