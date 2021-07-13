import { Box, Grid, Typography } from '@material-ui/core';
import ImageListItem from '@material-ui/core/ImageListItem';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './SearchList.style';

const SearchItem = ({ item }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <ImageListItem key={item.imageUrl} className={classes.content_Align} sx={{ width: '40vh' }}>
        <Box height="40vh">
          <img srcSet={item.imageUrl} alt={item.name} className={classes.img} />
          <Box className={classes.imageContent}>
            <Typography variant="h4">{item.name}</Typography>
            <Typography variant="h6">
              Format:
              {item.format}
            </Typography>
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
