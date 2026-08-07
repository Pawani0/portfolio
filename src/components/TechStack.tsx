import {
  SiPython,
  SiCplusplus,
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGit,
  SiLinux,
  SiGithubactions,
  SiLangchain,
} from "react-icons/si";
import Reveal from "@/components/Reveal";

const tech = [
  { icon: SiPython, label: "Python" },
  { icon: SiCplusplus, label: "C++" },
  { icon: SiLangchain, label: "LangChain" },
  { icon: SiFastapi, label: "FastAPI" },
  { icon: SiFlask, label: "Flask" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiMysql, label: "MySQL" },
  { icon: SiDocker, label: "Docker" },
  { icon: SiGit, label: "Git" },
  { icon: SiLinux, label: "Linux" },
  { icon: SiGithubactions, label: "GitHub Actions" },
];

export default function TechStack() {
  const row = [...tech, ...tech];

  return (
    <div className="relative mt-16 overflow-hidden border-y border-gold/25 py-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-parchment to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-parchment to-transparent"
      />

      <Reveal className="mb-6 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold/80">
          Tools of the Trade
        </span>
      </Reveal>

      <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-14">
        {row.map((t, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2.5 text-slate/70 transition-colors hover:text-royal"
          >
            <t.icon size={22} />
            <span className="font-mono text-xs">{t.label}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_32s_linear_infinite\\] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
