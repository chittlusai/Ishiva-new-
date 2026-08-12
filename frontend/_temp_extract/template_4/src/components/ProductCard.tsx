import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group card-shine bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.bestseller && (
            <span className="bg-[#00BCD4] text-white text-xs font-bold px-3 py-1 rounded-full">
              Bestseller
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-[#76C442] text-white text-xs font-bold px-3 py-1 rounded-full">
              Sale
            </span>
          )}
        </div>

        {/* Doctor Recommended */}
        {product.doctorRecommended && (
          <div className="absolute top-4 right-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-md" title="Doctor Recommended">
              <Award className="w-5 h-5 text-[#00BCD4]" />
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#00BCD4] transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-['Nunito'] font-bold text-lg text-[#333333] mb-2 hover:text-[#00BCD4] transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">{product.rating}</span>
          <span className="text-sm text-gray-400">({product.reviews})</span>
        </div>

        {/* Goals Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.goals.map((goal) => (
            <span
              key={goal}
              className="text-xs font-medium text-[#00BCD4] bg-[#00BCD4]/10 px-2 py-1 rounded-full"
            >
              {goal}
            </span>
          ))}
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-['Nunito'] font-bold text-2xl text-[#333333]">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="w-12 h-12 bg-gradient-to-br from-[#00BCD4] to-[#76C442] rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:scale-105 transition-all"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
