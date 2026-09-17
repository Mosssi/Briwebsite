import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  icon?: React.ReactNode;
  subtle?: boolean;
};

export default function LinkButton({
  href,
  children,
  external,
  icon = <>&rarr;</>,
  subtle = false,
}: Props) {
  const className = subtle
    ? "inline-flex items-center gap-1.5 self-start border border-gray-500 px-3 py-1.5 font-mono text-[13px] text-gray-300 transition group-hover:border-accent group-hover:text-accent group-hover:bg-accent/10 active:bg-accent/20"
    : "inline-flex items-center gap-1.5 self-start border border-accent px-3 py-1.5 font-mono text-[13px] text-accent transition hover:bg-accent/10 active:border-transparent active:bg-accent/20";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children} {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children} {icon}
    </Link>
  );
}