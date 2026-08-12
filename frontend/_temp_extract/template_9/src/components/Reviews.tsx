import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { reviews } from '../data/products';

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-20 bg-midnight-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Testimonials</p>
          <h2 className="font-heading text-warm-white text-4xl sm:text-5xl">What Our Customers Say</h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-midnight rounded-2xl p-8 sm:p-12 border border-gold/10"
            >
              <Quote size={32} className="text-gold/30 mb-6" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < reviews[current].rating ? 'text-gold fill-gold' : 'text-silver-dark'}
                  />
                ))}
              </div>

              <p className="text-warm-white text-lg sm:text-xl leading-relaxed mb-8 font-light">
                "{reviews[current].text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-warm-white font-bold text-sm">{reviews[current].name}</p>
                  <p className="text-silver-dark text-xs mt-0.5">
                    Purchased: {reviews[current].product} &middot; {reviews[current].date}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-silver/20 flex items-center justify-center text-silver hover:border-gold hover:text-gold transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-gold w-6' : 'bg-silver/30 hover:bg-silver/50'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-silver/20 flex items-center justify-center text-silver hover:border-gold hover:text-gold transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
