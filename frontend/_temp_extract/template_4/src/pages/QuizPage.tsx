import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Target, Activity, Heart, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import type { Product } from '../data/products';

const questions = [
  {
    id: 1,
    question: "What's your primary health goal?",
    options: [
      { id: 'weight-loss', label: 'Lose Weight', icon: '🔥' },
      { id: 'muscle', label: 'Build Muscle', icon: '💪' },
      { id: 'energy', label: 'Boost Energy', icon: '⚡' },
      { id: 'immunity', label: 'Strengthen Immunity', icon: '🛡️' },
      { id: 'sleep', label: 'Improve Sleep', icon: '🌙' }
    ]
  },
  {
    id: 2,
    question: "How would you describe your activity level?",
    options: [
      { id: 'sedentary', label: 'Sedentary', description: 'Little to no regular exercise' },
      { id: 'light', label: 'Lightly Active', description: 'Exercise 1-2 days/week' },
      { id: 'moderate', label: 'Moderately Active', description: 'Exercise 3-4 days/week' },
      { id: 'very', label: 'Very Active', description: 'Exercise 5+ days/week' }
    ]
  },
  {
    id: 3,
    question: "Do you have any dietary preferences?",
    options: [
      { id: 'none', label: 'No Restrictions' },
      { id: 'vegetarian', label: 'Vegetarian' },
      { id: 'vegan', label: 'Vegan' },
      { id: 'gluten-free', label: 'Gluten-Free' },
      { id: 'keto', label: 'Keto-Friendly' }
    ]
  }
];

interface QuizPageProps {
  onAddToCart: (product: Product) => void;
}

export default function QuizPage({ onAddToCart }: QuizPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (optionId: string) => {
    setAnswers({ ...answers, [currentQuestion]: optionId });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getRecommendedProducts = () => {
    const goal = answers[0];
    if (!goal) return products.slice(0, 3);
    
    const matching = products.filter(p => 
      p.goals.some(g => g.toLowerCase().replace(' ', '-') === goal)
    );
    
    return matching.length > 0 ? matching : products.slice(0, 3);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#00BCD4]/5 via-white to-[#76C442]/5">
      {!showResults ? (
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00BCD4] to-[#76C442] rounded-2xl mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h1 className="font-['Nunito'] font-black text-3xl sm:text-4xl text-[#333333] mb-4">
                Find Your Perfect Supplements
              </h1>
              <p className="text-gray-600">
                Answer a few questions to get personalized recommendations
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00BCD4] to-[#76C442]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="font-['Nunito'] font-bold text-xl sm:text-2xl text-[#333333] mb-6">
                  {questions[currentQuestion].question}
                </h2>

                <div className="grid gap-3">
                  {questions[currentQuestion].options.map((option) => {
                    const isSelected = answers[currentQuestion] === option.id;
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleAnswer(option.id)}
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                          isSelected
                            ? 'border-[#00BCD4] bg-[#00BCD4]/5'
                            : 'border-gray-200 hover:border-[#00BCD4]/50'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          isSelected ? 'bg-[#00BCD4] text-white' : 'bg-gray-100'
                        }`}>
                          {'icon' in option && option.icon ? (
                            <span className="text-xl">{option.icon}</span>
                          ) : (
                            <CheckCircle className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-gray-400'}`} />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-[#333333]">{option.label}</p>
                          {'description' in option && option.description && (
                            <p className="text-sm text-gray-500">{option.description}</p>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                disabled={currentQuestion === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${
                  currentQuestion === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:text-[#333333]'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all ${
                  answers[currentQuestion]
                    ? 'btn-gradient text-white'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#76C442] rounded-2xl mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h1 className="font-['Nunito'] font-black text-3xl sm:text-4xl text-[#333333] mb-4">
                Your Personalized Recommendations
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Based on your answers, we've selected these products to help you achieve your health goals.
              </p>
            </motion.div>

            {/* Recommended Products */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {getRecommendedProducts().map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers({});
                  setShowResults(false);
                }}
                className="px-6 py-3 rounded-xl font-semibold text-gray-600 border-2 border-gray-200 hover:border-[#00BCD4] transition-colors"
              >
                Retake Quiz
              </button>
              <Link
                to="/product"
                className="btn-gradient px-8 py-3 rounded-xl font-semibold text-white"
              >
                Browse All Products
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
