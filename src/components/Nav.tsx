"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-[0_8px_40px_-12px_rgba(42,59,143,0.22)]" : "bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          RP<span className="text-gold">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resume}
          download
          className="hidden items-center gap-2 rounded-full border border-ink/15 bg-paper px-4 py-2 text-sm text-ink transition-colors hover:border-gold/50 hover:text-gold md:flex"
        >
          <Download size={14} />
          Resume
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="glass-strong absolute inset-x-4 top-[76px] rounded-2xl p-5 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base text-slate"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resume}
                download
                className="mt-2 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-4 py-2 text-sm text-ink"
              >
                <Download size={14} />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
