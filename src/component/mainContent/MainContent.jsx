import Box from '@material-ui/core/Box';
import React from 'react';
import Carousele from './carousel/Carousele';
import Information from './Information/Information';
import ProductContainer from './product-list/ProductContainer';
import useStyles from './StyleMainContent';

const MainContent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Carousele />
      <ProductContainer />
      <Information />
    </Box>
  );
};

export default MainContent;
