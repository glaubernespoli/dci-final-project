import ButtonContainer from './button-container';
import LoginButton from './login-button';
import SignUpButton from './signup-button';

const LoggedOutButtonContainer = () => (
  <ButtonContainer>
    <>
      <SignUpButton />
      <LoginButton />
    </>
  </ButtonContainer>
);

export default LoggedOutButtonContainer;
