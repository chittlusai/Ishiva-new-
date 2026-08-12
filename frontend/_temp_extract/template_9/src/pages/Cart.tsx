import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Trash2, Minus, Plus, ArrowRight, Package, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const shipping = totalPrice > 75 ? 0 : 8;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-warm-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-4"
        >
          <div className="w-20 h-20 bg-midnight/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={32} className="text-silver-dark" />
          </div>
          <h1 className="font-heading text-midnight text-3xl mb-3">Your Cart is Empty</h1>
          <p className="text-silver-dark text-sm mb-8 max-w-sm mx-auto">
            Discover our curated collection of watches and jewelry. Something beautiful is waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/watches')}
              className="bg-gold text-midnight px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider uppercase hover:bg-gold-light transition-colors"
            >
              Shop Watches
            </button>
            <button
              onClick={() => navigate('/jewelry')}
              className="border-2 border-midnight text-midnight px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider uppercase hover:bg-midnight hover:text-warm-white transition-colors"
            >
              Explore Jewelry
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <div className="bg-midnight py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-warm-white text-3xl sm:text-4xl">Shopping Cart</h1>
          <p className="text-silver text-sm mt-2">{totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-midnight text-xl">Items</h2>
              <button
                onClick={clearCart}
                className="text-silver-dark text-xs hover:text-red-500 transition-colors flex items-center gap-1"
              >
                <Trash2 size={14} />
                Clear Cart
              </button>
            </div>

            <div className="space-y-4">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex gap-4 bg-warm-white-dark rounded-xl p-4"
                  >
                    <Link to={`/product/${item.id}`} className="w-24 h-24 rounded-lg overflow-hidden bg-midnight/5 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link to={`/product/${item.id}`} className="font-heading text-midnight text-base hover:text-gold transition-colors">
                            {item.name}
                          </Link>
                          <p className="text-silver-dark text-xs capitalize mt-0.5">{item.category}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-silver-dark hover:text-red-500 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-midnight/20 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-midnight hover:bg-midnight/5 transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-midnight text-sm font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-midnight hover:bg-midnight/5 transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="text-midnight font-bold">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-warm-white-dark rounded-xl p-6 sticky top-24">
              <h2 className="font-heading text-midnight text-xl mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-silver-dark">Subtotal</span>
                  <span className="text-midnight font-bold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-silver-dark">Shipping</span>
                  <span className={shipping === 0 ? 'text-green-600 font-bold' : 'text-midnight font-bold'}>
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-silver-dark">Tax (8%)</span>
                  <span className="text-midnight font-bold">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="h-px bg-midnight/10 mb-6" />

              <div className="flex justify-between mb-6">
                <span className="text-midnight font-bold">Total</span>
                <span className="text-midnight font-bold text-xl">${finalTotal.toFixed(2)}</span>
              </div>

              <button
                onClick={() => alert('Checkout functionality would connect to a payment processor. This is a demo store by iShiva Digital Technology.')}
                className="w-full bg-gold text-midnight py-4 rounded-lg font-bold text-sm tracking-wider uppercase hover:bg-gold-light transition-colors flex items-center justify-center gap-2 mb-4"
              >
                Proceed to Checkout
                <ArrowRight size={16} />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-silver-dark">
                  <Truck size={14} className="text-gold" />
                  {totalPrice < 75 ? (
                    <span>Add ${(75 - totalPrice).toFixed(0)} more for free shipping</span>
                  ) : (
                    <span>You qualify for free shipping!</span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-silver-dark">
                  <Package size={14} className="text-gold" />
                  <span>Ships within 1-2 business days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
