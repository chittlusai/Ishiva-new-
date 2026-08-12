import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Leaf, ShieldCheck, CheckCircle2, Star, Truck, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [purchaseType, setPurchaseType] = useState('one-time'); // 'one-time' or 'subscribe'

  // Mock product data based on ID
  const product = {
    id: id || '1',
    name: 'Multi-Surface Cleaning Spray',
    price: 8.99,
    rating: 4.8,
    reviews: 124,
    description: 'Our plant-powered Multi-Surface Spray cuts through grease and grime without leaving behind harsh chemical fumes or residue. Safe for use on countertops, sealed wood, glass, and tile.',
    image: '/images/product-spray.jpg',
    ingredients: ['Water (Aqua)', 'Decyl Glucoside (Plant-derived cleanser)', 'Sodium Citrate (Plant-derived water softener)', 'Citric Acid (Plant-derived pH adjuster)', 'Essential Oil Blend (Natural fragrance)'],
    certifications: ['Cruelty-Free', 'EPA Safer Choice', '100% Recycled Plastic Bottle'],
    volume: '16 fl oz (473 mL)'
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-sm text-gray-500">
          <Link to="/rooms" className="hover:text-teal-500 flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back to Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Product Image */}
          <div className="lg:w-1/2">
            <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-center aspect-square relative">
              <span className="absolute top-6 left-6 bg-lime-100 text-lime-700 text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Leaf className="w-4 h-4" /> 100% Natural
              </span>
              <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain mix-blend-multiply drop-shadow-2xl" />
            </div>
            
            {/* Combo Deals Banner */}
            <div className="mt-6 bg-teal-50 border border-teal-100 rounded-2xl p-6">
              <h4 className="font-heading font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-xl">✨</span> Complete the Set & Save 15%
              </h4>
              <p className="text-sm text-gray-600 mb-4">Add the Glass Cleaner and Floor Concentrate to get the Kitchen Essentials Bundle.</p>
              <button className="text-teal-600 font-semibold text-sm hover:underline">View Bundle Offers</button>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 flex flex-col">
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                ))}
              </div>
              <span className="text-sm text-gray-500">{product.rating} ({product.reviews} reviews)</span>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-500">{product.volume}</span>
            </div>

            <p className="text-gray-600 text-lg mb-8">{product.description}</p>

            {/* Purchase Options */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
              <div 
                className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer mb-4 transition-colors ${purchaseType === 'one-time' ? 'border-teal-500 bg-white' : 'border-transparent hover:bg-gray-100'}`}
                onClick={() => setPurchaseType('one-time')}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${purchaseType === 'one-time' ? 'border-teal-500' : 'border-gray-300'}`}>
                    {purchaseType === 'one-time' && <div className="w-2.5 h-2.5 bg-teal-500 rounded-full"></div>}
                  </div>
                  <span className="font-semibold text-gray-900">One-time purchase</span>
                </div>
                <span className="font-bold text-lg">${product.price}</span>
              </div>

              <div 
                className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors ${purchaseType === 'subscribe' ? 'border-teal-500 bg-white' : 'border-transparent hover:bg-gray-100'}`}
                onClick={() => setPurchaseType('subscribe')}
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${purchaseType === 'subscribe' ? 'border-teal-500' : 'border-gray-300'}`}>
                      {purchaseType === 'subscribe' && <div className="w-2.5 h-2.5 bg-teal-500 rounded-full"></div>}
                    </div>
                    <span className="font-semibold text-gray-900">Subscribe & Save 15%</span>
                  </div>
                  <p className="text-sm text-gray-500 ml-8">Delivery every 1, 2, or 3 months. Cancel anytime.</p>
                </div>
                <span className="font-bold text-lg text-teal-600">${(product.price * 0.85).toFixed(2)}</span>
              </div>

              {purchaseType === 'subscribe' && (
                <div className="mt-4 ml-8">
                  <select className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5">
                    <option>Deliver every 1 month</option>
                    <option>Deliver every 2 months</option>
                    <option>Deliver every 3 months</option>
                  </select>
                </div>
              )}
            </div>

            {/* Add to Cart Actions */}
            <div className="flex gap-4 mb-10">
              <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                <button 
                  className="px-4 py-3 text-gray-600 hover:text-teal-500 font-bold"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >-</button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <button 
                  className="px-4 py-3 text-gray-600 hover:text-teal-500 font-bold"
                  onClick={() => setQuantity(quantity + 1)}
                >+</button>
              </div>
              <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 text-lg">
                <ShoppingCart className="w-5 h-5" /> 
                {purchaseType === 'subscribe' ? 'Start Subscription' : 'Add to Cart'}
              </button>
            </div>

            {/* Perks */}
            <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-8">
              <div className="flex items-start gap-3">
                <Truck className="w-6 h-6 text-teal-500 shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm text-gray-900">Free Shipping</h5>
                  <p className="text-xs text-gray-500">On orders over $35</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-lime-500 shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm text-gray-900">Satisfaction Guarantee</h5>
                  <p className="text-xs text-gray-500">Love it or your money back</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Info Tabs */}
        <div className="mt-20 border-t border-gray-200 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Ingredients Disclosure */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Leaf className="w-6 h-6 text-lime-500" /> Full Ingredient Disclosure
              </h3>
              <p className="text-gray-600 mb-6">We believe you have the right to know exactly what you're bringing into your home. No hidden chemicals, no vague "fragrance" terms.</p>
              <ul className="space-y-3">
                {product.ingredients.map((ing, idx) => {
                  const [name, desc] = ing.split(' (');
                  return (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                      <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-900">{name}</span>
                        {desc && <span className="text-gray-500 text-sm block">({desc}</span>}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Safety & Certs */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-teal-500" /> Safety & Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.certifications.map((cert, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-3">
                      <ShieldCheck className="w-6 h-6 text-teal-500" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-lime-50 rounded-xl p-6 border border-lime-100">
                <h4 className="font-heading font-bold text-lime-800 mb-2">Formulated Without:</h4>
                <p className="text-sm text-lime-700">Parabens, Phthalates, Triclosan, Ammonia, Formaldehyde, Artificial Colors, Synthetic Fragrances.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;