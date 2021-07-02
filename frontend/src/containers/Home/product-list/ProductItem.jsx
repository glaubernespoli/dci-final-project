import { Box, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { RecordRoute } from '../../../Routing/routes';
import useStyles from './ProductList.style';

const ProductItem = ({ item }) => {
  const classes = useStyles();

  const navigate = useNavigate();

  const clickHandle = () => {
    navigate(RecordRoute(item._id));
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <ImageListItem key={item.imageUrl} onClick={clickHandle}>
        <Box
          height="35vh"
          sx={{
            '&:hover': {
              opacity: [0.9, 0.8, 0.7],
              cursor: 'pointer',
              transition: 'transform .4s',
              transform: 'scale(1.1)'
            }
          }}
        >
          <img
            srcSet={item.imageUrl}
            // srcSet={`${item.imageUrl}?w=248&fit=crop&auto=format 1x`}
            alt={item.summary}
            className={classes.img}
          />
          <ImageListItemBar
            title={item.name}
            subtitle={item.artist}
            actionIcon={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <IconButton className={classes.icon}>
                <AddShoppingCartIcon />
              </IconButton>
            }
          />
        </Box>
      </ImageListItem>
    </Grid>
  );
};

ProductItem.defaultProps = {
  item: {
    name: 'Not available',
    artist: 'Not available',
    summary: 'Not available',
    description: 'Not available',
    price: 'Not available',
    imageUrl: 'Not available',
    format: 'Not available',
    style: 'Not available',
    label: 'Not available',
    country: 'Not available',
    releaseDate: 'Not available',
    createdAt: 'Not available'
  }
};

ProductItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    artist: PropTypes.string,
    summary: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    format: PropTypes.string,
    style: PropTypes.string,
    label: PropTypes.string,
    country: PropTypes.string,
    releaseDate: PropTypes.string,
    createdAt: PropTypes.string
  })
};

export default ProductItem;
