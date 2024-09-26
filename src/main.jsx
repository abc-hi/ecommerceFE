import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { CartProvider } from './components/CartContext.jsx'; // Import the CartProvider

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);
