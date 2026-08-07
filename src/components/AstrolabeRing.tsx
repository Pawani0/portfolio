const round = (n: number) => Math.round(n * 100) / 100;

export default function AstrolabeRing({
  size,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const ticks = Array.from({ length: 60 });
  const majorTicks = Array.from({ length: 12 });

  return (
    <svg
      aria-hidden
      viewBox="0 0 600 600"
      style={size ? { width: size, height: size } : undefined}
      className={`${size ? "" : "h-[110vmin] w-[110vmin]"} max-w-none opacity-[0.35] [animation:spin-slow_140s_linear_infinite] motion-reduce:animate-none ${className}`}
    >
      <circle cx="300" cy="300" r="280" fill="none" stroke="#ac823e" strokeWidth="1" />
      <circle cx="300" cy="300" r="264" fill="none" stroke="#ac823e" strokeWidth="0.6" opacity="0.7" />
      <circle cx="300" cy="300" r="180" fill="none" stroke="#2a3b8f" strokeWidth="0.6" opacity="0.5" strokeDasharray="2 6" />
      <circle cx="300" cy="300" r="120" fill="none" stroke="#a99bd9" strokeWidth="0.6" opacity="0.5" />

      {ticks.map((_, i) => {
        const angle = (i / ticks.length) * Math.PI * 2;
        const isMajor = i % 5 === 0;
        const r1 = isMajor ? 250 : 262;
        const r2 = 280;
        return (
          <line
            key={i}
            x1={round(300 + Math.cos(angle) * r1)}
            y1={round(300 + Math.sin(angle) * r1)}
            x2={round(300 + Math.cos(angle) * r2)}
            y2={round(300 + Math.sin(angle) * r2)}
            stroke="#ac823e"
            strokeWidth={isMajor ? 1.1 : 0.5}
            opacity={isMajor ? 0.7 : 0.4}
          />
        );
      })}

      {majorTicks.map((_, i) => {
        const angle = (i / majorTicks.length) * Math.PI * 2;
        const x = round(300 + Math.cos(angle) * 180);
        const y = round(300 + Math.sin(angle) * 180);
        return <circle key={i} cx={x} cy={y} r="2.5" fill="#2a3b8f" opacity="0.55" />;
      })}

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </svg>
  );
}
