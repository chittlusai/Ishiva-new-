import { Link } from 'react-router-dom';
import { HelpCircle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function QuizCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#00BCD4] via-[#00A5B5] to-[#76C442] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="font-['Nunito'] font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Not Sure What You Need?
          </h2>
          
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Take our quick 3-minute quiz to get personalized supplement recommendations 
            based on your health goals, lifestyle, and preferences.
          </p>

          <Link
            to="/quiz"
            className="inline-flex items-center gap-3 bg-white text-[#00BCD4] px-8 py-4 rounded-xl font-['Nunito'] font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            Take the Quiz
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
