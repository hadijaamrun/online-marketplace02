import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { CartContext } from '../context/CartContext';
import '../style/Auth.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();
  
  const { fetchCart } = useContext(CartContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? '/auth/login' : '/auth/register';
      const { data } = await api.post(endpoint, formData);
      
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data));
      
      await fetchCart(); 

      alert(isLogin ? 'Login Berhasil!' : 'Registrasi Berhasil!');
      navigate('/'); 
    } catch (error) {
      alert(error.response?.data?.message || 'Terjadi kesalahan pada server');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <div className="auth-header">
          <h2>rt<span>02</span></h2>
          <p>{isLogin ? 'Silakan masuk ke akun Anda' : 'Buat akun baru Anda'}</p>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input type="text" name="name" id="name" onChange={handleChange} required />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleChange} required />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange} required />
          </div>

          <button type="submit" className="btn-submit">
            {isLogin ? 'Masuk' : 'Daftar'}
          </button>
        </form>

        <div className="auth-switch">
          <p>
            {isLogin ? 'Belum punya akun? ' : 'Sudah punya akun? '}
            <button type="button" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Daftar' : 'Masuk'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;