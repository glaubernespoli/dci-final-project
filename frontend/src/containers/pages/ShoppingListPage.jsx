/* eslint-disable react/jsx-one-expression-per-line */
import { Button, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
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
              <h3 className={classes.h1}>
                {' '}
                You have <strong style={{ color: 'yellow' }}>{cartItems.length}</strong> record
                selected to buy!!!
              </h3>
            </Typography>
          )}
        </Card>
        {cartItems.map((cartItem) => (
          <CardContent key={cartItem.id} className={classes.subroot}>
            <Avatar alt="Avatar" variant="square" src={cartItem.imageUrl} />
            <Typography>{cartItem.name}</Typography>
            <Button onClick={() => onAdd(cartItem)} variant="outlined">
              <AddIcon />
            </Button>
            <Button onClick={() => onRemove(cartItem)} variant="outlined">
              <RemoveIcon />
            </Button>
            <Typography component="h2">
              {cartItem.qty} * {cartItem.price.toFixed(2)}
              {'\u20AC'}
            </Typography>
          </CardContent>
        ))}
        <hr />
        {cartItems.length !== 0 && (
          <CardContent className={classes.subroot1}>
            <div className={classes.ty}>
              <h3>Item Price</h3>
              <h3>
                {itemPrice.toFixed(2)}
                {'\u20AC'}
              </h3>
            </div>
            <div className={classes.ty}>
              <h3>Tax Price</h3>
              <h3>
                {taxPrice.toFixed(2)}
                {'\u20AC'}
              </h3>
            </div>
            <div className={classes.ty}>
              <h3>Shipping Price</h3>
              <h3>
                {shippingPrice.toFixed(2)}
                {'\u20AC'}
              </h3>
            </div>
            <div className={classes.ty}>
              <h3>Total Price</h3>
              <h3>
                {totalPrice.toFixed(2)}
                {'\u20AC'}
              </h3>
            </div>
            <Button variant="outlined">check it Out !!!</Button>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default ShoppingList;
