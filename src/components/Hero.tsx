"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import AvatarMedallion from "@/components/AvatarMedallion";
import AstrolabeRing from "@/components/AstrolabeRing";
import { profile } from "@/lib/data";

const NeuralScene = dynamic(() => import("@/components/NeuralScene"), {
  ssr: false,
});

const headlineWords = profile.tagline.split(" ");

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 z-[1] opacity-70">
        <NeuralScene />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,transparent_0%,var(--color-parchment)_82%)]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 sm:gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          <h1 className="font-display text-[2.5rem] font-semibold leading-[1.1] tracking-tight text-ink sm:text-6xl md:text-[4.2rem]">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.3 + i * 0.08,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`mr-[0.28em] inline-block ${
                  word.includes("Intelligence") || word.includes("AI")
                    ? "text-accent"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-6 max-w-xl font-mono text-sm text-slate/80 sm:text-base"
          >
            {profile.subtagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <MagneticButton
              as="a"
              {...{ href: "#projects" }}
              className="rounded-full bg-gradient-to-r from-royal to-gold px-6 py-3 text-sm font-medium text-paper shadow-[0_8px_30px_-8px_rgba(42,59,143,0.35)] transition-shadow hover:shadow-[0_8px_40px_-6px_rgba(172,130,62,0.45)]"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              as="a"
              {...{ href: profile.resume, download: true }}
              className="flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-gold/50"
            >
              <Download size={15} />
              Download Resume
            </MagneticButton>
            <MagneticButton
              as="a"
              {...{ href: "#contact" }}
              className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-slate transition-colors hover:text-gold"
            >
              <Mail size={15} />
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 mx-auto flex h-[320px] w-[320px] items-center justify-center sm:h-[440px] sm:w-[440px] lg:order-2 lg:h-[540px] lg:w-[540px]"
        >
          <div className="relative flex h-[540px] w-[540px] shrink-0 scale-[0.59] items-center justify-center sm:scale-[0.81] lg:scale-100">
            <AstrolabeRing size={540} className="absolute inset-0" />
            <div
              aria-hidden
              className="absolute h-[380px] w-[380px] rounded-full opacity-60 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(172,130,62,0.3), rgba(169,155,217,0.2) 60%, transparent 75%)",
              }}
            />
            <AvatarMedallion size={300} className="relative" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-mist"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
