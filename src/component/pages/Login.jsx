import { Button, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '@material-ui/icons/Google';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import React from 'react';
import LoginForm from '../Login/LoginForm';
import LoginStyles from '../Login/LoginStyles';

const Login = () => {
  const classes = LoginStyles();

  return (
    <div className={classes.mainDiv}>
      <Typography variant="h4" color="secondary" className={classes.typography}>
        Login
      </Typography>
      <hr />
      <div>
        <Typography variant="h5" className={classes.typography}>
          Connected with
        </Typography>
        <div className={classes.icon}>
          <Button variant="contained">
            <FacebookIcon />
          </Button>
          <Button variant="contained">
            <InstagramIcon />
          </Button>
          <Button variant="contained">
            <WhatsAppIcon />
          </Button>
          <Button variant="contained">
            <GoogleIcon />
          </Button>
        </div>
      </div>
      <Typography variant="h5" className={classes.typography}>
        OR
      </Typography>
      {/* Import the LoginForm */}
      <LoginForm />
    </div>
  );
};
export default Login;
