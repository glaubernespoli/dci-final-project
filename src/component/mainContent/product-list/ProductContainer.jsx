import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Products from './APIproductShow';
import ProductItem from './ProductItem';
import useStyles from './ProductShowStyle';

const ProductContainer = () => {
  const classes = useStyles();
  return (
    <Paper elevation={5} className={classes.paper}>
      <Grid container className={classes.typography}>
        <Typography variant="h3">Category</Typography>
      </Grid>
      <Grid container spacing={4} justifyContent="center" className={classes.container}>
        {Products.map((item) => (
          <ProductItem key={item.title} item={item} />
        ))}
      </Grid>
    </Paper>
  );
};

export default ProductContainer;
