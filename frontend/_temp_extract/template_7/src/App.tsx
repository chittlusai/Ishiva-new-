import { useMemo, useState } from 'react'
import { ShoppingBag, Sparkles, Gift, Clock3, HeartHandshake, Mail, Menu, X } from 'lucide-react'

type Page = 'home' | 'categories' | 'artisan' | 'product' | 'cart'

type Product = {
  id: number
  name: string
  category: string
  artisan: string
  price: string
  image: string
  madeToOrder?: boolean
}

const categoryCards = [
  {
    name: 'Pottery',
    caption: 'Wheel-thrown ceramics with earthy glazes',
    image:
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Weaving',
    caption: 'Handloom textiles and crafted fibers',
    image:
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Jewelry',
    caption: 'Small-batch adornments in metal and stone',
    image:
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bags',
    caption: 'Functional handcrafted everyday carry',
    image:
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Home Decor',
    caption: 'Meaningful objects for warm interiors',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
  },
]

const products: Product[] = [
  {
    id: 1,
    name: 'Terracotta Pour-over Set',
    category: 'Pottery',
    artisan: 'Meera Clay Studio',
    price: '₹2,650',
    image:
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80',
    madeToOrder: true,
  },
  {
    id: 2,
    name: 'Sage Loom Runner',
    category: 'Weaving',
    artisan: 'Loom & Leaf Collective',
    price: '₹1,980',
    image:
      'https://images.unsplash.com/photo-1616627561839-074385245ff6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Hammered Brass Earrings',
    category: 'Jewelry',
    artisan: 'Aanya Metalsmith',
    price: '₹1,240',
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
    madeToOrder: true,
  },
]

function App() {
  const [page, setPage] = useState<Page>('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartQty, setCartQty] = useState(1)

  const selectedProduct = products[0]

  const navItems: { key: Page; label: string }[] = useMemo(
    () => [
      { key: 'home', label: 'Home' },
      { key: 'categories', label: 'Categories' },
      { key: 'artisan', label: 'Artisan' },
      { key: 'product', label: 'Product' },
      { key: 'cart', label: 'Cart' },
    ],
    [],
  )

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage onNavigate={setPage} />
      case 'categories':
        return <CategoriesPage />
      case 'artisan':
        return <ArtisanPage />
      case 'product':
        return <ProductPage product={selectedProduct} onAddToCart={() => setPage('cart')} />
      case 'cart':
        return <CartPage qty={cartQty} setQty={setCartQty} product={selectedProduct} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF8EC] text-[#5C3A1E]">
      <header className="sticky top-0 z-40 border-b border-[#5C3A1E]/20 bg-[#FFF8EC]/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <button className="text-left" onClick={() => setPage('home')}>
            <p className="font-serif text-2xl font-semibold tracking-wide text-[#5C3A1E]">CraftHands</p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#7A9E7E]">iShiva Digital Technology</p>
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setPage(item.key)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  page === item.key
                    ? 'bg-[#C06B3B] text-[#FFF8EC]'
                    : 'text-[#5C3A1E] hover:bg-[#7A9E7E]/20'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage('cart')}
              className="relative rounded-full bg-[#5C3A1E] p-2 text-[#FFF8EC] hover:bg-[#C06B3B]"
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              <span className="absolute -right-1 -top-1 rounded-full bg-[#7A9E7E] px-1.5 text-[10px] font-bold text-[#FFF8EC]">
                {cartQty}
              </span>
            </button>
            <button className="md:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-[#5C3A1E]/20 bg-[#FFF8EC] px-4 py-3 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setPage(item.key)
                    setMobileOpen(false)
                  }}
                  className="rounded-md border border-[#5C3A1E]/20 px-3 py-2 text-left hover:bg-[#7A9E7E]/20"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8">{renderPage()}</main>
    </div>
  )
}

function HandTag({ text }: { text: string }) {
  return (
    <span className="pointer-events-none absolute -top-2 left-3 rotate-[-8deg] rounded-md bg-[#FFF8EC] px-2 py-1 text-xs text-[#5C3A1E] opacity-0 shadow transition duration-300 group-hover:opacity-100">
      ✍ {text}
    </span>
  )
}

function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <div className="space-y-16">
      <section className="grid items-center gap-8 rounded-3xl bg-gradient-to-br from-[#C06B3B] to-[#a55a32] p-8 text-[#FFF8EC] md:grid-cols-2 md:p-12">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFF8EC]/20 px-3 py-1 text-xs uppercase tracking-[0.2em]">
            <Sparkles size={14} /> Handmade with soul
          </p>
          <h1 className="text-4xl leading-tight font-semibold md:text-6xl">Artisan goods made for warm everyday living</h1>
          <p className="mt-4 max-w-xl text-[#fff4e2]">
            Welcome to CraftHands — a curated handmade marketplace frontend for iShiva Digital Technology, connecting mindful shoppers with skilled makers across India.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('categories')}
              className="rounded-full bg-[#FFF8EC] px-5 py-2.5 font-semibold text-[#5C3A1E] hover:bg-[#7A9E7E] hover:text-[#FFF8EC]"
            >
              Explore Categories
            </button>
            <button
              onClick={() => onNavigate('artisan')}
              className="rounded-full border border-[#FFF8EC] px-5 py-2.5 font-semibold hover:bg-[#FFF8EC] hover:text-[#5C3A1E]"
            >
              Meet Artisans
            </button>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl border border-[#FFF8EC]/30">
          <HandTag text="slow-crafted stories" />
          <img
            src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=80"
            alt="Artisan shaping clay"
            className="h-[360px] w-full object-cover"
          />
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-semibold">Shop by Artisan Category</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categoryCards.map((category) => (
            <article key={category.name} className="group relative overflow-hidden rounded-2xl border border-[#5C3A1E]/20 bg-white/50">
              <HandTag text="handpicked" />
              <img src={category.image} alt={category.name} className="h-44 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{category.name}</h3>
                <p className="mt-1 text-sm text-[#5C3A1E]/80">{category.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl bg-[#7A9E7E]/15 p-8 md:grid-cols-2">
        <div className="group relative rounded-2xl bg-white p-5 shadow-sm">
          <HandTag text="artisan spotlight" />
          <p className="text-xs uppercase tracking-[0.2em] text-[#7A9E7E]">Spotlight 01</p>
          <h3 className="mt-2 text-2xl font-semibold">Riya Sharma · Blue Earth Pottery</h3>
          <p className="mt-2 text-[#5C3A1E]/85">
            Riya blends regional clay with low-waste kiln techniques to create tableware that carries warmth, tactility, and a distinctly handcrafted identity.
          </p>
        </div>
        <div className="group relative rounded-2xl bg-white p-5 shadow-sm">
          <HandTag text="artisan spotlight" />
          <p className="text-xs uppercase tracking-[0.2em] text-[#7A9E7E]">Spotlight 02</p>
          <h3 className="mt-2 text-2xl font-semibold">Kabir & Nisha · Loom & Leaf</h3>
          <p className="mt-2 text-[#5C3A1E]/85">
            Their weaving studio revives natural dye methods and transforms everyday cotton into tactile runners, wraps, and decor crafted on handlooms.
          </p>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-[#5C3A1E]/20 bg-white p-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#C06B3B]/20 px-3 py-1 text-xs font-semibold text-[#5C3A1E]">
            <Gift size={14} /> Gifting Corner
          </p>
          <h3 className="mt-4 text-3xl font-semibold">Thoughtful gifting, artisan-made</h3>
          <p className="mt-2 text-[#5C3A1E]/85">
            Build custom gift bundles with hand-thrown cups, woven wraps, and personalized note cards designed for festive and corporate occasions.
          </p>
        </div>
        <div className="rounded-3xl border border-[#5C3A1E]/20 bg-white p-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#7A9E7E]/20 px-3 py-1 text-xs font-semibold text-[#5C3A1E]">
            <HeartHandshake size={14} /> Community Story
          </p>
          <h3 className="mt-4 text-3xl font-semibold">From maker tables to your homes</h3>
          <p className="mt-2 text-[#5C3A1E]/85">
            CraftHands began as an editorial effort documenting studio journeys, preserving techniques, and helping artisans share the true value of handcrafted work.
          </p>
        </div>
      </section>

      <section className="rounded-3xl bg-[#5C3A1E] p-8 text-[#FFF8EC]">
        <p className="inline-flex items-center gap-2 rounded-full bg-[#FFF8EC]/15 px-3 py-1 text-xs uppercase tracking-[0.2em]">
          <Mail size={14} /> Newsletter
        </p>
        <h3 className="mt-3 text-3xl font-semibold">Get artisan stories and new arrivals</h3>
        <div className="mt-5 flex flex-col gap-3 md:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-full border border-[#FFF8EC]/40 bg-transparent px-4 py-2.5 outline-none placeholder:text-[#fff8ecb3]"
          />
          <button className="rounded-full bg-[#C06B3B] px-5 py-2.5 font-semibold hover:bg-[#7A9E7E]">Subscribe</button>
        </div>
      </section>
    </div>
  )
}

function CategoriesPage() {
  return (
    <section>
      <h1 className="text-4xl font-semibold">Artisan Categories</h1>
      <p className="mt-2 text-[#5C3A1E]/80">Discover handcrafted collections across pottery, weaving, jewelry, bags, and home decor.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {categoryCards.map((category) => (
          <article key={category.name} className="group relative overflow-hidden rounded-2xl border border-[#5C3A1E]/20 bg-white">
            <HandTag text="crafted with care" />
            <img src={category.image} alt={category.name} className="h-56 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-semibold">{category.name}</h3>
              <p className="mt-1 text-[#5C3A1E]/80">{category.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ArtisanPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-semibold">Artisan Profiles</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-[#5C3A1E]/20 bg-white p-6">
          <h2 className="text-2xl font-semibold">Riya Sharma</h2>
          <p className="text-sm uppercase tracking-[0.2em] text-[#7A9E7E]">Blue Earth Pottery · Jaipur</p>
          <p className="mt-3 text-[#5C3A1E]/85">
            Specializes in naturally fired clay tableware. Each batch is limited and hand-glazed with terracotta and ash tones.
          </p>
        </article>
        <article className="rounded-3xl border border-[#5C3A1E]/20 bg-white p-6">
          <h2 className="text-2xl font-semibold">Kabir & Nisha</h2>
          <p className="text-sm uppercase tracking-[0.2em] text-[#7A9E7E]">Loom & Leaf · Bhuj</p>
          <p className="mt-3 text-[#5C3A1E]/85">
            A weaving duo creating textiles with hand-spun cotton and plant-based dyes while preserving regional loom traditions.
          </p>
        </article>
      </div>
    </section>
  )
}

function ProductPage({ product, onAddToCart }: { product: Product; onAddToCart: () => void }) {
  return (
    <section className="grid gap-10 md:grid-cols-2">
      <div className="group relative overflow-hidden rounded-3xl border border-[#5C3A1E]/20 bg-white">
        <HandTag text="made in small batches" />
        <img src={product.image} alt={product.name} className="h-full min-h-[420px] w-full object-cover" />
      </div>

      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-[#7A9E7E]">{product.category}</p>
        <h1 className="mt-2 text-4xl font-semibold">{product.name}</h1>
        <p className="mt-2 text-[#5C3A1E]/85">by {product.artisan}</p>
        <p className="mt-4 text-3xl font-semibold">{product.price}</p>

        {product.madeToOrder && (
          <p className="mt-4 inline-flex rounded-full bg-[#C06B3B]/20 px-4 py-1.5 text-sm font-semibold text-[#5C3A1E]">Made-to-Order</p>
        )}

        <div className="mt-6 rounded-2xl border border-[#5C3A1E]/20 bg-white p-4">
          <h3 className="font-semibold">Customization Note</h3>
          <textarea
            placeholder="Add initials, preferred color notes, or gifting message preferences..."
            className="mt-2 h-28 w-full rounded-xl border border-[#5C3A1E]/30 bg-[#FFF8EC] p-3 outline-none"
          />
        </div>

        <div className="mt-5 rounded-2xl border border-[#5C3A1E]/20 bg-white p-4">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#5C3A1E]">
            <Clock3 size={15} /> Production Timeline
          </p>
          <ul className="mt-2 space-y-1 text-sm text-[#5C3A1E]/85">
            <li>• Crafting: 3–5 business days</li>
            <li>• Finishing & quality check: 2 days</li>
            <li>• Dispatch: 1–2 business days</li>
          </ul>
        </div>

        <button
          onClick={onAddToCart}
          className="mt-6 rounded-full bg-[#5C3A1E] px-6 py-3 font-semibold text-[#FFF8EC] hover:bg-[#C06B3B]"
        >
          Add to Cart
        </button>
      </div>
    </section>
  )
}

function CartPage({ qty, setQty, product }: { qty: number; setQty: (n: number) => void; product: Product }) {
  return (
    <section>
      <h1 className="text-4xl font-semibold">Your Cart</h1>
      <div className="mt-6 grid gap-6 rounded-3xl border border-[#5C3A1E]/20 bg-white p-6 md:grid-cols-[120px_1fr_auto] md:items-center">
        <img src={product.image} alt={product.name} className="h-24 w-24 rounded-xl object-cover" />
        <div>
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-[#5C3A1E]/80">{product.price}</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="rounded-full border px-3 py-1">-</button>
          <span className="w-8 text-center">{qty}</span>
          <button onClick={() => setQty(qty + 1)} className="rounded-full border px-3 py-1">+</button>
        </div>
      </div>
      <button className="mt-6 rounded-full bg-[#7A9E7E] px-6 py-3 font-semibold text-[#FFF8EC] hover:bg-[#5C3A1E]">Proceed to Checkout</button>
    </section>
  )
}

export default App
