const countShoppingCartItem = () => {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('shoppingCart'));
  //   console.log(cartFromLocalStorage);
  const items = cartFromLocalStorage.map((product) => product.products);
  const cartItems = items[0];
  const count = cartItems.map((item) => item.amount);
  const ShoppingItemsCount = count.reduce((a, b) => a + b, 0);
  return ShoppingItemsCount;
};

export default countShoppingCartItem;
