import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, Sparkles } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-midnight rounded-2xl overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative px-8 py-14 sm:px-12 sm:py-16 lg:px-20 lg:py-20 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles size={18} className="text-gold" />
              <p className="text-gold text-xs tracking-[0.3em] uppercase">Stay in the Loop</p>
            </div>

            <h2 className="font-heading text-warm-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              Join the TimePiece Circle
            </h2>
            <p className="text-silver max-w-lg mx-auto mb-8 text-sm leading-relaxed">
              Be the first to know about new collections, exclusive offers, and styling inspiration. 
              Subscribers get 10% off their first order.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold px-6 py-3 rounded-lg"
              >
                <Check size={18} />
                <span className="text-sm font-bold">Welcome to the circle! Check your inbox.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-silver-dark" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-midnight-light border border-silver/20 rounded-lg pl-11 pr-4 py-3.5 text-warm-white placeholder-silver-dark focus:outline-none focus:border-gold transition-colors text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gold text-midnight px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider uppercase hover:bg-gold-light transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-silver-dark text-xs mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
