import { about } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-28 md:py-36">
      <SectionHeading eyebrow={about.eyebrow} title="Curious by nature, an engineer by craft." />

      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-6">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-slate/90">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="glass relative overflow-hidden rounded-2xl p-7">
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/20 blur-3xl"
            />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold/80">
              Mission
            </p>
            <p className="mt-4 font-display text-xl font-medium leading-snug text-ink">
              {about.mission}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
