import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();
  const onClick = () =>
    loginWithRedirect({
      screen_hint: 'signup'
    });

  return (
    <Button color="secondary" variant="contained" onClick={onClick}>
      Sign Up
    </Button>
  );
};

export default SignUpButton;
