
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaFigma } from "react-icons/fa6";

const socials = [
  {
    href: "https://www.linkedin.com/in/briannastrand",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  { href: "https://github.com/Mosssi", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.figma.com/design/dLpaMEUu6033VVmcXlaIJ7/Brianna--Portfolio-DESIGN",
    icon: FaFigma,
    label: "Figma",
  },
];

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-24 md:pt-24 md:pb-28">
      <p className="mb-6 text-lg">👋 Hi I am</p>
      <Image
        src="/images/avatar.jpg"
        alt="Brianna Strand"
        width={64}
        height={64}
        className="mb-4 h-16 w-16 rounded-full object-cover"
        priority
      />
      <h1 className="mb-2 text-2xl text-white md:text-3xl">Brianna Strand</h1>
      <p className="mb-6 font-mono text-sm text-accent">
        UI/UX Designer &amp; Frontend Developer
      </p>
      <p className="mb-8 max-w-[760px] text-lg md:text-xl">
        UI/UX designer who designs with implementation in mind — currently
        deepening React and TypeScript at FutureGames Stockholm to bridge the
        designer–developer gap from both sides.
      </p>
      <div className="flex gap-5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="text-gray-400 transition hover:text-accent"
          >
            <s.icon size={22} />
          </a>
        ))}
      </div>
    </section>
  );
}