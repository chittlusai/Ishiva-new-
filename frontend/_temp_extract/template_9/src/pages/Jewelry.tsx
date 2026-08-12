import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Gem } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';

export default function Jewelry() {
  const [filters, setFilters] = useState({ metal: 'All', price: 'All', occasion: 'All' });
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const jewelryCategories = ['All', 'Ring', 'Necklace', 'Bracelet', 'Earring'];

  const jewelry = products.filter(p => p.category !== 'watch');

  const filteredJewelry = useMemo(() => {
    return jewelry.filter(product => {
      if (activeCategory !== 'All' && product.category !== activeCategory.toLowerCase()) return false;
      if (filters.metal !== 'All' && product.metal !== filters.metal) return false;
      if (filters.occasion !== 'All' && product.occasion !== filters.occasion) return false;
      if (filters.price !== 'All') {
        const price = product.price;
        switch (filters.price) {
          case 'Under $50': return price < 50;
          case '$50 - $100': return price >= 50 && price <= 100;
          case '$100 - $150': return price > 100 && price <= 150;
          case '$150 - $200': return price > 150 && price <= 200;
          case 'Over $200': return price > 200;
        }
      }
      return true;
    });
  }, [jewelry, activeCategory, filters]);

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <div className="bg-midnight py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gem size={20} className="text-gold" />
            <p className="text-gold text-xs tracking-[0.3em] uppercase">Collection</p>
          </div>
          <h1 className="font-heading text-warm-white text-4xl sm:text-5xl lg:text-6xl mb-4">
            Jewelry
          </h1>
          <p className="text-silver max-w-lg mx-auto text-sm leading-relaxed">
            Exquisite rings, necklaces, bracelets, and earrings designed to complement every moment. 
            Fine craftsmanship at honest prices.
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-midnight-light border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide py-3">
            {jewelryCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gold text-midnight font-bold'
                    : 'text-silver hover:text-gold hover:bg-gold/10'
                }`}
              >
                {cat === 'All' ? 'All Jewelry' : cat + 's'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 shrink-0">
            <FilterBar activeFilters={filters} onFilterChange={setFilters} />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-silver-dark text-sm">
                Showing <span className="text-midnight font-bold">{filteredJewelry.length}</span> pieces
              </p>
            </div>

            {filteredJewelry.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredJewelry.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Gem size={48} className="text-silver-dark mx-auto mb-4" />
                <h3 className="font-heading text-midnight text-xl mb-2">No jewelry found</h3>
                <p className="text-silver-dark text-sm">Try adjusting your filters to see more results.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
