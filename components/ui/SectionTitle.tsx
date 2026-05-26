type Props = {
  label: string;
  title: React.ReactNode;
};

export default function SectionTitle({ label, title }: Props) {
  return (
    <>
      <div className="font-mono text-sm text-zinc-500 mb-5">{label}</div>

      <h2 className="section-title">{title}</h2>
    </>
  );
}
