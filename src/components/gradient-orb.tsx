export function GradientOrb({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 rounded-full opacity-70 blur-3xl ${className}`}
      style={{
        background:
          "conic-gradient(from 180deg, #fbcfe8, #bfdbfe, #ddd6fe, #bae6fd, #fbcfe8)",
      }}
    />
  );
}
