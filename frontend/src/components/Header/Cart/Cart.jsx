import { Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ShoppingCartRoute } from '../../../Routing/routes';
import countShoppingCartItem from './CountCartItem';

export const SHOPPING_CART_ID = 'shoppingCart';

const Cart = () => {
  // const navigate = useNavigate();
  // const [amount, setAmount] = useState(cartFromLocalStorage);
  const [amount, setAmount] = useState(0);

  // const CartNavigateTo = () => {
  //   navigate(ShoppingCartRoute);
  // };

  useEffect(() => {
    // create a separate file to contain the cart logic (addItem, removeItem, totalItems etc)
    // you use the totalItem from the other file
    /* the totalItem function should just count the length of
      the products array from the localStorage */
    // get from the localStorage from the current user
    //  localStorage.setItem('shoppingCart', JSON.stringify());
    // set on the amount value
    setAmount(countShoppingCartItem());
  }, [amount]);

  return (
    <div>
      <Button color="inherit">
        <AddShoppingCartIcon />
        <h4 style={{ color: 'yellow' }}>{amount}</h4>
      </Button>
    </div>
  );
};

export default Cart;
