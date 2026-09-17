"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/contacts", label: "Contacts" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setHash(window.location.hash);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && hash === "";
    if (href.startsWith("/#")) {
      const targetHash = href.slice(1); // "#experience"
      return pathname === "/" && hash === targetHash;
    }
    return pathname.startsWith(href);
  };

  const handleLinkClick = (href: string) => {
    setOpen(false);
    if (href === "/") {
      setHash("");
    } else if (href.startsWith("/#")) {
      setHash(href.slice(1));
    } else {
      setHash("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="mx-auto flex max-w-[1000px] items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-mono text-2xl font-bold text-white"
          onClick={() => handleLinkClick("/")}
        >
          <span className="mr-1.5 text-[15px] text-accent">▚</span>Brianna
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="font-mono text-sm transition"
            >
              <span
                className={isActive(link.href) ? "text-white" : "text-accent"}
              >
                #
              </span>
              <span
                className={
                  isActive(link.href)
                    ? "text-accent"
                    : "text-gray-400 hover:text-white"
                }
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-white transition hover:text-accent md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-gray-800 md:hidden">
          <ul className="mx-auto flex max-w-[1000px] flex-col px-6 py-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="block py-3 font-mono text-base transition"
                >
                  <span
                    className={
                      isActive(link.href) ? "text-white" : "text-accent"
                    }
                  >
                    #
                  </span>
                  <span
                    className={
                      isActive(link.href)
                        ? "text-accent"
                        : "text-gray-400 hover:text-white"
                    }
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}