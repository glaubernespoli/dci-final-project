import { Grid } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import data from './dataAPI';
import Item from './Item';

const Carousele = () => (
  <Grid container>
    <Grid item xs={12}>
      <Carousel animation="slide" interval={4000} navButtonsAlwaysVisible>
        {data.map((item) => (
          <Item key={item} item={item} />
        ))}
      </Carousel>
    </Grid>
  </Grid>
);
export default Carousele;
