import React from 'react';

function ItemListContainer(props) {
  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-body">
          <h2>{props.greeting}</h2>
          <p>¡Bienvenido a Mi Tienda! Explora nuestras categorías y encuentra lo que estás buscando.</p>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;