import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Watches from './pages/Watches';
import Jewelry from './pages/Jewelry';
import Product from './pages/Product';
import Gift from './pages/Gift';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-warm-white">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watches" element={<Watches />} />
              <Route path="/jewelry" element={<Jewelry />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/gift" element={<Gift />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
