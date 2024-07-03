const express = require('express');
const router = express.Router();
const Cart = require('../models/cartModel');
const { verifyToken } = require('../middleware/authMiddleware');

// Get user's cart
router.get('/', verifyToken, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate('products.productId');
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add item to cart
router.post('/', verifyToken, async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId: req.user.id });

    if (cart) {
      const itemIndex = cart.products.findIndex(p => p.productId.toString() === productId);

      if (itemIndex > -1) {
        cart.products[itemIndex].quantity += quantity;
      } else {
        cart.products.push({ productId, quantity });
      }

      cart = await cart.save();
      return res.json(cart);
    } else {
      const newCart = new Cart({
        userId: req.user.id,
        products: [{ productId, quantity }]
      });

      const savedCart = await newCart.save();
      return res.json(savedCart);
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Remove item from cart
router.delete('/:productId', verifyToken, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    const itemIndex = cart.products.findIndex(p => p.productId.toString() === req.params.productId);

    if (itemIndex > -1) {
      cart.products.splice(itemIndex, 1);
      await cart.save();
      return res.json(cart);
    } else {
      return res.status(404).json({ message: 'Item not found in cart' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
