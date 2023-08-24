import { useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import CartButton from './components/CartButton';
import CartModal from './components/CartModal';
import MyNavbar from './components/Navbar';
import { readSavedCart } from './utils/localStorage';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleChange = () => {
    setCart(readSavedCart());
    setShowCart((prev) => !prev);
  };

  return (
    <>
      <MyNavbar/>
      <CardList/>
      <CartButton handler={handleChange}/>
      <CartModal storageCart={cart} showCart={showCart} handler={handleChange}/>
    </>
  );
}

export default App;
