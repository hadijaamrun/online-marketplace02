import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import { CartContext } from '../context/CartContext';
import '../style/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null); 
        const { data } = await api.get(`/products/${id}`);
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError('Detail produk tidak ditemukan atau terjadi gangguan koneksi.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Memuat detail produk...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <p style={{ marginBottom: '1.5rem', color: '#ef4444', fontWeight: '600' }}>{error}</p>
        <Link to="/products" className="btn-outline" style={{ padding: '0.6rem 1.5rem', textDecoration: 'none' }}>
          &larr; Kembali ke Katalog
        </Link>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <Link to="/products" className="back-link">&larr; Kembali ke Katalog</Link>
      <div className="product-detail-card">
        
        <div className="detail-image-section">
          {product && product.image ? (
            <img 
              src={product.image} 
              alt={product.name} 
              className="detail-image" 
            />
          ) : (
            <div className="detail-image-placeholder">Gambar Tidak Tersedia</div>
          )}
        </div>
        
        <div className="detail-info-section">
          <span className="detail-category">{product?.category}</span>
          <h1 className="detail-title">{product?.name}</h1>
          <div className="detail-price">
            Rp {product?.price ? product.price.toLocaleString('id-ID') : '0'}
          </div>
          <div className="detail-divider"></div>
          <div className="detail-description">
            <h3>Deskripsi</h3>
            <p>{product?.description}</p>
          </div>
          <div className="detail-stock">
            <span className="stock-label">Stok:</span>
            <span className="stock-value">{product?.stock} unit</span>
          </div>
          
          <button onClick={() => addToCart(product?._id)} className="btn-add-cart">
            🛒 Tambahkan ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;