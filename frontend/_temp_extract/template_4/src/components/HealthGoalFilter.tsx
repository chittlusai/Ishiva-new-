import { useState } from 'react';
import { Flame, Dumbbell, Zap, Shield, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const goals = [
  { id: 'weight-loss', name: 'Weight Loss', icon: Flame, color: 'from-orange-500 to-red-500' },
  { id: 'muscle', name: 'Muscle', icon: Dumbbell, color: 'from-[#00BCD4] to-[#0097A7]' },
  { id: 'energy', name: 'Energy', icon: Zap, color: 'from-[#76C442] to-[#5A9A32]' },
  { id: 'immunity', name: 'Immunity', icon: Shield, color: 'from-purple-500 to-indigo-500' },
  { id: 'sleep', name: 'Sleep', icon: Moon, color: 'from-indigo-500 to-purple-600' },
];

interface HealthGoalFilterProps {
  onGoalSelect: (goal: string | null) => void;
  selectedGoal: string | null;
}

export default function HealthGoalFilter({ onGoalSelect, selectedGoal }: HealthGoalFilterProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-['Nunito'] font-bold text-3xl sm:text-4xl text-[#333333] mb-4">
            Shop by Health Goal
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect supplements tailored to your specific health objectives
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {goals.map((goal) => {
            const Icon = goal.icon;
            const isSelected = selectedGoal === goal.id;
            
            return (
              <motion.button
                key={goal.id}
                onClick={() => onGoalSelect(isSelected ? null : goal.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex items-center gap-3 px-6 py-4 rounded-2xl font-['Nunito'] font-semibold transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#333333] text-white shadow-lg'
                    : 'bg-gray-50 text-[#333333] hover:bg-gray-100 border-2 border-transparent hover:border-[#00BCD4]/30'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isSelected ? 'bg-white/20' : `bg-gradient-to-br ${goal.color}`
                }`}>
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-white'}`} />
                </div>
                <span>{goal.name}</span>
                {isSelected && (
                  <motion.div
                    layoutId="goalIndicator"
                    className="absolute inset-0 rounded-2xl border-2 border-[#00BCD4]"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
