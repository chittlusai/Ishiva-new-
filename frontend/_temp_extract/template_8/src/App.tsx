import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import ProductDetail from './pages/ProductDetail';
import Subscription from './pages/Subscription';
import Blog from './pages/Blog';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-light-grey">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;