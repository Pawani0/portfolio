import { involvement } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Involvement() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading eyebrow="Beyond the Code" title="How I show up." />

      <div className="grid gap-5 sm:grid-cols-2">
        {involvement.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.07}>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-base font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate/80">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
