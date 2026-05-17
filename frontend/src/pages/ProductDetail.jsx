import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import { CartContext } from '../context/CartContext';
import '../style/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  
  const BACKEND_URL = "http://localhost:5000"; 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await api.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div className="loading-state">Memuat detail produk...</div>;

  return (
    <div className="product-detail-container">
      <Link to="/products" className="back-link">&larr; Kembali ke Katalog</Link>
      <div className="product-detail-card">
        
        <div className="detail-image-section">
           {product.imageUrl ? (
             <img 
               src={`${BACKEND_URL}${product.imageUrl}`} 
               alt={product.name} 
               className="detail-image" 
             />
           ) : (
             <div className="detail-image-placeholder">Gambar Tidak Tersedia</div>
           )}
        </div>
        
        <div className="detail-info-section">
          <span className="detail-category">{product.category}</span>
          <h1 className="detail-title">{product.name}</h1>
          <div className="detail-price">Rp {product.price.toLocaleString('id-ID')}</div>
          <div className="detail-divider"></div>
          <div className="detail-description">
            <h3>Deskripsi</h3>
            <p>{product.description}</p>
          </div>
          <div className="detail-stock">
            <span className="stock-label">Stok:</span>
            <span className="stock-value">{product.stock} unit</span>
          </div>
          
          <button onClick={() => addToCart(product._id)} className="btn-add-cart">
            🛒 Tambahkan ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;