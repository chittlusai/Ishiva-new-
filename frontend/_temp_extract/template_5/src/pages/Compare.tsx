import { Check, X } from 'lucide-react';

export default function Compare() {
  const features = [
    { name: 'Primary Goal', type: 'text' },
    { name: 'Protein Source', type: 'text' },
    { name: 'Protein Per Serving', type: 'text' },
    { name: 'Calories', type: 'text' },
    { name: 'Carbs', type: 'text' },
    { name: 'Fats', type: 'text' },
    { name: 'Lactose Free', type: 'boolean' },
    { name: 'Vegan', type: 'boolean' },
    { name: 'Best Time To Take', type: 'text' },
    { name: 'Price Per Serving', type: 'text' },
  ];

  const products = [
    {
      name: 'TITAN WHEY ISOLATE',
      image: '/product-protein.jpg',
      specs: {
        'Primary Goal': 'Lean Muscle Growth',
        'Protein Source': '100% Whey Isolate',
        'Protein Per Serving': '25g',
        'Calories': '110',
        'Carbs': '1g',
        'Fats': '0.5g',
        'Lactose Free': true,
        'Vegan': false,
        'Best Time To Take': 'Post-Workout',
        'Price Per Serving': '$1.78'
      }
    },
    {
      name: 'MASS BUILDER PRO',
      image: '/product-protein.jpg',
      specs: {
        'Primary Goal': 'Size & Weight Gain',
        'Protein Source': 'Whey Concentrate/Casein Blend',
        'Protein Per Serving': '50g',
        'Calories': '1250',
        'Carbs': '252g',
        'Fats': '4.5g',
        'Lactose Free': false,
        'Vegan': false,
        'Best Time To Take': 'Between Meals',
        'Price Per Serving': '$3.12'
      }
    },
    {
      name: 'PLANT POWER',
      image: '/product-protein.jpg',
      specs: {
        'Primary Goal': 'Plant-Based Muscle',
        'Protein Source': 'Pea & Brown Rice Blend',
        'Protein Per Serving': '24g',
        'Calories': '120',
        'Carbs': '3g',
        'Fats': '2g',
        'Lactose Free': true,
        'Vegan': true,
        'Best Time To Take': 'Anytime',
        'Price Per Serving': '$1.95'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-heading font-black text-white mb-4 uppercase">Compare Proteins</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find the perfect fuel for your specific goals. Compare our top-tier protein formulas side by side.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-6 bg-dark-grey border-b-2 border-neon-orange min-w-[200px]">
                  <span className="text-xl font-heading text-white uppercase tracking-wider">Features</span>
                </th>
                {products.map((product, index) => (
                  <th key={index} className="p-6 bg-dark-grey border-b-2 border-neon-orange text-center min-w-[250px] relative group hover-energy-border">
                    {index === 0 && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon-orange text-white text-xs font-bold px-3 py-1 uppercase tracking-wider whitespace-nowrap z-10">
                        Top Seller
                      </div>
                    )}
                    <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mx-auto mb-4 drop-shadow-xl group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-heading font-bold text-white uppercase">{product.name}</h3>
                    <button className="mt-4 text-sm font-bold text-neon-orange uppercase tracking-wider hover:text-white transition-colors">
                      View Product
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, rowIndex) => (
                <tr key={rowIndex} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                  <td className="p-6 font-bold text-gray-300">
                    {feature.name}
                  </td>
                  {products.map((product, colIndex) => (
                    <td key={colIndex} className="p-6 text-center text-gray-400">
                      {feature.type === 'boolean' ? (
                        product.specs[feature.name as keyof typeof product.specs] ? (
                          <Check className="h-6 w-6 text-neon-orange mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-gray-600 mx-auto" />
                        )
                      ) : (
                        <span className={rowIndex === 0 ? "text-white font-bold" : ""}>
                          {product.specs[feature.name as keyof typeof product.specs]}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
