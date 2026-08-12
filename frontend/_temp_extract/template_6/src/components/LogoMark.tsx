import React from 'react'

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-yellow-400 text-purple-950 shadow-[0_10px_30px_rgba(245,208,0,0.18)]">
        <span className="font-black leading-none">SW</span>
      </div>
      <div className="leading-tight">
        <div className="font-heading text-base tracking-wide text-white">SoundWave</div>
        <div className="text-xs text-white/65">iShiva Digital Technology</div>
      </div>
    </div>
  )
}
