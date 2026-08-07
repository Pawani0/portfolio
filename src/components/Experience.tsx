import { experience } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-6 py-28 md:py-36">
      <SectionHeading eyebrow="Experience" title="Where the work happens." />

      <div className="relative">
        <div className="signal-line absolute left-[7px] top-2 bottom-2 w-px sm:left-[9px]" />

        <ul className="space-y-14">
          {experience.map((item, i) => (
            <Reveal key={item.org} delay={i * 0.1}>
              <li className="relative pl-9 sm:pl-12">
                <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-gold/40 bg-parchment sm:h-5 sm:w-5">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      item.current ? "animate-pulse bg-gold" : "bg-mist"
                    }`}
                  />
                </span>

                <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {item.role}
                  </h3>
                  {item.current && (
                    <span className="rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-gold">
                      Current
                    </span>
                  )}
                </div>
                <p className="mb-1 font-medium text-plum">{item.org}</p>
                <p className="mb-4 font-mono text-xs text-mist">{item.period}</p>

                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm leading-relaxed text-slate/85"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mist" />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
