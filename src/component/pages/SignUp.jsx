import { Button, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '@material-ui/icons/Google';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import React from 'react';
import LoginStyles from '../Login/LoginStyles';
import SingUpForm from '../Login/SignUpForm';

const SignUp = () => {
  const classes = LoginStyles();

  return (
    <div className={classes.mainDiv}>
      <Typography variant="h5" color="secondary" className={classes.typography}>
        Create Your Account
      </Typography>
      <hr />
      <div>
        <Typography variant="h6" className={classes.typography}>
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
      {/* imported the SignUp form */}
      <SingUpForm />
    </div>
  );
};
export default SignUp;
