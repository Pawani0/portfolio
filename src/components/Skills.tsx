import { skillCategories } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TechStack from "@/components/TechStack";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading
        eyebrow="Skills Ecosystem"
        title="A living map of the tools I think with."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, catIndex) => (
          <Reveal key={cat.key} delay={catIndex * 0.06}>
            <div className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1">
              <div
                aria-hidden
                className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: cat.color }}
              />
              <div className="relative mb-5 flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: cat.color, boxShadow: `0 0 12px ${cat.color}` }}
                />
                <h3 className="font-display text-sm font-medium uppercase tracking-[0.15em] text-ink">
                  {cat.label}
                </h3>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="rounded-full border border-ink/10 bg-paper px-3 py-1.5 text-xs text-slate/90 transition-all duration-300 hover:border-ink/25 hover:text-ink"
                    style={{
                      animation: `float-bubble ${4 + (i % 4) * 0.6}s ease-in-out ${
                        (i % 5) * 0.35
                      }s infinite`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <TechStack />

      <style>{`
        @keyframes float-bubble {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="float-bubble"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
