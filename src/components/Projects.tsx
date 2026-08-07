import { ArrowUpRight } from "lucide-react";
import { profile, projects } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { GithubIcon } from "@/components/icons";
import ProjectCover from "@/components/ProjectCover";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading eyebrow="Selected Work" title="Systems I've shipped, end to end." />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <article className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink/20">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-royal/25 to-lavender/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
              />

              <ProjectCover slug={project.slug} />

              <div className="relative mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-gold/80">{project.tagline}</p>
                </div>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`View ${project.name} on GitHub`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-paper text-slate transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <GithubIcon width={16} height={16} />
                </a>
              </div>

              <p className="relative mt-2 font-mono text-xs uppercase tracking-wide text-mist">
                {project.role}
              </p>

              <p className="relative mt-4 text-sm leading-relaxed text-slate/90">
                {project.description}
              </p>

              <ul className="relative mt-5 space-y-2">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2.5 text-sm leading-relaxed text-slate/80"
                  >
                    <ArrowUpRight
                      size={14}
                      className="mt-0.5 shrink-0 text-lavender/80"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="relative mt-6 flex flex-wrap gap-2 pt-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-ink/10 bg-paper px-2.5 py-1 font-mono text-[11px] text-mist"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
