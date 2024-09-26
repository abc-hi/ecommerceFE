


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import ProductDetails from './components/ProductDetails.jsx'; // Import ProductDetails
import Cart from './components/Cart.jsx';
import { CartProvider } from './components/CartContext.jsx'; // Import CartProvider
import CartIcon from './components/CartIcon.jsx'; // Import CartIcon

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        {/* Render CartIcon and other components outside of Routes */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
          <h1>Welcome Revas Online Shop</h1>
          <CartIcon /> {/* Render CartIcon */}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetails />} /> {/* New Route for Product Details */}
          <Route path="/cart" element={<Cart />} /> {/* Cart route */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
