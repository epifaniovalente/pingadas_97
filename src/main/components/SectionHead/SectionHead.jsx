
export const SectionHead=({ n, label, dark = false })=> {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span
        className={`flex h-8 w-8 items-center justify-center font-mono text-xs font-bold ${
          dark ? "bg-white text-[#0D0D0D]" : "bg-[#FF3D00] text-white"
        }`}
      >
        {n}
      </span>
      <span
        className={`text-xs font-bold uppercase tracking-[0.3em] ${
          dark ? "text-white/70" : "text-[#0D0D0D]/60"
        }`}
      >
        {label}
      </span>
    </div>
  )
}