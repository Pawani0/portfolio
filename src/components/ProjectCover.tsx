const PLATE_BG = "#232a55";
const GOLD = "#d3ac6c";
const LAVENDER = "#b9adde";
const BLUSH = "#e0aca2";

function Plate({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 400 200" className="h-full w-full">
      <rect width="400" height="200" fill={PLATE_BG} />
      <rect
        x="6"
        y="6"
        width="388"
        height="188"
        rx="2"
        fill="none"
        stroke={GOLD}
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      {[...Array(9)].map((_, i) => (
        <circle key={`tl${i}`} cx={16 + i * 3} cy={16} r="0.6" fill={GOLD} opacity="0.3" />
      ))}
      {children}
    </svg>
  );
}

function AdaptItCover() {
  return (
    <Plate>
      <circle cx="200" cy="100" r="62" fill="none" stroke={GOLD} strokeWidth="1.5" opacity="0.8" />
      <circle cx="200" cy="100" r="48" fill="none" stroke={GOLD} strokeWidth="0.75" opacity="0.4" />
      {[...Array(12)].map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const x1 = 200 + Math.cos(a) * 55;
        const y1 = 100 + Math.sin(a) * 55;
        const x2 = 200 + Math.cos(a) * 62;
        const y2 = 100 + Math.sin(a) * 62;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={GOLD} strokeWidth="1" opacity="0.6" />;
      })}
      <line x1="200" y1="100" x2="200" y2="62" stroke={BLUSH} strokeWidth="2" strokeLinecap="round" />
      <line x1="200" y1="100" x2="228" y2="112" stroke={LAVENDER} strokeWidth="2" strokeLinecap="round" />
      <circle cx="200" cy="100" r="3" fill={GOLD} />
      <path d="M170 150 l14 14 l28 -30" fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
    </Plate>
  );
}

function ExamBuddyCover() {
  const nodes = [
    [130, 70], [175, 55], [220, 75], [255, 60],
    [150, 110], [200, 120], [245, 105],
    [175, 150], [225, 155],
  ];
  const edges = [[0,1],[1,2],[2,3],[0,4],[1,4],[4,5],[5,2],[2,6],[4,7],[5,7],[5,8],[6,8]];
  return (
    <Plate>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke={GOLD} strokeWidth="0.75" opacity="0.5"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 5 : 3.5} fill={i % 4 === 0 ? BLUSH : i % 3 === 0 ? LAVENDER : GOLD} opacity="0.9" />
      ))}
      <circle cx="290" cy="150" r="16" fill="none" stroke={GOLD} strokeWidth="2" opacity="0.8" />
      <line x1="301" y1="161" x2="314" y2="174" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
    </Plate>
  );
}

function FloatChatCover() {
  return (
    <Plate>
      {[0, 1, 2].map((row) => (
        <path
          key={row}
          d={`M 20 ${80 + row * 24} Q 70 ${55 + row * 24} 120 ${80 + row * 24} T 220 ${80 + row * 24} T 320 ${80 + row * 24} T 400 ${80 + row * 24}`}
          fill="none"
          stroke={row === 1 ? GOLD : LAVENDER}
          strokeWidth={row === 1 ? 2 : 1}
          opacity={row === 1 ? 0.85 : 0.4}
        />
      ))}
      <circle cx="150" cy="80" r="5" fill={BLUSH} />
      <line x1="150" y1="85" x2="150" y2="140" stroke={BLUSH} strokeWidth="1" opacity="0.6" strokeDasharray="2 3" />
      <circle cx="150" cy="145" r="2.5" fill={BLUSH} opacity="0.8" />
      <circle cx="280" cy="150" r="30" fill="none" stroke={GOLD} strokeWidth="0.75" opacity="0.35" />
    </Plate>
  );
}

function FincoveCover() {
  const bars = [10, 22, 14, 30, 40, 24, 48, 30, 42, 22, 34, 16, 26, 12, 20];
  return (
    <Plate>
      <g transform="translate(90,100)">
        {bars.map((h, i) => (
          <rect
            key={i}
            x={i * 14}
            y={-h / 2}
            width="6"
            height={h}
            rx="3"
            fill={i % 5 === 0 ? BLUSH : i % 3 === 0 ? LAVENDER : GOLD}
            opacity="0.85"
          />
        ))}
      </g>
      <path
        d="M300 70 q22 0 22 30 q0 30 -22 30"
        fill="none"
        stroke={GOLD}
        strokeWidth="2"
        opacity="0.7"
        strokeLinecap="round"
      />
      <path
        d="M300 85 q10 0 10 15 q0 15 -10 15"
        fill="none"
        stroke={GOLD}
        strokeWidth="2"
        opacity="0.9"
        strokeLinecap="round"
      />
    </Plate>
  );
}

const covers: Record<string, () => React.ReactElement> = {
  "adapt-it": AdaptItCover,
  "exam-buddy": ExamBuddyCover,
  floatchat: FloatChatCover,
  fincove: FincoveCover,
};

export default function ProjectCover({ slug }: { slug: string }) {
  const Cover = covers[slug];
  if (!Cover) return null;
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-xl">
      <Cover />
    </div>
  );
}
