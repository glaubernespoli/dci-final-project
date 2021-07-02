import { Grid, Paper, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAxios } from '../../../hooks/useAxios';
import ProductItem from './ProductItem';
import useStyles from './ProductList.style';

const ProductContainer = () => {
  const classes = useStyles();

  const { data, error, isLoading } = useAxios('get', '/record');

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <Paper elevation={5} className={classes.paper}>
      <Grid container className={classes.typography}>
        <Typography variant="h3">Category</Typography>
      </Grid>
      <Grid container spacing={4} justifyContent="center" className={classes.container}>
        {data.map((item) => (
          <ProductItem key={item._id} item={item} />
        ))}
      </Grid>
    </Paper>
  );
};

export default ProductContainer;
