import React, { useMemo, useState } from 'react'
import { CalendarCheck, Clock, Music, Phone } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'

const instruments = ['Guitar', 'Drums', 'Keys', 'Bass', 'Vocals', 'DJ'] as const
const levels = ['Beginner', 'Intermediate', 'Advanced'] as const

function times() {
  return ['10:00 AM', '12:00 PM', '3:00 PM', '6:00 PM']
}

export default function Lessons() {
  const [instrument, setInstrument] = useState<(typeof instruments)[number]>('Guitar')
  const [level, setLevel] = useState<(typeof levels)[number]>('Beginner')
  const [slot, setSlot] = useState(times()[0])

  const summary = useMemo(() => {
    return `${instrument} • ${level} • ${slot}`
  }, [instrument, level, slot])

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <SectionHeading
        eyebrow="Lessons"
        title="Lesson booking (static)"
        subtitle="A booking flow UI concept — choose instrument, level, and a time slot."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-5">
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                Instrument
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {instruments.map((i) => (
                  <button
                    key={i}
                    onClick={() => setInstrument(i)}
                    className={
                      instrument === i
                        ? 'rounded-2xl bg-yellow-400 px-4 py-3 text-sm font-black text-purple-950'
                        : 'rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10'
                    }
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                Level
              </label>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {levels.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLevel(l)}
                    className={
                      level === l
                        ? 'rounded-2xl bg-yellow-400 px-4 py-3 text-sm font-black text-purple-950'
                        : 'rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10'
                    }
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                Time slot
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {times().map((t) => (
                  <button
                    key={t}
                    onClick={() => setSlot(t)}
                    className={
                      slot === t
                        ? 'rounded-2xl bg-yellow-400 px-4 py-3 text-sm font-black text-purple-950'
                        : 'rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10'
                    }
                  >
                    <span className="inline-flex items-center gap-2">
                      <Clock className="h-4 w-4" /> {t}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button className="rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-black text-purple-950 transition hover:bg-yellow-300">
              Confirm booking (static)
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
            Summary
          </div>
          <div className="mt-2 font-heading text-2xl tracking-wide text-white">{summary}</div>

          <div className="mt-6 grid gap-3">
            {[{ icon: CalendarCheck, title: 'Weekly slots', desc: 'Schedule UI can expand later.' },
              { icon: Music, title: 'Practice plan', desc: 'Teacher-recommended path.' },
              { icon: Phone, title: 'Support', desc: 'Get help choosing a lesson.' },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                  <f.icon className="h-4 w-4 text-yellow-300" /> {f.title}
                </div>
                <div className="mt-1 text-xs text-white/60">{f.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-purple-950/20 p-4">
            <div className="text-sm font-semibold text-white">Note</div>
            <p className="mt-1 text-sm text-white/70">
              This is a frontend-only concept for iShiva Digital Technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
