import { Box } from '@material-ui/core';
import Carousele from '../mainContent/carousel/Carousele';
import Information from '../mainContent/Information/Information';
import ProductContainer from '../mainContent/product-list/ProductContainer';

const Home = () => (
  <Box>
    <Carousele />
    <ProductContainer />
    <Information />
  </Box>
);

export default Home;
