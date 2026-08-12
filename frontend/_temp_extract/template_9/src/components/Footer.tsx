import { Link } from 'react-router-dom';
import { Clock, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full border-2 border-gold flex items-center justify-center">
                <span className="text-gold text-xs font-bold font-heading">T</span>
              </div>
              <span className="text-warm-white font-heading text-lg">TimePiece</span>
            </Link>
            <p className="text-silver-dark text-sm leading-relaxed mb-6">
              Elegant timepieces and fine jewelry, crafted for every moment. By iShiva Digital Technology.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-midnight-light border border-silver/20 flex items-center justify-center text-silver hover:text-gold hover:border-gold transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-midnight-light border border-silver/20 flex items-center justify-center text-silver hover:text-gold hover:border-gold transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-midnight-light border border-silver/20 flex items-center justify-center text-silver hover:text-gold hover:border-gold transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-warm-white font-heading text-sm tracking-widest uppercase mb-4">Collections</h4>
            <ul className="space-y-3">
              {['Watches', 'Rings', 'Necklaces', 'Bracelets', 'Earrings'].map(item => (
                <li key={item}>
                  <Link
                    to={item === 'Watches' ? '/watches' : '/jewelry'}
                    className="text-silver-dark text-sm hover:text-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-warm-white font-heading text-sm tracking-widest uppercase mb-4">Support</h4>
            <ul className="space-y-3">
              {['Shipping Info', 'Returns & Exchanges', 'Size Guide', 'Care Instructions', 'FAQ'].map(item => (
                <li key={item}>
                  <a href="#" className="text-silver-dark text-sm hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-warm-white font-heading text-sm tracking-widest uppercase mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-silver-dark text-sm">iShiva Digital Technology, Tech Park, Bangalore, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <span className="text-silver-dark text-sm">+91 80 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <span className="text-silver-dark text-sm">hello@timepiece.in</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-gold shrink-0" />
                <span className="text-silver-dark text-sm">Mon-Sat, 9AM - 7PM IST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-silver/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-silver-dark text-xs">
            &copy; {new Date().getFullYear()} TimePiece by iShiva Digital Technology. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-silver-dark text-xs hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-silver-dark text-xs hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
