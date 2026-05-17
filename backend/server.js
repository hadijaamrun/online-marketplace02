const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

dotenv.config();

connectDB();

const app = express();

app.use(cors()); 
app.use(express.json()); 
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const cartRoutes = require('./routes/cartRoutes');
app.use('/api/cart', cartRoutes);

app.get('/', (req, res) => {
  res.send('API Marketplace Backend sedang berjalan...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});