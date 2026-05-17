import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import '../style/Products.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get('/products');
        setProducts(data);
      } catch (error) {
        console.error("Gagal mengambil data produk", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Katalog Peralatan Rumah Tangga</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <div className="product-img-container">
              {product.imageUrl ? (
                <img 
                  src={`${BACKEND_URL}${product.imageUrl}`} 
                  alt={product.name} 
                  className="product-img" 
                />
              ) : (
                <div className="product-img-placeholder">Tidak Ada Gambar</div>
              )}
            </div>

            <h3>{product.name}</h3>
            <p>Rp {product.price.toLocaleString('id-ID')}</p>
            <Link to={`/products/${product._id}`} className="view-btn">Lihat Detail</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;