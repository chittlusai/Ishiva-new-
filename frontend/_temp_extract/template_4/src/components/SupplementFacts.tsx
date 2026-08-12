import type { Product } from '../data/products';

interface SupplementFactsProps {
  product: Product;
}

export default function SupplementFacts({ product }: SupplementFactsProps) {
  const { supplementFacts } = product;

  return (
    <div className="bg-white rounded-2xl border-2 border-[#00BCD4]/20 overflow-hidden">
      <div className="bg-gradient-to-r from-[#00BCD4] to-[#76C442] p-4">
        <h3 className="font-['Nunito'] font-bold text-xl text-white text-center">
          Supplement Facts
        </h3>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
          <span className="font-semibold text-[#333333]">Serving Size</span>
          <span className="text-gray-600">{supplementFacts.servingSize}</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
          <span className="font-semibold text-[#333333]">Servings Per Container</span>
          <span className="text-gray-600">{supplementFacts.servingsPerContainer}</span>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 font-['Nunito'] font-bold text-[#333333]">Nutrient</th>
              <th className="text-right py-3 font-['Nunito'] font-bold text-[#333333]">Amount</th>
              <th className="text-right py-3 font-['Nunito'] font-bold text-[#333333]">% DV</th>
            </tr>
          </thead>
          <tbody>
            {supplementFacts.nutrients.map((nutrient, index) => (
              <tr 
                key={index} 
                className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
              >
                <td className="py-3 text-[#333333]">{nutrient.name}</td>
                <td className="py-3 text-right text-gray-600">{nutrient.amount}</td>
                <td className="py-3 text-right text-gray-600">{nutrient.dailyValue || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
