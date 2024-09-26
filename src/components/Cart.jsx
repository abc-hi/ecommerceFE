


import React, { useContext } from 'react';
import { CartContext } from './CartContext'; // Import CartContext

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Use context

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      {cartItems.map((item) => (
        <div key={item._id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
          <h3>{item.productName}</h3>
          <img src={item.image} alt={item.productName} style={{ width: '100px' }} />
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => removeFromCart(item._id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
