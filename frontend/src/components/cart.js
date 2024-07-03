import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart, removeFromCart } from '../redux/actions/cartActions';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      {cart && cart.products.map(product => (
        <div key={product.productId._id}>
          <h2>{product.productId.name}</h2>
          <p>{product.quantity}</p>
          <button onClick={() => handleRemoveFromCart(product.productId._id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
