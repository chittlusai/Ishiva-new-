import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="gold-frame-reveal bg-warm-white-dark rounded-lg overflow-hidden">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-midnight/5">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.isNew && (
                <span className="bg-gold text-midnight text-[10px] font-bold px-2.5 py-1 rounded tracking-wider uppercase">
                  New
                </span>
              )}
              {product.isBestseller && (
                <span className="bg-midnight text-gold text-[10px] font-bold px-2.5 py-1 rounded tracking-wider uppercase border border-gold/30">
                  Bestseller
                </span>
              )}
            </div>
            {/* Quick Add */}
            <button
              onClick={handleAddToCart}
              className="absolute bottom-3 right-3 w-10 h-10 bg-warm-white rounded-full flex items-center justify-center text-midnight opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-gold hover:text-midnight"
              aria-label="Add to cart"
            >
              <ShoppingBag size={18} />
            </button>
          </div>

          {/* Info */}
          <div className="p-4">
            <p className="text-silver-dark text-[10px] tracking-[0.15em] uppercase mb-1">{product.metal}</p>
            <h3 className="font-heading text-midnight text-base mb-1 group-hover:text-gold transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center gap-1.5 mb-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-silver-dark'}
                  />
                ))}
              </div>
              <span className="text-silver-dark text-xs">({product.reviewCount})</span>
            </div>
            <p className="text-midnight font-bold text-lg">${product.price}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
