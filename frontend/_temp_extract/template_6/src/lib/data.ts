export type Level = 'Beginner' | 'Pro'

export type Category = {
  id: string
  name: string
  description: string
  accent: 'yellow' | 'purple'
}

export type Product = {
  id: string
  name: string
  categoryId: string
  price: number
  level: Level
  teacherRecommended?: boolean
  description: string
  highlights: string[]
  brand: string
}

export const categories: Category[] = [
  {
    id: 'guitar',
    name: 'Guitar',
    description: 'Electric, acoustic & riffs for days.',
    accent: 'yellow',
  },
  {
    id: 'drums',
    name: 'Drums',
    description: 'Kits, snares and thunderous hardware.',
    accent: 'purple',
  },
  {
    id: 'keys',
    name: 'Keys',
    description: 'Synths, stage pianos and pads.',
    accent: 'yellow',
  },
  {
    id: 'bass',
    name: 'Bass',
    description: 'Low-end that moves the room.',
    accent: 'purple',
  },
  {
    id: 'vocals',
    name: 'Vocals',
    description: 'Mics, stands, and studio-ready sound.',
    accent: 'yellow',
  },
  {
    id: 'dj',
    name: 'DJ',
    description: 'Controllers, mixers and club tools.',
    accent: 'purple',
  },
]

export const brandLogos = [
  'ToneForge',
  'NeonKeys',
  'PulseDrum',
  'Bassline Co.',
  'VoxVerse',
  'ClubCraft',
]

export const products: Product[] = [
  {
    id: 'sf-stormcaster',
    name: 'StormCaster Electric Guitar',
    categoryId: 'guitar',
    price: 799,
    level: 'Pro',
    teacherRecommended: true,
    description:
      'A rock-ready electric built for sharp attack, stable tuning and stage durability. Designed for high-gain clarity and expressive bends.',
    highlights: ['Alnico V pickups', 'Locking tuners', 'Maple neck, satin finish'],
    brand: 'ToneForge',
  },
  {
    id: 'sf-silverstring',
    name: 'SilverString Acoustic Guitar',
    categoryId: 'guitar',
    price: 249,
    level: 'Beginner',
    teacherRecommended: true,
    description:
      'Comfortable neck profile and bright projection — the perfect first acoustic for learning chords, strumming and fingerstyle.',
    highlights: ['Slim neck', 'Dreadnought body', 'Includes picks + strap'],
    brand: 'ToneForge',
  },
  {
    id: 'pd-thunderkit',
    name: 'ThunderKit 5‑Piece Drum Set',
    categoryId: 'drums',
    price: 999,
    level: 'Pro',
    description:
      'Punchy kick, crisp toms and a snare that cuts through guitars. Tuned for modern rock with tight low end.',
    highlights: ['Birch shells', 'Pro hardware pack', 'Fast tuning lugs'],
    brand: 'PulseDrum',
  },
  {
    id: 'pd-practicestack',
    name: 'PracticeStack Electronic Pads',
    categoryId: 'drums',
    price: 199,
    level: 'Beginner',
    description:
      'Quiet practice that still feels like playing. Responsive pads and simple coaching patterns.',
    highlights: ['Headphone output', 'Coach mode', 'USB MIDI'],
    brand: 'PulseDrum',
  },
  {
    id: 'nk-aurorasynth',
    name: 'Aurora 61 Synth Keys',
    categoryId: 'keys',
    price: 649,
    level: 'Pro',
    teacherRecommended: true,
    description:
      'Warm pads, sharp leads and classic keys in a gig-friendly chassis. Built for studio and stage.',
    highlights: ['61 keys', 'Arp + sequencer', 'Assignable knobs'],
    brand: 'NeonKeys',
  },
  {
    id: 'nk-firstpiano',
    name: 'FirstPiano 88 (Semi‑Weighted)',
    categoryId: 'keys',
    price: 399,
    level: 'Beginner',
    description:
      'A friendly 88‑key setup for lessons, practice, and simple recording — with clean tones and easy controls.',
    highlights: ['Metronome', 'Dual mode', 'Sustain input'],
    brand: 'NeonKeys',
  },
  {
    id: 'bc-nightgroove',
    name: 'NightGroove Bass',
    categoryId: 'bass',
    price: 529,
    level: 'Pro',
    description:
      'Solid low end and quick playability. Tight response for pick or fingerstyle.',
    highlights: ['Active EQ', 'Comfort contour', 'Stable bridge'],
    brand: 'Bassline Co.',
  },
  {
    id: 'bc-firstbass',
    name: 'FirstBass Starter Pack',
    categoryId: 'bass',
    price: 279,
    level: 'Beginner',
    teacherRecommended: true,
    description:
      'Everything you need to start holding down the groove — bass, cable and practice-ready essentials.',
    highlights: ['Beginner setup', 'Comfort neck', 'Includes gig bag'],
    brand: 'Bassline Co.',
  },
  {
    id: 'vv-stagevox',
    name: 'StageVox Dynamic Microphone',
    categoryId: 'vocals',
    price: 109,
    level: 'Beginner',
    teacherRecommended: true,
    description:
      'A no-fuss live mic with clarity and feedback resistance — perfect for rehearsal rooms and first gigs.',
    highlights: ['Shock-mounted capsule', 'Metal grill', 'On/off switch'],
    brand: 'VoxVerse',
  },
  {
    id: 'vv-studioglow',
    name: 'StudioGlow Condenser Mic',
    categoryId: 'vocals',
    price: 229,
    level: 'Pro',
    description:
      'Detailed vocal capture with a smooth high end — ideal for home studio recording and content creation.',
    highlights: ['Cardioid', 'Low-noise preamp friendly', 'Shock mount included'],
    brand: 'VoxVerse',
  },
  {
    id: 'cc-neonmix',
    name: 'NeonMix DJ Controller',
    categoryId: 'dj',
    price: 499,
    level: 'Pro',
    teacherRecommended: true,
    description:
      'Performance pads, tight jogs and quick FX for modern sets. Built for clubs and livestreams.',
    highlights: ['16 pads', 'Dedicated FX', 'USB-C'],
    brand: 'ClubCraft',
  },
  {
    id: 'cc-startset',
    name: 'StartSet DJ Bundle',
    categoryId: 'dj',
    price: 299,
    level: 'Beginner',
    description:
      'A simple bundle to learn beatmatching and transitions with everything you need to begin practicing.',
    highlights: ['Beginner layout', 'Headphone output', 'Software included'],
    brand: 'ClubCraft',
  },
]

export function getProduct(id: string) {
  return products.find((p) => p.id === id)
}

export function getCategory(id: string) {
  return categories.find((c) => c.id === id)
}

export function productsByCategory(categoryId: string) {
  return products.filter((p) => p.categoryId === categoryId)
}
