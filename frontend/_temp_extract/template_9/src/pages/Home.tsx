import Hero from '../components/Hero';
import CollectionGrid from '../components/CollectionGrid';
import GiftingSection from '../components/GiftingSection';
import CouplesSet from '../components/CouplesSet';
import Reviews from '../components/Reviews';
import Newsletter from '../components/Newsletter';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Shield, RefreshCw, Award } from 'lucide-react';

const featuredProducts = products.filter(p => p.isBestseller).slice(0, 4);
const newArrivals = products.filter(p => p.isNew).slice(0, 4);

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Features Bar */}
      <section className="bg-midnight border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Truck, label: 'Free Shipping', desc: 'On orders over $75' },
              { icon: Shield, label: '2-Year Warranty', desc: 'On all watches' },
              { icon: RefreshCw, label: 'Easy Returns', desc: '30-day return policy' },
              { icon: Award, label: 'Authentic', desc: 'Genuine materials only' },
            ].map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <feature.icon size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-warm-white text-xs font-bold">{feature.label}</p>
                  <p className="text-silver-dark text-[10px]">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CollectionGrid />

      {/* Featured Products */}
      <section className="py-20 bg-warm-white-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">Best Sellers</p>
              <h2 className="font-heading text-midnight text-3xl sm:text-4xl">Customer Favorites</h2>
            </div>
            <Link
              to="/watches"
              className="hidden sm:inline-flex items-center gap-2 text-midnight text-sm font-bold hover:text-gold transition-colors"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">Just In</p>
              <h2 className="font-heading text-midnight text-3xl sm:text-4xl">New Arrivals</h2>
            </div>
            <Link
              to="/jewelry"
              className="hidden sm:inline-flex items-center gap-2 text-midnight text-sm font-bold hover:text-gold transition-colors"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {newArrivals.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <GiftingSection />
      <CouplesSet />
      <Reviews />
      <Newsletter />
    </div>
  );
}
