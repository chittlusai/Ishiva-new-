import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-[#00BCD4]/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00BCD4]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#76C442]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#76C442]/10 text-[#76C442] px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span className="font-['Nunito'] font-semibold text-sm">Doctor Recommended</span>
            </div>
            
            <h1 className="font-['Nunito'] font-black text-5xl sm:text-6xl lg:text-7xl text-[#333333] leading-tight mb-6">
              Fuel Your
              <span className="block gradient-text">Best Life</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              Premium health supplements and wellness products crafted with science-backed ingredients 
              to support your journey to optimal health and vitality.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/product"
                className="btn-gradient px-8 py-4 rounded-xl font-['Nunito'] font-bold text-white inline-flex items-center gap-2"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/quiz"
                className="px-8 py-4 rounded-xl font-['Nunito'] font-bold text-[#333333] border-2 border-[#333333]/20 hover:border-[#00BCD4] hover:text-[#00BCD4] transition-colors inline-flex items-center gap-2"
              >
                Take the Quiz
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-10 h-10 rounded-full bg-[#00BCD4]/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#00BCD4]" />
                </div>
                <span className="text-sm font-medium">Third-Party Tested</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-10 h-10 rounded-full bg-[#76C442]/10 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-[#76C442]" />
                </div>
                <span className="text-sm font-medium">Free Shipping $50+</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-10 h-10 rounded-full bg-[#00BCD4]/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#00BCD4]" />
                </div>
                <span className="text-sm font-medium">100% Money Back</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-lifestyle.jpg"
                alt="Active healthy lifestyle"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00BCD4]/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00BCD4] to-[#76C442] flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-['Nunito'] font-bold text-[#333333]">50K+ Happy Customers</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <span className="text-sm text-gray-600 ml-1">4.9/5</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
