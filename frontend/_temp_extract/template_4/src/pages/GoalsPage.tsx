import { Link } from 'react-router-dom';
import { Flame, Dumbbell, Zap, Shield, Moon, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const goals = [
  {
    id: 'weight-loss',
    name: 'Weight Loss',
    icon: Flame,
    color: 'from-orange-500 to-red-500',
    description: 'Burn fat, boost metabolism, and achieve your ideal weight with our targeted supplements designed to support healthy weight management.',
    benefits: ['Increased fat oxidation', 'Appetite control', 'Metabolism boost', 'Energy support'],
    products: 12
  },
  {
    id: 'muscle',
    name: 'Muscle Building',
    icon: Dumbbell,
    color: 'from-[#00BCD4] to-[#0097A7]',
    description: 'Build lean muscle mass, enhance recovery, and maximize your workout results with premium protein and performance supplements.',
    benefits: ['Muscle growth', 'Faster recovery', 'Strength gains', 'Endurance boost'],
    products: 18
  },
  {
    id: 'energy',
    name: 'Energy & Focus',
    icon: Zap,
    color: 'from-[#76C442] to-[#5A9A32]',
    description: 'Stay sharp, energized, and mentally focused throughout your day with our natural energy and cognitive support formulas.',
    benefits: ['Sustained energy', 'Mental clarity', 'No crash formula', 'Stress support'],
    products: 15
  },
  {
    id: 'immunity',
    name: 'Immunity Support',
    icon: Shield,
    color: 'from-purple-500 to-indigo-500',
    description: 'Strengthen your immune system and protect your health year-round with essential vitamins, minerals, and immune-boosting compounds.',
    benefits: ['Immune defense', 'Antioxidant support', 'Overall wellness', 'Seasonal protection'],
    products: 20
  },
  {
    id: 'sleep',
    name: 'Sleep & Recovery',
    icon: Moon,
    color: 'from-indigo-500 to-purple-600',
    description: 'Get restful, restorative sleep and wake up refreshed with our natural sleep aids and recovery support supplements.',
    benefits: ['Deeper sleep', 'Faster onset', 'Natural ingredients', 'Recovery support'],
    products: 10
  }
];

export default function GoalsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#00BCD4]/5 via-white to-[#76C442]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-['Nunito'] font-black text-4xl sm:text-5xl lg:text-6xl text-[#333333] mb-6">
              Choose Your <span className="gradient-text">Health Goal</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select your primary health objective to discover supplements tailored to help you achieve your wellness aspirations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Goals Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <motion.div
                  key={goal.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${goal.color} p-6`}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-['Nunito'] font-bold text-xl text-white">
                          {goal.name}
                        </h3>
                        <span className="text-white/80 text-sm">{goal.products} products</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      {goal.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {goal.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#76C442]" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={`/product?goal=${goal.id}`}
                      className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gradient-to-r hover:from-[#00BCD4] hover:to-[#76C442] text-[#333333] hover:text-white py-3 rounded-xl font-['Nunito'] font-semibold transition-all"
                    >
                      View Products
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
