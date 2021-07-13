import { Button, CardContent, CardMedia, Grid, Paper, Typography } from '@material-ui/core';
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
    addToCartHandle(item, cart, setCart);
  };
  const formattedDate = new Date(item.releaseDate).toLocaleDateString();

  return (
    <>
      <Paper elevation={5} className={classes.paper}>
        <Grid container className={classes.container}>
          <Grid item xs={12} md={6} className={classes.imgContainer} sx={{ width: '30vw' }}>
            <CardMedia
              height="30vw"
              className={classes.img}
              component="img"
              alt={item.summary}
              image={item.imageUrl}
              title={item.name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography variant="h3" component="div">
                {item.artist}
              </Typography>
              <Typography variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="h6" component="div">
                Label: &nbsp;
                <Typography variant="subtitle1" display="inline">
                  {item.label}
                </Typography>
              </Typography>
              <Typography variant="h6" component="div">
                Published Date: &nbsp;
                <Typography variant="subtitle1" display="inline">
                  {formattedDate}
                </Typography>
              </Typography>
              <Typography variant="h6" component="div">
                Country: &nbsp;
                <Typography variant="subtitle1" display="inline">
                  {item.country}
                </Typography>
              </Typography>
              <Typography variant="h6" component="div">
                Format: &nbsp;
                <Typography variant="subtitle1" display="inline">
                  {item.format}
                </Typography>
              </Typography>
              <Typography variant="h6" component="div">
                Style: &nbsp;
                <Typography variant="subtitle1" display="inline">
                  {item.style}
                </Typography>
              </Typography>
              <Typography variant="h6" component="div">
                Price: &nbsp;
                <Typography variant="h6" component="inline">
                  {`${item.price}€`}
                </Typography>
              </Typography>
              <Typography variant="h6" component="div">
                Available Items: &nbsp;
                <Typography variant="subtitle1" display="inline">
                  {item.quantities}
                </Typography>
              </Typography>
              <Button
                variant="outlined"
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
      </Paper>
    </>
  );
};

RecordItem.propTypes = {
  itemId: PropTypes.string.isRequired
};

export default RecordItem;
