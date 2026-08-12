import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import type { Product } from '../lib/data'
import { money } from '../lib/format'
import { Badge } from './Badge'
import './MusicNoteHover.css'

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="note-card group rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/7">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
            {product.brand}
          </div>
          <div className="mt-2 font-heading text-lg tracking-wide text-white">
            {product.name}
          </div>
        </div>

        {product.teacherRecommended ? (
          <Badge tone="recommended">
            <Star className="h-3.5 w-3.5" /> Teacher Pick
          </Badge>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Badge tone={product.level === 'Beginner' ? 'beginner' : 'pro'}>
          {product.level === 'Beginner' ? 'Beginner' : 'Pro Level'}
        </Badge>
        <span className="text-sm font-semibold text-yellow-300">{money(product.price)}</span>
      </div>

      <p className="mt-3 text-sm text-white/70">{product.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <Link
          to={`/product/${product.id}`}
          className="rounded-xl bg-yellow-400 px-3 py-2 text-sm font-black text-purple-950 transition hover:bg-yellow-300"
        >
          View Details
        </Link>
        <div className="text-xs text-white/55">Demo audio inside</div>
      </div>
    </div>
  )
}
