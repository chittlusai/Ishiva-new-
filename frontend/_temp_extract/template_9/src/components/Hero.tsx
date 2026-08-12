import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-midnight">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1920&h=1080&fit=crop"
          alt="Luxury watch"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs tracking-[0.3em] uppercase mb-4"
          >
            iShiva Digital Technology Presents
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-warm-white text-5xl sm:text-6xl lg:text-7xl leading-[1.1] mb-6"
          >
            Timeless Elegance,{' '}
            <span className="text-gold italic">Accessible</span> to All
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-silver text-lg leading-relaxed mb-8 max-w-lg"
          >
            Discover curated watches and fine jewelry crafted for every moment. 
            Luxury design meets honest pricing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/watches"
              className="inline-flex items-center gap-2 bg-gold text-midnight px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider uppercase hover:bg-gold-light transition-colors"
            >
              Shop Watches
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/jewelry"
              className="inline-flex items-center gap-2 border border-silver/30 text-warm-white px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider uppercase hover:border-gold hover:text-gold transition-colors"
            >
              Explore Jewelry
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-10 mt-14 pt-8 border-t border-silver/10"
          >
            {[
              { value: '50K+', label: 'Happy Customers' },
              { value: '200+', label: 'Curated Designs' },
              { value: '4.8', label: 'Average Rating' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="text-gold font-heading text-2xl sm:text-3xl">{stat.value}</p>
                <p className="text-silver-dark text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-silver/50"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
