import { Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../../context/MyContext';
import { ShoppingListRoute } from '../../../Routing/routes';

const Cart = () => {
  const context = useContext(MyContext);
  const { cartItems, setCartItemPage } = context;
  const navigate = useNavigate();

  const CartNavigateTo = () => {
    navigate(ShoppingListRoute);
    setCartItemPage(cartItems);
  };

  return (
    <div>
      <Button color="inherit" onClick={CartNavigateTo}>
        <AddShoppingCartIcon />
        <h4 style={{ color: 'yellow' }}>{cartItems.length}</h4>
      </Button>
    </div>
  );
};

export default Cart;
