import { philosophy } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden px-6 py-28 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo/20 via-violet/10 to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-gold/80">
            {philosophy.eyebrow}
          </span>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
            {philosophy.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 text-left sm:grid-cols-3">
          {philosophy.points.map((point, i) => (
            <Reveal key={point.title} delay={0.1 + i * 0.1}>
              <div className="glass h-full rounded-2xl p-6">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{
                    background: ["#2a3b8f", "#ac823e", "#a99bd9"][i],
                    boxShadow: `0 0 12px ${["#2a3b8f", "#ac823e", "#a99bd9"][i]}`,
                  }}
                />
                <h3 className="mt-3 font-display text-base font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate/80">
                  {point.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
