import { Button, Card, CardContent, CardMedia, Grid, Paper, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import { useAxios } from '../../hooks/useAxios';
import useStyles from './Album.Styles';

// should receive the id as the url param
const RecordItem = ({ itemId }) => {
  const classes = useStyles();
  const context = useContext(MyContext);
  const { cartItems, setCartItems } = context;
  const { data: item, error, isLoading } = useAxios('get', `/record/${itemId}`);

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
    setCartItems([...cartItems, item]);
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
                  onClick={() => addToCart(item)}
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
