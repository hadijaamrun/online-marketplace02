const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product'); 

dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/marketplace_db')
  .then(() => console.log('MongoDB Connected ke database marketplace_db...'))
  .catch(err => console.log('Koneksi Gagal:', err));

const products = [
  {
    name: "Dispenser Air",
    price: 350000,
    description: "Dispenser hemat energi dengan fitur pengatur suhu instan (panas dan dingin) serta desain elegan.",
    stock: 20,
    category: "Elektronik Rumah",
    imageUrl: "/uploads/dispenser.jpg" 
  },
  {
    name: "Microwave",
    price: 850000,
    description: "Microwave dengan kapasitas besar, pemanasan merata, dan konsumsi daya rendah untuk dapur modern Anda.",
    stock: 12,
    category: "Dapur",
    imageUrl: "/uploads/microwave.jpg"
  },
  {
    name: "Penanak Nasi",
    price: 450000,
    description: "Rice cooker serbaguna dengan teknologi kecerdasan digital untuk memasak nasi, bubur, hingga mengukus kue.",
    stock: 25,
    category: "Dapur",
    imageUrl: "/uploads/penanak-nasi.jpg"
  },
  {
    name: "Mesin Cuci",
    price: 3200000,
    description: "Mesin cuci pintar berkapasitas besar dengan fitur pengering otomatis dan teknologi inverter antibising.",
    stock: 8,
    category: "Elektronik Rumah",
    imageUrl: "/uploads/mesin-cuci.jpg"
  },
  {
    name: "Smart Television 4K",
    price: 2750000,
    description: "Nikmati hiburan tanpa batas dengan kualitas layar jernih, bezel tipis, dan konektivitas Android TV.",
    stock: 10,
    category: "Hiburan",
    imageUrl: "/uploads/television.jpg"
  },
  {
    name: "Setrika Listrik",
    price: 180000,
    description: "Setrika uap praktis anti lengket, mempercepat proses merapikan pakaian tanpa merusak serat kain halus.",
    stock: 30,
    category: "Elektronik Rumah",
    imageUrl: "/uploads/setrika.jpg"
  }
];

const importData = async () => {
  try {
    await Product.deleteMany();
    console.log('Data lama dibersihkan!');
    await Product.insertMany(products);
    console.log('Katalog produk berhasil ditambahkan ke database!');
    
    process.exit();
  } catch (error) {
    console.error('Gagal memasukkan data seeder:', error);
    process.exit(1);
  }
};

importData();