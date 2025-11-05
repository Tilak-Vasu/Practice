import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header>
      <div className="logo"> My app </div>
      <Link to="/cart">
        {' '}
        <button> Cart ({cartItemCount}) </button>
      </Link>
    </header>
  );
}
export default Header;
