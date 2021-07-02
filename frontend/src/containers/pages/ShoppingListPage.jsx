/* eslint-disable react/jsx-one-expression-per-line */
import { Button, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import PaymentIcon from '@material-ui/icons/Payment';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import { useAxios } from '../../hooks/useAxios';

const useStyles = makeStyles({
  // root: {
  //   minWidth: 70
  // },
  subroot: {
    display: 'flex',
    justifyContent: 'space-around'
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
  const { cartItems, setCartItems } = useContext(MyContext);
  // const { data: item } = useAxios('get', '/record');
  const { data: item, error, isLoading } = useAxios('get', '/record');
  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!item) {
    return <div>Item not found!</div>;
  }

  // Handling Adding and removing records in the basket
  const onAdd = () => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      setCartItems(cartItems.map((x) => (x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x)));
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };
  const onRemove = () => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(cartItems.map((x) => (x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x)));
    }
  };

  // Summary of Price list

  const itemPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);
  const taxPrice = itemPrice * 0.15;
  const shippingPrice = itemPrice > 100 ? 0 : 5.99;
  const totalPrice = itemPrice + taxPrice + shippingPrice;

  return (
    <div>
      <Card>
        {cartItems.length === 0 && (
          <Typography component="h1" textAlign="center">
            {' '}
            Your Shopping Basket is Empty
          </Typography>
        )}
      </Card>
      <Card className={classes.root} variant="outlined">
        <Card>
          {cartItems.length > 0 && (
            <Typography>
              <h1 className={classes.h1}>Your Cart History</h1>
              <hr />
              <p className={classes.h1}>
                {' '}
                You have <strong style={{ color: 'yellow' }}>{cartItems.length}</strong> record
                selected to buy!!!
              </p>
            </Typography>
          )}
        </Card>
        {cartItems.map((cartItem) => (
          <CardContent key={cartItem.id} className={classes.subroot}>
            <Avatar alt="Avatar" variant="square" src={cartItem.imageUrl} />
            <Typography>{cartItem.name}</Typography>

            <Typography component="h2">
              {cartItem.qty} * {cartItem.price.toFixed(2)}
              {'\u20AC'}
            </Typography>
            <div>
              <Button onClick={() => onAdd(item)} variant="outlined">
                <AddIcon />
              </Button>
              <Button onClick={() => onRemove(item)} variant="outlined">
                <RemoveIcon />
              </Button>
            </div>
          </CardContent>
        ))}
        <hr />

        {cartItems.length !== 0 && (
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
                <p>Tax Price (19%) : </p>
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

              <Button variant="contained" color="primary">
                Go for Payment Method
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
