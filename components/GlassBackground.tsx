// components/GlassBackground.tsx

export default function GlassBackground() {
  return (
    <div
      className="fixed inset-0 z-[-1] backdrop-blur-lg bg-glass pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05) 0%, transparent 40%),
                          radial-gradient(circle at 70% 70%, rgba(255,255,255,0.05) 0%, transparent 40%)`,
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
