import React from 'react';
import ProductDetail from '../components/ProductDetail';

function ProductDetails({ match }) {
  return (
    <div>
      <ProductDetail match={match} />
    </div>
  );
}

export default ProductDetails;
