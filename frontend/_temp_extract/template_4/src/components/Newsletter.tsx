import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-[#00BCD4]/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00BCD4] to-[#76C442] rounded-2xl mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="font-['Nunito'] font-bold text-3xl sm:text-4xl text-[#333333] mb-4">
            Stay Updated on Health Tips & Deals
          </h2>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive discounts, new product announcements, 
            and expert health tips delivered straight to your inbox.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 shadow-lg inline-flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-[#76C442]/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#76C442]" />
              </div>
              <div className="text-left">
                <p className="font-['Nunito'] font-bold text-[#333333]">You're subscribed!</p>
                <p className="text-sm text-gray-600">Check your inbox for a welcome gift.</p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#00BCD4] focus:outline-none transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-gradient px-8 py-4 rounded-xl font-['Nunito'] font-bold text-white whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe anytime. Read our Privacy Policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
