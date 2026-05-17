import { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const { data } = await api.get('/cart');
        setCartItems(data.items || []);
      } catch (error) {
        console.error("Gagal mengambil data keranjang dari database", error);
      }
    } else {
      setCartItems([]);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (productId) => {
    const token = localStorage.getItem('token');
    if (!token) return alert('Silakan login terlebih dahulu!');
    try {
      const { data } = await api.post('/cart', { productId });
      setCartItems(data.items);
      alert('Produk berhasil disimpan ke database keranjang!');
    } catch (error) {
      alert('Gagal menambahkan ke keranjang database');
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const { data } = await api.delete(`/cart/${productId}`);
      setCartItems(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  const clearCart = async () => {
    try {
      await api.delete('/cart');
      setCartItems([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, fetchCart, addToCart, removeFromCart, clearCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};