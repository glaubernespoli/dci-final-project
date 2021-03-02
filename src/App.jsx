import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './component/FooterComponent/Footer';
import Header from './component/Header/Header';
import MainContent from './component/mainContent/MainContent';

const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <MainContent />
      <Footer />
    </BrowserRouter>
  </>
);

export default App;
