import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <p className="font-display text-sm text-slate/70">
          Building intelligent systems that make human lives simpler.
        </p>
        <p className="font-mono text-xs text-mist">
          © {new Date().getFullYear()} {profile.name}. Bhopal, India.
        </p>
      </div>
    </footer>
  );
}
