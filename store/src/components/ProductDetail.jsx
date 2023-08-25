import {  Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import Context from '../context/context';
export default function ProductDetail({ showModal, handler, item }) {
  const {
    addItemToCart,
  } = useContext(Context);

  return (
    <Modal show={showModal} onHide={handler}>
      <Modal.Header closeButton>
        <Modal.Title>{item.name}</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <div className="text-center">
          <img src={item.image_url} alt={item.name} className="img-fluid" />
        </div>
        <p>Description: {item.details}</p>
        <p>Price: ${item.price}</p>
        <p>Sizes: {item.available_sizes.reduce((acc, curr) => acc + '  ' + curr,'')}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => addItemToCart(item)}>Add to Cart</Button>
      </Modal.Footer>
    </Modal>
  );
}

ProductDetail.propTypes = {
  item: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired,
  addBtn: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  
};