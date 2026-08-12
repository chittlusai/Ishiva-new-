import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Gift } from 'lucide-react';
import { giftIdeas } from '../data/products';

export default function GiftingSection() {
  return (
    <section className="py-20 bg-midnight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Gift size={16} className="text-gold" />
              <p className="text-gold text-xs tracking-[0.3em] uppercase">Gift Guide</p>
            </div>
            <h2 className="font-heading text-warm-white text-4xl sm:text-5xl">The Perfect Gift</h2>
          </div>
          <p className="text-silver max-w-md text-sm leading-relaxed">
            Thoughtfully curated selections for every person and every occasion. 
            Because the best gifts come from the heart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {giftIdeas.map((gift, i) => (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to="/gift" className="group block relative rounded-xl overflow-hidden aspect-[4/5]">
                <img
                  src={gift.image}
                  alt={gift.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
                <div className="absolute inset-0 gold-frame-reveal" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading text-warm-white text-2xl mb-1">{gift.title}</h3>
                  <p className="text-silver text-sm mb-4">{gift.subtitle}</p>
                  <span className="inline-flex items-center gap-2 text-gold text-xs tracking-wider uppercase border border-gold/30 px-4 py-2 rounded-full group-hover:bg-gold group-hover:text-midnight transition-all duration-300">
                    View Ideas <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
