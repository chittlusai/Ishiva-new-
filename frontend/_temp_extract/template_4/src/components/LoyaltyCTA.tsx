import { Gift, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoyaltyCTA() {
  return (
    <section className="py-16 bg-[#333333] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#00BCD4]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#76C442]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00BCD4] to-[#76C442] rounded-xl flex items-center justify-center">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <span className="text-[#00BCD4] font-['Nunito'] font-bold text-lg">VitalBoost Rewards</span>
            </div>
            
            <h2 className="font-['Nunito'] font-bold text-3xl sm:text-4xl text-white mb-4">
              Earn Points on Every Purchase
            </h2>
            
            <p className="text-gray-300 mb-6">
              Join our loyalty program and start earning points today. Get 1 point for every $1 spent, 
              exclusive member discounts, early access to new products, and birthday rewards!
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { points: '100', reward: '$5 Off' },
                { points: '250', reward: '$15 Off' },
                { points: '500', reward: '$35 Off' }
              ].map((tier, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-bold text-white">{tier.points}</span>
                  </div>
                  <span className="text-sm text-gray-300">{tier.reward}</span>
                </div>
              ))}
            </div>

            <button className="btn-gradient px-8 py-4 rounded-xl font-['Nunito'] font-bold text-white inline-flex items-center gap-2">
              Join Rewards Program
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-[#00BCD4]/20 to-[#76C442]/20 rounded-3xl p-8 backdrop-blur-sm">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Nunito'] font-bold text-[#333333]">Your Points</span>
                    <span className="text-sm text-gray-500">Member since 2024</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-['Nunito'] font-black text-4xl text-[#00BCD4]">2,450</span>
                    <span className="text-gray-500">points</span>
                  </div>
                  <div className="bg-gray-100 rounded-full h-3 mb-4">
                    <div className="bg-gradient-to-r from-[#00BCD4] to-[#76C442] h-3 rounded-full w-3/4" />
                  </div>
                  <p className="text-sm text-gray-600">550 points until your next $15 reward!</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
