import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button color="primary" variant="contained" onClick={() => loginWithRedirect()}>
      LogIn
    </Button>
  );
};

export default LoginButton;
