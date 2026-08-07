import Image from "next/image";

export default function AvatarMedallion({
  size = 176,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        aria-hidden
        className="absolute -inset-3 rounded-full opacity-70 blur-xl"
        style={{
          background:
            "radial-gradient(circle, rgba(172,130,62,0.35), rgba(169,155,217,0.25) 60%, transparent 75%)",
        }}
      />
      <div className="absolute inset-0 rounded-full border-[5px] border-gold/70 shadow-[0_14px_50px_-14px_rgba(30,35,64,0.4)]" />
      <div className="absolute inset-[9px] rounded-full border-[1.5px] border-royal/30" />
      <div className="absolute inset-[9px] overflow-hidden rounded-full bg-paper">
        <Image
          src="/photo.png"
          alt="Rishabh Pawani"
          fill
          sizes={`${size}px`}
          className="object-cover"
          priority
        />
      </div>
      {[...Array(24)].map((_, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute left-1/2 top-1/2 h-1 w-[2px] bg-gold/50"
          style={{
            transform: `rotate(${i * 15}deg) translateY(-${size / 2 - 2}px)`,
            transformOrigin: "0 0",
          }}
        />
      ))}
    </div>
  );
}
