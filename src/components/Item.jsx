import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <Card className="mb-3">
      <Card.Header as="header">
        <h2 className="ItemHeader">{name}</h2>
      </Card.Header>
      <Card.Img variant="top" src={img} alt={name} className="ItemImg" />
      <Card.Body>
        <Link className="option">
          <Button variant="primary">See more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;