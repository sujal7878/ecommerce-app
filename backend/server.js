const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); 
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoute');
const cartRoutes = require('./routes/cartRoute');

require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
