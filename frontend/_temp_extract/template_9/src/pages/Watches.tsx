import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Watch } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';

export default function Watches() {
  const [filters, setFilters] = useState({ metal: 'All', price: 'All', occasion: 'All' });

  const watches = products.filter(p => p.category === 'watch');

  const filteredWatches = useMemo(() => {
    return watches.filter(product => {
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
  }, [watches, filters]);

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <div className="bg-midnight py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Watch size={20} className="text-gold" />
            <p className="text-gold text-xs tracking-[0.3em] uppercase">Collection</p>
          </div>
          <h1 className="font-heading text-warm-white text-4xl sm:text-5xl lg:text-6xl mb-4">
            Watches
          </h1>
          <p className="text-silver max-w-lg mx-auto text-sm leading-relaxed">
            Precision timepieces crafted with care. From everyday elegance to statement chronographs, 
            find the watch that tells your story.
          </p>
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
                Showing <span className="text-midnight font-bold">{filteredWatches.length}</span> watches
              </p>
            </div>

            {filteredWatches.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredWatches.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Watch size={48} className="text-silver-dark mx-auto mb-4" />
                <h3 className="font-heading text-midnight text-xl mb-2">No watches found</h3>
                <p className="text-silver-dark text-sm">Try adjusting your filters to see more results.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
