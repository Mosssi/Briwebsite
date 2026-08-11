"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaFigma } from "react-icons/fa6";
import Typewriter from "@/components/Typewriter";

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
  const [nameDone, setNameDone] = useState(false);
  const handleNameDone = useCallback(() => setNameDone(true), []);

  return (
    <section id="home" className="pt-20 pb-24 md:pt-24 md:pb-28">
      <p className="mb-6 text-lg">👋 Hi I am</p>
      <Image
        src="/images/avatar3.jpg"
        alt="Brianna Strand"
        width={64}
        height={64}
        className="mb-4 h-16 w-16 rounded-full object-cover"
        priority
      />

      <h1 className="mb-2 min-h-[1.4em] text-2xl text-white md:text-3xl">
        <Typewriter
          text="Brianna Strand"
          speed={90}
          cursor={!nameDone}
          onDone={handleNameDone}
        />
      </h1>

      <p className="mb-8 min-h-[1.6em] font-mono text-accent">
        <Typewriter
          text="UI/UX Designer & Frontend Developer"
          speed={55}
          start={nameDone}
        />
      </p>

      <p className="mb-8 max-w-[760px] text-lg md:text-xl">
        10 years of product design experience, now building with React,
        TypeScript, Next.js and Tailwind. Currently studying Frontend
        Development at Futuregames Stockholm — open to LIA & junior roles.
      </p>

      <div className="flex gap-5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="mb-8 min-h-[1.6em] font-mono text-accent"
          >
            <s.icon size={22} />
          </a>
        ))}
      </div>
    </section>
  );
}
