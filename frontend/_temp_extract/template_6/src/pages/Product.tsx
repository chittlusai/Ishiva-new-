import React, { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Headphones,
  Minus,
  Plus,
  ShieldCheck,
  Star,
  Truck,
} from 'lucide-react'
import { getCategory, getProduct, productsByCategory } from '../lib/data'
import { money } from '../lib/format'
import { Badge } from '../components/Badge'
import { ProductCard } from '../components/ProductCard'
import { useCart } from '../lib/cart'

export default function Product() {
  const params = useParams()
  const id = params.id ?? 'sf-stormcaster'
  const product = getProduct(id)
  const { add } = useCart()

  const [qty, setQty] = useState(1)

  const related = useMemo(() => {
    if (!product) return []
    return productsByCategory(product.categoryId)
      .filter((p) => p.id !== product.id)
      .slice(0, 2)
  }, [product])

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <div className="font-heading text-2xl text-white">Product not found</div>
          <Link
            to="/"
            className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-black text-purple-950"
          >
            <ArrowLeft className="h-4 w-4" /> Go Home
          </Link>
        </div>
      </div>
    )
  }

  const cat = getCategory(product.categoryId)

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to={`/category/${product.categoryId}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to {cat?.name ?? 'Category'}
        </Link>
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
          Product
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                {product.brand} • {cat?.name}
              </div>
              <h1 className="mt-2 font-heading text-3xl tracking-wide text-white">
                {product.name}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Badge tone={product.level === 'Beginner' ? 'beginner' : 'pro'}>
                {product.level === 'Beginner' ? 'Beginner' : 'Pro Level'}
              </Badge>
              {product.teacherRecommended ? (
                <Badge tone="recommended">
                  <Star className="h-3.5 w-3.5" /> Teacher Recommended
                </Badge>
              ) : null}
            </div>
          </div>

          <p className="mt-4 text-sm text-white/75">{product.description}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {product.highlights.map((h) => (
              <div
                key={h}
                className="rounded-2xl border border-white/10 bg-purple-950/20 px-4 py-3 text-sm text-white/80"
              >
                {h}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-purple-950/25 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                  Demo audio player
                </div>
                <div className="mt-1 text-sm text-white/70">
                  Placeholder UI for product sound preview.
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75">
                <Headphones className="h-4 w-4 text-yellow-300" /> Preview
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <button className="grid h-11 w-11 place-items-center rounded-2xl bg-yellow-400 font-black text-purple-950">
                ▶
              </button>
              <div className="flex-1">
                <div className="h-2 w-full rounded-full bg-white/10">
                  <div className="h-2 w-1/3 rounded-full bg-yellow-400" />
                </div>
                <div className="mt-2 flex justify-between text-xs text-white/60">
                  <span>0:18</span>
                  <span>1:05</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold text-white">Price</div>
          <div className="mt-2 font-heading text-3xl text-yellow-300">
            {money(product.price)}
          </div>

          <div className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
            Quantity
          </div>
          <div className="mt-2 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-purple-950/20 p-2">
            <button
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              aria-label="Decrease"
            >
              <Minus className="h-4 w-4" />
            </button>
            <div className="font-heading text-2xl text-white">{qty}</div>
            <button
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
              onClick={() => setQty((q) => Math.min(99, q + 1))}
              aria-label="Increase"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={() => add(product, qty)}
            className="mt-5 w-full rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-black text-purple-950 transition hover:bg-yellow-300"
          >
            Add to cart
          </button>

          <div className="mt-6 grid gap-3">
            {[{ icon: Truck, t: 'Fast delivery UI', s: 'Estimate at checkout' },
              { icon: ShieldCheck, t: 'Warranty', s: 'One year coverage' },
            ].map((i) => (
              <div
                key={i.t}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <i.icon className="mt-0.5 h-5 w-5 text-yellow-300" />
                <div>
                  <div className="text-sm font-semibold text-white">{i.t}</div>
                  <div className="text-xs text-white/60">{i.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length ? (
        <div className="mt-10">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
            Related
          </div>
          <div className="mt-2 font-heading text-2xl tracking-wide text-white">
            More from {cat?.name}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
