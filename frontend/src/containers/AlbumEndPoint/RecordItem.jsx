import { Button, Card, CardContent, CardMedia, Grid, Paper, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import addToCartHandle from '../../components/Header/Cart/CountCartItem';
import MyContext from '../../context/MyContext';
import { useAxios } from '../../hooks/useAxios';
import useStyles from './Album.Styles';

// should receive the id as the url param
const RecordItem = ({ itemId }) => {
  const classes = useStyles();
  const { data: item, error, isLoading } = useAxios('get', `/record/${itemId}`);
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
    // const foundIndex = cart.findIndex((cartItem) => cartItem._id === item._id);
    // if (foundIndex >= 0) {
    //   const copyCart = [...cart];
    //   copyCart[foundIndex].quantity += 1;
    //   setCart([...copyCart]);
    // } else {
    //   item.quantity = 1;
    //   setCart([...cart, item]);
    // }
    addToCartHandle(item, cart, setCart);
  };

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
                image={item.imageUrl}
                title={item.name}
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.albumInfo}>
              <CardContent>
                <Typography variant="h3" component="div" className={classes.mediaQueryFont}>
                  <h3>{item.artist}</h3>
                </Typography>
                <Typography variant="h5" component="div" className={classes.mediaQueryFont}>
                  <h3>{item.name}</h3>
                </Typography>
                <Typography variant="h6" component="div" className={classes.mediaQueryButton}>
                  Label:
                  {item.label}
                </Typography>
                <Typography variant="h6" component="div" className={classes.mediaQueryButton}>
                  Published Date:
                  {item.releaseDate}
                </Typography>
                <Typography variant="h6" component="div" className={classes.mediaQueryButton}>
                  Country:
                  {item.country}
                </Typography>
                <Typography variant="h6" component="div" className={classes.mediaQueryButton}>
                  Format:
                  {item.format}
                </Typography>
                <Typography variant="h6" component="div" className={classes.mediaQueryButton}>
                  Style:
                  {item.style}
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  color="yellow"
                  className={classes.mediaQueryButton}
                >
                  {item.price}

                  {'\u20AC'}
                </Typography>
                <hr />
                <Button
                  variant="outlined"
                  color="inherit"
                  endIcon={<AddShoppingCartIcon />}
                  onClick={() => addToCart()}
                  className={classes.mediaQueryButton}
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
