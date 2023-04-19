import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ id, name, img, category, description }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = (newQuantity) => {
    console.log("Add ammount: ", newQuantity);
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categoria: {category}</p>
        <p className="Info">Descripcion: {description}</p>
      </section>
      <footer className="ItemFooter">
        <ItemCount
          initial={1}
          onAdd={handleAdd}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;