import { useState } from 'react';
import { Plus, Check, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Stack() {
  const [selectedStack, setSelectedStack] = useState('shred');

  const stacks = {
    shred: {
      name: 'THE SHRED STACK',
      desc: 'Maximum fat loss while preserving lean muscle mass.',
      price: 99.99,
      originalPrice: 124.97,
      savings: '20%',
      products: [
        { name: 'Titan Whey Isolate', role: 'Muscle Preservation', image: '/product-protein.jpg' },
        { name: 'Thermo Burn', role: 'Metabolism Booster', image: '/product-preworkout.jpg' },
        { name: 'L-Carnitine Liquid', role: 'Fat Mobilization', image: '/product-protein.jpg' }
      ]
    },
    bulk: {
      name: 'THE MASS STACK',
      desc: 'Everything you need to pack on serious size and strength.',
      price: 109.99,
      originalPrice: 139.97,
      savings: '21%',
      products: [
        { name: 'Mass Builder Pro', role: 'Caloric Surplus', image: '/product-protein.jpg' },
        { name: 'Creatine Monohydrate', role: 'Strength & Power', image: '/product-protein.jpg' },
        { name: 'Surge Pre-Workout', role: 'Training Intensity', image: '/product-preworkout.jpg' }
      ]
    }
  };

  const currentStack = stacks[selectedStack as keyof typeof stacks];

  return (
    <div className="min-h-screen bg-dark-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-neon-orange text-white font-bold px-4 py-1 uppercase tracking-widest text-sm mb-4">
            Save up to 25%
          </div>
          <h1 className="text-5xl font-heading font-black text-white mb-4 uppercase">Build Your Stack</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Synergistic formulas designed to work together. Choose your goal and get the complete arsenal.
          </p>
        </div>

        {/* Stack Selector */}
        <div className="flex justify-center gap-4 mb-16">
          <button 
            onClick={() => setSelectedStack('shred')}
            className={`px-8 py-4 font-heading text-xl uppercase font-bold tracking-wider transition-all ${
              selectedStack === 'shred' 
                ? 'bg-neon-orange text-white' 
                : 'bg-dark-grey text-gray-400 hover:text-white'
            }`}
          >
            Shred Stack
          </button>
          <button 
            onClick={() => setSelectedStack('bulk')}
            className={`px-8 py-4 font-heading text-xl uppercase font-bold tracking-wider transition-all ${
              selectedStack === 'bulk' 
                ? 'bg-neon-orange text-white' 
                : 'bg-dark-grey text-gray-400 hover:text-white'
            }`}
          >
            Mass Stack
          </button>
        </div>

        {/* Stack Display */}
        <motion.div 
          key={selectedStack}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-dark-grey border border-gray-800 p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex flex-col lg:flex-row gap-12 relative z-10">
            {/* Products Visual */}
            <div className="flex-1">
              <div className="flex items-center justify-center gap-4 md:gap-8 mb-8">
                {currentStack.products.map((p, i) => (
                  <div key={i} className="flex items-center">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-neon-orange/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <img src={p.image} alt={p.name} className="w-32 md:w-48 object-contain drop-shadow-2xl relative z-10 transform group-hover:-translate-y-4 transition-transform duration-300" />
                    </div>
                    {i < currentStack.products.length - 1 && (
                      <Plus className="h-8 w-8 text-gray-600 mx-2 md:mx-4" />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                {currentStack.products.map((p, i) => (
                  <div key={i}>
                    <p className="text-white font-bold text-sm md:text-base uppercase">{p.name}</p>
                    <p className="text-neon-orange text-xs md:text-sm">{p.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Details */}
            <div className="lg:w-1/3 flex flex-col justify-center">
              <h2 className="text-4xl font-heading font-black text-white mb-2 uppercase">{currentStack.name}</h2>
              <p className="text-gray-400 mb-8">{currentStack.desc}</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="h-5 w-5 text-neon-orange flex-shrink-0" />
                  30 Day Supply
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="h-5 w-5 text-neon-orange flex-shrink-0" />
                  Free Shaker Bottle Included
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="h-5 w-5 text-neon-orange flex-shrink-0" />
                  Comprehensive Guide PDF
                </li>
              </ul>
              
              <div className="bg-black/50 p-6 border border-gray-800 mb-8">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-gray-400 line-through text-lg">${currentStack.originalPrice}</span>
                  <span className="text-neon-orange font-bold text-sm uppercase tracking-wider">Save {currentStack.savings}</span>
                </div>
                <div className="text-5xl font-bold text-white">${currentStack.price}</div>
              </div>
              
              <button className="w-full bg-neon-orange hover:bg-orange-600 text-white font-heading text-xl uppercase font-bold tracking-wider py-4 flex items-center justify-center gap-2 transition-colors hover-energy-border">
                <ShoppingCart className="h-6 w-6" /> Add Stack To Cart
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
