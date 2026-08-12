import type { Product } from '../data/products';
import ProductCard from './ProductCard';

interface BestsellersGridProps {
  products: Product[];
  selectedGoal: string | null;
  onAddToCart: (product: Product) => void;
}

export default function BestsellersGrid({ products, selectedGoal, onAddToCart }: BestsellersGridProps) {
  const filteredProducts = selectedGoal
    ? products.filter(p => p.goals.some(g => g.toLowerCase().replace(' ', '-') === selectedGoal))
    : products.filter(p => p.bestseller);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-['Nunito'] font-bold text-3xl sm:text-4xl text-[#333333]">
              {selectedGoal ? 'Recommended Products' : 'Bestsellers'}
            </h2>
            <p className="text-gray-600 mt-2">
              {selectedGoal 
                ? 'Products selected for your health goal' 
                : 'Our most loved products by customers'}
            </p>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
