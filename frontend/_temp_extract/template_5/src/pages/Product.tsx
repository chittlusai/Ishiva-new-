import { useState } from 'react';
import { Star, Shield, Zap, Check, ShoppingCart, Minus, Plus } from 'lucide-react';

export default function Product() {
  const [quantity, setQuantity] = useState(1);
  const [selectedFlavor, setSelectedFlavor] = useState('Chocolate Double Rich');

  const flavors = ['Chocolate Double Rich', 'Vanilla Ice Cream', 'Strawberry Smash', 'Cookies & Cream'];

  return (
    <div className="min-h-screen bg-dark-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8 font-heading uppercase tracking-wider">
          <span>Home</span>
          <span>/</span>
          <span>Muscle Gain</span>
          <span>/</span>
          <span className="text-neon-orange">Titan Whey Isolate</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Product Image */}
          <div className="bg-dark-grey p-12 flex items-center justify-center relative hover-energy-border">
            <div className="absolute top-6 left-6 bg-neon-orange text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
              #1 Bestseller
            </div>
            <img 
              src="/product-protein.jpg" 
              alt="Titan Whey Isolate" 
              className="w-full max-w-md object-contain drop-shadow-2xl"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-4 uppercase">
              TITAN WHEY ISOLATE
            </h1>
            
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-dark-grey">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < 4 ? 'fill-neon-orange text-neon-orange' : 'fill-neon-orange/50 text-neon-orange/50'}`} />
                ))}
              </div>
              <span className="text-white font-bold">4.9</span>
              <span className="text-gray-400 underline cursor-pointer">1,248 Reviews</span>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$49.99</span>
              <span className="text-gray-400 ml-2">/ 2lbs (28 servings)</span>
            </div>

            <p className="text-gray-300 mb-8 text-lg">
              Ultra-pure, fast-absorbing whey protein isolate engineered to trigger explosive muscle growth and rapid recovery. Zero fillers, zero amino spiking.
            </p>

            {/* Key Benefits */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-white">
                <Check className="h-5 w-5 text-neon-orange" />
                <span className="font-bold">25g</span> Pure Isolate Protein per scoop
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check className="h-5 w-5 text-neon-orange" />
                <span className="font-bold">5.5g</span> BCAAs for recovery
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check className="h-5 w-5 text-neon-orange" />
                Zero Sugar, Low Carb
              </li>
            </ul>

            {/* Flavor Selection */}
            <div className="mb-8">
              <div className="flex justify-between mb-3">
                <span className="text-white font-heading uppercase tracking-wider">Flavor</span>
                <span className="text-neon-orange font-bold">{selectedFlavor}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {flavors.map(flavor => (
                  <button
                    key={flavor}
                    onClick={() => setSelectedFlavor(flavor)}
                    className={`py-3 px-4 border ${
                      selectedFlavor === flavor 
                        ? 'border-neon-orange bg-neon-orange/10 text-white' 
                        : 'border-dark-grey text-gray-400 hover:border-gray-500 hover:text-white'
                    } transition-colors text-sm font-bold`}
                  >
                    {flavor}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-dark-grey bg-dark-bg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 text-gray-400 hover:text-white hover:bg-dark-grey transition-colors"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="w-12 text-center text-white font-bold text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 text-gray-400 hover:text-white hover:bg-dark-grey transition-colors"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <button className="flex-1 bg-neon-orange hover:bg-orange-600 text-white font-heading text-xl uppercase font-bold tracking-wider flex items-center justify-center gap-2 transition-colors">
                <ShoppingCart className="h-6 w-6" /> Add To Cart
              </button>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-6 py-6 border-t border-dark-grey">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Shield className="h-5 w-5 text-neon-orange" />
                <span>Lab Tested</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Zap className="h-5 w-5 text-neon-orange" />
                <span>Fast Shipping</span>
              </div>
            </div>
          </div>
        </div>

        {/* Supplement Facts */}
        <div className="border border-dark-grey bg-black p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-black text-white uppercase mb-2">Supplement Facts</h2>
            <p className="text-neon-orange font-bold uppercase tracking-widest">Full Transparency Label</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="font-body">
              <div className="border-b-8 border-white pb-2 mb-2">
                <p className="text-white font-bold text-xl">Serving Size: 1 Scoop (32g)</p>
                <p className="text-white font-bold text-xl">Servings Per Container: 28</p>
              </div>
              
              <div className="border-b-4 border-white py-2 mb-2 flex justify-between">
                <span className="text-white font-bold text-lg">Amount Per Serving</span>
                <span className="text-white font-bold text-lg">% Daily Value*</span>
              </div>
              
              <div className="border-b border-gray-600 py-2 flex justify-between">
                <span className="text-white font-bold">Calories</span>
                <span className="text-white font-bold">110</span>
              </div>
              
              <div className="border-b border-gray-600 py-2 flex justify-between">
                <span className="text-white font-bold">Total Fat</span>
                <span className="text-white">0.5g <span className="ml-4 font-bold">1%</span></span>
              </div>
              
              <div className="border-b border-gray-600 py-2 flex justify-between pl-4">
                <span className="text-gray-300">Saturated Fat</span>
                <span className="text-white">0g <span className="ml-4 font-bold">0%</span></span>
              </div>
              
              <div className="border-b border-gray-600 py-2 flex justify-between">
                <span className="text-white font-bold">Cholesterol</span>
                <span className="text-white">5mg <span className="ml-4 font-bold">2%</span></span>
              </div>
              
              <div className="border-b border-gray-600 py-2 flex justify-between">
                <span className="text-white font-bold">Total Carbohydrate</span>
                <span className="text-white">1g <span className="ml-4 font-bold">&lt;1%</span></span>
              </div>
              
              <div className="border-b-8 border-white py-2 flex justify-between">
                <span className="text-white font-bold text-xl">Protein</span>
                <span className="text-white font-bold text-xl">25g <span className="ml-4">50%</span></span>
              </div>
              
              <p className="text-gray-400 text-sm mt-4">
                * Percent Daily Values are based on a 2,000 calorie diet.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-heading font-bold text-white uppercase mb-6 border-b border-dark-grey pb-4">Typical Amino Acid Profile</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <div className="flex justify-between border-b border-gray-800 py-1">
                  <span className="text-gray-300">Alanine</span>
                  <span className="text-white font-bold">1180mg</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 py-1">
                  <span className="text-gray-300">Arginine</span>
                  <span className="text-white font-bold">505mg</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 py-1">
                  <span className="text-gray-300">Aspartic Acid</span>
                  <span className="text-white font-bold">2508mg</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 py-1">
                  <span className="text-gray-300">Cystine</span>
                  <span className="text-white font-bold">494mg</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 py-1">
                  <span className="text-neon-orange font-bold">Leucine (BCAA)</span>
                  <span className="text-white font-bold">2531mg</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 py-1">
                  <span className="text-neon-orange font-bold">Isoleucine (BCAA)</span>
                  <span className="text-white font-bold">1573mg</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 py-1">
                  <span className="text-neon-orange font-bold">Valine (BCAA)</span>
                  <span className="text-white font-bold">1422mg</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 py-1">
                  <span className="text-gray-300">Glutamine</span>
                  <span className="text-white font-bold">4082mg</span>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-dark-grey border-l-4 border-neon-orange">
                <h4 className="text-white font-bold mb-2 uppercase">Ingredients</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Whey Protein Isolate, Cocoa (Processed with Alkali), Natural and Artificial Flavors, Lecithin, Salt, Cellulose Gum, Sucralose, Acesulfame Potassium.
                  <br /><br />
                  <strong className="text-white">Allergen Warning:</strong> Contains Milk and Soy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
