export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 className="font-mono text-[28px] font-semibold whitespace-nowrap text-white">
        <span className="text-accent">#</span>
        {title}
      </h2>
      <div className="h-px flex-1 bg-accent/70" />
    </div>
  );
}