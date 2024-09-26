
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4001/api/readallproducts');
      const data = Array.isArray(response.data) ? response.data : response.data.products;

      if (data) {
        setProducts(data);
      } else {
        throw new Error("Unexpected data format");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '20px' }}>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.length > 0 ? (
            products.map((item) => (
              <div key={item._id} className="col" onClick={() => handleProductClick(item._id)}>
                <div className="card shadow-sm" style={{ cursor: 'pointer', border: 'none' }}>
                  <img src={item.image} className="card-img-top" alt={item.productName} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title">{item.productName}</h5>
                    <p className="card-text">{item.description.length > 50 ? item.description.substring(0, 50) + '...' : item.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">Stock: {item.stock}</small>
                      <small className="text-muted">Price: ${item.price}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
