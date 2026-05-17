import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../style/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartContext); 
  const user = JSON.parse(localStorage.getItem('user'));

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const logout = () => {
    localStorage.clear();
    setCartItems([]); 
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="brand">rt<span>02</span></Link>
        <div className="nav-links">
          <Link to="/">Beranda</Link>
          <Link to="/products">Katalog</Link>
        </div>
        <div className="nav-actions">
          <Link to="/cart" className="cart-icon">
            🛒 <span className="badge">{cartCount}</span>
          </Link>
          {user ? (
            <div className="user-menu">
              <span>Halo, {user.name.split(' ')[0]}</span>
              <button onClick={logout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="login-btn">Masuk</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;