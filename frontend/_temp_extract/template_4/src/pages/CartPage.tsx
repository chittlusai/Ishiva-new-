import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '../data/products';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartPageProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export default function CartPage({ cart, onUpdateQuantity, onRemoveItem }: CartPageProps) {
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <ShoppingBag className="w-10 h-10 text-gray-400" />
            </div>
            <h1 className="font-['Nunito'] font-bold text-2xl text-[#333333] mb-4">
              Your cart is empty
            </h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any products yet.
            </p>
            <Link
              to="/product"
              className="btn-gradient px-8 py-4 rounded-xl font-['Nunito'] font-bold text-white inline-flex items-center gap-2"
            >
              Start Shopping
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-['Nunito'] font-black text-3xl sm:text-4xl text-[#333333]">
            Shopping Cart
          </h1>
          <p className="text-gray-600 mt-2">
            {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <motion.div
                  key={item.product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex gap-6">
                    <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-24 h-24 object-cover rounded-xl"
                      />
                    </Link>
                    
                    <div className="flex-1 min-w-0">
                      <Link 
                        to={`/product/${item.product.id}`}
                        className="font-['Nunito'] font-bold text-lg text-[#333333] hover:text-[#00BCD4] transition-colors block mb-1"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-gray-500 mb-3">
                        {item.product.category}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-gray-100 rounded-lg">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                            className="p-2 hover:bg-gray-200 rounded-l-lg transition-colors"
                          >
                            <Minus className="w-4 h-4 text-gray-600" />
                          </button>
                          <span className="px-4 py-2 font-semibold text-[#333333]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-200 rounded-r-lg transition-colors"
                          >
                            <Plus className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-['Nunito'] font-bold text-xl text-[#333333]">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      {item.quantity > 1 && (
                        <p className="text-sm text-gray-500">
                          ${item.product.price.toFixed(2)} each
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
                <h2 className="font-['Nunito'] font-bold text-xl text-[#333333] mb-6">
                  Order Summary
                </h2>

                {/* Promo Code */}
                <div className="mb-6">
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Promo code"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#00BCD4] focus:outline-none"
                      />
                    </div>
                    <button className="px-4 py-3 bg-gray-100 rounded-xl font-semibold text-gray-600 hover:bg-gray-200 transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-[#333333]">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className={`font-semibold ${shipping === 0 ? 'text-[#76C442]' : 'text-[#333333]'}`}>
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-sm text-gray-500">
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping
                    </p>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="font-['Nunito'] font-bold text-lg text-[#333333]">Total</span>
                    <span className="font-['Nunito'] font-bold text-2xl text-[#333333]">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button className="w-full btn-gradient py-4 rounded-xl font-['Nunito'] font-bold text-white flex items-center justify-center gap-2">
                  Checkout
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
