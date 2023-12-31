import { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import { addToCart, readSavedCart, removeAllProduct } from '../utils/localStorage';
import { useEffect } from 'react';

export default function Provider({ children }) {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [added, setAdded] = useState(false);

  const getQuantity = () => setQuantity(cart.reduce((acc, curr) => acc + curr.quantity, 0));

  useEffect(() => {
    setCart(readSavedCart());
  }, []);

  useEffect(() => {
    getQuantity();
  }, [cart]);

  useEffect(() => {
    
  }, []);

  const handleChange = () => {
    setCart(readSavedCart());
    setShowCart((prev) => !prev);
    getQuantity();
  };

  const removeProduct = (item) => {
    removeAllProduct(item);
    setCart(readSavedCart());
    getQuantity();
  };

  const addItemToCart = (item) => {
    addToCart({ ...item, quantity: 1 });
    setCart(readSavedCart());
    getQuantity();
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 700);
  };

  const context = {
    showCart,
    cart,
    handleChange,
    removeProduct,
    addItemToCart,
    quantity,
    getQuantity,
    added,
  };

  return (
    <Context.Provider value={ context }>{children}</Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};