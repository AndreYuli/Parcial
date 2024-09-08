// src/pages/ProductList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://parcial.nucleoslabs.com.co/api/v1/productos/listar')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
      {products.map(product => (
        <div key={product._id} style={{ border: '1px solid #ccc', padding: '16px', textAlign: 'center' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <Link to={`/product/${product._id}`}>
            <button>Ver Detalle</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
