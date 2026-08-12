import { Link } from 'react-router-dom';
import { CalendarClock, Package, DollarSign, CheckCircle2 } from 'lucide-react';

const Subscription = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">
            Never Run Out of Clean
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Subscribe to your favorite cleaning essentials. Save 15% on every order, get free shipping, and customize your delivery schedule.
          </p>
          <Link to="/rooms" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-teal-500 hover:bg-teal-600 transition-colors shadow-sm">
            Build Your Box
          </Link>
        </div>
      </div>

      {/* How it works */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900">How Subscribe & Save Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-teal-100 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                <Package className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Choose Products</h3>
              <p className="text-gray-600">Select the items you use most often. Mix and match across all categories.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-lime-100 rounded-2xl flex items-center justify-center mb-6 -rotate-3">
                <CalendarClock className="w-10 h-10 text-lime-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Set Schedule</h3>
              <p className="text-gray-600">Pick your delivery frequency: every 1, 2, or 3 months. We'll email you before each shipment.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-teal-100 rounded-2xl flex items-center justify-center mb-6 rotate-3">
                <DollarSign className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Save & Relax</h3>
              <p className="text-gray-600">Enjoy 15% off and free shipping on all subscription orders. Cancel or modify anytime.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-20 bg-light-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-8 text-center">Subscription Perks</h2>
            
            <div className="space-y-6">
              {[
                "15% discount on all subscribed items, always.",
                "Free shipping on all subscription deliveries.",
                "Complete flexibility: pause, skip, or cancel anytime.",
                "Swap products or change delivery frequency with one click.",
                "Early access to new products and seasonal scents."
              ].map((perk, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-lime-500 shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{perk}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/rooms" className="text-teal-500 font-bold hover:underline text-lg">
                Shop eligible products →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;