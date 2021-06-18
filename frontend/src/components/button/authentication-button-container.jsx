import { useAuth0 } from '@auth0/auth0-react';
import CircularProgress from '@material-ui/core/CircularProgress';
import LoggedInButtonContainer from './logged-in-container';
import LoggedOutButtonContainer from './logged-out-container';

const AuthenticationButtonContainer = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <CircularProgress />;
  return isAuthenticated ? <LoggedInButtonContainer /> : <LoggedOutButtonContainer />;
};

export default AuthenticationButtonContainer;
