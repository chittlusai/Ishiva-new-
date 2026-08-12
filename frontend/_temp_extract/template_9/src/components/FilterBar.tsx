import { SlidersHorizontal, X } from 'lucide-react';
import { useState } from 'react';

interface FilterBarProps {
  activeFilters: {
    metal: string;
    price: string;
    occasion: string;
  };
  onFilterChange: (filters: { metal: string; price: string; occasion: string }) => void;
}

const metalOptions = ['All', 'Stainless Steel', 'Sterling Silver', 'Gold Plated', 'Rose Gold', 'Silver'];
const priceOptions = ['All', 'Under $50', '$50 - $100', '$100 - $150', '$150 - $200', 'Over $200'];
const occasionOptions = ['All', 'Daily Wear', 'Formal', 'Casual', 'Anniversary', 'Engagement', 'Gift', 'Party', 'Sports'];

export default function FilterBar({ activeFilters, onFilterChange }: FilterBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const hasActiveFilters = activeFilters.metal !== 'All' || activeFilters.price !== 'All' || activeFilters.occasion !== 'All';

  const clearFilters = () => {
    onFilterChange({ metal: 'All', price: 'All', occasion: 'All' });
  };

  const FilterGroup = ({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) => (
    <div className="space-y-2">
      <p className="text-silver-dark text-[10px] tracking-[0.2em] uppercase font-bold">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`px-3 py-1.5 rounded-full text-xs transition-all duration-300 ${
              value === opt
                ? 'bg-gold text-midnight font-bold'
                : 'bg-midnight/5 text-midnight hover:bg-gold/20'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="mb-8">
      {/* Mobile Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center gap-2 px-4 py-2.5 bg-midnight text-warm-white rounded-lg text-sm"
        >
          <SlidersHorizontal size={16} />
          Filters
          {hasActiveFilters && (
            <span className="w-5 h-5 bg-gold text-midnight text-[10px] font-bold rounded-full flex items-center justify-center">
              {[activeFilters.metal, activeFilters.price, activeFilters.occasion].filter(f => f !== 'All').length}
            </span>
          )}
        </button>
      </div>

      {/* Desktop Filters */}
      <div className={`${mobileOpen ? 'block' : 'hidden'} lg:block space-y-5 bg-warm-white-dark rounded-xl p-5 lg:p-6`}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading text-midnight text-lg">Filter By</h3>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-gold text-xs hover:text-gold-dark transition-colors"
            >
              <X size={14} />
              Clear All
            </button>
          )}
        </div>

        <FilterGroup
          label="Metal Type"
          options={metalOptions}
          value={activeFilters.metal}
          onChange={(metal) => onFilterChange({ ...activeFilters, metal })}
        />

        <div className="h-px bg-midnight/10" />

        <FilterGroup
          label="Price Range"
          options={priceOptions}
          value={activeFilters.price}
          onChange={(price) => onFilterChange({ ...activeFilters, price })}
        />

        <div className="h-px bg-midnight/10" />

        <FilterGroup
          label="Occasion"
          options={occasionOptions}
          value={activeFilters.occasion}
          onChange={(occasion) => onFilterChange({ ...activeFilters, occasion })}
        />
      </div>
    </div>
  );
}
