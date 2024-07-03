import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

function ProductDetail({ match }) {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.item);

  useEffect(() => {
    dispatch(fetchProduct(match.params.id));
  }, [dispatch, match.params.id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product._id, 1));
  };

  return (
    <div>
      {product && (
        <>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </>
      )}
    </div>
  );
}

export default ProductDetail;
