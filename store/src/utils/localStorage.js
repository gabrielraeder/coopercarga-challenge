const CART_ITEMS = 'cartItems';

export const readSavedCart = () => {
  if (!JSON.parse(localStorage.getItem(CART_ITEMS))) {
    localStorage.setItem(CART_ITEMS, JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem(CART_ITEMS));
};

const saveCartProducts = (cartItems) => localStorage
  .setItem(CART_ITEMS, JSON.stringify(cartItems));

const addQuantityToProduct = (savedCart, product) => {
  const newInfo = savedCart.map((item) => {
    if (product.name === item.name && product.size === item.size) {
      item.quantity += product.quantity;
    }
    return item;
  });
  saveCartProducts(newInfo);
};

const addIdToNewProduct = (savedCart, product) => {
  if (savedCart.length) {
    saveCartProducts([...savedCart, { ...product, id: savedCart[savedCart.length - 1].id + 1 }]);
  } else {
    saveCartProducts([...savedCart, { ...product, id: 1 }]);
  }
};

export const addToCart = (product) => {
  const savedCart = readSavedCart();
  const savedProduct = savedCart.find((item) => product.name === item.name && product.size === item.size);
  if (savedProduct) {
    addQuantityToProduct(savedCart, product);
  } else {
    addIdToNewProduct(savedCart, product);
  }
};

export const removeAllProduct = (product) => {
  const savedCart = readSavedCart();
  saveCartProducts(savedCart.filter((item) => item.id !== product.id));
};