const Cart = require('../models/cartModel');

const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id }).populate('products.productId');
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      cart = new Cart({ userId: req.user._id, products: [{ productId, quantity }] });
    } else {
      const productIndex = cart.products.findIndex(p => p.productId == productId);
      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({ productId, quantity });
      }
    }
    const savedCart = await cart.save();
    res.status(201).json(savedCart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const removeFromCart = async (req, res) => {
  const { productId } = req.params;

  try {
    let cart = await Cart.findOne({ userId: req.user._id });
    cart.products = cart.products.filter(p => p.productId != productId);
    const savedCart = await cart.save();
    res.json(savedCart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getCart, addToCart, removeFromCart };
