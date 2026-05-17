const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Nama produk wajib diisi'],
    },
    description: {
      type: String,
      required: [true, 'Deskripsi produk wajib diisi'],
    },
    price: {
      type: Number,
      required: [true, 'Harga produk wajib diisi'],
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    category: {
      type: String,
      required: [true, 'Kategori produk wajib diisi'], 
    },
    imageUrl: {
      type: String, 
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);