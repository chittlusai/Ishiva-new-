import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

const initialCart = [
  { id: '1', name: 'Multi-Surface Spray', price: 8.99, quantity: 2, image: '/images/product-spray.jpg', type: 'subscription' },
  { id: '3', name: 'Floor Cleaner Concentrate', price: 12.99, quantity: 1, image: '/images/product-floor.jpg', type: 'one-time' }
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id: string, delta: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => {
    const itemPrice = item.type === 'subscription' ? item.price * 0.85 : item.price;
    return acc + (itemPrice * item.quantity);
  }, 0);

  const shipping = subtotal > 35 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="bg-light-grey min-h-screen py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-sm">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added any cleaning essentials yet.</p>
            <Link to="/rooms" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-teal-500 hover:bg-teal-600 transition-colors">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light-grey min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-heading font-extrabold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100 hidden sm:grid grid-cols-12 gap-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                <div className="col-span-6">Product</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-3 text-right">Total</div>
              </div>

              <div className="divide-y divide-gray-100">
                {cart.map((item) => (
                  <div key={item.id} className="p-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    {/* Product Info */}
                    <div className="col-span-1 sm:col-span-6 flex items-center gap-4">
                      <div className="w-20 h-20 bg-gray-50 rounded-xl flex-shrink-0 p-2">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                      </div>
                      <div>
                        <Link to={`/product/${item.id}`} className="font-bold text-gray-900 hover:text-teal-500 transition-colors">
                          {item.name}
                        </Link>
                        <div className="mt-1">
                          {item.type === 'subscription' ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-teal-100 text-teal-800">
                              Subscription (15% off)
                            </span>
                          ) : (
                            <span className="text-sm text-gray-500">One-time purchase</span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          ${(item.type === 'subscription' ? item.price * 0.85 : item.price).toFixed(2)} each
                        </div>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-1 sm:col-span-3 flex items-center justify-between sm:justify-center mt-4 sm:mt-0">
                      <span className="sm:hidden text-sm font-medium text-gray-500">Quantity:</span>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 text-gray-600 hover:text-teal-500">-</button>
                        <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 text-gray-600 hover:text-teal-500">+</button>
                      </div>
                    </div>

                    {/* Price & Remove */}
                    <div className="col-span-1 sm:col-span-3 flex items-center justify-between sm:justify-end mt-4 sm:mt-0">
                      <span className="sm:hidden text-sm font-medium text-gray-500">Total:</span>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-gray-900">
                          ${((item.type === 'subscription' ? item.price * 0.85 : item.price) * item.quantity).toFixed(2)}
                        </span>
                        <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors p-1">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-lime-600 font-medium">Free</span>
                  ) : (
                    <span>${shipping.toFixed(2)}</span>
                  )}
                </div>
                {shipping > 0 && (
                  <div className="text-xs text-gray-500 text-right">
                    Add ${(35 - subtotal).toFixed(2)} more for free shipping
                  </div>
                )}
                
                <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-lg mb-4">
                Proceed to Checkout <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-4">
                <ShieldCheck className="w-4 h-4 text-lime-500" /> Secure Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;