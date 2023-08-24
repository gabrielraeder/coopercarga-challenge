/* eslint-disable max-len */
import { Modal } from 'react-bootstrap';
import { readSavedCart, removeAllProduct } from '../utils/localStorage';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function CartModal({ storageCart, showCart, handler }) {
  const [cart, setCart] = useState(storageCart);
  useEffect(() => {
    setCart(readSavedCart());
  }, [showCart]);
  
  const removeProduct = (item) => {
    removeAllProduct(item);
    setCart(readSavedCart());
  };

  return (
    <Modal show={showCart} onHide={handler}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body className='cartModalBody'>
        {
          cart.map((item, idx) => (
            <div className='modalCartCard' key={idx}>
              <img src={item.image_url} alt="" />
              <div className='cartText'>
                <h5>{item.name}</h5>
                <p>{item.quantity} x ${item.price}</p>
              </div>
              <h5>${item.price * item.quantity}</h5>
              <div onClick={() => removeProduct(item)}>
                <svg className="excludeBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/></svg>
              </div>
            </div>
          ))
        }
        <h3> Total: $ 
          {
            cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0).toFixed(2)
          }
        </h3>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}

CartModal.propTypes = {
  handler: PropTypes.func.isRequired,
  showCart: PropTypes.bool.isRequired,
  storageCart: PropTypes.array.isRequired,
};
