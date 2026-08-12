import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Goals', path: '/goals' },
    { name: 'Products', path: '/product/1' },
    { name: 'Compare', path: '/compare' },
    { name: 'Stacks', path: '/stack' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-dark-bg/95 backdrop-blur-sm border-b border-dark-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <Zap className="h-8 w-8 text-neon-orange group-hover:text-white transition-colors" fill="#FF6B00" />
              <span className="font-heading text-2xl font-bold tracking-wider text-white">
                POWER<span className="text-neon-orange">FUEL</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-heading uppercase text-lg tracking-wider transition-colors hover:text-neon-orange ${
                  location.pathname === link.path ? 'text-neon-orange' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <Link to="/cart" className="relative group">
              <ShoppingCart className="h-6 w-6 text-white group-hover:text-neon-orange transition-colors" />
              <span className="absolute -top-2 -right-2 bg-neon-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-grey border-b border-dark-grey">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md font-heading uppercase text-base ${
                  location.pathname === link.path ? 'bg-neon-orange text-white' : 'text-gray-300 hover:bg-dark-bg hover:text-neon-orange'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
