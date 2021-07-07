// const countShoppingCartItem = () => {
//   const cartFromLocalStorage = JSON.parse(localStorage.getItem('shoppingCart'));
//   //   console.log(cartFromLocalStorage);
//   const items = cartFromLocalStorage.map((product) => product.products);
//   const cartItems = items[0];
//   const count = cartItems.map((item) => item.amount);
//   const ShoppingItemsCount = count.reduce((a, b) => a + b, 0);
//   return ShoppingItemsCount;
// };

// export default countShoppingCartItem;

// const addToCart = () => {
//   // if user not logged in, log them in before adding to cart
//   if (!user) {
//     loginWithRedirect();
//   }

//   /**
//    * @type {Array}
//    */
//   // gets the shopping cart from the local storage
//   let shoppingCart = JSON.parse(localStorage.getItem(SHOPPING_CART_ID));
//   // if its the first time adding the shopping cart to the local storage
//   // it doesn't exist, so initialize
//   if (!shoppingCart) {
//     shoppingCart = [];
//   }

//   // tries to find a shopping cart to the current user
//   const userShoppingCartIdx = shoppingCart.findIndex(
//     (userShoppingCart) => userShoppingCart.user === user.sub
//   );
//   let userShoppingCart;
//   // if a shopping cart to the current user doesn't exist, initialize
//   if (userShoppingCartIdx < 0) {
//     userShoppingCart = {
//       user: user.sub,
//       products: []
//     };
//   } else {
//     userShoppingCart = shoppingCart[userShoppingCartIdx];
//   }

//   // tries to find the current product in the users shopping cart
//   const currentProductIdx = userShoppingCart.products.findIndex(
//     (product) => product.productId === itemId
//   );
//   // if its not in the shopping cart yet, add it with quantity 1
//   if (currentProductIdx < 0) {
//     userShoppingCart.products.push({
//       productId: itemId,
//       amount: 1
//     });
//     // if it is in the shopping cart, then just add quantity /1
//   } else {
//     const currentProduct = userShoppingCart.products[currentProductIdx];
//     currentProduct.amount += 1;
//   }

//   // if the shopping cart from the user was not in the local storage, just add it
//   if (userShoppingCartIdx < 0) {
//     shoppingCart.push(userShoppingCart);
//     // if it was, replace it with the new object that has the new amount
//   } else {
//     shoppingCart[userShoppingCartIdx] = userShoppingCart;
//   }

//   // save the action in the local storage
//   localStorage.setItem(SHOPPING_CART_ID, JSON.stringify(shoppingCart));
// };
