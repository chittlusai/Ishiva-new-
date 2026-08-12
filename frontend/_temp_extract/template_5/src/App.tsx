import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Goals from './pages/Goals';
import Product from './pages/Product';
import Compare from './pages/Compare';
import Stack from './pages/Stack';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="goals" element={<Goals />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="compare" element={<Compare />} />
          <Route path="stack" element={<Stack />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
