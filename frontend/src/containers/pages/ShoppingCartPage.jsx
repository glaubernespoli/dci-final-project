/* eslint-disable react/jsx-one-expression-per-line */
import { Button, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import PaymentIcon from '@material-ui/icons/Payment';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import { useAxios } from '../../hooks/useAxios';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  priceDetails: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto'
  },
  h1: {
    textAlign: 'center'
  },
  ty: {
    display: 'flex',
    gap: 10
  }
});

const ShoppingList = () => {
  const classes = useStyles();
  const { cart, setCart } = useContext(MyContext);
  const { data: item } = useAxios('get', '/record');
  // if (isLoading) {
  //   return <CircularProgress />;
  // }

  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  // if (!item) {
  //   return <div>Item not found!</div>;
  // }

  // Handling Adding and removing records in the basket
  const onAdd = () => {
    const ItemExist = cart.find((x) => x.id === item._id);
    if (ItemExist) {
      setCart(
        // eslint-disable-next-line no-confusing-arrow
        cart.map((x) =>
          x.id === item._id ? { ...ItemExist, quantity: ItemExist.quantity + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  const onRemove = () => {
    const ItemExist = cart.find((x) => x.id === item._id);
    if (ItemExist) {
      setCart(cart.filter((x) => x.id !== item._id));
    } else {
      setCart(
        // eslint-disable-next-line no-confusing-arrow
        cart.map((x) =>
          x.id === item._id ? { ...ItemExist, quantity: ItemExist.quantity - 1 } : x
        )
      );
    }
  };

  // Summary of Price list

  const itemPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  const taxPrice = itemPrice * 0.15;
  const shippingPrice = itemPrice > 100 ? 0 : 4.99;
  const totalPrice = itemPrice + taxPrice + shippingPrice;

  // checkoutPayment handling
  const checkoutPayment = () => {
    // eslint-disable-next-line no-alert
    alert(`Your Total price ${totalPrice.toFixed(2)} `);
  };

  return (
    <div>
      <Card>
        {cart.length === 0 && (
          <Typography component="h1" textAlign="center">
            {' '}
            Your Shopping Basket is Empty
          </Typography>
        )}
      </Card>
      <Card variant="outlined">
        <Card>
          {cart.length > 0 && (
            <Typography>
              <h1 className={classes.h1}>Your Musical Album</h1>
              <hr />
              <h3 className={classes.h1}>
                {' '}
                You have <strong style={{ color: 'yellow' }}> {cart.length} </strong> record
                selected to buy!!!
              </h3>
            </Typography>
          )}
        </Card>
        {cart.map((cartItem) => (
          <CardContent key={cartItem.id} className={classes.root}>
            <Avatar alt="Avatar" variant="square" src={cartItem.imageUrl} />
            <Typography>{cartItem.name}</Typography>

            <Typography component="h2">
              {cartItem.quantity} *{cartItem.price.toFixed(2)}
              {'\u20AC'}
            </Typography>
            <div>
              <Button onClick={() => onAdd(cartItem)} variant="outlined">
                <AddIcon />
              </Button>
              <Button onClick={() => onRemove(cartItem)} variant="outlined">
                <RemoveIcon />
              </Button>
            </div>
          </CardContent>
        ))}
        <hr />

        {cart.length !== 0 && (
          <Card>
            <CardContent className={classes.priceDetails}>
              <div className={classes.ty}>
                <p>Item Price : </p>
                <p>
                  {itemPrice.toFixed(2)}
                  {'\u20AC'}
                </p>
              </div>
              <div className={classes.ty}>
                <p>Tax cost (19%) : </p>
                <p>
                  {taxPrice.toFixed(2)}
                  {'\u20AC'}
                </p>
              </div>
              <div className={classes.ty}>
                <p>Shipping Cost : </p>
                <p>
                  {shippingPrice.toFixed(2)}
                  {'\u20AC'}
                </p>
              </div>
              <div className={classes.ty}>
                <h3>Total Price : </h3>
                <h3>
                  {totalPrice.toFixed(2)}
                  {'\u20AC'}
                </h3>
              </div>

              <Button variant="contained" color="primary" onClick={checkoutPayment}>
                checkout for Payment
                <PaymentIcon />
              </Button>
            </CardContent>
          </Card>
        )}
      </Card>
    </div>
  );
};

export default ShoppingList;
