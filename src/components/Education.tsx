import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-4xl px-6 py-28 md:py-36">
      <SectionHeading eyebrow="Education" title="The foundation." />

      <div className="relative">
        <div className="signal-line absolute left-[7px] top-2 bottom-2 w-px sm:left-[9px]" />

        <ul className="space-y-10">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.08}>
              <li className="relative pl-9 sm:pl-12">
                <span className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center rounded-full border border-lavender/40 bg-parchment sm:h-5 sm:w-5">
                  <GraduationCap size={10} className="text-lavender" />
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {item.degree}
                  </h3>
                  <span className="font-mono text-xs text-mist">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-slate/80">{item.school}</p>
                <span className="mt-2 inline-block rounded-full border border-gold/25 bg-gold/5 px-2.5 py-0.5 font-mono text-[11px] text-gold/90">
                  {item.score}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
