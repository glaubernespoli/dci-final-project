import './App.css';
import Footer from './component/FooterComponent/Footer';
import Header from './component/Header/Header';
import Carousele from './Components/carousel/Carousele';
import ProductContainer from './Components/product-list/ProductContainer';

const App = () => (
  <>
    <Header />
    <Carousele />
    <ProductContainer />
    <Footer />
  </>
);

export default App;
