import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Headphones, Music2, Shield, Truck } from 'lucide-react'
import { categories, brandLogos, products } from '../lib/data'
import { ProductCard } from '../components/ProductCard'
import { SectionHeading } from '../components/SectionHeading'
import './home.css'

export default function Home() {
  const teacherPicks = useMemo(
    () => products.filter((p) => p.teacherRecommended).slice(0, 4),
    [],
  )

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(245,208,0,0.25),transparent_55%),radial-gradient(circle_at_70%_10%,rgba(255,255,255,0.10),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(245,208,0,0.18),transparent_55%)]" />
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-yellow-400/12 blur-3xl" />
        <div className="absolute -right-24 top-12 h-80 w-80 rounded-full bg-white/8 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
              <Music2 className="h-4 w-4 text-yellow-300" /> Rock‑inspired instruments & gear
            </div>

            <h1 className="mt-5 font-heading text-4xl tracking-wide text-white sm:text-5xl">
              SoundWave Music Instruments
              <span className="block text-yellow-300">Play louder. Practice smarter.</span>
            </h1>

            <p className="mt-4 max-w-xl text-base text-white/75">
              A bold, modern storefront UI concept for iShiva Digital Technology —
              featuring categories, product detail with demo audio placeholder,
              teacher‑recommended picks, rentals, and lesson CTAs.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/category/guitar"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-black text-purple-950 transition hover:bg-yellow-300"
              >
                Shop categories <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/lessons"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Book a lesson <Calendar className="h-4 w-4 text-yellow-300" />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { icon: Truck, title: 'Fast shipping', sub: 'UI concept only' },
                { icon: Shield, title: 'Warranty', sub: '1 year coverage' },
                { icon: Headphones, title: 'Support', sub: 'Gear guidance' },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <f.icon className="h-5 w-5 text-yellow-300" />
                  <div className="mt-2 text-sm font-semibold text-white">{f.title}</div>
                  <div className="text-xs text-white/60">{f.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(245,208,0,0.18),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.10),transparent_55%)]" />

            <div className="rounded-3xl border border-white/12 bg-[rgba(255,255,255,0.05)] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
              <div className="hero-amp-grid rounded-2xl border border-white/10 bg-purple-950/30 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                      Featured
                    </div>
                    <div className="mt-2 font-heading text-xl tracking-wide text-white">
                      StormCaster Electric
                    </div>
                    <div className="mt-1 text-sm text-white/70">
                      High‑gain clarity • Locking tuners • Stage ready
                    </div>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-400 text-purple-950">
                    <span className="font-black">AMP</span>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {['Crunch', 'Lead', 'Clean'].map((t) => (
                    <div
                      key={t}
                      className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center"
                    >
                      <div className="text-xs font-semibold text-white/65">{t}</div>
                      <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
                        <div
                          className="h-1.5 rounded-full bg-yellow-400"
                          style={{ width: t === 'Crunch' ? '70%' : t === 'Lead' ? '85%' : '55%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                    Demo audio placeholder
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <button className="grid h-10 w-10 place-items-center rounded-xl bg-yellow-400 font-black text-purple-950">
                      ▶
                    </button>
                    <div className="flex-1">
                      <div className="h-2 w-full rounded-full bg-white/10">
                        <div className="h-2 w-2/5 rounded-full bg-yellow-400" />
                      </div>
                      <div className="mt-2 flex justify-between text-xs text-white/60">
                        <span>0:21</span>
                        <span>1:12</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold text-white">Beginner setups</div>
                  <div className="mt-1 text-xs text-white/60">
                    Bundles built for learning
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold text-white">Pro rigs</div>
                  <div className="mt-1 text-xs text-white/60">
                    Stage + studio ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeading
          eyebrow="Browse"
          title="Instrument categories"
          subtitle="Pick your lane — then explore beginner and pro level options with a teacher‑recommended spotlight."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/category/${c.id}`}
              className="note-card group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/7"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-heading text-xl tracking-wide text-white">{c.name}</div>
                  <div className="mt-2 text-sm text-white/70">{c.description}</div>
                </div>
                <div
                  className={
                    c.accent === 'yellow'
                      ? 'grid h-11 w-11 place-items-center rounded-2xl bg-yellow-400 text-purple-950 font-black'
                      : 'grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/5 text-white font-black'
                  }
                >
                  {c.name.slice(0, 2).toUpperCase()}
                </div>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-yellow-300">
                Explore <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Teacher recommended */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeading
          eyebrow="Teacher‑recommended"
          title="Guided picks for confident progress"
          subtitle="A curated set of gear that music teachers frequently suggest for reliable tone, comfort and learning speed."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {teacherPicks.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Rentals + Lessons CTAs */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
              Rental service
            </div>
            <h3 className="mt-4 font-heading text-2xl tracking-wide text-white">
              Rent gear for gigs, events & try‑before‑buy
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Need a drum kit for the weekend or a controller for a party set?
              Explore flexible rental durations (static CTA).
            </p>
            <div className="mt-6">
              <Link
                to="/rentals"
                className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-black text-purple-950 transition hover:bg-yellow-300"
              >
                View rentals <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
              Lessons
            </div>
            <h3 className="mt-4 font-heading text-2xl tracking-wide text-white">
              Book lessons with trusted instructors
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Choose an instrument, pick a level, and reserve a slot (static CTA).
              Great for new players and skill refresh.
            </p>
            <div className="mt-6">
              <Link
                to="/lessons"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Book lessons <Calendar className="h-4 w-4 text-yellow-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand strip */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                Brands
              </div>
              <div className="mt-2 font-heading text-xl tracking-wide text-white">
                Trusted names, bold tone
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {brandLogos.map((b) => (
                <div
                  key={b}
                  className="rounded-2xl border border-white/10 bg-purple-950/20 px-4 py-2 text-sm font-semibold text-white/80"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                Newsletter
              </div>
              <div className="mt-2 font-heading text-2xl tracking-wide text-white">
                Get new arrivals, bundles & lesson tips
              </div>
              <p className="mt-2 text-sm text-white/70">
                Signup UI only — no emails sent.
              </p>
            </div>

            <form
              className="flex w-full max-w-lg flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                placeholder="you@example.com"
                className="w-full flex-1 rounded-2xl border border-white/10 bg-purple-950/20 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-yellow-400/60"
              />
              <button className="rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-black text-purple-950 transition hover:bg-yellow-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
