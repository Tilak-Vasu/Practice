import React from 'react';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../features/cart/cartSlice';

const products = [
  { id: 1, name: 'pants', price: 22 },
  { id: 2, name: 'LV shoes', price: 44 },
  { id: 3, name: 'Nike Shirt', price: 12 },
];

function Products() {
  const dispatch = useDispatch();

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addtoCart(product))}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
