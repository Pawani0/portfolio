"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFinePointer || reduceMotion) return;

    let x = 0;
    let y = 0;
    let rafId: number;

    function handleMove(e: MouseEvent) {
      x = e.clientX;
      y = e.clientY;
    }

    function render() {
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x - 220}px, ${y - 220}px, 0)`;
      }
      rafId = requestAnimationFrame(render);
    }

    window.addEventListener("mousemove", handleMove);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[440px] w-[440px] rounded-full opacity-0 md:opacity-100 will-change-transform"
      style={{
        background:
          "radial-gradient(circle, rgba(172,130,62,0.05) 0%, rgba(169,155,217,0.05) 45%, transparent 70%)",
      }}
    />
  );
}
