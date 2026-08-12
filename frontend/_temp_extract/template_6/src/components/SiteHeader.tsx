import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { LogoMark } from './LogoMark'
import { useCart } from '../lib/cart'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/category/guitar', label: 'Category' },
  { to: '/rentals', label: 'Rentals' },
  { to: '/lessons', label: 'Lessons' },
  { to: '/cart', label: 'Cart' },
]

export function SiteHeader() {
  const { count } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(44,10,74,0.78)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="shrink-0">
          <LogoMark />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                [
                  'rounded-xl px-3 py-2 text-sm font-semibold tracking-wide transition',
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-white/75 hover:bg-white/10 hover:text-white',
                ].join(' ')
              }
              end={n.to === '/'}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/cart"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            <span className="ml-1 inline-flex min-w-6 items-center justify-center rounded-full bg-yellow-400 px-2 py-0.5 text-xs font-black text-purple-950">
              {count}
            </span>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-3 md:hidden">
        <div className="flex flex-wrap gap-2">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                [
                  'rounded-xl px-3 py-2 text-sm font-semibold tracking-wide transition',
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-white/75 hover:bg-white/10 hover:text-white',
                ].join(' ')
              }
              end={n.to === '/'}
            >
              {n.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
