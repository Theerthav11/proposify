export function BorderBeam({
  size = 200,
  duration = 8,
}) {
  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden">

      {/* THIN BORDER */}
      <div className="absolute inset-0 rounded-[inherit] border border-white/10"></div>

      {/* MOVING SHINE */}
      <div
        className="absolute top-0 left-0 h-[2px] w-[140px] rounded-full bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-90 animate-border-beam"
        style={{
          animationDuration: `${duration}s`,
        }}
      />

    </div>
  );
}