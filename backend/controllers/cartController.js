const Cart = require('../models/Cart');

exports.getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    if (!cart) {
      cart = await Cart.create({ user: req.user._id, items: [] });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = await Cart.create({
        user: req.user._id,
        items: [{ product: productId, quantity: 1 }],
      });
    } else {
      const itemIndex = cart.items.findIndex((p) => p.product.toString() === productId);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += 1; 
      } else {
        cart.items.push({ product: productId, quantity: 1 }); 
      }
      await cart.save();
    }
    
    cart = await cart.populate('items.product');
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    let cart = await Cart.findOne({ user: req.user._id });

    if (cart) {
      cart.items = cart.items.filter((p) => p.product.toString() !== productId);
      await cart.save();
      cart = await cart.populate('items.product');
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: 'Keranjang tidak ditemukan' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.clearCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });
    if (cart) {
      cart.items = [];
      await cart.save();
    }
    res.status(200).json({ message: 'Keranjang berhasil dikosongkan untuk Checkout' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};