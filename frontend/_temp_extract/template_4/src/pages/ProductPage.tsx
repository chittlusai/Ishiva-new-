import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, ChevronDown, Grid, List } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import type { Product } from '../data/products';

interface ProductPageProps {
  onAddToCart: (product: Product) => void;
}

export default function ProductPage({ onAddToCart }: ProductPageProps) {
  const [searchParams] = useSearchParams();
  const goalParam = searchParams.get('goal');
  const [selectedGoal, setSelectedGoal] = useState<string | null>(goalParam);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    if (goalParam) {
      setSelectedGoal(goalParam);
    }
  }, [goalParam]);

  const filteredProducts = selectedGoal
    ? products.filter(p => p.goals.some(g => g.toLowerCase().replace(' ', '-') === selectedGoal))
    : products;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const goals = [
    { id: null, name: 'All Products' },
    { id: 'weight-loss', name: 'Weight Loss' },
    { id: 'muscle', name: 'Muscle' },
    { id: 'energy', name: 'Energy' },
    { id: 'immunity', name: 'Immunity' },
    { id: 'sleep', name: 'Sleep' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-['Nunito'] font-black text-4xl sm:text-5xl text-[#333333] mb-4">
              Our Products
            </h1>
            <p className="text-gray-600 text-lg">
              Premium supplements crafted with science-backed ingredients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Goal Filters */}
              <div className="flex flex-wrap items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                {goals.map((goal) => (
                  <button
                    key={goal.id ?? 'all'}
                    onClick={() => setSelectedGoal(goal.id)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      selectedGoal === goal.id
                        ? 'bg-[#333333] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {goal.name}
                  </button>
                ))}
              </div>

              {/* Sort & View */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-gray-100 border-0 rounded-lg px-4 py-2 pr-10 font-medium text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00BCD4]"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                <div className="hidden sm:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                  >
                    <Grid className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                  >
                    <List className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {sortedProducts.length > 0 ? (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-4">No products found for this category.</p>
              <button
                onClick={() => setSelectedGoal(null)}
                className="text-[#00BCD4] font-semibold hover:underline"
              >
                View all products
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
