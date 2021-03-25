import { Typography } from '@material-ui/core';
import SocialMedia from '../../components/SocialMedia/SocialmediaIcons';
import LoginStyles from './Login.styles';
import LoginForm from './LoginForm';

const Login = () => {
  const classes = LoginStyles();

  return (
    <div className={classes.mainDiv}>
      <Typography variant="h4" color="secondary" className={classes.typography}>
        Login
      </Typography>
      <hr />
      <div>
        <Typography variant="h5" className={classes.typography} color="blue">
          Connected with
        </Typography>
        {/* Importing the SocialMedia Link */}
        <SocialMedia />
      </div>
      <Typography variant="h5" color="blue" className={classes.typography}>
        OR
      </Typography>
      {/* Import the LoginForm */}
      <LoginForm />
    </div>
  );
};
export default Login;
