import { motion } from 'framer-motion';
import { Gift as GiftIcon, Heart, ArrowRight, Sparkles, Package, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { giftIdeas, coupleSets } from '../data/products';

export default function Gift() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <div className="bg-midnight py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GiftIcon size={24} className="text-gold" />
            <p className="text-gold text-xs tracking-[0.3em] uppercase">Gift Guide</p>
          </div>
          <h1 className="font-heading text-warm-white text-4xl sm:text-5xl lg:text-6xl mb-4">
            Gifts That Matter
          </h1>
          <p className="text-silver max-w-xl mx-auto text-sm leading-relaxed">
            Finding the perfect gift should feel as special as giving it. Explore our curated collections 
            for every person, every occasion, and every budget.
          </p>
        </div>
      </div>

      {/* Gift Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">Browse By Recipient</p>
            <h2 className="font-heading text-midnight text-3xl sm:text-4xl">Who Are You Shopping For?</h2>
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
                <Link to="/jewelry" className="group block relative rounded-xl overflow-hidden aspect-[4/5]">
                  <img
                    src={gift.image}
                    alt={gift.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
                  <div className="absolute inset-0 gold-frame-reveal" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading text-warm-white text-2xl mb-1">{gift.title}</h3>
                    <p className="text-silver text-sm mb-4">{gift.subtitle}</p>
                    <span className="inline-flex items-center gap-2 text-gold text-xs tracking-wider uppercase border border-gold/30 px-4 py-2 rounded-full group-hover:bg-gold group-hover:text-midnight transition-all duration-300">
                      Explore <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Couple Sets */}
      <section className="py-16 bg-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Heart size={18} className="text-gold" />
              <p className="text-gold text-xs tracking-[0.3em] uppercase">Made for Two</p>
            </div>
            <h2 className="font-heading text-warm-white text-3xl sm:text-4xl mb-4">Couple's Gift Sets</h2>
            <p className="text-silver max-w-lg mx-auto text-sm">
              Beautifully matched pairs at a special price. The perfect way to celebrate your bond.
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
                className="bg-midnight-light rounded-xl overflow-hidden border border-gold/10"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={set.image}
                    alt={set.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-midnight text-xs font-bold px-3 py-1.5 rounded-full">
                    Save 15%
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-warm-white text-xl mb-2">{set.name}</h3>
                  <p className="text-silver text-sm mb-4">{set.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Package size={14} className="text-gold" />
                    <p className="text-silver-dark text-xs">{set.items.join(' + ')}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-silver-dark text-xs line-through">${Math.round(set.price / 0.85)}</p>
                      <p className="text-gold font-bold text-xl">${set.price}</p>
                    </div>
                    <Link
                      to="/watches"
                      className="inline-flex items-center gap-2 bg-gold text-midnight px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase hover:bg-gold-light transition-colors"
                    >
                      Shop Set <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles size={18} className="text-gold" />
              <p className="text-gold text-xs tracking-[0.3em] uppercase">Our Services</p>
            </div>
            <h2 className="font-heading text-midnight text-3xl sm:text-4xl">The TimePiece Gift Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: 'Premium Gift Box',
                desc: 'Every order arrives in our signature midnight blue box with gold foil detailing. No extra wrapping needed.'
              },
              {
                icon: MessageCircle,
                title: 'Personalized Message',
                desc: 'Add a handwritten note card to your gift. We\'ll write your message in elegant calligraphy on premium paper.'
              },
              {
                icon: Sparkles,
                title: 'Gift Consultation',
                desc: 'Not sure what to pick? Our team offers free virtual consultations to help you find the perfect piece.'
              }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-warm-white-dark rounded-xl"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <service.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-heading text-midnight text-xl mb-3">{service.title}</h3>
                <p className="text-silver-dark text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
