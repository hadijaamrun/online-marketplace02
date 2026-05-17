import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../style/Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const token = localStorage.getItem('token');
  if (!token) {
    return (
      <div className="cart-unauthorized">
        <div className="unauthorized-content">
          <h2>Akses Ditolak</h2>
          <p>Anda harus login terlebih dahulu untuk melihat dan mengelola keranjang belanja Anda.</p>
          <Link to="/login" className="btn-redirect-login">Pergi ke Halaman Login</Link>
        </div>
      </div>
    );
  }

  const validItems = cartItems.filter(item => item && item.product);

  const handleCheckout = () => {
    alert('Checkout Berhasil! Pesanan Anda sedang diproses.');
    clearCart(); 
  };

  const total = validItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <div className="cart-container">
      <h2>Keranjang Belanja Anda</h2>
      
      {validItems.length === 0 ? (
        <div className="empty-cart">
          <p>Keranjang Anda masih kosong. Yuk, cari barang impianmu!</p>
          <Link to="/products" className="checkout-btn" style={{marginTop: '1rem', display: 'inline-block'}}>Mulai Belanja</Link>
        </div>
      ) : (
        <div className="cart-content">
          <ul className="cart-list">
            {validItems.map((item) => (
              <li key={item.product._id} className="cart-item">
                <div className="cart-item-info">
                  <span className="cart-item-name">{item.product.name}</span>
                  <span className="cart-item-qty">x{item.quantity}</span>
                </div>
                <div className="cart-item-action">
                  <span className="cart-item-price">
                    Rp {(item.product.price * item.quantity).toLocaleString('id-ID')}
                  </span>
                  <button onClick={() => removeFromCart(item.product._id)} className="btn-remove">
                    Hapus
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total Belanja: <span>Rp {total.toLocaleString('id-ID')}</span></h3>
            <button onClick={handleCheckout} className="checkout-btn">Proses Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;