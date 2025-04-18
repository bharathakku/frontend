import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/products`);
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [BASE_URL]);

  if (loading) return <div className="text-center mt-5">Loading products…</div>;
  if (error)   return <div className="alert alert-danger">{error}</div>;

  return (
    <div>
      <h2 className="mb-4">Featured Products</h2>
      <div className="row">
        {products.map(prod => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={prod._id}>
            <ProductCard product={prod} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
