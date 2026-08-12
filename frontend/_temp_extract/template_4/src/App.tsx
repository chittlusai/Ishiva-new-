import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GoalsPage from './pages/GoalsPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import BlogPage from './pages/BlogPage';
import QuizPage from './pages/QuizPage';
import CartPage from './pages/CartPage';
import type { Product } from './data/products';

interface CartItem {
  product: Product;
  quantity: number;
}

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const removeItem = useCallback((productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  }, []);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Header cartCount={cartCount} />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={(product) => addToCart(product, 1)} />} />
            <Route path="/goals" element={<GoalsPage />} />
            <Route path="/product" element={<ProductPage onAddToCart={(product) => addToCart(product, 1)} />} />
            <Route path="/product/:id" element={<ProductDetailPage onAddToCart={addToCart} />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/quiz" element={<QuizPage onAddToCart={(product) => addToCart(product, 1)} />} />
            <Route path="/cart" element={<CartPage cart={cart} onUpdateQuantity={updateQuantity} onRemoveItem={removeItem} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
