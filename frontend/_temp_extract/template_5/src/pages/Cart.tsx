import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';

export default function Cart() {
  return (
    <div className="min-h-screen bg-dark-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-black text-white mb-8 uppercase">Your Arsenal</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-grow">
            <div className="bg-dark-grey border border-gray-800 rounded-sm">
              <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-gray-800 text-sm font-heading uppercase text-gray-400 tracking-wider">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              {/* Item 1 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 border-b border-gray-800 items-center">
                <div className="col-span-1 md:col-span-6 flex items-center gap-6">
                  <button className="text-gray-500 hover:text-red-500 transition-colors">
                    <Trash2 className="h-5 w-5" />
                  </button>
                  <img src="/product-protein.jpg" alt="Titan Whey" className="w-20 h-20 object-contain bg-black/50 p-2" />
                  <div>
                    <h3 className="text-white font-bold font-heading text-lg uppercase">Titan Whey Isolate</h3>
                    <p className="text-neon-orange text-sm">Chocolate Double Rich</p>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2 text-center text-gray-300 font-bold hidden md:block">
                  $49.99
                </div>
                <div className="col-span-1 md:col-span-2 flex justify-center">
                  <div className="flex items-center border border-gray-700 bg-dark-bg">
                    <button className="p-2 text-gray-400 hover:text-white transition-colors"><Minus className="h-4 w-4" /></button>
                    <span className="w-8 text-center text-white font-bold text-sm">2</span>
                    <button className="p-2 text-gray-400 hover:text-white transition-colors"><Plus className="h-4 w-4" /></button>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2 text-right text-white font-bold text-lg">
                  $99.98
                </div>
              </div>

              {/* Item 2 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center">
                <div className="col-span-1 md:col-span-6 flex items-center gap-6">
                  <button className="text-gray-500 hover:text-red-500 transition-colors">
                    <Trash2 className="h-5 w-5" />
                  </button>
                  <img src="/product-preworkout.jpg" alt="Surge Pre" className="w-20 h-20 object-contain bg-black/50 p-2" />
                  <div>
                    <h3 className="text-white font-bold font-heading text-lg uppercase">Surge Pre-Workout</h3>
                    <p className="text-neon-orange text-sm">Fruit Punch</p>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2 text-center text-gray-300 font-bold hidden md:block">
                  $34.99
                </div>
                <div className="col-span-1 md:col-span-2 flex justify-center">
                  <div className="flex items-center border border-gray-700 bg-dark-bg">
                    <button className="p-2 text-gray-400 hover:text-white transition-colors"><Minus className="h-4 w-4" /></button>
                    <span className="w-8 text-center text-white font-bold text-sm">1</span>
                    <button className="p-2 text-gray-400 hover:text-white transition-colors"><Plus className="h-4 w-4" /></button>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2 text-right text-white font-bold text-lg">
                  $34.99
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96">
            <div className="bg-dark-grey border border-gray-800 p-8 rounded-sm">
              <h2 className="text-2xl font-heading font-bold text-white mb-6 uppercase border-b border-gray-800 pb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white font-bold">$134.97</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span className="text-neon-orange font-bold uppercase text-sm">Free</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Tax</span>
                  <span className="text-white font-bold">$10.80</span>
                </div>
              </div>
              
              <div className="border-t border-gray-800 pt-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-white font-heading text-xl uppercase tracking-wider">Total</span>
                  <span className="text-white font-bold text-3xl">$145.77</span>
                </div>
              </div>
              
              <button className="w-full bg-neon-orange hover:bg-orange-600 text-white font-heading text-xl uppercase font-bold tracking-wider py-4 flex items-center justify-center gap-2 transition-colors mb-4">
                Checkout <ArrowRight className="h-5 w-5" />
              </button>
              
              <Link to="/" className="block text-center text-gray-400 hover:text-white transition-colors uppercase text-sm font-bold tracking-wider">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
