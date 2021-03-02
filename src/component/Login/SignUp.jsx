import { Button, TextField, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '@material-ui/icons/Google';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import React from 'react';
import LoginStyles from './LoginStyles';

const SignUp = () => {
  const classes = LoginStyles();

  return (
    <div className={classes.mainDiv}>
      <Typography variant="h5" color="secondary" className={classes.typography}>
        Create Your Account
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

      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="firstName"
          label="First Name"
          variant="standard"
          type="text"
          placeholder="Enter Your First Name"
          className={classes.textF}
        />
        <TextField
          id="lastName"
          label="Last Name"
          variant="standard"
          type="text"
          placeholder="Enter Your Last Name"
          className={classes.textF}
        />
        <TextField
          id="email"
          label="Email Address"
          variant="standard"
          type="email"
          placeholder="Enter Your Email"
          className={classes.textF}
        />
        <TextField
          id="password"
          label="Password"
          variant="standard"
          type="password"
          placeholder="Enter Your Password"
          className={classes.textF}
        />
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          variant="standard"
          type="password"
          placeholder="Confirm Your Password"
          className={classes.textF}
        />

        <div className={classes.textF}>
          <Button variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </div>
        <Typography variant="p" className={classes.textF} fontFamily="monospace">
          already registered?
          <Button color="secondary">LogIn</Button>
        </Typography>
      </form>
    </div>
  );
};
export default SignUp;
