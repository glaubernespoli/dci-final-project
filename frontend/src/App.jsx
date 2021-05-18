import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from './hoc/mainContent/MainContent';
import ScrollToTop from './hooks/ScrollToTop';

const App = () => (
  <>
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <MainContent />
      <Footer />
    </BrowserRouter>
  </>
);

export default App;
