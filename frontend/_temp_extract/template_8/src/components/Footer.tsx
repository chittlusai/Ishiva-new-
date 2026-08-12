import { Link } from 'react-router-dom';
import { Leaf, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-teal-500" />
              <span className="font-heading font-bold text-xl text-gray-900">Clean<span className="text-teal-500">Home</span></span>
            </Link>
            <p className="text-gray-500 text-sm mb-4">
              Non-toxic, effective cleaning products for a spotless home and a healthier planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/rooms" className="hover:text-teal-500 transition-colors">Kitchen</Link></li>
              <li><Link to="/rooms" className="hover:text-teal-500 transition-colors">Bathroom</Link></li>
              <li><Link to="/rooms" className="hover:text-teal-500 transition-colors">Laundry</Link></li>
              <li><Link to="/rooms" className="hover:text-teal-500 transition-colors">Bundles</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-gray-900 mb-4">About</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-teal-500 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Ingredients</a></li>
              <li><Link to="/blog" className="hover:text-teal-500 transition-colors">Blog</Link></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-500 text-sm mb-4">Subscribe for cleaning tips and 10% off your first order.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-l-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 w-full text-sm"
              />
              <button 
                type="submit" 
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-r-md text-sm font-medium transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CleanHome. Designed by iShiva Digital Technology.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;