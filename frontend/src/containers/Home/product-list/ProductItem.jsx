import { Box, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../../../context/MyContext';
import { RecordRoute } from '../../../Routing/routes';
import useStyles from './ProductList.style';

const ProductItem = ({ item }) => {
  const classes = useStyles();

  const context = useContext(MyContext);
  const { setItem } = context;
  const history = useHistory();

  const clickHandle = () => {
    history.push(RecordRoute);
    setItem(item);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <ImageListItem key={item.img} onClick={clickHandle}>
        <Box height="35vh">
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format 1x`}
            alt={item.title}
            className={classes.img}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
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
    title: 'Error in Name',
    subtitle: 'Error in Description',
    author: 'Error in Author',
    img: 'Img not Found'
  }
};

ProductItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.object)
};

export default ProductItem;
