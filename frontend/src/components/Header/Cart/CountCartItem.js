// Handling the addToCart button
const addToCartHandle = (item, cart, setCart) => {
  const foundIndex = cart.findIndex((cartItem) => cartItem._id === item._id);
  if (foundIndex >= 0) {
    const copyCart = [...cart];
    copyCart[foundIndex].quantity += 1;
    setCart([...copyCart]);
  } else {
    // eslint-disable-next-line no-param-reassign
    item.quantity = 1;
    setCart([...cart, item]);
  }
};
export default addToCartHandle;
