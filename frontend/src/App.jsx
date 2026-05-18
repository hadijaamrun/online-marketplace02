import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';

const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;
if (TRACKING_ID) {
  ReactGA.initialize(TRACKING_ID);
}

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (TRACKING_ID) {
      ReactGA.send({ 
        hitType: "pageview", 
        page: location.pathname + location.search, 
        title: document.title 
      });
    }
  }, [location]);

  return null; 
};

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      
      <div className="app-container">
        <Navbar />
        <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;