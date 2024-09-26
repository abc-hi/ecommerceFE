

import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from './CartContext'; // Import CartContext

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext); // Use CartContext
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`https://ecommercebe-h822.onrender.com/api/readproduct/${id}`);
      setProduct(response.data.product);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    addToCart(product); // Use addToCart from context
    alert(`${product.productName} added to cart!`);
    navigate('/cart');
  };

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    product && (
      <div style={{ padding: '20px' }}>
        <h2>{product.productName}</h2>
        <img src={product.image} alt={product.productName} style={{ width: '300px' }} />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Stock: {product.stock}</p>
        <p>Category: {product.category}</p>
        <p>Brand: {product.brand}</p>
        <button onClick={handleAddToCart} className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    )
  );
};

export default ProductDetails;
