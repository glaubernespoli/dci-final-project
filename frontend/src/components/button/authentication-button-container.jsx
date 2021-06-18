import { useAuth0 } from '@auth0/auth0-react';
import LoggedInButtonContainer from './logged-in-container';
import LoggedOutButtonContainer from './logged-out-container';

const AuthenticationButtonContainer = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LoggedInButtonContainer /> : <LoggedOutButtonContainer />;
};

export default AuthenticationButtonContainer;
