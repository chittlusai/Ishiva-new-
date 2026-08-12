import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[rgba(0,0,0,0.15)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-heading text-lg text-white">SoundWave</div>
          <p className="mt-2 max-w-xl text-sm text-white/70">
            A rock-forward instruments & accessories storefront concept built for iShiva
            Digital Technology. Browse categories, explore product details, and preview a
            demo audio player placeholder.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Store</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>Secure checkout (frontend-only)</li>
            <li>Fast rentals</li>
            <li>Lesson booking</li>
            <li>Teacher recommendations</li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-yellow-300" /> +1 (000) 000‑0000
            </li>
            <li className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-yellow-300" /> hello@soundwave.store
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-yellow-300" /> Online / Worldwide
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} SoundWave — iShiva Digital Technology</div>
          <div>Frontend concept UI only. No real payments or bookings.</div>
        </div>
      </div>
    </footer>
  )
}
