import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, ShieldCheck, Leaf, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20 px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="sm:text-center lg:text-left"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-lime-100 text-lime-600 text-sm font-semibold mb-6">
                <Leaf className="w-4 h-4 mr-2" />
                100% Natural Ingredients
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">A spotless home,</span>{' '}
                <span className="block text-teal-500 xl:inline">naturally.</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Powerful cleaning products made with plant-based ingredients. Tough on dirt, safe for your family and the planet.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link to="/rooms" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 md:py-4 md:text-lg transition-colors">
                    Shop Now
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/subscription" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-teal-100 hover:bg-teal-200 md:py-4 md:text-lg transition-colors">
                    Subscribe & Save
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/images/hero.jpg"
            alt="Spotless modern living room"
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-500 mb-6">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Plant-Based</h3>
              <p className="text-gray-500">Formulated with biodegradable ingredients derived from nature, not petroleum.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-lime-100 text-lime-600 mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Safe for Family</h3>
              <p className="text-gray-500">Free from harsh chemicals, synthetic fragrances, and toxic residues.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-500 mb-6">
                <Droplets className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Tough on Grime</h3>
              <p className="text-gray-500">Rigorously tested to cut through grease and dirt as effectively as conventional brands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Room */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-extrabold text-gray-900 sm:text-4xl">Shop by Room</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">Targeted solutions for every space in your home.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Kitchen', image: '/images/kitchen.jpg', link: '/rooms?category=kitchen' },
              { name: 'Bathroom', image: '/images/bathroom.jpg', link: '/rooms?category=bathroom' },
              { name: 'Laundry', image: '/images/laundry.jpg', link: '/rooms?category=laundry' },
              { name: 'Floors', image: '/images/floor.jpg', link: '/rooms?category=floor' }
            ].map((room, index) => (
              <Link key={index} to={room.link} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-64">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
                  <h3 className="text-2xl font-heading font-bold text-white">{room.name}</h3>
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-heading font-extrabold text-gray-900">Bestsellers</h2>
              <p className="mt-2 text-gray-500">Our most loved cleaning essentials.</p>
            </div>
            <Link to="/rooms" className="hidden sm:flex items-center text-teal-500 font-semibold hover:text-teal-600 transition-colors">
              View all <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: '1', name: 'Multi-Surface Spray', price: '$8.99', image: '/images/product-spray.jpg', badge: 'Bestseller' },
              { id: '2', name: 'Laundry Detergent', price: '$18.99', image: '/images/product-laundry.jpg', badge: 'Eco-Cert' },
              { id: '3', name: 'Floor Cleaner Concentrate', price: '$12.99', image: '/images/product-floor.jpg' },
              { id: '4', name: 'Glass & Window Spray', price: '$7.99', image: '/images/product-glass.jpg' }
            ].map((product) => (
              <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm sparkle-card flex flex-col">
                <Link to={`/product/${product.id}`} className="block relative aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50">
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-lime-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                      {product.badge}
                    </span>
                  )}
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
                </Link>
                <div className="flex-grow">
                  <div className="flex items-center text-xs text-teal-500 mb-1">
                    <Leaf className="w-3 h-3 mr-1" /> Natural
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1 hover:text-teal-500 transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-gray-500 font-medium">{product.price}</p>
                </div>
                <button className="mt-4 w-full bg-white border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" /> Add to Cart
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/rooms" className="inline-flex items-center text-teal-500 font-semibold">
              View all products <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-teal-500 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-teal-400 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-teal-600 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-heading font-extrabold sm:text-4xl mb-4">Join the CleanHome Community</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Get 10% off your first order, plus exclusive cleaning tips, early access to new products, and special offers.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            />
            <button 
              type="submit" 
              className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;