import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Zap, Activity, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'TITAN WHEY ISOLATE',
    category: 'Muscle Gain',
    price: 49.99,
    rating: 4.9,
    reviews: 1248,
    image: '/product-protein.jpg',
    flavors: ['#3E2723', '#F5F5DC', '#FFC0CB'] // Chocolate, Vanilla, Strawberry
  },
  {
    id: 2,
    name: 'SURGE PRE-WORKOUT',
    category: 'Energy & Focus',
    price: 34.99,
    rating: 4.8,
    reviews: 892,
    image: '/product-preworkout.jpg',
    flavors: ['#FF0000', '#00FF00', '#0000FF'] // Fruit Punch, Green Apple, Blue Raz
  },
  {
    id: 3,
    name: 'RECOVER BCAA+',
    category: 'Recovery',
    price: 29.99,
    rating: 4.7,
    reviews: 654,
    image: '/product-protein.jpg', // Reusing image for demo
    flavors: ['#FFFF00', '#FFA500'] // Lemon, Orange
  },
  {
    id: 4,
    name: 'THERMO BURN FAT BURNER',
    category: 'Fat Loss',
    price: 39.99,
    rating: 4.6,
    reviews: 432,
    image: '/product-preworkout.jpg', // Reusing image for demo
    flavors: [] // Pills
  }
];

const goals = [
  { name: 'Muscle Gain', icon: <Zap className="h-6 w-6" /> },
  { name: 'Fat Loss', icon: <Activity className="h-6 w-6" /> },
  { name: 'Endurance', icon: <Activity className="h-6 w-6" /> },
  { name: 'Recovery', icon: <Activity className="h-6 w-6" /> }
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Athlete lifting weights" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-orange/20 border border-neon-orange text-neon-orange text-sm font-bold tracking-widest uppercase mb-6">
              <ShieldCheck className="h-4 w-4" />
              <span>Lab Tested & Certified</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight mb-6">
              FUEL YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-yellow-500">
                INNER BEAST
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-lg">
              Premium, science-backed supplements designed to push your limits and shatter your plateaus. No proprietary blends, just raw power.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/goals" className="bg-neon-orange hover:bg-orange-600 text-white font-heading text-xl uppercase py-4 px-8 flex items-center justify-center gap-2 transition-all hover:scale-105 font-bold tracking-wider">
                Shop By Goal <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/stack" className="bg-transparent border-2 border-white hover:border-neon-orange hover:text-neon-orange text-white font-heading text-xl uppercase py-4 px-8 flex items-center justify-center transition-all font-bold tracking-wider">
                View Stacks
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Goal Filter Chips */}
      <section className="py-12 bg-dark-grey border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {goals.map((goal, index) => (
              <Link 
                key={index}
                to="/goals"
                className="flex items-center gap-3 px-6 py-4 bg-dark-bg border border-gray-700 hover:border-neon-orange hover:text-neon-orange transition-all group rounded-sm"
              >
                <div className="text-gray-500 group-hover:text-neon-orange transition-colors">
                  {goal.icon}
                </div>
                <span className="font-heading text-lg uppercase tracking-wider">{goal.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Grid */}
      <section className="py-24 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 border-b border-dark-grey pb-6">
            <div>
              <h2 className="text-4xl font-heading font-bold text-white mb-2">ELITE ARSENAL</h2>
              <p className="text-gray-400">Our highest rated performance enhancers</p>
            </div>
            <Link to="/product/1" className="hidden md:flex items-center gap-2 text-neon-orange font-heading uppercase tracking-wider hover:text-white transition-colors">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="bg-dark-grey rounded-sm overflow-hidden hover-energy-border group relative"
              >
                <div className="absolute top-4 left-4 z-10 bg-neon-orange text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
                  Bestseller
                </div>
                <Link to={`/product/${product.id}`} className="block relative h-64 bg-black/50 p-6 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
                <div className="p-6">
                  <div className="text-xs text-neon-orange font-bold uppercase tracking-wider mb-2">
                    {product.category}
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-neon-orange transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-neon-orange text-neon-orange" />
                    <span className="text-white font-bold">{product.rating}</span>
                    <span className="text-gray-500 text-sm">({product.reviews})</span>
                  </div>
                  
                  {product.flavors.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-gray-400 mb-2 uppercase">Select Flavor:</p>
                      <div className="flex gap-2">
                        {product.flavors.map((color, i) => (
                          <button 
                            key={i}
                            className="w-6 h-6 rounded-full border-2 border-transparent hover:border-white focus:border-white transition-all"
                            style={{ backgroundColor: color }}
                            title="Flavor option"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-2xl font-bold text-white">${product.price}</span>
                    <button className="bg-dark-bg hover:bg-neon-orange border border-gray-600 hover:border-neon-orange text-white p-3 transition-colors">
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambassador Section */}
      <section className="py-24 bg-dark-bg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-orange to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">TEAM POWERFUEL</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Powered by our supplements, driven by relentless ambition. Meet the athletes who represent the standard.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden h-[500px]">
              <img src="/ambassador-1.jpg" alt="Athlete" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-heading text-3xl font-bold text-white mb-1">MARCUS IRON</h3>
                  <p className="text-neon-orange font-bold uppercase tracking-wider mb-4">IFBB Pro Bodybuilder</p>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    "Titan Whey Isolate is the only protein I trust for my prep. Clean, fast-absorbing, and tastes incredible."
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden h-[500px]">
              <img src="/ambassador-2.jpg" alt="Athlete" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-heading text-3xl font-bold text-white mb-1">SARAH VANCE</h3>
                  <p className="text-neon-orange font-bold uppercase tracking-wider mb-4">CrossFit Games Athlete</p>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    "Surge Pre-Workout gives me the sustained energy I need for 3-hour training sessions without the crash."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
