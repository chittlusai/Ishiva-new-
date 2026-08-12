import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import Rentals from './pages/Rentals'
import Lessons from './pages/Lessons'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import { CartProvider } from './lib/cart'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-dvh">
          <SiteHeader />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:id" element={<Category />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/rentals" element={<Rentals />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <SiteFooter />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
