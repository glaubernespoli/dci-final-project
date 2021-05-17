import { Box } from '@material-ui/core';
import Carousele from './carousel/Carousele';
import Information from './Information/Information';
import ProductContainer from './product-list/ProductContainer';

const Home = () => (
  <Box>
    <Carousele />
    <ProductContainer />
    <Information />
  </Box>
);

export default Home;
