import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
        <div className="font-heading text-3xl text-white">404</div>
        <p className="mt-2 text-sm text-white/70">That page doesn’t exist.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-black text-purple-950"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
