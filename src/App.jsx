import './App.css';
import Footer from './component/FooterComponent/Footer';
import Header from './component/Header/Header';
import Information from './component/Information/Information';
import Carousele from './Components/carousel/Carousele';
import ProductContainer from './Components/product-list/ProductContainer';

const App = () => (
  <>
    <Header />
    <Carousele />
    <ProductContainer />
    <Information />
    <Footer />
  </>
);

export default App;
