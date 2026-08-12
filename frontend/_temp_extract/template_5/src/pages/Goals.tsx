import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Activity, ShieldCheck, Dumbbell, Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const goals = [
  { id: 'muscle', name: 'Muscle Gain', icon: <Dumbbell className="h-6 w-6" />, desc: 'Build lean mass and increase strength' },
  { id: 'fatloss', name: 'Fat Loss', icon: <Zap className="h-6 w-6" />, desc: 'Shred fat and preserve muscle' },
  { id: 'endurance', name: 'Endurance', icon: <Activity className="h-6 w-6" />, desc: 'Push harder for longer' },
  { id: 'recovery', name: 'Recovery', icon: <ShieldCheck className="h-6 w-6" />, desc: 'Bounce back faster between sessions' }
];

const allProducts = [
  { id: 1, name: 'TITAN WHEY ISOLATE', goal: 'muscle', price: 49.99, rating: 4.9, image: '/product-protein.jpg' },
  { id: 2, name: 'SURGE PRE-WORKOUT', goal: 'endurance', price: 34.99, rating: 4.8, image: '/product-preworkout.jpg' },
  { id: 3, name: 'RECOVER BCAA+', goal: 'recovery', price: 29.99, rating: 4.7, image: '/product-protein.jpg' },
  { id: 4, name: 'THERMO BURN FAT BURNER', goal: 'fatloss', price: 39.99, rating: 4.6, image: '/product-preworkout.jpg' },
  { id: 5, name: 'CREATINE MONOHYDRATE', goal: 'muscle', price: 24.99, rating: 4.9, image: '/product-protein.jpg' },
  { id: 6, name: 'L-CARNITINE LIQUID', goal: 'fatloss', price: 19.99, rating: 4.5, image: '/product-preworkout.jpg' },
];

export default function Goals() {
  const [activeGoal, setActiveGoal] = useState('muscle');

  const filteredProducts = allProducts.filter(p => p.goal === activeGoal);

  return (
    <div className="min-h-screen bg-dark-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-heading font-black text-white mb-4 uppercase">Shop By Goal</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Select your objective below to see the exact supplements engineered to get you there.
          </p>
        </div>

        {/* Goal Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {goals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => setActiveGoal(goal.id)}
              className={`p-6 text-left border-2 transition-all duration-300 ${
                activeGoal === goal.id 
                  ? 'border-neon-orange bg-neon-orange/10' 
                  : 'border-dark-grey bg-dark-grey hover:border-gray-500'
              }`}
            >
              <div className={`mb-4 ${activeGoal === goal.id ? 'text-neon-orange' : 'text-gray-400'}`}>
                {goal.icon}
              </div>
              <h3 className={`font-heading text-2xl font-bold uppercase mb-2 ${
                activeGoal === goal.id ? 'text-white' : 'text-gray-300'
              }`}>
                {goal.name}
              </h3>
              <p className="text-sm text-gray-400">{goal.desc}</p>
            </button>
          ))}
        </div>

        {/* Results */}
        <motion.div 
          key={activeGoal}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-heading font-bold text-white uppercase">
              {goals.find(g => g.id === activeGoal)?.name} Arsenal
            </h2>
            <div className="flex-grow h-px bg-dark-grey"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-dark-grey rounded-sm overflow-hidden hover-energy-border group">
                <Link to={`/product/${product.id}`} className="block relative h-64 bg-black/50 p-6 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
                <div className="p-6">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-neon-orange transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-neon-orange text-neon-orange" />
                    <span className="text-white font-bold">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-2xl font-bold text-white">${product.price}</span>
                    <button className="bg-neon-orange hover:bg-orange-600 text-white p-3 transition-colors">
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
