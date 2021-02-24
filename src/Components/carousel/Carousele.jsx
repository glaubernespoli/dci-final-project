import { Grid } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import data from './dataAPI';
import Item from './Item';

const Carousele = () => (
  <Grid container>
    <Grid item xs={0.5} />
    <Grid item xs={11}>
      <Carousel animation="slide" interval={5000} navButtonsAlwaysVisible>
        {data.map((item) => (
          <Item key={item} item={item} />
        ))}
      </Carousel>
    </Grid>
    <Grid item xs={0.5} />
  </Grid>
);

export default Carousele;
