import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductDetail from './ProductDetail';
import ProductListPage from './ProductListPage';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import SignUpPage from './SignUpPage';
import CartPage from './CartPage';

function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);
  const handleAddToCart = (productId, count) => {
    let oldCount = cart[productId] || 0;

    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  };

  const totalCount = Object.keys(cart).reduce(function(previous, current) {
    return previous + cart[current];
  }, 0);

  return (
    <div className="bg-gray-100 h-screen overflow-scroll flex flex-col ">
      <Navbar productCount={totalCount} />
      <div className="grow">
        <Routes>
          <Route index element={<ProductListPage />}></Route>
          <Route path="/products/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<CartPage cart={cart}/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;