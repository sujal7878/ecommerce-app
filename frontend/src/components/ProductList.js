import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {products.map(product => (
        <div key={product._id}>
          <Link to={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </Link>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
