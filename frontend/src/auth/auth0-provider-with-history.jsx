import { Auth0Provider } from '@auth0/auth0-react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  // const history = createBrowserHistory();
  // const onRedirectCallback = (appState) => {
  //   // Use the router's history module to replace the url
  //   history.replace(appState?.returnTo || window.location.pathname);
  // };

  const navigate = useNavigate();
  const onRedirectCallback = (appState) => navigate(appState?.returnTo || window.location.pathname);

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

Auth0ProviderWithHistory.propTypes = {
  children: PropTypes.element.isRequired
};

export default Auth0ProviderWithHistory;
