import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`mb-14 flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-gold/80">
        <span className="h-px w-6 bg-gold/60" />
        {eyebrow}
      </span>
      <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
