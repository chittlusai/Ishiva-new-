import { Link } from 'react-router-dom';
import { ShoppingCart, Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-teal-500" />
              <span className="font-heading font-bold text-2xl text-gray-900 tracking-tight">Clean<span className="text-teal-500">Home</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-teal-500 font-medium transition-colors">Home</Link>
            <Link to="/rooms" className="text-gray-600 hover:text-teal-500 font-medium transition-colors">Shop by Room</Link>
            <Link to="/subscription" className="text-gray-600 hover:text-teal-500 font-medium transition-colors">Subscribe & Save</Link>
            <Link to="/blog" className="text-gray-600 hover:text-teal-500 font-medium transition-colors">Cleaning Tips</Link>
            
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-teal-500 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-lime-500 rounded-full">3</span>
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-teal-500 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-50 rounded-md">Home</Link>
            <Link to="/rooms" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-50 rounded-md">Shop by Room</Link>
            <Link to="/subscription" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-50 rounded-md">Subscribe & Save</Link>
            <Link to="/blog" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-50 rounded-md">Cleaning Tips</Link>
            <Link to="/cart" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-50 rounded-md">Cart (3)</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;