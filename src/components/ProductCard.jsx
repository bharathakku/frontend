import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card h-100">
      <Link to={`/product/${product._id}`}>
        <img 
          src={product.image} 
          className="card-img-top" 
          alt={product.name} 
          style={{ objectFit: 'cover', height: '200px' }}
        />
      </Link>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text mt-auto fw-bold">₹{product.price}</p>
        <Link to={`/product/${product._id}`} className="btn btn-primary mt-2">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
