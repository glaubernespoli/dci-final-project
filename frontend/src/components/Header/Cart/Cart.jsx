import { Button, Typography } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../../context/MyContext';
import { ShoppingCartRoute } from '../../../Routing/routes';

const Cart = () => {
  const { cart } = useContext(MyContext);
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(ShoppingCartRoute);
  };
  return (
    <div>
      <Button color="inherit" onClick={() => navigateTo()}>
        <AddShoppingCartIcon />
        {cart.length > 0 && <Typography style={{ color: 'yellow' }}>{cart.length}</Typography>}
      </Button>
    </div>
  );
};
export default Cart;
