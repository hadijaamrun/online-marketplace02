import { useState, useEffect } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';
import '../style/Products.css'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); 
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (err) {
        console.error(err);
        setError('Gagal memuat produk. Silakan coba lagi nanti.');
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Memuat produk...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-container">{error}</div>;
  }

  return (
    <div className="product-page">
      <h2>Katalog Produk</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img 
              src={product.imageUrl || product.image} 
              alt={product.name} 
            />
            <h3>{product.name}</h3>
            <p className="price">Rp {product.price.toLocaleString('id-ID')}</p>
            <Link to={`/products/${product._id}`} className="btn-detail">
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;