const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const { verifyToken, verifyAdmin } = require('../middleware/authMiddleware');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add new product (admin only)
router.post('/', [verifyToken, verifyAdmin], async (req, res) => {
  const { name, description, price, category } = req.body;
  try {
    const newProduct = new Product({ name, description, price, category });
    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update product (admin only)
router.put('/:id', [verifyToken, verifyAdmin], async (req, res) => {
  const { name, description, price, category } = req.body;
  try {
    let product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    product = await Product.findByIdAndUpdate(req.params.id, { name, description, price, category }, { new: true });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete product (admin only)
router.delete('/:id', [verifyToken, verifyAdmin], async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await Product.findByIdAndRemove(req.params.id);
    res.json({ message: 'Product removed' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
