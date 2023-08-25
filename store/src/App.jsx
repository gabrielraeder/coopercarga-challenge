import './App.css';
import CardList from './components/CardList';
import CartButton from './components/CartButton';
import CartModal from './components/CartModal';
import MyNavbar from './components/Navbar';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <MyNavbar/>
      <CardList/>
      <CartButton/>
      <CartModal/>
    </Provider>
  );
}

export default App;
