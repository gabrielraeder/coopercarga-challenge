/* eslint-disable max-len */
import {  Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import Context from '../context/context';
export default function ProductDetail({ showModal, handler, item }) {
  const {
    addItemToCart,
    added,
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
        {
          added && <span>
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <rect 
                width="256"
                height="256"
                fill="none"/>
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"/>
            </svg>
          </span>
        }
        <Button onClick={() => addItemToCart(item)} className={added && 'green'}>Add to Cart</Button>
      </Modal.Footer>
    </Modal>
  );
}

ProductDetail.propTypes = {
  item: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};