import { Button, Checkbox, TextField, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '@material-ui/icons/Google';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import React from 'react';
import LoginStyles from './LoginStyles';

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

      <form className={classes.form} noValidate autoComplete="off">
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

        <div>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <Typography variant="p" fontFamily="monospace" className={classes.textF}>
            Remember me
          </Typography>
        </div>
        <div className={classes.textF}>
          <Button variant="contained" color="primary" fullWidth>
            LogIn
          </Button>
        </div>
        <Typography variant="p" className={classes.textF} fontFamily="monospace">
          not yet registered?
          <Button color="secondary">create an account</Button>
        </Typography>
      </form>
    </div>
  );
};
export default Login;
