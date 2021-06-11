// import { ThemeProvider } from '@material-ui/core';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from './hoc/mainContent/MainContent';
import ScrollToTop from './hooks/ScrollToTop';
// import GlobalStyles from './selling-dashboard/src/components/GlobalStyles';
// import routes from './selling-dashboard/src/routes';
// import theme from './selling-dashboard/src/theme';

const App = () => (
  // const routing = useRoutes(routes);
  <>
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      {/* <ThemeProvider theme={theme}>
          <GlobalStyles />
          {routing}
        </ThemeProvider> */}
      <MainContent />
      <Footer />
    </BrowserRouter>
  </>
);
export default App;
