import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CartWidget() {
  return (
    <div className="d-flex">
      <span className="material-icons-outlined">shopping_cart</span>
      <span className="badge bg-danger rounded-pill ms-1">5</span>
    </div>
  );
}

export default CartWidget;