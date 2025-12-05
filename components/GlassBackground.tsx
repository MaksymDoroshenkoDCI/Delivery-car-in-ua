// components/GlassBackground.tsx

export default function GlassBackground() {
  return (
    <div
      className="fixed inset-0 z-[-1] backdrop-blur-lg bg-glass pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle at top left, rgba(255, 255, 255, 0.2), transparent 50%),
                          radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.15), transparent 50%)`,
      
      }}
    />
  );
}
