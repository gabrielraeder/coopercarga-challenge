const CART_ITEMS = 'cartItems';

export const readSavedCart = () => {
  if (!JSON.parse(localStorage.getItem(CART_ITEMS))) {
    localStorage.setItem(CART_ITEMS, JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem(CART_ITEMS));
};

const saveCartProducts = (cartItems) => localStorage
  .setItem(CART_ITEMS, JSON.stringify(cartItems));


export const addToCart = (product) => {
  const savedCart = readSavedCart();
  const savedProduct = savedCart.find((item) => product.name === item.name);
  if (savedProduct) {
    const newInfo = savedCart.map((item) => {
      if (product.name === item.name) {
        item.quantity += product.quantity;
      }
      return item;
    });
    saveCartProducts(newInfo);
  } else {
    saveCartProducts([...savedCart, product]);
  }
};

export const removeFromCart = (product) => {
  const savedCart = readSavedCart();
  const filterIdenticalProducts = savedCart.filter((item) => item.name === product.name);
  const filterOtherProducts = savedCart.filter((item) => item.name !== product.name);
  filterIdenticalProducts.pop();
  saveCartProducts([...filterIdenticalProducts, ...filterOtherProducts]);
};

export const removeAllProduct = (product) => {
  const savedCart = readSavedCart();
  saveCartProducts(savedCart.filter((item) => item.name !== product.name));
};