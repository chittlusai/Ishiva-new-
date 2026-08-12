import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { coupleSets } from '../data/products';

export default function CouplesSet() {
  return (
    <section className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart size={16} className="text-gold" />
            <p className="text-gold text-xs tracking-[0.3em] uppercase">Made for Two</p>
          </div>
          <h2 className="font-heading text-midnight text-4xl sm:text-5xl mb-4">Couple's Sets</h2>
          <p className="text-silver-dark max-w-lg mx-auto text-sm leading-relaxed">
            Beautifully matched pairs designed to celebrate your connection. 
            Save when you buy together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {coupleSets.map((set, i) => (
            <motion.div
              key={set.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-warm-white-dark rounded-xl overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={set.image}
                    alt={set.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 gold-frame-reveal" />
                  <div className="absolute top-4 right-4 bg-gold text-midnight text-xs font-bold px-3 py-1.5 rounded-full">
                    Save 15%
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-midnight text-xl mb-2">{set.name}</h3>
                  <p className="text-silver-dark text-sm mb-4 leading-relaxed">{set.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Heart size={14} className="text-gold" />
                    <p className="text-silver-dark text-xs">
                      Includes: {set.items.join(' + ')}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-silver-dark text-xs line-through">${Math.round(set.price / 0.85)}</p>
                      <p className="text-midnight font-bold text-xl">${set.price}</p>
                    </div>
                    <Link
                      to="/gift"
                      className="inline-flex items-center gap-2 bg-midnight text-warm-white px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase hover:bg-gold hover:text-midnight transition-colors"
                    >
                      View Set <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
