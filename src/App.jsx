import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/FooterComponent/Footer';
import Header from './components/Header/Header';
import MainContent from './hoc/mainContent/MainContent';

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
