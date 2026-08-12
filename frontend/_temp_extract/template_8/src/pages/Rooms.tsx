import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Leaf, Filter, ChevronDown } from 'lucide-react';

const products = [
  { id: '1', name: 'Multi-Surface Spray', category: 'Kitchen', price: 8.99, image: '/images/product-spray.jpg', eco: true },
  { id: '2', name: 'Laundry Detergent', category: 'Laundry', price: 18.99, image: '/images/product-laundry.jpg', eco: true },
  { id: '3', name: 'Floor Cleaner Concentrate', category: 'Floor', price: 12.99, image: '/images/product-floor.jpg', eco: true },
  { id: '4', name: 'Glass & Window Spray', category: 'Glass', price: 7.99, image: '/images/product-glass.jpg', eco: true },
  { id: '5', name: 'Dish Soap', category: 'Kitchen', price: 6.99, image: '/images/product-spray.jpg', eco: true },
  { id: '6', name: 'Tub & Tile Cleaner', category: 'Bathroom', price: 9.99, image: '/images/product-spray.jpg', eco: true },
  { id: '7', name: 'Fabric Softener', category: 'Laundry', price: 14.99, image: '/images/product-laundry.jpg', eco: false },
  { id: '8', name: 'Hardwood Polish', category: 'Floor', price: 15.99, image: '/images/product-floor.jpg', eco: true },
];

const categories = ['All', 'Kitchen', 'Bathroom', 'Laundry', 'Floor', 'Glass'];

const Rooms = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ecoFilter, setEcoFilter] = useState(false);

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesEco = ecoFilter ? p.eco : true;
    return matchesCategory && matchesEco;
  });

  return (
    <div className="bg-light-grey min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-heading font-extrabold text-gray-900 mb-4">Shop by Room</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Find the perfect natural cleaning solutions tailored for every space in your home.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-6 font-heading font-bold text-lg border-b pb-4">
                <Filter className="w-5 h-5 text-teal-500" /> Filters
              </div>
              
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Rooms</h3>
                <ul className="space-y-2">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => setActiveCategory(cat)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          activeCategory === cat 
                            ? 'bg-teal-50 text-teal-600 font-medium' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Preferences</h3>
                <label className="flex items-center gap-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:border-lime-500 transition-colors">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox" 
                      className="sr-only"
                      checked={ecoFilter}
                      onChange={() => setEcoFilter(!ecoFilter)}
                    />
                    <div className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${
                      ecoFilter ? 'bg-lime-500 border-lime-500' : 'border-gray-300'
                    }`}>
                      {ecoFilter && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                  </div>
                  <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <Leaf className="w-4 h-4 text-lime-500" /> Eco/Natural Only
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-500">Showing {filteredProducts.length} products</p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                Sort by: <span className="font-medium flex items-center cursor-pointer">Featured <ChevronDown className="w-4 h-4 ml-1" /></span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm sparkle-card flex flex-col">
                  <Link to={`/product/${product.id}`} className="block relative aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50">
                    {product.eco && (
                      <span className="absolute top-3 left-3 bg-lime-100 text-lime-700 text-xs font-bold px-2 py-1 rounded-md z-10 flex items-center gap-1">
                        <Leaf className="w-3 h-3" /> Natural
                      </span>
                    )}
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
                  </Link>
                  <div className="flex-grow">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{product.category}</p>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1 hover:text-teal-500 transition-colors">{product.name}</h3>
                    </Link>
                    <p className="text-gray-900 font-semibold">${product.price.toFixed(2)}</p>
                  </div>
                  <button className="mt-4 w-full bg-white border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </button>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
                <Leaf className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters to see more results.</p>
                <button 
                  onClick={() => {setActiveCategory('All'); setEcoFilter(false);}}
                  className="mt-4 text-teal-500 font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;