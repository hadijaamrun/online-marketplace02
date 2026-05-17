import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Komponen Navigasi
import Navbar from './components/Navbar';

// Import Seluruh Halaman Marketplace
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar dipasang di luar Routes agar selalu muncul di bagian atas semua halaman */}
        <Navbar />
        
        {/* Pembungkus konten utama dengan sedikit styling konvensional agar tampilan rapi di tengah */}
        <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', minHeight: '80vh' }}>
          <Routes>
            {/* Route Halaman Beranda */}
            <Route path="/" element={<Home />} />
            
            {/* Route Halaman Daftar Produk */}
            <Route path="/products" element={<ProductList />} />
            
            {/* Route Halaman Detail Produk Berdasarkan ID */}
            <Route path="/products/:id" element={<ProductDetail />} />
            
            {/* Route Halaman Keranjang Belanja */}
            <Route path="/cart" element={<Cart />} />
            
            {/* Route Halaman Login & Registrasi */}
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;