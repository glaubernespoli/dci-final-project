import { Box } from '@material-ui/core';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RecordRoute } from '../../../Routing/routes';
import useStyles from './Carousel.style';

const Item = ({ item }) => {
  const classes = useStyles();

  const navigate = useNavigate();

  const clickHandle = () => {
    navigate(RecordRoute(item._id));
  };

  return (
    <Box
      onClick={clickHandle}
      sx={{
        '&:hover': {
          opacity: [0.8, 0.7, 0.6],
          cursor: 'pointer'
        }
      }}
    >
      <Box className={classes.imageItemContainer}>
        <ImageListItem className={classes.imageListItem} key={item.imageUrl}>
          <img srcSet={item.imageUrl} alt={item.description} className={classes.img} />
          <ImageListItemBar title={item.name} subtitle={item.artist} />
        </ImageListItem>
      </Box>
    </Box>
  );
};

Item.defaultProps = {
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

Item.propTypes = {
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

export default Item;
