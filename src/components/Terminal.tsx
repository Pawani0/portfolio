"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

type Line = { type: "input" | "output"; text: string };

const HELP = [
  "Available commands:",
  "  whoami        — who is Rishabh",
  "  skills        — core skill areas",
  "  projects      — shipped systems",
  "  contact       — how to reach me",
  "  sudo hire-me  — try it",
  "  clear         — clear the terminal",
  "  help          — show this again",
];

function respond(raw: string): string[] {
  const cmd = raw.trim().toLowerCase();

  switch (cmd) {
    case "help":
      return HELP;
    case "whoami":
      return [
        "Rishabh Pawani — AI Engineer.",
        "3rd-year B.Tech, AI & Data Science.",
        "Currently building AI agents, RAG systems, and voice AI at AskGalore.",
      ];
    case "skills":
      return [
        "genai:    LangChain, LangGraph, RAG, AI Agents, LLMs, Voice AI",
        "ml:       Machine Learning, Deep Learning, NLP",
        "backend:  Python, FastAPI, Flask, PostgreSQL, MongoDB",
        "tools:    Docker, Git, Linux, GitHub Actions",
      ];
    case "projects":
      return [
        "adapt-it    — daily aptitude quiz agent (Flask, PostgreSQL, NVIDIA NIM)",
        "exam-buddy  — PYQ topic extraction (FastAPI, Groq, Sentence Transformers)",
        "floatchat   — oceanographic data assistant (LangChain, RAG)",
        "fincove     — voice banking assistant MVP (FastAPI, STT/TTS)",
      ];
    case "contact":
      return [
        "email:       rishabhpawani09@gmail.com",
        "github:      github.com/Pawani0",
        "linkedin:    linkedin.com/in/rishabhpawani",
        "huggingface: huggingface.co/pawani09",
        "kaggle:      kaggle.com/rishabhpawani",
      ];
    case "sudo hire-me":
    case "sudo hire me":
      return [
        "[sudo] password for visitor: ********",
        "Permission granted.",
        "Scroll to Contact — let's talk.",
      ];
    case "":
      return [];
    default:
      return [`command not found: ${cmd} — type 'help' to see what's available.`];
  }
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: "rishabh@ai-portfolio:~$ type 'help' to begin" },
  ]);
  const [value, setValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const cmd = value;
    if (cmd.trim().toLowerCase() === "clear") {
      setLines([]);
      setValue("");
      return;
    }
    const output = respond(cmd);
    setLines((prev) => [
      ...prev,
      { type: "input", text: cmd },
      ...output.map((text) => ({ type: "output" as const, text })),
    ]);
    setValue("");
  }

  return (
    <section className="relative mx-auto max-w-3xl px-6 py-28 md:py-36">
      <Reveal className="mb-10 text-center">
        <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-gold/80">
          Just for fun
        </span>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Ask the terminal about me.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div
          onClick={() => inputRef.current?.focus()}
          className="glass-strong cursor-text overflow-hidden rounded-2xl"
        >
          <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-mist">
              rishabh@ai-portfolio — zsh
            </span>
          </div>

          <div
            ref={scrollRef}
            className="h-72 overflow-y-auto px-4 py-4 font-mono text-[13px] leading-relaxed"
          >
            {lines.map((line, i) => (
              <div
                key={i}
                className={line.type === "input" ? "text-gold" : "text-slate/85"}
              >
                {line.type === "input" ? `$ ${line.text}` : line.text}
              </div>
            ))}

            <form onSubmit={handleSubmit} className="mt-1 flex items-center gap-2">
              <span className="text-gold">$</span>
              <input
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                autoComplete="off"
                spellCheck={false}
                aria-label="Terminal command input"
                className="flex-1 bg-transparent text-ink outline-none placeholder:text-mist/50"
                placeholder="try 'whoami' or 'help'"
              />
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
