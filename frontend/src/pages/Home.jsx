import { Link } from 'react-router-dom';
import heroImage from '../assets/gambar-hero.jpg';
import '../style/Home.css';

const Home = () => {
  const token = localStorage.getItem('token');

  return (
    <div className="hero-section">
      <div className="hero-content">
        <span className="tagline">Solusi Cerdas Rumah Tangga</span>
        <h1>Lengkapi Rumahmu <br/> Bersama <span>rt02</span></h1>
        <p>Temukan peralatan rumah tangga modern dengan desain minimalis dan kualitas terjamin untuk keluarga Indonesia.</p>
        
        <div className="hero-btns">
          <Link to="/products" className="btn-primary">Mulai Belanja</Link>
          
          {!token ? (
            <Link to="/login" className="btn-outline">Daftar Akun</Link>
          ) : (
            <Link to="/cart" className="btn-outline">Lihat Keranjangmu</Link>
          )}
        </div>
      </div>
      
      <div className="hero-image">
        <div className="image-blob">
          <img src={heroImage} alt="Ilustrasi Belanja rt02" />
        </div>
      </div>
    </div>
  );
};

export default Home;