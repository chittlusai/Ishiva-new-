import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../lib/cart'
import { money } from '../lib/format'
import { SectionHeading } from '../components/SectionHeading'

export default function Cart() {
  const { state, subtotal, setQty, remove, clear } = useCart()

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <SectionHeading
        eyebrow="Cart"
        title="Your cart"
        subtitle="Frontend-only cart with quantity controls. Checkout is not implemented."
      />

      {state.items.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <div className="font-heading text-2xl text-white">Cart is empty</div>
          <p className="mt-2 text-sm text-white/70">Add a product to see it here.</p>
          <Link
            to="/category/guitar"
            className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-black text-purple-950"
          >
            Start shopping <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.45fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="space-y-4">
              {state.items.map((i) => (
                <div
                  key={i.product.id}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-purple-950/20 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                      {i.product.brand}
                    </div>
                    <div className="mt-1 font-heading text-lg text-white">
                      {i.product.name}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-yellow-300">
                      {money(i.product.price)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
                      onClick={() => setQty(i.product.id, i.qty - 1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <div className="w-10 text-center font-heading text-xl text-white">{i.qty}</div>
                    <button
                      className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
                      onClick={() => setQty(i.product.id, i.qty + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>

                    <button
                      className="ml-1 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/85 hover:bg-white/10"
                      onClick={() => remove(i.product.id)}
                    >
                      <Trash2 className="h-4 w-4 text-yellow-300" /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={clear}
              className="mt-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10"
            >
              Clear cart
            </button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold text-white">Order summary</div>
            <div className="mt-4 flex items-center justify-between text-sm text-white/70">
              <span>Subtotal</span>
              <span className="font-semibold text-white">{money(subtotal)}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-white/70">
              <span>Estimated shipping</span>
              <span className="font-semibold text-white">$0</span>
            </div>
            <div className="mt-4 h-px bg-white/10" />
            <div className="mt-4 flex items-center justify-between">
              <span className="font-heading text-lg text-white">Total</span>
              <span className="font-heading text-xl text-yellow-300">{money(subtotal)}</span>
            </div>

            <button className="mt-5 w-full rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-black text-purple-950 transition hover:bg-yellow-300">
              Checkout (static)
            </button>
            <div className="mt-3 text-xs text-white/55">
              Payments not implemented.
            </div>

            <Link
              to="/category/guitar"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-yellow-300 hover:text-yellow-200"
            >
              Continue shopping <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
