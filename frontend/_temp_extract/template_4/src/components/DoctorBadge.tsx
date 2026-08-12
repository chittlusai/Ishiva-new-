import { Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DoctorBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#00BCD4]/5 to-[#76C442]/5 rounded-2xl p-8 border border-[#00BCD4]/20"
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-[#00BCD4] to-[#76C442] rounded-2xl flex items-center justify-center">
            <Award className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <div>
          <h3 className="font-['Nunito'] font-bold text-xl text-[#333333] mb-2">
            Doctor Recommended
          </h3>
          <p className="text-gray-600 mb-4">
            This product has been reviewed and recommended by our board of health professionals 
            for quality, efficacy, and safety.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Third-party lab tested',
              'GMP certified manufacturing',
              'Clinically studied ingredients',
              'No artificial fillers'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#76C442]" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
