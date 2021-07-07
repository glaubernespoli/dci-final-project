import { Button, Typography } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../../context/MyContext';
import { ShoppingCartRoute } from '../../../Routing/routes';

const Cart = () => {
  const { cart } = useContext(MyContext);
  const navigate = useNavigate();
  const cartQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const navigateTo = () => {
    navigate(ShoppingCartRoute);
  };
  return (
    <div>
      <Button color="inherit" onClick={() => navigateTo()}>
        <AddShoppingCartIcon />
        {cart.length > 0 && <Typography style={{ color: 'yellow' }}>{cartQuantity}</Typography>}
      </Button>
    </div>
  );
};
export default Cart;
