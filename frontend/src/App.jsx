import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
import HeaderRes from './components/Header/HeaderResponsive';
// import HeaderDrawer from './components/Header/HeaderDrawer';
import MainContent from './hoc/mainContent/MainContent';
import ScrollToTop from './hooks/ScrollToTop';

const App = () => (
  <>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <Main />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </>
);
export default App;

const Main = () => (
  <>
    <ScrollToTop />
    {/* <Header /> */}
    {/* <HeaderDrawer /> */}
    <HeaderRes />
    <MainContent />
    <Footer />
  </>
);
