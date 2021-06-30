import { withAuthenticationRequired } from '@auth0/auth0-react';
import { ThemeProvider } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import useCheckIsAdmin from './hooks/useCheckIsAdmin';
import routes from './routes';
import theme from './theme';

const App = () => {
  const routing = useRoutes(routes);
  const { isAdmin, loading } = useCheckIsAdmin();

  if (loading) {
    return <CircularProgress />;
  }

  if (!isAdmin) {
    window.location.assign(process.env.REACT_APP_FRONTEND_ROUTE);
    return <></>;
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default withAuthenticationRequired(App, {
  // eslint-disable-next-line react/display-name
  onRedirecting: () => <CircularProgress />
});
