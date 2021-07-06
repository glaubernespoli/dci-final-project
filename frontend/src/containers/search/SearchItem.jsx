import { Box, Grid } from '@material-ui/core';
import ImageListItem from '@material-ui/core/ImageListItem';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './SearchList.style';

const SearchItem = ({ item }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <ImageListItem key={item.imageUrl} className={classes.content_Align}>
        <Box height="35vh">
          <img
            srcSet={`${item.imageUrl}?w=248&fit=crop&auto=format 1x`}
            alt={item.name}
            className={classes.img}
          />
          <Box>
            <h1>{item.name}</h1>

            <br />
            <br />
            <h5>
              Format:
              {item.format}
            </h5>
            <br />
            <br />
          </Box>
        </Box>
      </ImageListItem>
    </Grid>
  );
};

SearchItem.defaultProps = {
  item: {
    title: 'Error in Name',
    subtitle: 'Error in Description',
    author: 'Error in Author',
    img: 'Img not Found'
  }
};

SearchItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.object)
};

export default SearchItem;
