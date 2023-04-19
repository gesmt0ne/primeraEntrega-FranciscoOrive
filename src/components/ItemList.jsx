import Item from "./Item";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products &&
          products.map((prod) => (
            <div className="col-md-4" key={prod.id}>
              <Item {...prod} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ItemList;