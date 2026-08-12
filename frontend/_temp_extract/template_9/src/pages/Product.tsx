import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingBag, Heart, ChevronLeft, ChevronRight, Check, Truck, Shield, RefreshCw, Minus, Plus } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const product = products.find(p => p.id === id);
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-warm-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-midnight text-3xl mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-gold text-midnight px-6 py-3 rounded-lg font-bold text-sm"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const nextImage = () => setSelectedImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Breadcrumb */}
      <div className="bg-midnight-light border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-xs text-silver-dark">
            <button onClick={() => navigate('/')} className="hover:text-gold transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => navigate(product.category === 'watch' ? '/watches' : '/jewelry')} className="hover:text-gold transition-colors capitalize">
              {product.category === 'watch' ? 'Watches' : 'Jewelry'}
            </button>
            <span>/</span>
            <span className="text-gold">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <div>
            <div className="relative aspect-square bg-midnight/5 rounded-xl overflow-hidden mb-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-warm-white/90 rounded-full flex items-center justify-center text-midnight hover:bg-gold transition-colors shadow-lg"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-warm-white/90 rounded-full flex items-center justify-center text-midnight hover:bg-gold transition-colors shadow-lg"
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-gold' : 'border-transparent hover:border-silver/30'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">{product.metal}</p>
            <h1 className="font-heading text-midnight text-3xl sm:text-4xl mb-3">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-silver-dark'}
                  />
                ))}
              </div>
              <span className="text-silver-dark text-sm">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="text-midnight font-bold text-3xl mb-6">${product.price}</p>

            <p className="text-silver-dark leading-relaxed mb-8">{product.description}</p>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-midnight text-sm font-bold">Quantity</span>
              <div className="flex items-center border border-midnight/20 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-midnight hover:bg-midnight/5 transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-midnight font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-midnight hover:bg-midnight/5 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-sm tracking-wider uppercase transition-all duration-300 ${
                  added
                    ? 'bg-green-600 text-white'
                    : 'bg-gold text-midnight hover:bg-gold-light'
                }`}
              >
                {added ? (
                  <>
                    <Check size={18} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    Add to Cart
                  </>
                )}
              </button>
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`w-14 h-14 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                  wishlisted
                    ? 'border-red-400 bg-red-50 text-red-500'
                    : 'border-midnight/20 text-midnight hover:border-gold hover:text-gold'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart size={20} className={wishlisted ? 'fill-current' : ''} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 mb-10">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: Shield, label: '2-Year Warranty' },
                { icon: RefreshCw, label: '30-Day Returns' },
              ].map(badge => (
                <div key={badge.label} className="flex flex-col items-center gap-2 p-3 bg-warm-white-dark rounded-lg">
                  <badge.icon size={18} className="text-gold" />
                  <span className="text-midnight text-[10px] font-bold text-center">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Specs */}
            <div className="border-t border-midnight/10 pt-8">
              <h3 className="font-heading text-midnight text-lg mb-4">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center py-2.5 px-4 bg-warm-white-dark rounded-lg">
                    <span className="text-silver-dark text-xs">{spec.label}</span>
                    <span className="text-midnight text-xs font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-midnight/10">
            <h2 className="font-heading text-midnight text-2xl mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
