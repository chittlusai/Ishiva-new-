import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, Minus, Plus, ChevronRight, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import SupplementFacts from '../components/SupplementFacts';
import DoctorBadge from '../components/DoctorBadge';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import type { Product } from '../data/products';

interface ProductDetailPageProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductDetailPage({ onAddToCart }: ProductDetailPageProps) {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-['Nunito'] font-bold text-2xl text-[#333333] mb-4">Product not found</h1>
          <Link to="/product" className="text-[#00BCD4] font-semibold hover:underline">
            Browse all products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== id && p.goals.some(g => product.goals.includes(g))).slice(0, 4);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BCD4]">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/product" className="text-gray-500 hover:text-[#00BCD4]">Products</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-[#333333] font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-3xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.bestseller && (
                  <span className="bg-[#00BCD4] text-white text-sm font-bold px-4 py-2 rounded-full">
                    Bestseller
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-[#76C442] text-white text-sm font-bold px-4 py-2 rounded-full">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {/* Doctor Badge */}
              {product.doctorRecommended && (
                <div className="inline-flex items-center gap-2 bg-[#00BCD4]/10 text-[#00BCD4] px-4 py-2 rounded-full mb-4">
                  <Award className="w-4 h-4" />
                  <span className="font-['Nunito'] font-semibold text-sm">Doctor Recommended</span>
                </div>
              )}

              <h1 className="font-['Nunito'] font-black text-3xl sm:text-4xl text-[#333333] mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-[#333333]">{product.rating}</span>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-['Nunito'] font-black text-4xl text-[#333333]">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Goals */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.goals.map((goal) => (
                  <span
                    key={goal}
                    className="text-sm font-medium text-[#00BCD4] bg-[#00BCD4]/10 px-3 py-1 rounded-full"
                  >
                    {goal}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center bg-gray-100 rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-200 rounded-l-xl transition-colors"
                  >
                    <Minus className="w-5 h-5 text-gray-600" />
                  </button>
                  <span className="px-6 py-3 font-semibold text-[#333333] min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-200 rounded-r-xl transition-colors"
                  >
                    <Plus className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 btn-gradient px-8 py-4 rounded-xl font-['Nunito'] font-bold text-white inline-flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>

                <button className="p-4 border-2 border-gray-200 rounded-xl hover:border-[#00BCD4] transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Truck className="w-6 h-6 text-[#00BCD4]" />
                  <div>
                    <p className="font-semibold text-sm text-[#333333]">Free Shipping</p>
                    <p className="text-xs text-gray-500">Orders $50+</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Shield className="w-6 h-6 text-[#76C442]" />
                  <div>
                    <p className="font-semibold text-sm text-[#333333]">Lab Tested</p>
                    <p className="text-xs text-gray-500">Quality assured</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <RotateCcw className="w-6 h-6 text-[#00BCD4]" />
                  <div>
                    <p className="font-semibold text-sm text-[#333333]">Easy Returns</p>
                    <p className="text-xs text-gray-500">30-day policy</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Headers */}
          <div className="flex gap-4 border-b border-gray-200 mb-8">
            {['description', 'facts', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-4 font-['Nunito'] font-semibold capitalize transition-colors relative ${
                  activeTab === tab
                    ? 'text-[#00BCD4]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'facts' ? 'Supplement Facts' : tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00BCD4]" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-8">
            {activeTab === 'description' && (
              <div>
                <h3 className="font-['Nunito'] font-bold text-xl text-[#333333] mb-4">
                  Product Description
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>
                {product.doctorRecommended && <DoctorBadge />}
              </div>
            )}

            {activeTab === 'facts' && (
              <div className="max-w-xl">
                <SupplementFacts product={product} />
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-center">
                    <p className="font-['Nunito'] font-black text-5xl text-[#333333]">{product.rating}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{product.reviews} reviews</p>
                  </div>
                </div>
                <p className="text-gray-500 text-center py-8">
                  Customer reviews coming soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-['Nunito'] font-bold text-2xl text-[#333333] mb-8">
              You May Also Like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} onAddToCart={(prod) => onAddToCart(prod, 1)} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
