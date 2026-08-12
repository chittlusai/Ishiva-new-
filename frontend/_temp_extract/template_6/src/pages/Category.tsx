import React, { useMemo, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { ArrowLeft, Filter, Search } from 'lucide-react'
import { categories, productsByCategory } from '../lib/data'
import { ProductCard } from '../components/ProductCard'
import { SectionHeading } from '../components/SectionHeading'

export default function Category() {
  const params = useParams()
  const categoryId = params.id ?? 'guitar'
  const cat = categories.find((c) => c.id === categoryId) ?? categories[0]

  const [searchParams, setSearchParams] = useSearchParams()
  const initial = searchParams.get('level') ?? 'all'
  const [level, setLevel] = useState<'all' | 'Beginner' | 'Pro'>(
    initial === 'Beginner' || initial === 'Pro' ? initial : 'all',
  )
  const [query, setQuery] = useState('')

  const list = useMemo(() => {
    let res = productsByCategory(cat.id)
    if (level !== 'all') res = res.filter((p) => p.level === level)
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      res = res.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
      )
    }
    return res
  }, [cat.id, level, query])

  function setLevelAndUrl(next: 'all' | 'Beginner' | 'Pro') {
    setLevel(next)
    const sp = new URLSearchParams(searchParams)
    if (next === 'all') sp.delete('level')
    else sp.set('level', next)
    setSearchParams(sp)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>

        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
          Category
        </div>
      </div>

      <div className="mt-6">
        <SectionHeading
          title={cat.name}
          subtitle={`${cat.description} Filter by level, then open a product for demo audio placeholder and details.`}
        />
      </div>

      <div className="mt-7 grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <label className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
            Search
          </label>
          <div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-purple-950/20 px-3 py-2">
            <Search className="h-4 w-4 text-white/55" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find by name, brand, description"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
            Level
          </label>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {([
              { id: 'all', label: 'All' },
              { id: 'Beginner', label: 'Beginner' },
              { id: 'Pro', label: 'Pro' },
            ] as const).map((o) => (
              <button
                key={o.id}
                onClick={() => setLevelAndUrl(o.id)}
                className={
                  level === o.id
                    ? 'rounded-2xl bg-yellow-400 px-3 py-2 text-sm font-black text-purple-950'
                    : 'rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/80 hover:bg-white/10'
                }
              >
                <span className="inline-flex items-center gap-2">
                  <Filter className="h-4 w-4" /> {o.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {list.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <div className="font-heading text-2xl text-white">No matches</div>
          <p className="mt-2 text-sm text-white/70">Try clearing filters.</p>
        </div>
      ) : null}

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm font-semibold text-white">More categories</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/category/${c.id}`}
              className={
                c.id === cat.id
                  ? 'rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-black text-purple-950'
                  : 'rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/10'
              }
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
