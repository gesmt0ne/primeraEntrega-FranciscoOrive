import React, { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${props.name} to cart!`);
  };

  return (
    <div className="item-detail">
      <img src={props.img} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>Price: ${props.price}</p>
      <ItemCount stock={props.stock} initial={1} onAdd={setQuantity} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ItemDetail;
