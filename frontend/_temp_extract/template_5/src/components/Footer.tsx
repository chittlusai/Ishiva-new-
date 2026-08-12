import { Link } from 'react-router-dom';
import { Zap, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-dark-grey pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Zap className="h-8 w-8 text-neon-orange" fill="#FF6B00" />
              <span className="font-heading text-2xl font-bold tracking-wider text-white">
                POWER<span className="text-neon-orange">FUEL</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              Premium sports nutrition and supplements engineered for maximum performance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-neon-orange transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-neon-orange transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-neon-orange transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-neon-orange transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-xl text-white mb-6 uppercase">Shop</h3>
            <ul className="space-y-4">
              <li><Link to="/goals" className="text-gray-400 hover:text-neon-orange transition-colors">Shop by Goal</Link></li>
              <li><Link to="/stack" className="text-gray-400 hover:text-neon-orange transition-colors">Bundles & Stacks</Link></li>
              <li><Link to="/product/1" className="text-gray-400 hover:text-neon-orange transition-colors">Protein</Link></li>
              <li><Link to="/product/2" className="text-gray-400 hover:text-neon-orange transition-colors">Pre-Workout</Link></li>
              <li><Link to="/compare" className="text-gray-400 hover:text-neon-orange transition-colors">Compare Products</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-xl text-white mb-6 uppercase">Support</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-neon-orange transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-orange transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-orange transition-colors">Track Order</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-xl text-white mb-6 uppercase">Join the Squad</h3>
            <p className="text-gray-400 mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-dark-grey border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-neon-orange transition-colors"
              />
              <button 
                type="button" 
                className="bg-neon-orange hover:bg-orange-600 text-white font-heading uppercase py-3 px-4 transition-colors font-bold tracking-wider"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-dark-grey pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PowerFuel Nutrition. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">Designed & Developed by</span>
            <span className="text-neon-orange font-bold text-sm tracking-wide">iShiva Digital Technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
