import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductDetail from './ProductDetail';

const StoreItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Card style={{ width: '18rem' }} className="card" onClick={handleShow}>
        <Card.Img variant="top" src={item.image_url} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>${item.price}</Card.Text>
        </Card.Body>
      </Card>
      <ProductDetail showModal={showModal} handler={handleShow} item={item}/>
    </>
  );
};

export default StoreItem;

StoreItem.propTypes = {
  item: PropTypes.object.isRequired,
};