import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Guitar, Sparkles, Truck } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'

const tiers = [
  {
    name: 'Weekend Jam',
    price: '$49',
    desc: 'Great for rehearsals, small events, and quick tryouts.',
    perks: ['2–3 days', 'Pickup or delivery (UI)', 'Basic support'],
  },
  {
    name: 'Gig Week',
    price: '$129',
    desc: 'A full week rental for shows, sessions, or touring prep.',
    perks: ['7 days', 'Priority delivery (UI)', 'Swap options'],
    featured: true,
  },
  {
    name: 'Studio Month',
    price: '$299',
    desc: 'Long-term rental for recording projects or extended learning.',
    perks: ['30 days', 'Discounted extensions', 'Pro support'],
  },
]

export default function Rentals() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <SectionHeading
        eyebrow="Rentals"
        title="Rental service (static)"
        subtitle="Pick a duration and reserve gear — UI concept only, no real scheduling or payment."
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={
              t.featured
                ? 'rounded-3xl border border-yellow-400/40 bg-yellow-400/10 p-6 shadow-[0_18px_60px_rgba(245,208,0,0.10)]'
                : 'rounded-3xl border border-white/10 bg-white/5 p-6'
            }
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="font-heading text-2xl tracking-wide text-white">{t.name}</div>
                <div className="mt-1 text-sm text-white/70">{t.desc}</div>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-purple-950/35 text-yellow-300">
                {t.featured ? <Sparkles className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
              </div>
            </div>

            <div className="mt-5 font-heading text-4xl text-yellow-300">{t.price}</div>
            <div className="mt-4 space-y-2 text-sm text-white/75">
              {t.perks.map((p) => (
                <div key={p} className="inline-flex items-center gap-2">
                  <Truck className="h-4 w-4 text-yellow-300" /> {p}
                </div>
              ))}
            </div>

            <button className="mt-6 w-full rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-black text-purple-950 transition hover:bg-yellow-300">
              Reserve (static)
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {[{
          icon: Guitar,
          title: 'Gear variety',
          desc: 'Guitars, controllers, drum kits and mics.',
        },
        {
          icon: Truck,
          title: 'Delivery UI',
          desc: 'Choose delivery or pickup in checkout flow.',
        },
        {
          icon: Clock,
          title: 'Flexible terms',
          desc: 'Extend, swap, or upgrade depending on availability.',
        }].map((f) => (
          <div key={f.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <f.icon className="h-6 w-6 text-yellow-300" />
            <div className="mt-3 font-heading text-xl text-white">{f.title}</div>
            <div className="mt-1 text-sm text-white/70">{f.desc}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7">
        <div className="font-heading text-2xl text-white">Want to buy instead?</div>
        <p className="mt-2 text-sm text-white/70">
          Browse categories and choose beginner or pro level gear.
        </p>
        <Link
          to="/category/guitar"
          className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-black text-purple-950"
        >
          Shop instruments <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
