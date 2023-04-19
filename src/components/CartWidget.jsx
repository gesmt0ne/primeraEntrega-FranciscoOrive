import React from 'react';
import cart from '../assets/carrito.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => (
  <div className="cart-widget d-flex align-items-center">
    <img src={cart} alt="Cart" className="me-2" width={40} height={40} />
    <span className="cart-count badge bg-secondary rounded-pill">0</span>
  </div>
);

export default CartWidget;