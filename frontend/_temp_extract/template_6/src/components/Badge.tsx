import React from 'react'

export function Badge({
  tone,
  children,
}: {
  tone: 'beginner' | 'pro' | 'recommended'
  children: React.ReactNode
}) {
  const base =
    'inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold tracking-wide'
  const styles: Record<string, string> = {
    beginner: 'border-white/15 bg-white/5 text-white',
    pro: 'border-yellow-400/40 bg-yellow-400/10 text-yellow-200',
    recommended: 'border-yellow-400/40 bg-yellow-400/10 text-yellow-100',
  }

  return <span className={`${base} ${styles[tone]}`}>{children}</span>
}
