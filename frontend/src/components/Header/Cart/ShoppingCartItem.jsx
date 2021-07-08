/* eslint-disable react/jsx-one-expression-per-line */
import { Button, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import PaymentIcon from '@material-ui/icons/Payment';
import React, { useContext } from 'react';
import MyContext from '../../../context/MyContext';
import shoppingCartItemStyles from './ShoppingCart.style';

const ShoppingList = () => {
  const classes = shoppingCartItemStyles();
  const { cart, setCart } = useContext(MyContext);

  const onAdd = (itemID) => {
    const ItemExist = cart.find((x) => x._id === itemID);
    if (ItemExist) {
      if (ItemExist.quantity) {
        setCart(
          // eslint-disable-next-line no-confusing-arrow
          cart.map((x) => {
            if (ItemExist._id === x._id) {
              ItemExist.quantity += 1;
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
  const onRemove = (itemID) => {
    const ItemExist = cart.find((x) => x._id === itemID);
    if (ItemExist) {
      if (ItemExist.quantity === 1) {
        setCart(cart.filter((x) => x._id !== itemID));
      } else {
        setCart(
          // eslint-disable-next-line no-confusing-arrow
          cart.map((x) => {
            if (ItemExist._id === x._id) {
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
  // const taxPrice = itemPrice * 0.15;
  const shippingPrice = itemPrice > 100 ? 0 : 4.99;
  const totalPrice = itemPrice + shippingPrice;
  const cartQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  // checkoutPayment handling
  const checkoutPayment = () => {
    // eslint-disable-next-line no-alert
    alert(`Your Total price ${totalPrice} `);
  };

  return (
    <div>
      <Card>
        {cart.length === 0 && (
          <Typography component="h1" textAlign="center" className={classes.emptyCart}>
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
              <h3 className={classes.h3}>
                {' '}
                You have select <strong style={{ color: 'yellow' }}> {cartQuantity} </strong> record
                to buy!!!
              </h3>
            </Typography>
          )}
        </Card>
        {cart.map((cartItem) => (
          <CardContent key={cartItem._id} className={classes.root}>
            <div style={{ fontWeight: 'bolder' }}>
              {cartItem.quantity} * {cartItem.price.toFixed(2)} {'\u20AC'}
            </div>

            <div style={{ fontWeight: 'bolder' }}>{cartItem.name}</div>
            <div className={classes.btn}>
              <Button
                variant="standard"
                color="inherit"
                size="small"
                onClick={() => onAdd(cartItem._id)}
              >
                <AddIcon />
              </Button>
              <Button
                variant="standard"
                color="inherit"
                size="small"
                onClick={() => onRemove(cartItem._id)}
              >
                <DeleteIcon />
              </Button>
            </div>
            <Avatar
              alt="Avatar"
              variant="square"
              src={cartItem.imageUrl}
              className={classes.avatar}
            />
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

              <Button
                variant="contained"
                color="primary"
                className={classes.ty}
                onClick={checkoutPayment}
              >
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
