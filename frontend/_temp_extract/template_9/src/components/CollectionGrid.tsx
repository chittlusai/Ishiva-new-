import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    title: 'Watches',
    count: 24,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=700&fit=crop',
    link: '/watches',
    description: 'Precision timepieces for every wrist'
  },
  {
    title: 'Rings',
    count: 18,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=700&fit=crop',
    link: '/jewelry',
    description: 'Symbols of commitment and style'
  },
  {
    title: 'Necklaces',
    count: 15,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=700&fit=crop',
    link: '/jewelry',
    description: 'Elegant chains and pendants'
  },
  {
    title: 'Bracelets',
    count: 12,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=700&fit=crop',
    link: '/jewelry',
    description: 'Wristwear that makes a statement'
  },
  {
    title: 'Earrings',
    count: 20,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=700&fit=crop',
    link: '/jewelry',
    description: 'Sparkle for every occasion'
  }
];

export default function CollectionGrid() {
  return (
    <section className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Explore</p>
          <h2 className="font-heading text-midnight text-4xl sm:text-5xl">Our Collections</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {collections.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link to={col.link} className="group block relative rounded-xl overflow-hidden aspect-[3/4]">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent" />
                
                <div className="absolute inset-0 gold-frame-reveal" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                  <p className="text-gold text-[10px] tracking-[0.2em] uppercase mb-1">{col.count} Designs</p>
                  <h3 className="font-heading text-warm-white text-xl lg:text-2xl mb-1">{col.title}</h3>
                  <p className="text-silver text-xs hidden lg:block mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {col.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-gold text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore <ArrowRight size={12} />
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
