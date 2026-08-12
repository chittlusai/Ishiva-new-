import React from 'react'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        {eyebrow ? (
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300/90">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-2 font-heading text-2xl tracking-wide text-white sm:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 max-w-2xl text-sm text-white/70">{subtitle}</p>
        ) : null}
      </div>
    </div>
  )
}
