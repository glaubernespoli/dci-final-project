/* eslint-disable react/jsx-one-expression-per-line */
import { Button, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import { useAxios } from '../../hooks/useAxios';

const useStyles = makeStyles({
  root: {
    minWidth: 70
  },
  subroot: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 10
  },
  subroot1: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column'
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
  const context = useContext(MyContext);
  const { cartItems, setCartItems } = context;
  const { data: item } = useAxios('get', '/record');

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

  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemPrice * 0.19;
  const shippingPrice = itemPrice > 200 ? 0 : 20;
  const totalPrice = itemPrice + taxPrice + shippingPrice;

  return (
    <div>
      <Card className={classes.empty}>
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
            <h1 className={classes.h1}> You have {cartItems.length} record select to buy</h1>
          )}
        </Card>

        {cartItems.map((cartItem) => (
          <CardContent key={cartItem.id} className={classes.subroot}>
            <Avatar alt="Avatar" variant="square" src={cartItem.imageUrl} />
            <Typography>{cartItem.name}</Typography>
            <Button onClick={() => onAdd(cartItem)} variant="outlined">
              +
            </Button>
            <Button onClick={() => onRemove(cartItem)} variant="outlined">
              -
            </Button>
            <Typography component="h2">
              {cartItem.qty} * {cartItem.price.toFixed(2)}
              {'\u20AC'}
            </Typography>
          </CardContent>
        ))}
      </Card>
      {cartItems.length !== 0 && (
        <div className={classes.subroot1}>
          <hr />
          <div className={classes.ty}>
            <div>Item Price</div>
            <div>
              {itemPrice.toFixed(2)}
              {'\u20AC'}
            </div>
          </div>
          <div className={classes.ty}>
            <div>Tax Price</div>
            <div>
              {taxPrice.toFixed(2)}
              {'\u20AC'}
            </div>
          </div>
          <div className={classes.ty}>
            <div>Shipping Price</div>
            <div>
              {shippingPrice.toFixed(2)}
              {'\u20AC'}
            </div>
          </div>
          <hr />
          <div className={classes.ty}>
            <div>Total Price</div>
            <div>
              {totalPrice.toFixed(2)}
              {'\u20AC'}
            </div>
          </div>
          <Button variant="outlined">check it Out !!!</Button>
        </div>
      )}
    </div>
  );
};

export default ShoppingList;
