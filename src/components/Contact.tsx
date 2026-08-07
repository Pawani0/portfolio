import { Download, Mail } from "lucide-react";
import { SiHuggingface, SiKaggle } from "react-icons/si";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-28 md:py-36">
      <Reveal className="glass-strong relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-royal/30 to-lavender/20 blur-3xl"
        />

        <span className="relative mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-gold/80">
          Let&apos;s Build Something
        </span>
        <h2 className="relative font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          Have a problem worth
          <br className="hidden sm:block" /> automating?
        </h2>
        <p className="relative mx-auto mt-5 max-w-md text-slate/80">
          I&apos;m always up for talking about AI agents, RAG systems, or voice AI —
          reach out and let&apos;s see what we can build.
        </p>

        <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            as="a"
            {...{ href: `mailto:${profile.email}` }}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-royal to-gold px-6 py-3 text-sm font-medium text-paper shadow-[0_8px_30px_-8px_rgba(42,59,143,0.35)]"
          >
            <Mail size={15} />
            Say Hello
          </MagneticButton>
          <MagneticButton
            as="a"
            {...{ href: profile.resume, download: true }}
            className="flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-6 py-3 text-sm font-medium text-ink hover:border-gold/50"
          >
            <Download size={15} />
            Resume
          </MagneticButton>
        </div>

        <div className="relative mt-10 flex items-center justify-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-slate/70 transition-colors hover:text-gold"
          >
            <GithubIcon width={20} height={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="text-slate/70 transition-colors hover:text-gold"
          >
            <LinkedinIcon width={20} height={20} />
          </a>
          <a
            href={profile.huggingface}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Hugging Face"
            className="text-slate/70 transition-colors hover:text-gold"
          >
            <SiHuggingface size={20} />
          </a>
          <a
            href={profile.kaggle}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Kaggle"
            className="text-slate/70 transition-colors hover:text-gold"
          >
            <SiKaggle size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-slate/70 transition-colors hover:text-gold"
          >
            <Mail size={20} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
