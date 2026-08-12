import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00BCD4] to-[#76C442] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <span className="font-['Nunito'] font-bold text-xl text-white">Vital</span>
                <span className="font-['Nunito'] font-bold text-xl text-[#00BCD4]">Boost</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium health supplements and wellness products for your journey to better health. Quality you can trust.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00BCD4] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00BCD4] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00BCD4] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00BCD4] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Nunito'] font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-[#00BCD4] transition-colors">Home</Link></li>
              <li><Link to="/goals" className="text-gray-400 hover:text-[#00BCD4] transition-colors">Health Goals</Link></li>
              <li><Link to="/product" className="text-gray-400 hover:text-[#00BCD4] transition-colors">Products</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-[#00BCD4] transition-colors">Blog</Link></li>
              <li><Link to="/quiz" className="text-gray-400 hover:text-[#00BCD4] transition-colors">Supplement Quiz</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-['Nunito'] font-bold text-lg mb-6">Categories</h3>
            <ul className="space-y-3">
              <li><Link to="/goals" className="text-gray-400 hover:text-[#76C442] transition-colors">Weight Loss</Link></li>
              <li><Link to="/goals" className="text-gray-400 hover:text-[#76C442] transition-colors">Muscle Building</Link></li>
              <li><Link to="/goals" className="text-gray-400 hover:text-[#76C442] transition-colors">Energy & Focus</Link></li>
              <li><Link to="/goals" className="text-gray-400 hover:text-[#76C442] transition-colors">Immunity Support</Link></li>
              <li><Link to="/goals" className="text-gray-400 hover:text-[#76C442] transition-colors">Sleep & Recovery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Nunito'] font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00BCD4] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">123 Wellness Street, Health City, HC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00BCD4]" />
                <span className="text-gray-400 text-sm">1-800-VITAL-99</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00BCD4]" />
                <span className="text-gray-400 text-sm">support@vitalboost.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 VitalBoost Health & Wellness. A brand of iShiva Digital Technology.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
