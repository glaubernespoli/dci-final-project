import { Button, Card, CardContent, CardMedia, Grid, Paper, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import { useAxios } from '../../hooks/useAxios';
import useStyles from './Album.Styles';

// should receive the id as the url param
const RecordItem = ({ itemId }) => {
  const classes = useStyles();
  const { data: item, error, isLoading } = useAxios('get', `/record/${itemId}`);
  // const { user, isLoading: userLoading, loginWithRedirect } = useAuth0();
  const { cart, setCart } = useContext(MyContext);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!item) {
    return <div>Item not found!</div>;
  }
  const addToCart = () => {
    setCart([...cart, item]);
  };

  // const addToCart = () => {
  //   // if user not logged in, log them in before adding to cart
  //   if (!user) {
  //     loginWithRedirect();
  //   }

  //   /**
  //    * @type {Array}
  //    */
  //   // gets the shopping cart from the local storage
  //   let shoppingCart = JSON.parse(localStorage.getItem(SHOPPING_CART_ID));
  //   // if its the first time adding the shopping cart to the local storage
  //   // it doesn't exist, so initialize
  //   if (!shoppingCart) {
  //     shoppingCart = [];
  //   }

  //   // tries to find a shopping cart to the current user
  //   const userShoppingCartIdx = shoppingCart.findIndex(
  //     (userShoppingCart) => userShoppingCart.user === user.sub
  //   );
  //   let userShoppingCart;
  //   // if a shopping cart to the current user doesn't exist, initialize
  //   if (userShoppingCartIdx < 0) {
  //     userShoppingCart = {
  //       user: user.sub,
  //       products: []
  //     };
  //   } else {
  //     userShoppingCart = shoppingCart[userShoppingCartIdx];
  //   }

  //   // tries to find the current product in the users shopping cart
  //   const currentProductIdx = userShoppingCart.products.findIndex(
  //     (product) => product.productId === itemId
  //   );
  //   // if its not in the shopping cart yet, add it with quantity 1
  //   if (currentProductIdx < 0) {
  //     userShoppingCart.products.push({
  //       productId: itemId,
  //       amount: 1
  //     });
  //     // if it is in the shopping cart, then just add quantity /1
  //   } else {
  //     const currentProduct = userShoppingCart.products[currentProductIdx];
  //     currentProduct.amount += 1;
  //   }

  //   // if the shopping cart from the user was not in the local storage, just add it
  //   if (userShoppingCartIdx < 0) {
  //     shoppingCart.push(userShoppingCart);
  //     // if it was, replace it with the new object that has the new amount
  //   } else {
  //     shoppingCart[userShoppingCartIdx] = userShoppingCart;
  //   }

  //   // save the action in the local storage
  //   localStorage.setItem(SHOPPING_CART_ID, JSON.stringify(shoppingCart));
  // };

  return (
    <>
      <Paper elevation={5} className={classes.paper}>
        <Card>
          <Grid container className={classes.container}>
            <Grid item xs={12} md={6} className={classes.imgContainer}>
              <CardMedia
                className={classes.img}
                component="img"
                alt={item.summary}
                height="350"
                image={item.imageUrl}
                title={item.name}
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.albumInfo}>
              <CardContent>
                <Typography variant="h3" component="div">
                  {item.artist}
                </Typography>
                <Typography variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="h6" component="div">
                  Label:
                  {item.label}
                </Typography>
                <Typography variant="h6" component="div">
                  Published Date:
                  {item.releaseDate}
                </Typography>
                <Typography variant="h6" component="div">
                  Country:
                  {item.country}
                </Typography>
                <Typography variant="h6" component="div">
                  Format:
                  {item.format}
                </Typography>
                <Typography variant="h6" component="div">
                  Style:
                  {item.style}
                </Typography>
                <Typography variant="h6" component="div">
                  {item.price}

                  {'\u20AC'}
                </Typography>
                <hr />
                <Button
                  variant="outlined"
                  color="inherit"
                  endIcon={<AddShoppingCartIcon />}
                  onClick={() => addToCart()}
                >
                  ADD TO SHOPPING CART
                </Button>
              </CardContent>
            </Grid>

            <Grid item xs={12} className={classes.description}>
              <Typography variant="subtitle1" component="div">
                {item.description}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Paper>
    </>
  );
};

RecordItem.propTypes = {
  itemId: PropTypes.string.isRequired
};

export default RecordItem;
