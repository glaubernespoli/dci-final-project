/* eslint-disable react/jsx-one-expression-per-line */
import { Button, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import PaymentIcon from '@material-ui/icons/Payment';
import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';

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

  const onAdd = (cartItem) => {
    const ItemExist = cart.find((x) => x.id === cartItem.id);
    if (ItemExist) {
      if (ItemExist.quantity) {
        setCart(
          // eslint-disable-next-line no-confusing-arrow
          cart.map((x) => {
            if (ItemExist.id === x.id) {
              ItemExist.quantity += 1;
              return ItemExist;
              // eslint-disable-next-line no-else-return
            } else {
              return x;
            }
          })
        );
      }
    } else {
      setCart([...cart, { ...cartItem, quantity: 1 }]);
    }
  };
  const onRemove = (cartItem) => {
    const ItemExist = cart.find((x) => x.id === cartItem.id);
    if (ItemExist) {
      if (ItemExist.quantity === 1) {
        setCart(cart.filter((x) => x.id !== cartItem.id));
      } else {
        setCart(
          // eslint-disable-next-line no-confusing-arrow
          cart.map((x) => {
            if (ItemExist.id === x.id) {
              ItemExist.quantity -= 1;
              return ItemExist;
              // eslint-disable-next-line no-else-return
            } else {
              return x;
            }
          })
        );
      }
    }
  };

  // Summary of Price list

  const itemPrice = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const taxPrice = itemPrice * 0.15;
  const shippingPrice = itemPrice > 100 ? 0 : 4.99;
  const totalPrice = itemPrice + taxPrice + shippingPrice;
  const cartQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

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
                You have selected <strong style={{ color: 'yellow' }}> {cartQuantity} </strong>{' '}
                record to buy!!!
              </h3>
            </Typography>
          )}
        </Card>
        {cart.map((cartItem) => (
          <CardContent key={cartItem.id} className={classes.root}>
            <div style={{ backgroundColor: 'black', padding: '.25rem 1rem', fontWeight: 'bolder' }}>
              {cartItem.quantity} * {cartItem.price.toFixed(2)} {'\u20AC'}
            </div>
            <div>
              <Button variant="outlined" color="inherit" onClick={() => onAdd(cartItem)}>
                +
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                onClick={() => onRemove(cartItem)}
                style={{ margin: '0 1rem' }}
              >
                -
              </Button>
            </div>
            <div style={{ fontWeight: 'bolder' }}>{cartItem.name}</div>
            <Avatar alt="Avatar" variant="square" src={cartItem.imageUrl} />
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
                Checkout for Payment
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
